"""Credential-free source; all production records live in PostgreSQL JSONB."""
from __future__ import annotations

from copy import deepcopy
from datetime import datetime
import json
import math
import re
from zoneinfo import ZoneInfo


class PayrollError(Exception):
    def __init__(self, message, status=400):
        super().__init__(message)
        self.status = status


DEFAULT_RULES = {
    'year': 2026, 'month': 11, 'receiving_sku_rate': .1, 'receiving_item_rate': .02,
    'picking_item_rate': .02, 'picking_order_rate': .1, 'fault_free_quota': 5,
    'fault_order_amount': 10, 'rating_baseline': 4.2, 'rating_cap_score': 4.5,
    'rating_cap_award': 1000, 'rating_step_award': 200, 'rating_low_threshold': 4,
    'rating_low_penalty': -500, 'manager_score_component_points': 40,
    'manager_score_floor': 4, 'manager_score_target': 4.5,
    'manager_overdue_component_points': 20, 'manager_overdue_full_score_count': 5,
    'manager_management_component_points': 20, 'manager_gmv_component_points': 20,
    'manager_gmv_min_achievement_percent': 70, 'manager_overdue_zero_score_count': 20,
}
LIST_KEYS = ('employees', 'picker_rows', 'manager_rows', 'rating_rows', 'adjustment_rows')
MONTH_RE = re.compile(r'^\d{4}-(0[1-9]|1[0-2])$')


def validate_month(month):
    if not isinstance(month, str) or not MONTH_RE.fullmatch(month):
        raise PayrollError('月份格式必须为YYYY-MM。')
    return month


def blank_month(month=None):
    month = validate_month(month or datetime.now(ZoneInfo('Asia/Shanghai')).strftime('%Y-%m'))
    rules = {**DEFAULT_RULES, 'year': int(month[:4]), 'month': int(month[5:])}
    return {'month': month, 'rules': rules, **{key: [] for key in LIST_KEYS}, '_revision': 0}


def validate_data(data, month=None):
    if not isinstance(data, dict):
        raise PayrollError('月度数据格式无效。')
    key = validate_month(data.get('month'))
    if month is not None and key != validate_month(month):
        raise PayrollError('路径月份与数据月份不一致。')
    rules = data.get('rules')
    if not isinstance(rules, dict):
        raise PayrollError('缺少计算参数。')
    normalized = {'month': key, 'rules': {**DEFAULT_RULES, **rules}}
    normalized['rules'].update(year=int(key[:4]), month=int(key[5:]))
    for field in LIST_KEYS:
        rows = data.get(field)
        if not isinstance(rows, list) or len(rows) > 10000 or not all(isinstance(row, dict) for row in rows):
            raise PayrollError(f'{field}必须是有效的数据行列表。')
        normalized[field] = deepcopy(rows)
    def finite(value):
        if isinstance(value, float) and not math.isfinite(value):
            raise PayrollError('数据包含无效数值。')
        if isinstance(value, dict):
            for v in value.values(): finite(v)
        if isinstance(value, list):
            for v in value: finite(v)
    finite(normalized)
    if len(json.dumps(normalized, ensure_ascii=False).encode()) > 8_000_000:
        raise PayrollError('单个月份数据过大。')
    return normalized


def clone_data(source, target):
    data = validate_data(source)
    data['month'] = validate_month(target)
    data['rules'].update(year=int(target[:4]), month=int(target[5:]))
    for row in data['employees']:
        row['attendance_days'] = None
        row['coefficient_override'] = None
    for row in data['picker_rows']:
        for key in ('receiving_sku', 'receiving_items', 'picking_items', 'picking_orders', 'wrong_orders', 'second_delivery_orders', 'excellent_award'):
            row[key] = 0
    for row in data['manager_rows']:
        for key in ('store_score', 'overdue_orders', 'management_percent', 'gmv_target', 'gmv_actual'):
            row[key] = None
    for row in data['rating_rows']:
        row.update(display_score=None, incentive_override=None)
    data['adjustment_rows'] = []
    data['_revision'] = 0
    return data


