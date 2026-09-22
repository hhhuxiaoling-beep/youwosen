from __future__ import annotations

import streamlit as st

from store_dashboard_inline import render_store_dashboard_inline

st.set_page_config(page_title="门店数据可视化看板", page_icon="🏪", layout="wide")
render_store_dashboard_inline()
