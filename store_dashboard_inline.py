from __future__ import annotations

import pandas as pd
import streamlit as st

STANDARD = 150
PERIODS = ["9/14—9/19", "9/7—9/13", "8/31—9/6", "8/31—9/19 全期"]

WEEKLY_TOTALS = {
    "8/31—9/6": {"daily": 2781.9, "per": 132.5, "wow": None},
    "9/7—9/13": {"daily": 3183.7, "per": 151.6, "wow": 0.1445},
    "9/14—9/19": {"daily": 3201.5, "per": 152.5, "wow": 0.0294},
    "8/31—9/19 全期": {"daily": 3048.4, "per": 145.2, "wow": None},
}

STORES = [
    {"name": "康桥店", "staff": 3, "labor": 1354, "registered": 7, "grade": "黄金", "score916": 47.7, "score": 55.5, "display916": 4.0, "display": 4.2, "judgment": "增长与高负荷并存，优先保障履约承接。", "risk": "商品评价分16.9、商品负反馈率17.5、缺货退款率36.6，订单高负荷下商品体验风险最突出。", "action": "先保履约承接，同时专项治理缺货退款、商品评价和负反馈，避免高单量拉低评分。", "schedule": "白班4人、夜班2-3人滚动；优先覆盖10:00-22:00高峰", "staffing_note": "当前3人口径明显不足，24小时承接需要补足在册并做高峰倾斜。"},
    {"name": "广丰路店", "staff": 4, "labor": 1274, "registered": 5, "grade": "黄金", "score916": 70.5, "score": 72.7, "display916": 4.5, "display": 4.5, "judgment": "负荷偏低且订单下滑，单均人工成本最高。", "risk": "配送准时率10.3、配送时效24.1仍是主要短板，评分提升主要来自IM与商品评价改善。", "action": "低负荷先查经营，同时把配送准时和时效纳入店长周复盘。", "schedule": "白班3人、夜班1-2人滚动；低峰不堆人", "staffing_note": "先稳5人在册，重点优化时段覆盖和订单获取，不建议盲目加人。"},
    {"name": "皮革城店", "staff": 4, "labor": 1098, "registered": 5, "grade": "钻石", "score916": 81.0, "score": 80.2, "display916": 4.7, "display": 4.7, "judgment": "负荷持续偏低，先查经营需求与排班。", "risk": "仍为钻石店，但配送时效44.6、商品负反馈65.7下降，需防止优势回落。", "action": "保持商品评价改善成果，重点盯配送时效和负反馈。", "schedule": "白班3人、夜班1-2人滚动；以服务稳定为主", "staffing_note": "5人在册足够覆盖24小时，重点是防止评分优势回落。"},
    {"name": "青浦店", "staff": 3, "labor": 989, "registered": 4, "grade": "黄金", "score916": 49.0, "score": 51.3, "display916": 4.0, "display": 4.1, "judgment": "近期增长明显，按最新负荷判断配置。", "risk": "商责介入率32.5、商品负反馈25.4、商品评价46.4偏低，增长期服务质量仍不稳。", "action": "维持增长观察，同时复盘商品与客诉责任原因，避免单量增长放大差评。", "schedule": "白班2人、夜班1-2人滚动；增长期预留替补", "staffing_note": "4人在册可覆盖基础24小时，若延续增长需准备第5人弹性池。"},
    {"name": "七宝店", "staff": 4, "labor": 1430, "registered": 5, "grade": "黄金", "score916": 58.4, "score": 62.3, "display916": 4.2, "display": 4.3, "judgment": "人效接近基准，订单回落应优先查因。", "risk": "商品负反馈25.6、IM回复74.4、商品评价58.7仍需改善，订单回落与评分短板需一起看。", "action": "先查订单回落原因，同时补强IM响应和商品反馈治理。", "schedule": "白班3人、夜班1-2人滚动；随订单回落动态压低低峰", "staffing_note": "5人在册可支撑24小时，经营端先查订单回落，排班避免低峰冗余。"},
    {"name": "东站店", "staff": 3, "labor": 887, "registered": 4, "grade": "黄金", "score916": 50.3, "score": 58.7, "display916": 4.1, "display": 4.2, "judgment": "人效接近基准，重点跟进订单下降。", "risk": "提升最大，但商品评价24.1、配送时效25.7、商责介入率34.5仍低。", "action": "继续恢复单量，专项跟进商品评价、配送时效和商责介入。", "schedule": "白班2人、夜班1-2人滚动；保留一人跨峰补位", "staffing_note": "4人在册可覆盖基础排班，重点恢复单量和低分项。"},
]

