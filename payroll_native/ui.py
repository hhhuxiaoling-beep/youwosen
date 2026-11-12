from pathlib import Path
import hashlib
import json
import os

import streamlit as st
import streamlit.components.v1 as components

from .security import require_access, logout
from .store import PostgresStore, PayrollError
from .diagnostics import DatabaseDiagnostic, diagnose


_component = components.declare_component('yws_payroll_native', path=str(Path(__file__).parent/'frontend_dist'))


def _setting(key, default=''):
    value = os.getenv(key)
    if value: return value
    try: return str(st.secrets.get(key, default))
    except FileNotFoundError: return default


def _database_failure(error, stage='operation'):
    st.error(str(diagnose(error, stage)))
    st.caption('诊断版本：2026-11-12.1 · 本页不会显示连接串、主机名、用户名或密码。')
    if st.button('重新检测连接', key='_payroll_retry_database'):
        st.session_state.pop('_payroll_db_ready', None)
        st.rerun()
    st.stop()


def _refresh_cloud(month=None):
    st.session_state['_payroll_cloud_refresh'] = st.session_state.get('_payroll_cloud_refresh', 0) + 1
    st.session_state['_payroll_preferred_month'] = month
    st.session_state.pop('_payroll_inventory', None)


def _cloud_inventory(store):
    result = []
    for item in store.list_months():
        data = store.get(item['month'])
        result.append({'月份': item['month'], '员工人数': len(data['employees']),
                       '拣货员数据行': len(data['picker_rows']), '店长数据行': len(data['manager_rows'])})
    return result


def render_payroll_center():
    require_access()
    left, right = st.columns([5, 1])
    with left:
        st.caption('薪资中心在平台内运行 · 云端保存 · 数据版本保护')
    with right:
        st.button('锁定薪资中心', on_click=logout, key='_payroll_lock')
    url = _setting('PAYROLL_DATABASE_URL')
    if not url:
        st.warning('尚未读取到PAYROLL_DATABASE_URL。请在Streamlit Settings → Secrets配置Supabase Session pooler连接串后重新加载。')
        st.stop()
    try:
        store = PostgresStore(url, _setting('PAYROLL_DATASET_ID', 'youwosen'))
        identity = hashlib.sha256((url + store.dataset).encode()).hexdigest()
        if st.session_state.get('_payroll_db_ready') != identity:
            store.initialize()
            # A metadata-only read proves connectivity without displaying records.
            store.list_months()
            st.session_state['_payroll_db_ready'] = identity
    except DatabaseDiagnostic as error:
        _database_failure(error)
    except PayrollError as error:
        st.error(str(error))
        st.stop()
    except Exception as error:
        _database_failure(error, 'configuration')
    st.caption('云端数据库已连接。修改后请点击“保存本月”；未保存的编辑只留在当前页面。')
    with st.expander('数据备份与迁移（不覆盖已有月份）'):
        if st.button('查看云端已存月份及人数', key='_payroll_inspect_months'):
            try:
                st.session_state['_payroll_inventory'] = _cloud_inventory(store)
            except Exception as error:
                st.error(str(diagnose(error)))
        if '_payroll_inventory' in st.session_state:
            inventory = st.session_state['_payroll_inventory']
            if inventory:
                st.dataframe(inventory, hide_index=True)
                st.caption('这里显示数据库中实际保存的人数；请在下方月份下拉框选择对应月份查看明细。')
            else:
                st.info('云端暂无已保存月份，请导入备份。')
        if st.button('生成当前云端备份', key='_payroll_make_backup'):
            try:
                months = [store.get(row['month']) for row in store.list_months()]
                st.session_state['_payroll_backup'] = json.dumps({'format': 'yws_payroll_backup_v1', 'months': months}, ensure_ascii=False).encode()
            except Exception as error:
                st.error(str(diagnose(error)))
        if backup := st.session_state.get('_payroll_backup'):
            st.download_button('下载薪资备份JSON', backup, '优沃森薪资云端备份.json', 'application/json', key='_payroll_download_backup')
        upload = st.file_uploader('导入完整月份JSON备份', type=['json'], key='_payroll_upload_backup')
        if st.button('校验并导入新月份', disabled=upload is None, key='_payroll_import_backup'):
            try:
                if upload.size > 12_000_000: raise PayrollError('备份文件过大，请分批导入。')
                payload = json.loads(upload.getvalue())
                if not isinstance(payload, dict) or payload.get('format') != 'yws_payroll_backup_v1':
                    raise PayrollError('不支持的备份格式，请使用完整月份JSON备份。')
                count = store.import_months(payload.get('months'))
                _refresh_cloud(max(month['month'] for month in payload['months']))
                st.success(f'已导入{count}个月份，正在更新下方月份列表。若有未保存修改，请保存后点击“重新加载云端数据”。')
            except PayrollError as error:
                st.error(str(error))
                if error.status == 409:
                    _refresh_cloud()
                    st.info('本次整批导入已取消。可先点击“查看云端已存月份及人数”，再在下方切换月份查看已有数据。')
            except Exception as error:
                st.error(str(diagnose(error)))
    event = _component(reply=st.session_state.get('_payroll_reply'),
                       refresh_token=st.session_state.get('_payroll_cloud_refresh', 0),
                       preferred_month=st.session_state.get('_payroll_preferred_month'),
                       key='_payroll_component', default=None)
    if not isinstance(event, dict) or not isinstance(event.get('id'), str): return
    if event['id'] == st.session_state.get('_payroll_processed'): return
    if len(event['id']) > 100: return
    st.session_state['_payroll_processed'] = event['id']
    if event.get('path') == '/api/auth/logout':
        logout()
        st.rerun()
    try:
        payload = store.dispatch(event.get('method', 'GET'), event.get('path', ''), event.get('body'))
        reply = {'id': event['id'], 'status': 200, 'payload': payload}
    except PayrollError as error:
        reply = {'id': event['id'], 'status': error.status, 'payload': {'error': str(error)}}
    except Exception as error:
        reply = {'id': event['id'], 'status': 503, 'payload': {'error': str(diagnose(error)) + ' 本次操作未确认保存，请重新加载云端数据后核对。'}}
    st.session_state['_payroll_reply'] = reply
    st.rerun()
