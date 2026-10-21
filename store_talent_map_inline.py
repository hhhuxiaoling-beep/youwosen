from __future__ import annotations

import base64
import gzip
import json
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


ROOT = Path(__file__).parent
STATIC_DIR = ROOT / "store_talent_map_static"
TILE_DIR = STATIC_DIR / "assets" / "baidu-tiles" / "12"


def _read_static(name: str) -> str:
    return (STATIC_DIR / name).read_text(encoding="utf-8")


@st.cache_data(show_spinner=False)
def _tile_data_urls() -> dict[str, str]:
    tiles: dict[str, str] = {}
    for tile_path in sorted(TILE_DIR.glob("*.png")):
        encoded = base64.b64encode(tile_path.read_bytes()).decode("ascii")
        tiles[tile_path.stem] = f"data:image/png;base64,{encoded}"
    return tiles


@st.cache_data(show_spinner=False)
def _build_store_talent_map_html() -> str:
    index_html = _read_static("index.html")
    styles = _read_static("styles.css")
    xlsx = gzip.decompress(
        (STATIC_DIR / "vendor/xlsx.full.min.js.gz").read_bytes()
    ).decode("utf-8")
    app_js = _read_static("app.js")
    tile_data = json.dumps(_tile_data_urls(), ensure_ascii=False, separators=(",", ":"))

    html = index_html.replace(
        '<link rel="stylesheet" href="./styles.css?v=3" />',
        f"<style>{styles}</style>",
    )
    html = html.replace(
        '<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>',
        f"<script>{xlsx}</script>",
    )
    html = html.replace(
        '<script src="./app.js?v=3"></script>',
        f"<script>window.__YOUWO_TILE_DATA__={tile_data};</script><script>{app_js}</script>",
    )
    html = html.replace("</head>", "<base target='_self' /></head>")
    return html


def render_store_talent_map_inline() -> None:
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
    components.html(_build_store_talent_map_html(), height=1050, scrolling=True)
