from __future__ import annotations

from pathlib import Path

import streamlit.components.v1 as components

ROOT = Path(__file__).parent
STATIC_DIR = ROOT / "store_dashboard_static"


def render_store_dashboard_inline() -> None:
    html = (STATIC_DIR / "index.html").read_text(encoding="utf-8")
    css = (STATIC_DIR / "styles.css").read_text(encoding="utf-8")
    data_js = (STATIC_DIR / "dashboard-data.js").read_text(encoding="utf-8")
    app_js = (STATIC_DIR / "app.js").read_text(encoding="utf-8")

    html = html.replace('<link rel="stylesheet" href="styles.css" />', f"<style>\n{css}\n</style>")
    html = html.replace('<script src="dashboard-data.js"></script>', f"<script>\n{data_js}\n</script>")
    html = html.replace('<script src="app.js"></script>', f"<script>\n{app_js}\n</script>")
    html = html.replace("<body>", '<body data-embedded="streamlit">')
    components.html(html, height=2600, scrolling=True)
