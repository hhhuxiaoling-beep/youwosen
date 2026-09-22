from __future__ import annotations

from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


ROOT = Path(__file__).parent
STATIC_DIR = ROOT / "store_dashboard_static"


def _read_static(name: str) -> str:
    return (STATIC_DIR / name).read_text(encoding="utf-8")


def _build_dashboard_html() -> str:
    index_html = _read_static("index.html")
    styles = _read_static("styles.css")
    data_js = _read_static("dashboard-data.js")
    app_js = _read_static("app.js")

    html = index_html.replace('<link rel="stylesheet" href="styles.css" />', f"<style>{styles}</style>")
    html = html.replace('<script src="dashboard-data.js"></script>', f"<script>{data_js}</script>")
    html = html.replace('<script src="app.js"></script>', f"<script>{app_js}</script>")
    html = html.replace("</head>", "<base target='_self' /></head>")
    return html


def render_store_dashboard_inline() -> None:
    st.set_page_config(page_title="门店数据可视化看板", page_icon="🏪", layout="wide")
    st.markdown(
        """
        <style>
        .main .block-container, .block-container {
            max-width: 100% !important;
            padding: 0 !important;
        }
        header[data-testid="stHeader"] { display: none; }
        iframe { display: block; }
        </style>
        """,
        unsafe_allow_html=True,
    )
    components.html(_build_dashboard_html(), height=5200, scrolling=True)
