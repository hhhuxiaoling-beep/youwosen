from pathlib import Path
import hashlib
import json
import os

import streamlit as st
import streamlit.components.v1 as components

from .security import require_access, logout
from .store import PostgresStore, PayrollError


_component = components.declare_component('yws_payroll_native', path=str(Path(__file__).parent/'frontend_dist'))


def _setting(key, default=''):
    value = os.getenv(key)
    if value: return value
    try: return str(st.secrets.get(key, default))
    except FileNotFoundError: return default


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
    except PayrollError as error:
        st.error(str(error))
        st.stop()
    except Exception:
        st.error('无法连接薪资数据库。请检查Session pooler地址、数据库密码、SSL及建表/读写权限。连接凭据不会显示在页面。')
        st.stop()
    st.caption('云端数据库已连接。修改后请点击“保存本月”；未保存的编辑只留在当前页面。')
    with st.expander('数据备份与迁移（不覆盖已有月份）'):
        if st.button('生成当前云端备份', key='_payroll_make_backup'):
            try:
                months = [store.get(row['month']) for row in store.list_months()]
                st.session_state['_payroll_backup'] = json.dumps({'format': 'yws_payroll_backup_v1', 'months': months}, ensure_ascii=False).encode()
            except Exception:
                st.error('备份读取失败，请检查数据库连接。')
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
                st.success(f'已导入{count}个月份。点击界面中的“重新加载云端数据”查看。')
            except PayrollError as error:
                st.error(str(error))
            except Exception:
                st.error('备份无效或云端导入失败。请检查文件与数据库连接，未覆盖已有月份。')
    event = _component(reply=st.session_state.get('_payroll_reply'), key='_payroll_component', default=None)
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
    except Exception:
        reply = {'id': event['id'], 'status': 503, 'payload': {'error': '云端操作失败，未确认保存。请检查连接后重新加载；不要重复覆盖已有月份。'}}
    st.session_state['_payroll_reply'] = reply
    st.rerun()
