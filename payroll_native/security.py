"""Independent, server-side payroll gate; never ships a plaintext password."""
import hashlib
import hmac
import time

import streamlit as st

_SALT = bytes.fromhex('19fc8ae91e9d6eeab72286db3b9834ad7c2bde1a4f2231bf2bfe3d9618f2657e')
_HASH = bytes.fromhex('565664e1503498002239743404d5c138a70f8dea340cdd8072156d8329e63112')
_TTL = 8 * 3600


def verify_password(password):
    value = hashlib.pbkdf2_hmac('sha256', password.encode(), _SALT, 600_000)
    return hmac.compare_digest(value, _HASH)


def logout():
    for key in list(st.session_state):
        if str(key).startswith('_payroll_'):
            del st.session_state[key]


def _submit():
    password = st.session_state.pop('_payroll_password', '')
    now = time.monotonic()
    if now < st.session_state.get('_payroll_blocked', 0): return
    if password and verify_password(password):
        st.session_state['_payroll_auth'] = _HASH.hex()
        st.session_state['_payroll_started'] = now
        st.session_state.pop('_payroll_error', None)
        st.session_state.pop('_payroll_failures', None)
        return
    failures = st.session_state.get('_payroll_failures', 0) + 1
    st.session_state['_payroll_failures'] = failures
    st.session_state['_payroll_error'] = '密码不正确，请重试。'
    if failures >= 5:
        st.session_state['_payroll_blocked'] = now + 30
        st.session_state['_payroll_failures'] = 0


def require_access():
    now = time.monotonic()
    started = st.session_state.get('_payroll_started', 0)
    if st.session_state.get('_payroll_auth') == _HASH.hex() and 0 <= now-started < _TTL:
        return
    st.session_state.pop('_payroll_auth', None)
    st.title('薪资中心 · 独立验证')
    st.caption('薪资数据单独保护，进入后可直接在平台内核算和保存。')
    remaining = st.session_state.get('_payroll_blocked', 0)-now
    if remaining > 0:
        st.warning(f'密码错误次数较多，请约{int(remaining)+1}秒后重试。')
        st.button('重新检查', key='_payroll_retry')
        st.stop()
    with st.form('_payroll_login', clear_on_submit=True):
        st.text_input('薪资中心密码', type='password', key='_payroll_password')
        st.form_submit_button('验证并进入', on_click=_submit, type='primary')
    if error := st.session_state.get('_payroll_error'): st.error(error)
    st.stop()