class PostgresStore:
    def __init__(self, url, dataset='youwosen', connector=None):
        if not isinstance(url, str) or not url.startswith(('postgresql://', 'postgres://')):
            raise PayrollError('请配置PostgreSQL格式的PAYROLL_DATABASE_URL。', 503)
        if not re.fullmatch(r'[A-Za-z0-9_-]{1,80}', dataset):
            raise PayrollError('PAYROLL_DATASET_ID格式无效。', 503)
        self.url, self.dataset, self.connector = url, dataset, connector

    def connect(self):
        import psycopg
        from psycopg.conninfo import conninfo_to_dict
        options = conninfo_to_dict(self.url)
        if options.get('sslmode') in {'disable', 'allow', 'prefer'}:
            raise PayrollError('薪资数据库必须启用SSL：请使用sslmode=require或verify-full。', 503)
        options.setdefault('sslmode', 'require')
        options.update(connect_timeout=12, prepare_threshold=None)
        conn = (self.connector or psycopg.connect)(**options)
        try:
            conn.execute("SET LOCAL statement_timeout = '20s'")
        except Exception:
            conn.close()
            raise
        return conn

    def initialize(self):
        # Only creates our dedicated table. Never drops or changes existing tables.
        with self.connect() as conn:
            conn.execute('''CREATE TABLE IF NOT EXISTS yws_payroll_months (
                dataset_id TEXT NOT NULL,
                month TEXT NOT NULL CHECK (month ~ '^\\d{4}-(0[1-9]|1[0-2])$'),
                revision BIGINT NOT NULL DEFAULT 1 CHECK (revision > 0),
                payload JSONB NOT NULL,
                created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (dataset_id, month)
            )''')
            # Supabase exposes public-schema tables through PostgREST. With RLS
            # and no public policies, anon/authenticated API keys cannot read HR
            # rows; the table-owner database connection remains server-side.
            conn.execute('ALTER TABLE yws_payroll_months ENABLE ROW LEVEL SECURITY')

    def list_months(self):
        with self.connect() as conn:
            rows = conn.execute('SELECT month, revision, updated_at FROM yws_payroll_months WHERE dataset_id=%s ORDER BY month DESC', (self.dataset,)).fetchall()
        return [{'month': r[0], 'status': 'draft', 'updatedAt': r[2].isoformat(), 'revision': r[1]} for r in rows]

    def get(self, month):
        validate_month(month)
        with self.connect() as conn:
            row = conn.execute('SELECT payload, revision FROM yws_payroll_months WHERE dataset_id=%s AND month=%s', (self.dataset, month)).fetchone()
        if row is None:
            raise PayrollError('未找到该月份，请先创建或导入。', 404)
        return {**row[0], '_revision': int(row[1])}

    def save(self, month, raw):
        from psycopg.types.json import Jsonb
        data = validate_data(raw, month)
        revision = raw.get('_revision')
        if not isinstance(revision, int) or isinstance(revision, bool) or revision < 0:
            raise PayrollError('缺少有效的数据版本，请重新加载月份。', 409)
        with self.connect() as conn:
            if revision == 0:
                row = conn.execute('''INSERT INTO yws_payroll_months (dataset_id, month, payload)
                    VALUES (%s,%s,%s) ON CONFLICT (dataset_id,month) DO NOTHING
                    RETURNING revision''', (self.dataset, month, Jsonb(data))).fetchone()
            else:
                row = conn.execute('''UPDATE yws_payroll_months SET payload=%s, revision=revision+1, updated_at=CURRENT_TIMESTAMP
                    WHERE dataset_id=%s AND month=%s AND revision=%s RETURNING revision''',
                    (Jsonb(data), self.dataset, month, revision)).fetchone()
            if row is None:
                raise PayrollError('此月份已被其他设备修改或创建。请重新加载后再保存，避免覆盖他人修改。', 409)
        return {**data, '_revision': int(row[0])}

    def dispatch(self, method, path, body=None):
        method = str(method).upper()
        if path == '/api/months' and method == 'GET':
            months = self.list_months()
            current = self.get(months[0]['month']) if months else blank_month()
            return {'months': months or [{'month': current['month'], 'status': 'draft', 'updatedAt': ''}], 'current': current}
        if path == '/api/months/clone' and method == 'POST':
            if not isinstance(body, dict): raise PayrollError('复制参数无效。')
            target = validate_month(body.get('targetMonth'))
            source_key = validate_month(body.get('sourceMonth'))
            try:
                source = self.get(source_key)
            except PayrollError as error:
                if error.status != 404: raise
                source = blank_month(source_key)
            data = clone_data(source, target)
            return {'data': self.save(target, data)}
        match = re.fullmatch(r'/api/months/(\d{4}-(?:0[1-9]|1[0-2]))', str(path))
        if match and method == 'GET':
            return {'data': self.get(match[1])}
        if match and method == 'PUT':
            return {'data': self.save(match[1], body)}
        raise PayrollError('不支持的薪资操作。', 404)

    def import_months(self, months):
        from psycopg.types.json import Jsonb
        if not isinstance(months, list) or not 1 <= len(months) <= 120:
            raise PayrollError('备份必须包含1至120个月份。')
        records = [validate_data(month) for month in months]
        if len({row['month'] for row in records}) != len(records):
            raise PayrollError('备份包含重复月份。')
        # All-or-nothing transaction, with no UPDATE or destructive SQL.
        with self.connect() as conn:
            for data in records:
                row = conn.execute('''INSERT INTO yws_payroll_months (dataset_id, month, payload)
                    VALUES (%s,%s,%s) ON CONFLICT (dataset_id,month) DO NOTHING RETURNING revision''',
                    (self.dataset, data['month'], Jsonb(data))).fetchone()
                if row is None:
                    raise PayrollError(f"{data['month']}已存在。导入已取消，没有覆盖任何月份。", 409)
        return len(records)
