from __future__ import annotations

import importlib.util
from pathlib import Path

import pandas as pd
import plotly.express as px
import streamlit as st

from utils.metrics import (
    BUSINESS_OWNERS,
    PRIORITY_ORDER,
    STATUS_ORDER,
    other_requirements,
    overview_metrics,
    owner_requirements,
    pending_onboard,
    priority_label,
    running_priority,
    status_summary,
)


ROOT = Path(__file__).parent
DATA_DIR = ROOT / "data"


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


@st.cache_data(show_spinner=False)
def load_dashboard_data(path: str, file_size: int, file_mtime_ns: int):
    return data_loader.load_data(Path(path))


default_file = data_loader.find_default_data_file(DATA_DIR)
file_stat = default_file.stat()
requirements, onboard, interview = load_dashboard_data(str(default_file), file_stat.st_size, file_stat.st_mtime_ns)
metrics = overview_metrics(requirements, onboard)
owners_df = owner_requirements(requirements)

st.markdown(
    """
    <div class="hero">
      <div style="font-size:14px;font-weight:700;color:#33515e;">集团招聘负责人汇报版 | Streamlit 可视化看板</div>
      <h1>优沃森项目招聘进度看板</h1>
      <p>按吴双双、张蓉蓉、刘新风、巢育敏四位业务负责人拆分招聘进度；P0 为最高优先级岗位。</p>
    </div>
    """,
    unsafe_allow_html=True,
)

st.caption(f"当前数据源：`{default_file.name}`")

cols = st.columns(5)
with cols[0]:
    metric_card("招聘需求总数", str(metrics["demand"]), f"取数周期：2026年初至今；四位负责人板块合计 {metrics['owner_demand']}")
with cols[1]:
    metric_card("已入职", str(metrics["joined"]), "来源：待入职表中入职状态=入职")
with cols[2]:
    metric_card("待入职", str(metrics["pending"]), "来源：待入职表中入职状态=待入职")
with cols[3]:
    metric_card("整体招聘达成率", f"{metrics['rate']:.1%}", "按需求表（待）入职数 / 招聘需求总数计算")
with cols[4]:
    metric_card("剩余待招数", str(metrics["gap"]), f"四位负责人剩余 {metrics['owner_gap']}；P0 岗位优先凸出")

pending_df = pending_onboard(onboard)
with st.container():
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("待入职人员信息")
    if pending_df.empty:
        st.info("暂无待入职人员")
    else:
        display = pending_df[["业务负责人", "拟定岗位", "候选人姓名", "拟入职日期", "Base地", "HR", "渠道来源", "聘用类型"]].copy()
        display["拟入职日期"] = display["拟入职日期"].dt.strftime("%Y-%m-%d").fillna("未定")
        display = display.rename(columns={"拟定岗位": "岗位", "候选人姓名": "候选人", "拟入职日期": "入职时间", "渠道来源": "渠道"})
        st.dataframe(display, use_container_width=True, hide_index=True)
    st.markdown("</div>", unsafe_allow_html=True)

running_df = running_priority(requirements)
with st.container():
    st.markdown('<div class="section-card">', unsafe_allow_html=True)
    st.subheader("招聘进行中岗位优先级总览")
    if running_df.empty:
        st.info("暂无招聘进行中岗位")
    else:
        table = running_df[["招聘优先级", "业务负责人", "岗位", "Base地", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招", "招聘周期（天）", "阶段"]].copy()
        table["优先级"] = table["招聘优先级"].apply(priority_label)
        table = table.drop(columns=["招聘优先级"]).rename(columns={"Base地": "Base", "招聘周期（天）": "周期（天）"})
        st.dataframe(table[["优先级", "业务负责人", "岗位", "Base", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招", "周期（天）", "阶段"]], use_container_width=True, hide_index=True)
    st.markdown("</div>", unsafe_allow_html=True)

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
        p0_display = p0_df[["业务负责人", "岗位", "Base地", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招", "招聘周期（天）", "阶段", "备注"]].rename(columns={"Base地": "Base", "招聘周期（天）": "周期（天）"})
        st.dataframe(p0_display, use_container_width=True, hide_index=True)
    st.markdown("</div>", unsafe_allow_html=True)

for owner in BUSINESS_OWNERS:
    owner_df = owners_df[owners_df["业务负责人"].eq(owner)].copy()
    with st.container():
        st.markdown('<div class="owner-card">', unsafe_allow_html=True)
        st.subheader(f"{owner} | {len(owner_df)} 个岗位")
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
                        status_df[["招聘优先级", "岗位", "Base地", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招", "招聘周期（天）", "阶段", "备注"]].rename(columns={"Base地": "Base", "招聘周期（天）": "周期（天）"}),
                        use_container_width=True,
                        hide_index=True,
                    )
        st.markdown("</div>", unsafe_allow_html=True)

other_df = other_requirements(requirements)
with st.expander("其他 / 未纳入四负责人岗位", expanded=False):
    if other_df.empty:
        st.info("无其他岗位")
    else:
        st.dataframe(
            other_df[["项目", "业务负责人", "岗位", "招聘状态", "招聘优先级", "Base地", "招聘负责人", "需求数量", "（待）入职人数", "剩余待招"]].rename(columns={"Base地": "Base"}),
            use_container_width=True,
            hide_index=True,
        )
