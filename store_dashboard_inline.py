from __future__ import annotations

import pandas as pd
import plotly.express as px
import streamlit as st

STANDARD = 150
PERIODS = ["9/14—9/19", "9/7—9/13", "8/31—9/6", "8/31—9/19 全期"]
WEEKLY_TOTALS = {
    "8/31—9/6": {"days": 7, "periodOrders": 19473, "dailyOrders": 2781.9, "ordersPerPerson": 132.5, "wow": None},
    "9/7—9/13": {"days": 7, "periodOrders": 22286, "dailyOrders": 3183.7, "ordersPerPerson": 151.6, "wow": 0.1445},
    "9/14—9/19": {"days": 6, "periodOrders": 19209, "dailyOrders": 3201.5, "ordersPerPerson": 152.5, "wow": 0.0294},
    "8/31—9/19 全期": {"days": 20, "periodOrders": 60968, "dailyOrders": 3048.4, "ordersPerPerson": 145.2, "wow": None},
}
STORES = [
    {
        "name": "康桥店", "staff": 3, "dailyOrders": 816.7, "ordersPerPerson": 272.2, "wow": 0.1714,
        "laborDaily": 1354, "loadRate": 1.8148, "laborPerOrder": 1.66, "registeredStaff": 7,
        "baseDailyShifts": 6, "requiredPeakSpeed": 17.1, "peakDayOrders": 977,
        "judgment": "增长与高负荷并存，优先保障履约承接。",
        "risk": "现有3人承担高工作量，需关注高峰超时、差错、加班及人员稳定风险；低单均人工不等于效率最佳。",
        "action": "下周核查高峰履约、缺货取消、工时及出勤；HRBP协同业务制定高峰支援或补岗方案，不将272单人效作为常态要求。",
        "shifts": "A 08:00—20:00 ×2；B 12:00—24:00 ×2；C 20:00—次日08:00 ×2",
        "topHours": "21点68.4单、22点63.8单、20点60.5单、19点57.4单、18点52.8单、23点47.6单",
        "weekly": {"8/31—9/6": [662.1, 220.7, None], "9/7—9/13": [714.1, 238.0, 0.0785], "9/14—9/19": [816.7, 272.2, 0.1714], "8/31—9/19 全期": [726.7, 242.2, None]},
    },
    {
        "name": "广丰路店", "staff": 4, "dailyOrders": 473.7, "ordersPerPerson": 118.4, "wow": -0.0876,
        "laborDaily": 1274, "loadRate": 0.7894, "laborPerOrder": 2.69, "registeredStaff": 5,
        "baseDailyShifts": 4, "requiredPeakSpeed": 17.2, "peakDayOrders": 516,
        "judgment": "负荷偏低且订单下滑，单均人工成本最高。",
        "risk": "订单回落可能推高单位人工成本；未查原因即减员，可能进一步影响高峰履约。",
        "action": "店长提交订单下降与低负荷原因；先调班、暂停新增常规招聘，连续两周验证后再决定调岗、共享人员或减编。",
        "shifts": "A 06:00—18:00 ×1；B 10:00—22:00 ×1；C 18:00—次日06:00 ×2",
        "topHours": "20点39.6单、19点37.6单、21点37.2单、18点33.6单、22点31.7单、17点27.6单",
        "weekly": {"8/31—9/6": [452.0, 113.0, None], "9/7—9/13": [533.0, 133.2, 0.1792], "9/14—9/19": [473.7, 118.4, -0.0876], "8/31—9/19 全期": [486.9, 121.7, None]},
    },
    {
        "name": "皮革城店", "staff": 4, "dailyOrders": 483.0, "ordersPerPerson": 120.8, "wow": 0.028,
        "laborDaily": 1098, "loadRate": 0.8050, "laborPerOrder": 2.27, "registeredStaff": 5,
        "baseDailyShifts": 4, "requiredPeakSpeed": 17.4, "peakDayOrders": 552,
        "judgment": "负荷持续偏低，先查经营需求与排班。",
        "risk": "工作量长期不足可能降低人员投入效率；平均负荷低不等于24小时营业下人员冗余。",
        "action": "店长核查低负荷原因；优先调整峰谷排班、暂停新增常规招聘，两周后评估调岗或共享替休的可行性。",
        "shifts": "A 09:00—21:00 ×2；B 12:00—24:00 ×1；C 21:00—次日09:00 ×1",
        "topHours": "20点36.7单、21点34.9单、18点34.5单、19点34.1单、22点32.0单、17点27.8单",
        "weekly": {"8/31—9/6": [496.6, 124.1, None], "9/7—9/13": [480.7, 120.2, -0.0319], "9/14—9/19": [483.0, 120.8, 0.028], "8/31—9/19 全期": [486.9, 121.7, None]},
    },
    {
        "name": "青浦店", "staff": 3, "dailyOrders": 426.0, "ordersPerPerson": 142.0, "wow": 0.2604,
        "laborDaily": 989, "loadRate": 0.9467, "laborPerOrder": 2.32, "registeredStaff": 4,
        "baseDailyShifts": 3, "requiredPeakSpeed": 20.9, "peakDayOrders": 478,
        "judgment": "近期增长明显，按最新负荷判断配置。",
        "risk": "历史低均值可能导致低估近期需求；增长尚未验证持续性，过早扩编也有成本风险。",
        "action": "暂维持现有配置，连续两周跟踪增长与高峰履约；必要时安排机动支持，确认增长持续后再决定补人。核实前期零值原因。",
        "shifts": "A 11:00—23:00 ×2；B 23:00—次日11:00 ×1",
        "topHours": "19点34.7单、20点31.0单、21点29.6单、18点27.9单、22点27.8单、17点24.3单",
        "weekly": {"8/31—9/6": [79.6, 26.5, None], "9/7—9/13": [352.6, 117.5, 3.4309], "9/14—9/19": [426.0, 142.0, 0.2604], "8/31—9/19 全期": [279.1, 93.0, None]},
    },
    {
        "name": "七宝店", "staff": 4, "dailyOrders": 574.0, "ordersPerPerson": 143.5, "wow": -0.0930,
        "laborDaily": 1430, "loadRate": 0.9567, "laborPerOrder": 2.49, "registeredStaff": 5,
        "baseDailyShifts": 4, "requiredPeakSpeed": 20.6, "peakDayOrders": 687,
        "judgment": "人效接近基准，订单回落应优先查因。",
        "risk": "订单持续下降可能损害门店经营；压缩高峰覆盖可能进一步影响服务、评分及订单。",
        "action": "店长复盘减量的渠道、时段和商品来源，优先恢复订单与服务质量，暂稳核心拣货编制，按峰谷需求优化排班。",
        "shifts": "A 06:00—18:00 ×1；B 10:00—22:00 ×1；C 18:00—次日06:00 ×2",
        "topHours": "20点43.5单、21点42.5单、19点38.9单、22点37.8单、18点36.9单、13点28.9单",
        "weekly": {"8/31—9/6": [600.1, 150.0, None], "9/7—9/13": [637.4, 159.4, 0.0621], "9/14—9/19": [574.0, 143.5, -0.093], "8/31—9/19 全期": [605.4, 151.3, None]},
    },
    {
        "name": "东站店", "staff": 3, "dailyOrders": 428.2, "ordersPerPerson": 142.7, "wow": -0.0548,
        "laborDaily": 887, "loadRate": 0.9515, "laborPerOrder": 2.07, "registeredStaff": 4,
        "baseDailyShifts": 3, "requiredPeakSpeed": 19.9, "peakDayOrders": 460,
        "judgment": "人效接近基准，重点跟进订单下降。",
        "risk": "单量回落影响人效；在24小时运营下，轮休或临时缺勤若无接替，可能出现服务空档。",
        "action": "店长复盘减量来源，优先恢复订单与服务质量，暂稳核心编制；结合实际出勤安排轮休与高峰接替。",
        "shifts": "A 07:00—19:00 ×1；B 11:00—23:00 ×1；C 19:00—次日07:00 ×1",
        "topHours": "21点34.9单、19点34.4单、20点34.1单、18点33.4单、22点29.1单、17点24.7单",
        "weekly": {"8/31—9/6": [491.4, 163.8, None], "9/7—9/13": [465.9, 155.3, -0.052], "9/14—9/19": [428.2, 142.7, -0.0548], "8/31—9/19 全期": [463.5, 154.5, None]},
    },
]



