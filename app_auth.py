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


def _render_login_design() -> None:
    # Only emitted while signed out; a successful rerun restores dashboard styling.
    st.markdown(
        """
        <style>
        .stApp {
            background:
                radial-gradient(ellipse at 18% 12%, rgba(18, 173, 181, .18), transparent 46%),
                radial-gradient(ellipse at 88% 78%, rgba(67, 93, 222, .20), transparent 48%),
                linear-gradient(145deg, #050b16 0%, #0a1529 53%, #070e1d 100%);
            color: #e9f2ff;
        }
        .stApp::before {
            content: ""; position: fixed; inset: 0; pointer-events: none;
            background-image: linear-gradient(rgba(129, 167, 211, .045) 1px, transparent 1px),
                linear-gradient(90deg, rgba(129, 167, 211, .045) 1px, transparent 1px);
            background-size: 64px 64px;
            mask-image: linear-gradient(to bottom, #000, transparent 92%);
        }
        [data-testid="stSidebar"], header[data-testid="stHeader"] { display: none; }
        [data-testid="stMainBlockContainer"], .main .block-container {
            max-width: 500px !important;
            padding: clamp(40px, 11vh, 120px) 24px 40px !important;
            position: relative;
        }
        .login-brand { text-align: center; margin: 0 0 24px; }
        .login-symbol {
            width: 58px; height: 58px; margin: 0 auto 24px; padding: 15px;
            display: flex; align-items: flex-end; justify-content: center; gap: 5px;
            border: 1px solid rgba(91, 222, 229, .32); border-radius: 18px;
            background: linear-gradient(145deg, rgba(74, 215, 222, .15), rgba(84, 121, 248, .10));
            box-shadow: 0 0 36px rgba(28, 190, 204, .12), inset 0 1px 0 rgba(255,255,255,.08);
        }
        .login-symbol i { display: block; width: 6px; border-radius: 3px; background: #5ae2de; }
        .login-symbol i:nth-child(1) { height: 12px; opacity: .65; }
        .login-symbol i:nth-child(2) { height: 20px; opacity: .85; }
        .login-symbol i:nth-child(3) { height: 28px; background: #90b5ff; }
        .login-eyebrow { color: #7ed9dd; font-size: 10px; letter-spacing: 3.2px; font-weight: 600; }
        .login-brand h1 {
            color: #f1f6ff; font-family: inherit; font-size: clamp(27px, 6vw, 32px);
            font-weight: 650; letter-spacing: 1.2px; margin: 13px 0 12px; padding: 0;
            line-height: 1.4;
        }
        .login-brand p { color: #93a5bf; font-size: 13px; line-height: 1.8; margin: 0; }
        [data-testid="stForm"] {
            background: linear-gradient(145deg, rgba(22, 39, 65, .88), rgba(11, 23, 43, .93));
            border: 1px solid rgba(143, 177, 220, .18) !important;
            border-radius: 22px !important; padding: 30px !important;
            box-shadow: 0 24px 80px rgba(0, 0, 0, .30), inset 0 1px 0 rgba(255,255,255,.05);
            backdrop-filter: blur(22px);
        }
        .login-card-title { color: #f0f6ff; font-size: 19px; font-weight: 600; margin: 0 0 6px; }
        .login-card-note { color: #8fa4c1; font-size: 12px; line-height: 1.7; margin: 0 0 16px; }
        [data-testid="stForm"] label, [data-testid="stForm"] label p {
            color: #cdddf0 !important; font-size: 12px !important; font-weight: 500;
        }
        [data-testid="stForm"] [data-baseweb="input"] {
            background: #081426 !important; border: 1px solid #2d415d !important;
            border-radius: 11px !important;
        }
        [data-testid="stForm"] [data-baseweb="input"]:focus-within {
            border-color: #56d5d8 !important; box-shadow: 0 0 0 3px rgba(86, 213, 216, .12);
        }
        [data-testid="stForm"] input {
            background: transparent !important; color: #edf5ff !important;
            caret-color: #67e2df; min-height: 48px;
        }
        [data-testid="stForm"] input::placeholder { color: #617795 !important; }
        [data-testid="stForm"] [data-baseweb="input"] button {
            background: transparent !important; color: #98b0ce !important;
        }
        [data-testid="stFormSubmitButton"] button {
            width: 100%; min-height: 48px; margin-top: 10px; border: none !important;
            border-radius: 11px !important;
            background: linear-gradient(110deg, #55e0d5, #79b2ff) !important;
            color: #061528 !important; box-shadow: 0 8px 26px rgba(70, 181, 211, .16);
            transition: filter .18s ease, box-shadow .18s ease;
        }
        [data-testid="stFormSubmitButton"] button p { color: #061528 !important; font-weight: 700; font-size: 14px; }
        [data-testid="stFormSubmitButton"] button:hover { filter: brightness(1.08); box-shadow: 0 8px 30px rgba(70,181,211,.27); }
        [data-testid="stFormSubmitButton"] button:focus-visible { outline: 2px solid #b4eaff; outline-offset: 4px; }
        .login-footer { text-align: center; color: #7589a5; font-size: 11px; letter-spacing: .5px; margin: 18px 0 0; }
        .login-footer span { color: #57c9cd; margin-right: 6px; }
        [data-testid="stAlert"] { border-radius: 12px; }
        [data-testid="stAlert"] p { color: #e9f2ff; }
        @media (max-width: 560px) {
            [data-testid="stMainBlockContainer"], .main .block-container { padding: 48px 20px 28px !important; }
            [data-testid="stForm"] { padding: 24px !important; border-radius: 18px !important; }
            .login-brand { margin-bottom: 18px; }
        }
        @media (prefers-reduced-motion: reduce) {
            [data-testid="stFormSubmitButton"] button { transition: none; }
        }
        </style>
        <div class="login-brand">
            <div class="login-symbol" aria-hidden="true"><i></i><i></i><i></i></div>
            <div class="login-eyebrow">YOUWOSEN &nbsp; / &nbsp; DATA PORTAL</div>
            <h1>优沃森数据平台</h1>
            <p>门店经营与人力数据，统一入口。</p>
        </div>
        """,
        unsafe_allow_html=True,
    )


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
    _render_login_design()
    remaining = st.session_state.get("_auth_blocked_until", 0) - now
    if remaining > 0:
        st.warning(f"密码错误次数较多，请 {math.ceil(remaining)} 秒后重试。")
        st.button("重新检查", key="_auth_retry")
        st.stop()

    with st.form("login_form", clear_on_submit=True):
        st.markdown('<div class="login-card-title">欢迎回来</div><p class="login-card-note">输入访问密码，进入数据看板。</p>', unsafe_allow_html=True)
        st.text_input("访问密码", type="password", placeholder="请输入访问密码", key="_auth_password")
        st.form_submit_button("进入数据看板", on_click=_submit_login, type="primary", use_container_width=True)
    if error := st.session_state.get("_auth_error"):
        st.error(error)
    st.markdown('<p class="login-footer"><span>●</span>仅限授权人员访问</p>', unsafe_allow_html=True)
    st.stop()
