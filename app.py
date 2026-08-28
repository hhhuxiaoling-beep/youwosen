from __future__ import annotations

import base64
import html
import importlib.util
import os
from datetime import date, datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

import pandas as pd
import plotly.express as px
import streamlit as st
import streamlit.components.v1 as components

from utils.metrics import (
    BUSINESS_OWNERS,
    PRIORITY_ORDER,
    STATUS_ORDER,
    overview_metrics,
    pending_onboard,
    running_priority,
    status_summary,
)
from utils import xmind_exporter


ROOT = Path(__file__).parent
DATA_DIR = ROOT / "data"
FEISHU_REQUIREMENTS_URL = "https://mf02fgn9ss.feishu.cn/base/QhMGb6r0OaSwCXsjCcscotvSnl4?table=tblpDsiprOLAZhP6&view=vewM60kcII"
FEISHU_ONBOARD_URL = "https://hcncxio17i0e.feishu.cn/wiki/G2awwEeASiJCfPkRXxGcdxpcncf?table=tblo2OpZA4Omhr5c&view=vewM1Y9Vem"
XMIND_SHARE_URL = "https://app.xmind.cn/share/41hH9ZGj"
XMIND_SHEETS = ["优沃森组织架构", "淘宝闪购组织架构", "优沃森直营店"]
BEIJING_TZ = ZoneInfo("Asia/Shanghai")
OWNER_DISPLAY_ORDER = ["吴双双", "张蓉蓉", "郭周洲", "其他", "巢育敏", "刘新风"]
NAMED_OWNER_GROUPS = [owner for owner in OWNER_DISPLAY_ORDER if owner != "其他"]


def load_data_loader():
    module_path = ROOT / "utils" / "data-loader.py"
    spec = importlib.util.spec_from_file_location("data_loader", module_path)
    module = importlib.util.module_from_spec(spec)
    assert spec and spec.loader
    spec.loader.exec_module(module)
    return module


data_loader = load_data_loader()


st.set_page_config(
    page_title="优沃森项目招聘进度看板",
    page_icon="📊",
    layout="wide",
)


st.markdown(
    """
    <style>
    .stApp {
        background:
            radial-gradient(circle at 12% 6%, rgba(255,176,0,.16), transparent 28%),
            radial-gradient(circle at 88% 10%, rgba(15,163,177,.12), transparent 26%),
            linear-gradient(180deg,#fff8ec 0%,#f8fbff 54%,#fffdf8 100%);
    }
    .hero {
        padding: 28px 30px;
        border-radius: 12px;
        background: linear-gradient(126deg, rgba(255,224,102,.95), rgba(120,220,199,.85) 48%, rgba(132,94,194,.70));
        color: #1c2430;
        margin-bottom: 18px;
    }
    .hero h1 {
        margin: 0;
        font-size: 38px;
        line-height: 1.2;
    }
    .hero p {
        margin: 12px 0 0;
        color: #35505b;
        line-height: 1.7;
    }
    .metric-card {
        background: #fffdf8;
        border: 2px solid rgba(255,176,0,.22);
        border-radius: 10px;
        box-shadow: 0 14px 30px rgba(236,119,55,.10);
        padding: 18px 18px 15px;
        min-height: 136px;
    }
    .metric-label {
        color: #667085;
        font-size: 13px;
        font-weight: 700;
    }
    .metric-value {
        font-size: 38px;
        font-weight: 800;
        margin-top: 8px;
        color: #1c2430;
    }
    .metric-note {
        color: #667085;
        font-size: 12px;
        line-height: 1.45;
        margin-top: 8px;
    }
    .section-card {
        background: #fffdf8;
        border: 1px solid #d9e4ef;
        border-radius: 10px;
        box-shadow: 0 14px 30px rgba(236,119,55,.09);
        padding: 18px;
        margin-top: 16px;
    }
    .owner-card {
        background: #fffdf8;
        border: 1px solid #d9e4ef;
        border-top: 6px solid #ffb000;
        border-radius: 10px;
        box-shadow: 0 14px 30px rgba(236,119,55,.09);
        padding: 18px;
        margin-top: 18px;
    }
    .priority-p0 {
        background: linear-gradient(135deg,#ef4444,#ff5d8f);
        color: white;
        border-radius: 6px;
        padding: 3px 8px;
        font-size: 12px;
        font-weight: 800;
    }
    .priority-normal {
        background: #dbeafe;
        color: #1d4ed8;
        border-radius: 6px;
        padding: 3px 8px;
        font-size: 12px;
        font-weight: 800;
    }
    .urgent-box {
        border: 2px solid rgba(239,68,68,.45);
        background: linear-gradient(180deg,#fff7ed,#fff);
        border-radius: 10px;
        padding: 14px;
    }
    .xmind-link {
        display: inline-block;
        margin: 10px 0 18px;
        padding: 10px 14px;
        border-radius: 8px;
        background: #1c2430;
        color: white !important;
        text-decoration: none;
        font-weight: 700;
    }
    .xmind-image-frame {
        border: 1px solid #d9e4ef;
        border-radius: 10px;
        background: #fff;
        padding: 12px;
        overflow-x: auto;
    }
    .xmind-image-frame img {
        display: block;
        width: 100%;
        min-width: 980px;
        height: auto;
    }
    </style>
    """,
    unsafe_allow_html=True,
)


