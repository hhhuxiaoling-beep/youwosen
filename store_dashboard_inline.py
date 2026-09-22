from __future__ import annotations

import base64
import gzip

import streamlit.components.v1 as components

_BUNDLE = (
'H4sIAJZJsmoC/+29bXfbxrUv/t6fApdJVqVTicIzQMd2bh7a097btFl1zznrrjSrpkhI4jFF6pKUH+p6LTuJH+Wn'
'PNmOrcRxYidOUstO7DqyLMcv/t+kFUjpVb7Cf/bMABgAMwAIkbLbdbvSRAQGM3v27Nl7z57f7NnxP6rNSufgnCPN'
'dGbru7btgP9I9XJjemfhzzPjr/62sGubJO2YccpV+AP9Oet0ylJlptxqO52dhfnO1LhdkCbYl43yrLOzsK/m7J9r'
'...'
)


def render_store_dashboard_inline() -> None:
    html = gzip.decompress(base64.b64decode(_BUNDLE)).decode("utf-8")
    components.html(html, height=3600, scrolling=True)