WEEKLY = {
    "康桥店": {"8/31—9/6": [662.1, 220.7, None], "9/7—9/13": [714.1, 238.0, 0.0785], "9/14—9/19": [816.7, 272.2, 0.1714], "8/31—9/19 全期": [726.7, 242.2, None]},
    "广丰路店": {"8/31—9/6": [452.0, 113.0, None], "9/7—9/13": [533.0, 133.2, 0.1792], "9/14—9/19": [473.7, 118.4, -0.0876], "8/31—9/19 全期": [486.9, 121.7, None]},
    "皮革城店": {"8/31—9/6": [496.6, 124.1, None], "9/7—9/13": [480.7, 120.2, -0.0319], "9/14—9/19": [483.0, 120.8, 0.028], "8/31—9/19 全期": [486.9, 121.7, None]},
    "青浦店": {"8/31—9/6": [79.6, 26.5, None], "9/7—9/13": [352.6, 117.5, 3.4309], "9/14—9/19": [426.0, 142.0, 0.2604], "8/31—9/19 全期": [279.1, 93.0, None]},
    "七宝店": {"8/31—9/6": [600.1, 150.0, None], "9/7—9/13": [637.4, 159.4, 0.0621], "9/14—9/19": [574.0, 143.5, -0.093], "8/31—9/19 全期": [605.4, 151.3, None]},
    "东站店": {"8/31—9/6": [491.4, 163.8, None], "9/7—9/13": [465.9, 155.3, -0.052], "9/14—9/19": [428.2, 142.7, -0.0548], "8/31—9/19 全期": [463.5, 154.5, None]},
}


def pct(v: float | None) -> str:
    return "-" if v is None else f"{v:.1%}"


def signed_pct(v: float | None) -> str:
    return "-" if v is None else f"{v:+.1%}"


def delta_badge(delta: float) -> str:
    if delta > 0:
        return f'<span class="delta up">↑{delta:.1f}</span>'
    if delta < 0:
        return f'<span class="delta down">↓{abs(delta):.1f}</span>'
    return '<span class="delta flat">—0.0</span>'


def score_cell(value: float, previous: float) -> str:
    return f'<span class="score">{value:.1f}</span>{delta_badge(value - previous)}'


def grade_class(grade: str) -> str:
    return {"青铜": "bronze", "白银": "silver", "黄金": "gold", "钻石": "diamond", "王者": "king"}.get(grade, "gold")


def load_class(load: float) -> str:
    if load >= 1.15:
        return "red"
    if load <= 0.85:
        return "amber"
    return "green"


def card(label: str, value: str, note: str) -> None:
    st.markdown(f'<div class="kpi"><span>{label}</span><strong>{value}</strong><small>{note}</small></div>', unsafe_allow_html=True)


def core_row(row: dict) -> str:
    return (
        "<tr>"
        f"<td><b>{row['name']}</b></td>"
        f"<td><span class=\"grade {grade_class(row['grade'])}\">{row['grade']}</span></td>"
        f"<td>{row['staff']}</td>"
        f"<td>{row['period_daily']:,.1f}</td>"
        f"<td>{row['period_per']:,.1f}</td>"
        f"<td><span class=\"pill {load_class(row['load'])}\">{pct(row['load'])}</span></td>"
        f"<td>{signed_pct(row['period_wow'])}</td>"
        f"<td>{score_cell(row['score'], row['score916'])}</td>"
        f"<td>{score_cell(row['display'], row['display916'])}</td>"
        f"<td>{row['labor_per']:.2f}</td>"
        f"<td>{row['registered']} 人</td>"
        "</tr>"
    )


