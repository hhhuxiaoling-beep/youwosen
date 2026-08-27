from __future__ import annotations

import base64
import importlib.util
from datetime import date, timedelta
from pathlib import Path

import pandas as pd
import plotly.express as px
import streamlit as st

from utils.metrics import (
    BUSINESS_OWNERS,
    PRIORITY_ORDER,
    STATUS_ORDER,
    overview_metrics,
    pending_onboard,
    running_priority,
    status_summary,
)


ROOT = Path(__file__).parent
DATA_DIR = ROOT / "data"
XMIND_SHARE_URL = "https://app.xmind.cn/share/41hH9ZGj"
XMIND_IMAGE_PATH = ROOT / "assets" / "xmind-org-chart.png"
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


def filter_onboard_by_controls(
    df: pd.DataFrame,
    start_date: date,
    end_date: date,
    owner_groups: list[str],
    source_owners: list[str],
    include_undated: bool,
) -> pd.DataFrame:
    filtered = df.copy()
    if filtered.empty:
        return filtered
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


def current_week_range(today: date | None = None) -> tuple[date, date]:
    today = today or date.today()
    week_start = today - timedelta(days=today.weekday())
    return week_start, week_start + timedelta(days=6)


def joined_this_week(onboard_df: pd.DataFrame, week_start: date, week_end: date) -> pd.DataFrame:
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


@st.cache_data(ttl=60 * 60 * 24, show_spinner=False)
def load_xmind_image_bytes(path: str, file_size: int, file_mtime_ns: int) -> bytes:
    return Path(path).read_bytes()


def render_xmind_image(image_path: Path) -> None:
    if not image_path.exists():
        st.warning("暂无组织架构图片")
        return
    image_stat = image_path.stat()
    image_bytes = load_xmind_image_bytes(str(image_path), image_stat.st_size, image_stat.st_mtime_ns)
    image_data = base64.b64encode(image_bytes).decode("ascii")
    st.markdown(
        f"""
        <div class="xmind-image-frame">
            <img src="data:image/png;base64,{image_data}" alt="优沃森&淘宝闪购组织架构">
        </div>
        """,
        unsafe_allow_html=True,
    )


@st.cache_data(show_spinner=False)
def load_dashboard_data(path: str, file_size: int, file_mtime_ns: int):
    return data_loader.load_data(Path(path))


default_file = data_loader.find_default_data_file(DATA_DIR)
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

st.caption(f"当前数据源：`{default_file.name}`")

page = st.sidebar.radio("页面", ["招聘进度看板", "组织架构 XMind"], index=0)

if page == "组织架构 XMind":
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("优沃森&淘宝闪购组织架构")
    st.markdown(f'<a class="xmind-link" href="{XMIND_SHARE_URL}" target="_blank">打开 XMind 原图</a>', unsafe_allow_html=True)
    render_xmind_image(XMIND_IMAGE_PATH)
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
onboard = filter_onboard_by_controls(onboard, start_date, end_date, active_owner_groups, source_owners, include_undated_onboard)
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

week_start, week_end = current_week_range()
joined_week_df = joined_this_week(onboard, week_start, week_end)
pending_df = pending_onboard(onboard)
with st.container():
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("入职人员信息")
    joined_col, pending_col = st.columns(2)
    with joined_col:
        st.markdown(f"##### 本周入职（{week_start:%m/%d}-{week_end:%m/%d}）")
        render_onboard_table(joined_week_df, "暂无本周入职人员")
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