def render_store_dashboard_inline():
    st.markdown("""
    <style>
    .stApp {background: linear-gradient(180deg,#fff8ec 0%,#f8fbff 55%,#fffdf8 100%);} 
    .hero {padding:28px 30px;border-radius:12px;background:linear-gradient(126deg,rgba(255,224,102,.95),rgba(120,220,199,.85) 48%,rgba(132,94,194,.70));color:#1c2430;margin-bottom:18px;}
    .hero h1 {margin:0;font-size:38px;line-height:1.2}.hero p{margin:10px 0 0;color:#35505b;line-height:1.7}
    .card {background:#fffdf8;border:1px solid #d9e4ef;border-radius:10px;box-shadow:0 14px 30px rgba(236,119,55,.09);padding:18px;margin-top:16px;}
    .metric-card {background:#fffdf8;border:2px solid rgba(255,176,0,.22);border-radius:10px;box-shadow:0 14px 30px rgba(236,119,55,.10);padding:18px;min-height:128px;}
    .metric-label{color:#667085;font-size:13px;font-weight:700}.metric-value{font-size:34px;font-weight:800;margin-top:8px;color:#1c2430}.metric-note{color:#667085;font-size:12px;line-height:1.45;margin-top:8px}
    .good{color:#059669;font-weight:800}.warn{color:#d97706;font-weight:800}.risk{color:#dc2626;font-weight:800}
    </style>
    """, unsafe_allow_html=True)


    def pct(value):
        return "-" if value is None else f"{value:.1%}"


    def signed_pct(value):
        return "-" if value is None else f"{value:+.1%}"


    def status_class(load_rate, wow):
        if load_rate >= 1.15:
            return "risk", "高负荷"
        if load_rate < 0.85:
            return "warn", "低负荷"
        if wow is not None and wow < 0:
            return "warn", "订单回落"
        return "good", "相对稳定"


    def store_row(store, period):
        daily, per_person, wow = store["weekly"][period]
        load_rate = per_person / STANDARD
        labor_per_order = store["laborDaily"] / daily if daily else 0
        klass, status = status_class(load_rate, wow)
        return {
            "门店": store["name"], "人数": store["staff"], "日均单量": daily, "人均单量": per_person,
            "负荷率": load_rate, "周环比": wow, "单均人工": labor_per_order, "24h在册建议": store["registeredStaff"],
            "状态": status, "状态色": klass,
        }


    def aggregate_row(period):
        row = WEEKLY_TOTALS[period]
        load_rate = row["ordersPerPerson"] / STANDARD
        labor_per_order = sum(s["laborDaily"] for s in STORES) / row["dailyOrders"]
        return {"staff": 21, "daily": row["dailyOrders"], "per_person": row["ordersPerPerson"], "wow": row["wow"], "load": load_rate, "labor_per_order": labor_per_order, "registered": 30}


    def metric_card(label, value, note):
        st.markdown(f'<div class="metric-card"><div class="metric-label">{label}</div><div class="metric-value">{value}</div><div class="metric-note">{note}</div></div>', unsafe_allow_html=True)


    st.markdown('<div class="hero"><div style="font-size:14px;font-weight:700;color:#33515e;">直营店经营、人效、人工成本、小时单量与24小时排班建议</div><h1>门店数据可视化看板</h1><p>统计期：2026/9/14—9/19；环比对比：2026/9/7—9/12。评分数据暂空，待补充后纳入评分卡和风险判断。</p></div>', unsafe_allow_html=True)

    c1, c2 = st.columns([1, 1])
    with c1:
        selected_period = st.radio("时间周期", PERIODS, horizontal=True)
    with c2:
        selected_store = st.selectbox("门店", ["全部"] + [s["name"] for s in STORES])

    rows = [store_row(store, selected_period) for store in STORES]
    if selected_store == "全部":
        active = aggregate_row(selected_period)
        chart_rows = rows
    else:
        one = next(row for row in rows if row["门店"] == selected_store)
        store = next(s for s in STORES if s["name"] == selected_store)
        active = {"staff": one["人数"], "daily": one["日均单量"], "per_person": one["人均单量"], "wow": one["周环比"], "load": one["负荷率"], "labor_per_order": one["单均人工"], "registered": store["registeredStaff"]}
        chart_rows = [one]

    m1, m2, m3, m4, m5, m6 = st.columns(6)
    with m1: metric_card("人数", f"{active['staff']:.0f}", "拣货员口径，康桥按3人")
    with m2: metric_card("日均单量", f"{active['daily']:,.1f}", f"周期：{selected_period}")
    with m3: metric_card("人均单量", f"{active['per_person']:,.1f}", "正常工作量=150单/人/天")
    with m4: metric_card("负荷率", pct(active["load"]), "超过115%为高负荷，低于85%为低负荷")
    with m5: metric_card("周环比", signed_pct(active["wow"]), "全期不计算环比")
    with m6: metric_card("24h在册建议", f"{active['registered']:.0f}", "拣货员12小时班，月休2天")

    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.subheader("全量表核心指标")
    display = pd.DataFrame(rows)
    for col in ["日均单量", "人均单量", "单均人工"]:
        display[col] = display[col].map(lambda x: round(x, 2))
    display["负荷率"] = display["负荷率"].map(pct)
    display["周环比"] = display["周环比"].map(signed_pct)
    st.dataframe(display.drop(columns=["状态色"]), use_container_width=True, hide_index=True)
    st.markdown("</div>", unsafe_allow_html=True)

    left, right = st.columns(2)
    with left:
        st.markdown('<div class="card">', unsafe_allow_html=True)
        st.subheader("人效与经营对比")
        load_df = pd.DataFrame(chart_rows)
        fig = px.bar(load_df, x="门店", y="负荷率", color="状态", text=load_df["负荷率"].map(pct), color_discrete_sequence=px.colors.qualitative.Set2)
        fig.add_hline(y=1, line_dash="dash", line_color="#94a3b8")
        fig.update_layout(height=330, yaxis_tickformat=".0%", margin=dict(l=10, r=10, t=15, b=10))
        st.plotly_chart(fig, use_container_width=True)
        st.markdown("</div>", unsafe_allow_html=True)
    with right:
        st.markdown('<div class="card">', unsafe_allow_html=True)
        st.subheader("日均单量与单均人工")
        cost_df = pd.DataFrame(chart_rows)
        fig = px.scatter(cost_df, x="日均单量", y="单均人工", size="人数", color="门店", text="门店")
        fig.update_traces(textposition="top center")
        fig.update_layout(showlegend=False, height=330, margin=dict(l=10, r=10, t=15, b=10))
        st.plotly_chart(fig, use_container_width=True)
        st.markdown("</div>", unsafe_allow_html=True)

    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.subheader("周度与全时段")
    trend_rows = []
    for store in STORES:
        if selected_store != "全部" and store["name"] != selected_store:
            continue
        for period, values in store["weekly"].items():
            trend_rows.append({"门店": store["name"], "周期": period, "日均单量": values[0], "人均单量": values[1]})
    trend_df = pd.DataFrame(trend_rows)
    fig = px.line(trend_df, x="周期", y="日均单量", color="门店", markers=True)
    fig.update_layout(height=330, margin=dict(l=10, r=10, t=15, b=10))
    st.plotly_chart(fig, use_container_width=True)
    st.markdown("</div>", unsafe_allow_html=True)

    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.subheader("24小时运营排班建议")
    shift_base = [s for s in STORES if selected_store == "全部" or s["name"] == selected_store]
    shift_df = pd.DataFrame([{
        "门店": s["name"], "基础日出勤": s["baseDailyShifts"], "独立在册建议": s["registeredStaff"],
        "近期最高日量": s["peakDayOrders"], "峰时速度验证": f"{s['requiredPeakSpeed']:.1f} 单/人/时",
        "建议班型": s["shifts"], "高压时段": s["topHours"],
    } for s in shift_base])
    st.dataframe(shift_df, use_container_width=True, hide_index=True)
    st.caption("排班口径：门店24小时运营，拣货员日出勤12小时，月休2天；30人在册为独立排班测算方案，不直接等于新增招聘9人。")
    st.markdown("</div>", unsafe_allow_html=True)

    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.subheader("当前问题、风险与调整规划")
    plan_df = pd.DataFrame([{
        "门店": s["name"], "经营判断": s["judgment"], "当前风险": s["risk"], "后期调整建议": s["action"],
    } for s in shift_base])
    st.dataframe(plan_df, use_container_width=True, hide_index=True)
    st.markdown("</div>", unsafe_allow_html=True)