def render_store_dashboard_inline() -> None:
    st.markdown(
        """
        <style>
        .stApp{background:#f4f7fb}.block-container{max-width:1500px;padding-top:24px}.dash-title{font-size:42px;font-weight:900;color:#172033;margin:0}.eyebrow{color:#0f766e;font-weight:900;letter-spacing:.08em}.sub{color:#52657e;font-size:16px;margin:8px 0 20px}.kpi{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:18px;box-shadow:0 18px 45px rgba(15,23,42,.08);min-height:124px}.kpi span{color:#52657e;font-weight:800}.kpi strong{display:block;font-size:32px;margin-top:8px;color:#172033}.kpi small{display:block;color:#64748b;margin-top:8px}.panel{background:#fff;border:1px solid #dbe3ee;border-radius:14px;padding:18px;box-shadow:0 18px 45px rgba(15,23,42,.08);margin:16px 0}.panel h2{margin:0 0 12px;color:#172033}.core-table{width:100%;border-collapse:collapse}.core-table th{background:#f8fafc;color:#52657e;font-size:13px;text-align:left;padding:12px;border-bottom:1px solid #dbe3ee}.core-table td{padding:13px 12px;border-bottom:1px solid #dbe3ee;font-size:15px;color:#172033}.pill,.grade,.delta{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;font-weight:900;font-size:12px;padding:5px 9px;white-space:nowrap}.red{color:#be123c;background:#ffe4e6}.amber{color:#b45309;background:#fef3c7}.green{color:#15803d;background:#dcfce7}.blue{color:#2563eb;background:#dbeafe}.gold{color:#a16207;background:#fef3c7}.diamond{color:#0369a1;background:#e0f2fe}.bronze{color:#92400e;background:#fed7aa}.silver{color:#475569;background:#e2e8f0}.king{color:#7c2d12;background:#ffedd5}.score{font-weight:900;margin-right:6px}.delta.up{color:#15803d;background:#dcfce7}.delta.down{color:#be123c;background:#ffe4e6}.delta.flat{color:#64748b;background:#e2e8f0}.signal{background:#f8fafc;border:1px solid #dbe3ee;border-radius:12px;padding:14px;min-height:132px}.signal b{display:block;font-size:17px;margin-bottom:8px}.signal p{color:#334155;line-height:1.65;margin:0}.section-note{color:#64748b;line-height:1.7}
        </style>
        """,
        unsafe_allow_html=True,
    )

    st.markdown('<div class="eyebrow">优沃森直营店</div><h1 class="dash-title">门店数据可视化看板</h1><div class="sub">统计期：2026/9/14—9/19；环比对比：2026/9/7—9/12；评分已补充9.16与9.22两期。</div>', unsafe_allow_html=True)
    st.caption("数据版本：2026-09-22 rating-v6；恢复人效与经营对比、24小时排班建议、单店问题风险建议。")

    _, selector_col = st.columns([3, 1])
    with selector_col:
        selected_store = st.selectbox("门店", ["全部"] + [s["name"] for s in STORES])
    period = st.radio("时间周期", PERIODS, index=0, horizontal=True)

    active_stores = STORES if selected_store == "全部" else [next(s for s in STORES if s["name"] == selected_store)]
    if selected_store == "全部":
        total = WEEKLY_TOTALS[period]
        active = {"staff": 21, "daily": total["daily"], "per": total["per"], "wow": total["wow"], "labor": 7032, "registered": 30, "score": 63.5, "score_delta": 4.0}
    else:
        store = active_stores[0]
        daily, per, wow = WEEKLY[store["name"]][period]
        active = {"staff": store["staff"], "daily": daily, "per": per, "wow": wow, "labor": store["labor"], "registered": store["registered"], "score": store["score"], "score_delta": store["score"] - store["score916"]}

    cols = st.columns(6)
    with cols[0]:
        card("日均单量", f'{active["daily"]:,.1f}', f'环比 {signed_pct(active["wow"])}')
    with cols[1]:
        card("拣货员", f'{active["staff"]} 人', "康桥按 3 人口径")
    with cols[2]:
        card("人均单量", f'{active["per"]:,.1f}', f'负荷 {pct(active["per"] / STANDARD)}')
    with cols[3]:
        card("综合体验分", f'{active["score"]:.1f}', f'较9.16 {active["score_delta"]:+.1f} 分')
    with cols[4]:
        card("日均人工成本", f'{active["labor"]:,.0f} 元', "单均人工随周期变化")
    with cols[5]:
        card("24h在册建议", f'{active["registered"]} 人', "12小时班，月休2天")

    rows = []
    for store in active_stores:
        daily, per, wow = WEEKLY[store["name"]][period]
        load = per / STANDARD
        rows.append({**store, "period_daily": daily, "period_per": per, "period_wow": wow, "load": load, "labor_per": store["labor"] / daily})

    table_body = "".join(core_row(row) for row in rows)
    table_html = (
        '<div class="panel"><div class="eyebrow">全量表核心指标</div>'
        f'<h2>门店核心指标：{period.replace(" 全期", "")}</h2>'
        '<table class="core-table"><thead><tr>'
        '<th>门店</th><th>门店等级</th><th>人数</th><th>日均单量</th><th>人均单量</th><th>负荷率</th><th>周环比</th><th>综合体验分</th><th>客户端展示评分</th><th>单均人工</th><th>24h在册建议</th>'
        f'</tr></thead><tbody>{table_body}</tbody></table></div>'
    )
    st.markdown(table_html, unsafe_allow_html=True)

    st.markdown('<div class="panel"><div class="eyebrow">质量评分</div><h2>9.16与9.22评分变化</h2>', unsafe_allow_html=True)
    score_df = pd.DataFrame([
        {"门店": store["name"], "门店等级": store["grade"], "综合体验分": store["score"], "综合体验分变化": store["score"] - store["score916"], "客户端展示评分": store["display"], "展示评分变化": store["display"] - store["display916"]}
        for store in active_stores
    ])
    st.dataframe(score_df, use_container_width=True, hide_index=True)
    st.markdown('</div>', unsafe_allow_html=True)

    st.markdown('<div class="panel"><div class="eyebrow">人效与经营对比</div><h2>按150单/人/天判断门店负荷与经营动作</h2>', unsafe_allow_html=True)
    efficiency_df = pd.DataFrame([
        {
            "门店": row["name"],
            "日均单量": round(row["period_daily"], 1),
            "人均单量": round(row["period_per"], 1),
            "负荷率": pct(row["load"]),
            "周环比": signed_pct(row["period_wow"]),
            "单均人工": round(row["labor_per"], 2),
            "人效判断": row["judgment"],
            "经营风险": row["risk"],
            "调整建议": row["action"],
        }
        for row in rows
    ])
    st.dataframe(efficiency_df, use_container_width=True, hide_index=True)
    st.markdown('<p class="section-note">判断口径：150单/人/天为正常工作量；高于115%视为高负荷，需要优先保履约与补班；低于85%视为低负荷，应优先排查订单、商品、配送和时段覆盖，而不是简单加人。</p></div>', unsafe_allow_html=True)

    st.markdown('<div class="panel"><div class="eyebrow">24小时运营排班建议</div><h2>12小时班制、月休2天的在册配置与排班</h2>', unsafe_allow_html=True)
    schedule_df = pd.DataFrame([
        {
            "门店": row["name"],
            "当前人数口径": row["staff"],
            "24h在册建议": row["registered"],
            "日均可排班次": round(row["registered"] * 28 / 30, 1),
            "建议排班": row["schedule"],
            "配置判断": row["staffing_note"],
        }
        for row in rows
    ])
    st.dataframe(schedule_df, use_container_width=True, hide_index=True)
    st.markdown('<p class="section-note">排班口径：24小时营业拆成2个12小时班，拣货员每月出勤28天；在册人数用于覆盖月休、替班和高峰波动。康桥按3个拣货员口径计算，因此当前人效会显著偏高。</p></div>', unsafe_allow_html=True)

    signals = [
        ("先保康桥承接", "康桥人均272.2单，负荷181.5%，当前是高风险高人效，优先补足在册并向高峰时段倾斜。"),
        ("低负荷先查原因", "广丰路、皮革城低于85%负荷，先核查订单来源、缺货取消、时段覆盖和排班匹配。"),
        ("评分纳入周复盘", "9.22六店平均63.5分，较9.16提升4.0分；短板集中在商品体验与配送履约。"),
        ("增长与回落并存", "青浦、康桥增长明显；七宝、广丰路、东站回落，需要分店拆解原因。"),
    ]
    sig_cols = st.columns(4)
    for col, (title, body) in zip(sig_cols, signals):
        with col:
            st.markdown(f'<div class="signal"><b>{title}</b><p>{body}</p></div>', unsafe_allow_html=True)

    st.markdown('<div class="panel"><div class="eyebrow">单店详情</div><h2>当前问题、风险与后续调整建议</h2>', unsafe_allow_html=True)
    detail = pd.DataFrame([{"门店": row["name"], "核心判断": row["judgment"], "评分/经营风险": row["risk"], "调整建议": row["action"]} for row in rows])
    st.dataframe(detail, use_container_width=True, hide_index=True)
    st.markdown('<p class="section-note">以上模块均会跟随“门店”和“时间周期”筛选联动；选择“全部”时展示六店汇总与全量对比。</p></div>', unsafe_allow_html=True)
