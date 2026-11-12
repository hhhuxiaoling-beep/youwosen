"""Server-side shared-password gate for every page in the Streamlit app."""

from __future__ import annotations

import hashlib
import hmac
import math
import time

import streamlit as st


# A salted, deliberately slow verifier; the plaintext password is not stored.
_SALT = bytes.fromhex("3426f3fda73e0ad81aba71df8737d27158fc91994f7f482d1fc82938cffe47bb")
_PASSWORD_HASH = bytes.fromhex("25dc723027c2d820db5def74796eee076521e7fff730a5457d19cf7c3c889400")
_ITERATIONS = 600_000
_AUTH_VERSION = _PASSWORD_HASH.hex()
_MAX_FAILURES = 5
_LOCK_SECONDS = 30
_SESSION_SECONDS = 8 * 60 * 60


def verify_password(password: str) -> bool:
    """Verify on the server using a constant-time digest comparison."""
    candidate = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), _SALT, _ITERATIONS)
    return hmac.compare_digest(candidate, _PASSWORD_HASH)


def _submit_login() -> None:
    # Callbacks run before the next script render, so the widget value can be
    # removed here without retaining the submitted password in session state.
    password = st.session_state.pop("_auth_password", "")
    now = time.monotonic()
    if now < st.session_state.get("_auth_blocked_until", 0):
        return
    if not password:
        st.session_state["_auth_error"] = "请输入访问密码。"
        return
    if verify_password(password):
        st.session_state["_auth_version"] = _AUTH_VERSION
        st.session_state["_auth_started"] = now
        for key in ("_auth_failures", "_auth_blocked_until", "_auth_error"):
            st.session_state.pop(key, None)
        return
    failures = st.session_state.get("_auth_failures", 0) + 1
    if failures >= _MAX_FAILURES:
        st.session_state["_auth_blocked_until"] = now + _LOCK_SECONDS
        st.session_state["_auth_failures"] = 0
        st.session_state["_auth_error"] = "密码错误次数较多，请30秒后重试。"
    else:
        st.session_state["_auth_failures"] = failures
        st.session_state["_auth_error"] = "密码不正确，请重试。"


def _logout() -> None:
    st.session_state.clear()


def require_login() -> None:
    """Stop before any dashboard/data loading unless this session is signed in."""
    now = time.monotonic()
    started = st.session_state.get("_auth_started")
    if (
        st.session_state.get("_auth_version") == _AUTH_VERSION
        and isinstance(started, (int, float))
        and 0 <= now - started < _SESSION_SECONDS
    ):
        st.sidebar.button("退出登录", on_click=_logout, key="_auth_logout")
        return

    st.session_state.pop("_auth_version", None)
    st.session_state.pop("_auth_started", None)
    st.title("优沃森数据看板")
    st.caption("此页面需要登录，请输入访问密码。")
    remaining = st.session_state.get("_auth_blocked_until", 0) - now
    if remaining > 0:
        st.warning(f"密码错误次数较多，请 {math.ceil(remaining)} 秒后重试。")
        st.button("重新检查", key="_auth_retry")
        st.stop()

    with st.form("login_form", clear_on_submit=True):
        st.text_input("访问密码", type="password", key="_auth_password")
        st.form_submit_button("登录", on_click=_submit_login, type="primary")
    if error := st.session_state.get("_auth_error"):
        st.error(error)
    st.stop()