def metric_card(label: str, value: str, note: str) -> None:
    st.markdown(
        f"""
        <div class="metric-card">
            <div class="metric-label">{label}</div>
            <div class="metric-value">{value}</div>
            <div class="metric-note">{note}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def coerce_date(value, fallback: date) -> date:
    if pd.isna(value):
        return fallback
    if hasattr(value, "date"):
        return value.date()
    return pd.to_datetime(value, errors="coerce").date()


def expand_owner_groups(owner_groups: list[str], source_owners: list[str]) -> list[str]:
    expanded = [owner for owner in owner_groups if owner != "其他"]
    if "其他" in owner_groups:
        expanded.extend([owner for owner in source_owners if owner not in NAMED_OWNER_GROUPS])
    return list(dict.fromkeys(expanded))


def ordered_owner_options(source_owners: list[str]) -> list[str]:
    options = [owner for owner in OWNER_DISPLAY_ORDER if owner != "其他" and owner in source_owners]
    if any(owner not in NAMED_OWNER_GROUPS for owner in source_owners):
        insert_at = OWNER_DISPLAY_ORDER.index("其他")
        options.insert(min(insert_at, len(options)), "其他")
    return options


def filter_requirements_by_controls(
    df: pd.DataFrame,
    start_date: date,
    end_date: date,
    owner_groups: list[str],
    source_owners: list[str],
    project_line: str,
) -> pd.DataFrame:
    filtered = df.copy()
    if "需求提出日期" in filtered.columns:
        request_dates = pd.to_datetime(filtered["需求提出日期"], errors="coerce")
        filtered = filtered[request_dates.dt.date.between(start_date, end_date, inclusive="both") | request_dates.isna()]
    if project_line != "全部" and "项目" in filtered.columns:
        filtered = filtered[filtered["项目"].eq(project_line)]
    owners = expand_owner_groups(owner_groups, source_owners)
    if owners and "业务负责人" in filtered.columns:
        filtered = filtered[filtered["业务负责人"].isin(owners)]
    return filtered.copy()


def filter_onboard_by_project(df: pd.DataFrame, project_line: str) -> pd.DataFrame:
    if project_line == "全部" or df.empty:
        return df.copy()
    filtered = df.copy()
    if "项目" in filtered.columns:
        return filtered[filtered["项目"].astype(str).str.contains(project_line, na=False)].copy()
    if "岗位所属板块" in filtered.columns:
        return filtered[filtered["岗位所属板块"].astype(str).str.contains(project_line, na=False)].copy()
    return filtered


def filter_onboard_by_controls(
    df: pd.DataFrame,
    start_date: date,
    end_date: date,
    owner_groups: list[str],
    source_owners: list[str],
    include_undated: bool,
    project_line: str,
) -> pd.DataFrame:
    filtered = df.copy()
    if filtered.empty:
        return filtered
    filtered = filter_onboard_by_project(filtered, project_line)
    if "拟入职日期" in filtered.columns:
        onboard_dates = pd.to_datetime(filtered["拟入职日期"], errors="coerce")
        date_mask = onboard_dates.dt.date.between(start_date, end_date, inclusive="both")
        if include_undated:
            date_mask = date_mask | onboard_dates.isna()
        filtered = filtered[date_mask]
    owners = expand_owner_groups(owner_groups, source_owners)
    if owners and "汇报对象" in filtered.columns:
        filtered = filtered[filtered["汇报对象"].isin(owners)]
    return filtered.copy()


def visible_owner_requirements(requirements_df: pd.DataFrame, owners: list[str]) -> pd.DataFrame:
    if not owners or "业务负责人" not in requirements_df.columns:
        return requirements_df.copy()
    return requirements_df[requirements_df["业务负责人"].isin(owners)].copy()


def today_beijing() -> date:
    return datetime.now(BEIJING_TZ).date()


def week_range(offset_weeks: int = 0, today: date | None = None) -> tuple[date, date]:
    today = today or today_beijing()
    week_start = today - timedelta(days=today.weekday())
    week_start = week_start + timedelta(weeks=offset_weeks)
    return week_start, week_start + timedelta(days=6)


def joined_in_range(onboard_df: pd.DataFrame, week_start: date, week_end: date) -> pd.DataFrame:
    if onboard_df.empty or "入职状态" not in onboard_df.columns or "拟入职日期" not in onboard_df.columns:
        return pd.DataFrame()
    onboard_dates = pd.to_datetime(onboard_df["拟入职日期"], errors="coerce")
    joined = onboard_df[
        onboard_df["入职状态"].eq("入职")
        & onboard_dates.dt.date.between(week_start, week_end, inclusive="both")
    ].copy()
    if joined.empty:
        return joined
    return joined.sort_values(["汇报对象", "拟定岗位", "拟入职日期"], ascending=[True, True, True], na_position="last")


def render_onboard_table(df: pd.DataFrame, empty_text: str) -> None:
    if df.empty:
        st.info(empty_text)
        return
    display = df[["汇报对象", "拟定岗位", "候选人姓名", "拟入职日期", "Base地", "HR", "渠道来源", "聘用类型"]].copy()
    display["拟入职日期"] = pd.to_datetime(display["拟入职日期"], errors="coerce").dt.strftime("%Y-%m-%d").fillna("未定")
    display = display.rename(columns={"拟定岗位": "岗位", "候选人姓名": "候选人", "拟入职日期": "入职时间", "渠道来源": "渠道"})
    st.dataframe(display, use_container_width=True, hide_index=True)


def render_zoomable_image(image_bytes: bytes, title: str, height: int = 720) -> None:
    image_data = base64.b64encode(image_bytes).decode("ascii")
    safe_title = html.escape(title)
    component_html = f"""
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {{
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #fffdf8;
        }}
        .toolbar {{
          display: flex;
          gap: 8px;
          align-items: center;
          padding: 8px 10px;
          position: sticky;
          top: 0;
          z-index: 2;
          background: rgba(255, 253, 248, .94);
          border-bottom: 1px solid #d9e4ef;
        }}
        .toolbar button {{
          border: 1px solid #d9e4ef;
          border-radius: 6px;
          background: #1c2430;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 7px 10px;
          cursor: pointer;
        }}
        .stage {{
          height: {height - 50}px;
          overflow: auto;
          border: 1px solid #d9e4ef;
          border-radius: 10px;
          background: #fff;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 18px;
        }}
        .stage:fullscreen {{
          height: 100vh;
          border-radius: 0;
          padding: 24px;
          background: #fff;
        }}
        .stage img {{
          max-width: none;
          width: 100%;
          min-width: 980px;
          height: auto;
          transform-origin: top center;
          transition: transform .16s ease;
          cursor: zoom-in;
          user-select: none;
        }}
      </style>
    </head>
    <body>
      <div class="toolbar" aria-label="{safe_title}">
        <button type="button" id="zoomIn">放大</button>
        <button type="button" id="zoomOut">缩小</button>
        <button type="button" id="reset">重置</button>
        <button type="button" id="full">全屏</button>
      </div>
      <div class="stage" id="stage">
        <img id="chart" src="data:image/png;base64,{image_data}" alt="{safe_title}">
      </div>
      <script>
        const stage = document.getElementById('stage');
        const chart = document.getElementById('chart');
        let scale = 1;
        function applyScale() {{
          chart.style.transform = `scale(${{scale}})`;
          chart.style.marginBottom = `${{Math.max(0, (scale - 1) * chart.clientHeight)}}px`;
        }}
        document.getElementById('zoomIn').onclick = () => {{
          scale = Math.min(3, +(scale + 0.2).toFixed(2));
          applyScale();
        }};
        document.getElementById('zoomOut').onclick = () => {{
          scale = Math.max(0.5, +(scale - 0.2).toFixed(2));
          applyScale();
        }};
        document.getElementById('reset').onclick = () => {{
          scale = 1;
          stage.scrollTo({{top: 0, left: 0}});
          applyScale();
        }};
        document.getElementById('full').onclick = () => {{
          if (document.fullscreenElement) {{
            document.exitFullscreen();
          }} else {{
            stage.requestFullscreen();
          }}
        }};
        chart.onclick = () => document.getElementById('full').click();
      </script>
    </body>
    </html>
    """
    components.html(component_html, height=height, scrolling=False)


def render_xmind_images(images: list[xmind_exporter.XmindImage]) -> None:
    if not images:
        st.warning("暂无组织架构图片，请点击更新生成")
        return
    if len(images) == 1:
        render_zoomable_image(images[0].image_path.read_bytes(), images[0].sheet_name)
        return
    tabs = st.tabs([image.sheet_name for image in images])
    for tab, image in zip(tabs, images):
        with tab:
            render_zoomable_image(image.image_path.read_bytes(), image.sheet_name)


@st.cache_data(show_spinner=False)
def load_dashboard_data(path: str, file_size: int, file_mtime_ns: int):
    return data_loader.load_data(Path(path))


@st.cache_data(ttl=10 * 60, show_spinner=False)
def load_feishu_dashboard_data(
    requirements_link: str,
    onboard_link: str,
    requirements_app_id: str,
    requirements_app_secret: str,
    onboard_app_id: str,
    onboard_app_secret: str,
):
    return data_loader.load_feishu_data(
        requirements_link,
        onboard_link,
        requirements_app_id,
        requirements_app_secret,
        onboard_app_id,
        onboard_app_secret,
    )


def secret_value(*keys: str) -> str:
    for key in keys:
        value = os.getenv(key, "")
        if value:
            return value
    try:
        for key in keys:
            if key in st.secrets:
                return str(st.secrets[key])
    except Exception:
        return ""
    return ""


def section_secret(section_path: tuple[str, ...], section_key: str) -> str:
    try:
        current = st.secrets
        for section in section_path:
            if section not in current:
                return ""
            current = current[section]
        value = current.get(section_key, "")
        return str(value) if value else ""
    except Exception:
        return ""


def secret_pair(
    app_id_keys: tuple[str, ...],
    app_secret_keys: tuple[str, ...],
    sections: tuple[tuple[str, ...], ...],
    fallback_app_id_keys: tuple[str, ...] = (),
    fallback_app_secret_keys: tuple[str, ...] = (),
    fallback_sections: tuple[tuple[str, ...], ...] = (),
) -> tuple[str, str]:
    for section in sections:
        app_id = section_secret(section, "app_id")
        app_secret = section_secret(section, "app_secret")
        if app_id and app_secret:
            return app_id, app_secret
    app_id = secret_value(*app_id_keys)
    app_secret = secret_value(*app_secret_keys)
    if app_id and app_secret:
        return app_id, app_secret
    for section in fallback_sections:
        app_id = section_secret(section, "app_id")
        app_secret = section_secret(section, "app_secret")
        if app_id and app_secret:
            return app_id, app_secret
    return secret_value(*fallback_app_id_keys), secret_value(*fallback_app_secret_keys)


requirements_app_id, requirements_app_secret = secret_pair(
    (
        "FEISHU_REQUIREMENTS_APP_ID",
        "FEISHU_REQUIREMENT_APP_ID",
        "FEISHU_DEMAND_APP_ID",
        "FEISHU_APP_ID_REQUIREMENTS",
        "FEISHU_APP_ID_DEMAND",
        "FEISHU_APP_ID_1",
    ),
    (
        "FEISHU_REQUIREMENTS_APP_SECRET",
        "FEISHU_REQUIREMENT_APP_SECRET",
        "FEISHU_DEMAND_APP_SECRET",
        "FEISHU_APP_SECRET_REQUIREMENTS",
        "FEISHU_APP_SECRET_DEMAND",
        "FEISHU_APP_SECRET_1",
    ),
    (("feishu_requirements",), ("feishu_requirement",), ("feishu_demand",), ("feishu", "requirements"), ("feishu", "demand")),
    ("FEISHU_APP_ID",),
    ("FEISHU_APP_SECRET",),
    (("feishu",),),
)
onboard_app_id, onboard_app_secret = secret_pair(
    (
        "FEISHU_ONBOARD_APP_ID",
        "FEISHU_ONBOARDING_APP_ID",
        "FEISHU_ENTRY_APP_ID",
        "FEISHU_APP_ID_ONBOARD",
        "FEISHU_APP_ID_ONBOARDING",
        "FEISHU_APP_ID_ENTRY",
        "FEISHU_APP_ID_2",
    ),
    (
        "FEISHU_ONBOARD_APP_SECRET",
        "FEISHU_ONBOARDING_APP_SECRET",
        "FEISHU_ENTRY_APP_SECRET",
        "FEISHU_APP_SECRET_ONBOARD",
        "FEISHU_APP_SECRET_ONBOARDING",
        "FEISHU_APP_SECRET_ENTRY",
        "FEISHU_APP_SECRET_2",
    ),
    (("feishu_onboard",), ("feishu_onboarding",), ("feishu_entry",), ("feishu", "onboard"), ("feishu", "onboarding"), ("feishu", "entry")),
    ("FEISHU_APP_ID",),
    ("FEISHU_APP_SECRET",),
    (("feishu",),),
)
default_file = data_loader.find_default_data_file(DATA_DIR)
data_source_label = f"Excel：{default_file.name}"
has_any_feishu_secret = any([requirements_app_id, requirements_app_secret, onboard_app_id, onboard_app_secret])
has_all_feishu_secrets = all([requirements_app_id, requirements_app_secret, onboard_app_id, onboard_app_secret])
if has_all_feishu_secrets:
    try:
        requirements, onboard, interview = load_feishu_dashboard_data(
            FEISHU_REQUIREMENTS_URL,
            FEISHU_ONBOARD_URL,
            requirements_app_id,
            requirements_app_secret,
            onboard_app_id,
            onboard_app_secret,
        )
        data_source_label = "飞书多维表格：2026招聘进度表汇总统计表 / 优沃森待入职表"
    except Exception as exc:
        st.error(f"飞书数据读取失败，已停止使用 Excel 兜底：{exc}")
        st.stop()
elif has_any_feishu_secret:
    missing = []
    if not requirements_app_id:
        missing.append("需求表 app_id")
    if not requirements_app_secret:
        missing.append("需求表 app_secret")
    if not onboard_app_id:
        missing.append("待入职表 app_id")
    if not onboard_app_secret:
        missing.append("待入职表 app_secret")
    st.error("飞书密钥未配置完整，已停止使用 Excel 兜底。缺少：" + "、".join(missing))
    st.stop()
else:
    file_stat = default_file.stat()
    requirements, onboard, interview = load_dashboard_data(str(default_file), file_stat.st_size, file_stat.st_mtime_ns)
request_dates = pd.to_datetime(requirements.get("需求提出日期", pd.Series(dtype="datetime64[ns]")), errors="coerce").dropna()
onboard_dates = pd.to_datetime(onboard.get("拟入职日期", pd.Series(dtype="datetime64[ns]")), errors="coerce").dropna()
period_dates = pd.concat([request_dates, onboard_dates], ignore_index=True)
default_start = coerce_date(period_dates.min(), date(2026, 1, 1)) if not period_dates.empty else date(2026, 1, 1)
default_end = coerce_date(period_dates.max(), date.today()) if not period_dates.empty else date.today()
requirement_owners = requirements.get("业务负责人", pd.Series(dtype=str)).dropna().astype(str).unique().tolist()
onboard_owners = onboard.get("汇报对象", pd.Series(dtype=str)).dropna().astype(str).unique().tolist()
source_owners = list(dict.fromkeys(requirement_owners + onboard_owners))
owner_options = ordered_owner_options(source_owners)
project_options = ["全部"] + [project for project in ["优沃森", "淘宝闪购"] if project in set(requirements.get("项目", pd.Series(dtype=str)).dropna().astype(str))]

st.markdown(
    """
    <div class="hero">
      <div style="font-size:14px;font-weight:700;color:#33515e;">集团招聘负责人汇报版 | Streamlit 可视化看板</div>
      <h1>优沃森项目招聘进度看板</h1>
    </div>
    """,
    unsafe_allow_html=True,
)

st.caption(f"当前数据源：`{data_source_label}`")

page = st.sidebar.radio("页面", ["招聘进度看板", "组织架构 XMind"], index=0)

if page == "组织架构 XMind":
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("优沃森&淘宝闪购组织架构")
    action_open, action_refresh, action_time = st.columns([0.95, 0.55, 2.5])
    with action_open:
        st.markdown(f'<a class="xmind-link" href="{XMIND_SHARE_URL}" target="_blank">打开 XMind 原图</a>', unsafe_allow_html=True)
    with action_refresh:
        refresh_clicked = st.button("更新", type="primary")
    time_placeholder = action_time.empty()

    cached_images = xmind_exporter.list_cached_images()
    needs_auto_refresh = not cached_images or not xmind_exporter.cache_is_fresh()
    if refresh_clicked or needs_auto_refresh:
        with st.spinner("正在从在线 XMind 同步组织架构图片"):
            try:
                cached_images = xmind_exporter.refresh_xmind_images(XMIND_SHARE_URL, sheet_names=XMIND_SHEETS)
                st.success("组织架构图片已更新")
            except Exception as exc:
                st.error(f"在线 XMind 图片更新失败：{exc}")
                cached_images = xmind_exporter.list_cached_images()
    time_placeholder.caption(f"更新时间（北京时间）：`{xmind_exporter.last_updated_text()}`")
    render_xmind_images(cached_images)
    st.markdown("</div>", unsafe_allow_html=True)
    st.stop()

filter_project, filter_left, filter_right = st.columns([0.9, 1.1, 1.4])
with filter_project:
    selected_project = st.radio(
        "选择项目线",
        options=project_options,
        index=0,
        horizontal=True,
    )
with filter_left:
    selected_period = st.date_input(
        "数据周期",
        value=(default_start, default_end),
        min_value=default_start,
        max_value=default_end,
    )
with filter_right:
    selected_owner_groups = st.multiselect(
        "选择业务负责人",
        options=owner_options,
        default=owner_options,
        placeholder="选择需要查看的业务负责人",
    )

if isinstance(selected_period, (tuple, list)):
    start_date = selected_period[0] if selected_period else default_start
    end_date = selected_period[1] if len(selected_period) > 1 else start_date
else:
    start_date = selected_period
    end_date = selected_period
if start_date > end_date:
    start_date, end_date = end_date, start_date

active_owner_groups = selected_owner_groups or owner_options
active_owners = expand_owner_groups(active_owner_groups, source_owners)
requirements = filter_requirements_by_controls(requirements, start_date, end_date, active_owner_groups, source_owners, selected_project)
include_undated_onboard = start_date <= default_start and end_date >= default_end
onboard = filter_onboard_by_controls(onboard, start_date, end_date, active_owner_groups, source_owners, include_undated_onboard, selected_project)
metrics = overview_metrics(requirements, onboard)
owners_df = visible_owner_requirements(requirements, active_owners)

st.caption(
    f"当前筛选：`{start_date:%Y-%m-%d}` 至 `{end_date:%Y-%m-%d}`；"
    f"项目线：`{selected_project}`；"
    f"业务负责人：`{'、'.join(active_owner_groups)}`；"
    f"筛选后岗位记录 `{len(requirements)}` 条"
)

cols = st.columns(5)
with cols[0]:
    metric_card("招聘需求总数", str(metrics["demand"]), f"当前筛选周期内；已选负责人合计 {int(owners_df['需求数量'].sum()) if '需求数量' in owners_df else 0}")
with cols[1]:
    metric_card("已入职", str(metrics["joined"]), "来源：待入职表中入职状态=入职")
with cols[2]:
    metric_card("待入职", str(metrics["pending"]), "来源：待入职表中入职状态=待入职")
with cols[3]:
    metric_card("整体招聘达成率", f"{metrics['rate']:.1%}", "按需求表（待）入职数 / 招聘需求总数计算")
with cols[4]:
    metric_card("剩余待招数", str(metrics["gap"]), f"已选负责人剩余 {int(owners_df['剩余待招'].sum()) if '剩余待招' in owners_df else 0}；P0 岗位优先凸出")

pending_df = pending_onboard(onboard)
with st.container():
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("入职人员信息")
    joined_col, pending_col = st.columns(2)
    with joined_col:
        selected_joined_period = st.radio(
            "入职周期",
            options=["本周入职", "上周入职"],
            horizontal=True,
            label_visibility="collapsed",
        )
        week_offset = -1 if selected_joined_period == "上周入职" else 0
        week_start, week_end = week_range(week_offset)
        joined_week_df = joined_in_range(onboard, week_start, week_end)
        st.markdown(f"##### {selected_joined_period}（{week_start:%m/%d}-{week_end:%m/%d}）")
        render_onboard_table(joined_week_df, f"暂无{selected_joined_period}人员")
    with pending_col:
        st.markdown("##### 待入职")
        render_onboard_table(pending_df, "暂无待入职人员")
    st.markdown("</div>", unsafe_allow_html=True)

running_df = running_priority(requirements)

left, right = st.columns(2)
owner_gap = owners_df.groupby("业务负责人", as_index=False)["剩余待招"].sum()
with left:
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("各业务负责人剩余待招")
    fig = px.bar(owner_gap, x="业务负责人", y="剩余待招", color="业务负责人", text="剩余待招", color_discrete_sequence=px.colors.qualitative.Set2)
    fig.update_layout(showlegend=False, height=320, margin=dict(l=10, r=10, t=20, b=10))
    st.plotly_chart(fig, use_container_width=True)
    st.markdown("</div>", unsafe_allow_html=True)
with right:
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("进行中岗位优先级分布")
    if running_df.empty:
        st.info("暂无进行中岗位")
    else:
        dist = running_df.copy()
        dist["优先级"] = dist["招聘优先级"].apply(lambda x: int(x) if pd.notna(x) else 99)
        dist = dist.groupby("优先级", as_index=False)["岗位"].count().rename(columns={"岗位": "岗位数"})
        dist["优先级"] = dist["优先级"].map(lambda x: f"P{x}" if x != 99 else "未设")
        fig = px.bar(dist, x="优先级", y="岗位数", color="优先级", text="岗位数", color_discrete_sequence=px.colors.qualitative.Pastel)
        fig.update_layout(showlegend=False, height=320, margin=dict(l=10, r=10, t=20, b=10))
        st.plotly_chart(fig, use_container_width=True)
    st.markdown("</div>", unsafe_allow_html=True)

p0_df = running_df[running_df["招聘优先级"].fillna(99).astype(float).eq(0)].copy()
with st.container():
    st.markdown('<div class="section-card urgent-box">', unsafe_allow_html=True)
    st.subheader("P0 级岗位优先看")
    if p0_df.empty:
        st.info("暂无 P0 进行中岗位")
    else:
        p0_display = p0_df[["业务负责人", "岗位", "Base地", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招", "推荐简历数", "招聘周期（天）", "阶段", "备注"]].rename(columns={"Base地": "Base", "招聘周期（天）": "周期（天）"})
        st.dataframe(p0_display, use_container_width=True, hide_index=True)
    st.markdown("</div>", unsafe_allow_html=True)

for owner_group in active_owner_groups:
    if owner_group == "其他":
        owner_df = owners_df[~owners_df["业务负责人"].isin(NAMED_OWNER_GROUPS)].copy()
    else:
        owner_df = owners_df[owners_df["业务负责人"].eq(owner_group)].copy()
    with st.container():
        st.markdown('<div class="owner-card">', unsafe_allow_html=True)
        st.subheader(f"{owner_group} | {len(owner_df)} 个岗位")
        c1, c2, c3, c4, c5 = st.columns(5)
        owner_demand = int(owner_df["需求数量"].sum())
        owner_hired = int(owner_df["（待）入职人数"].sum())
        owner_gap_value = int(owner_df["剩余待招"].sum())
        owner_rate = owner_hired / owner_demand if owner_demand else 0
        owner_p0 = int(((owner_df["招聘状态"] == "招聘进行中") & owner_df["招聘优先级"].fillna(99).astype(float).eq(0)).sum())
        c1.metric("总需求", owner_demand)
        c2.metric("已/待入职", owner_hired)
        c3.metric("剩余待招", owner_gap_value)
        c4.metric("达成率", f"{owner_rate:.0%}")
        c5.metric("P0进行中", owner_p0)

        tabs = st.tabs(STATUS_ORDER)
        for tab, status in zip(tabs, STATUS_ORDER):
            with tab:
                status_df = owner_df[owner_df["招聘状态"].eq(status)].copy()
                if status_df.empty:
                    st.info("暂无岗位")
                else:
                    if status == "招聘进行中":
                        status_df["优先级排序"] = status_df["招聘优先级"].fillna(99).astype(float)
                        status_df = status_df.sort_values(["优先级排序", "剩余待招", "招聘周期（天）"], ascending=[True, False, False])
                    st.dataframe(
                        status_df[["招聘优先级", "岗位", "Base地", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招", "推荐简历数", "招聘周期（天）", "阶段", "备注"]].rename(columns={"Base地": "Base", "招聘周期（天）": "周期（天）"}),
                        use_container_width=True,
                        hide_index=True,
                    )
        st.markdown("</div>", unsafe_allow_html=True)
