"""Launch the independently protected payroll service without copying HR data."""

import streamlit as st


PAYROLL_URL = "https://yowosen-payroll-online.hhhuxiaoling.chatgpt.site/"


def render_payroll_portal() -> None:
    st.markdown(
        """
        <style>
        .payroll-entry {
            padding: 32px; margin: 12px 0 24px; border-radius: 22px;
            color: #eaf2ff; border: 1px solid #263f5e;
            background: radial-gradient(ellipse at 100% 0, #12495b 0, transparent 58%),
                linear-gradient(135deg, #111e35, #091426);
        }
        .payroll-entry .eyebrow { color: #79dcdf; font-size: 12px; letter-spacing: 2px; }
        .payroll-entry h1 { color: #f0f6ff; font-size: 34px; margin: 10px 0; padding: 0; }
        .payroll-entry p { color: #b2c4de; font-size: 15px; line-height: 1.8; }
        </style>
        <section class="payroll-entry">
            <div class="eyebrow">YOUWOSEN / PAYROLL CENTER</div>
            <h1>薪资中心</h1>
            <p>按月维护考勤与绩效，自动核算薪资，保存并导出结果。</p>
        </section>
        """,
        unsafe_allow_html=True,
    )
    st.info("薪资中心将在新窗口打开，并使用独立访问密码验证；平台登录密码不能代替薪资中心密码。")
    st.link_button("打开薪资中心 →", PAYROLL_URL, type="primary", use_container_width=True)
    st.markdown("### 功能范围")
    st.markdown(
        "员工与考勤 · 拣货绩效 · 店长绩效 · 门店评分 · 人工调整 · 计算参数 · 薪资汇总"
    )
    st.caption("支持 Excel 批量导入导出、保存本月和复制到新月份。已有云端月份记录保留；薪资数据不保存在平台公开 GitHub 仓库。")
