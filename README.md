# 优沃森项目招聘进度 Streamlit 看板

这是一个基于飞书多维表格或 Excel 数据源生成的 Streamlit 招聘管理工作台。

## 项目结构

- `app.py`: Streamlit 主应用
- `data/`: Excel 兜底数据源文件夹，默认自动读取文件名日期最新的 `.xlsx`
- `utils/data-loader.py`: 飞书 / Excel 数据读取与清洗
- `utils/metrics.py`: 指标计算与排序逻辑
- `utils/xmind_exporter.py`: 在线 XMind 组织架构图截图与缓存
- `requirements.txt`: Streamlit Cloud 部署依赖
- `packages.txt`: Streamlit Cloud 系统依赖

## 本地运行

```bash
pip install -r requirements.txt
streamlit run app.py
```

## 飞书数据源

应用会优先读取飞书多维表格；未配置飞书密钥时，自动回退到 `data/` 目录里的最新 Excel。

两个飞书链接不在同一个飞书空间时，需要在 Streamlit Secrets 中分别配置两套应用密钥：

```toml
[feishu_requirements]
app_id = "cli_xxx"
app_secret = "xxx"

[feishu_onboard]
app_id = "cli_xxx"
app_secret = "xxx"
```

也兼容环境变量 `FEISHU_REQUIREMENTS_APP_ID` / `FEISHU_REQUIREMENTS_APP_SECRET` 与
`FEISHU_ONBOARD_APP_ID` / `FEISHU_ONBOARD_APP_SECRET`。旧的 `FEISHU_APP_ID` /
`FEISHU_APP_SECRET` 仅适合两张表在同一飞书空间、同一应用有权限时使用。

当前飞书读取来源：

- 需求与完成情况：`2026招聘进度表汇总统计表` 中的 `优沃森需求明细&岗位JD`
- 入职与待入职信息：`优沃森待入职表`

## 功能

- 数据总览：招聘需求、入职、待招、P0 岗位、负责人进度等可视化看板
- 招聘过程管理：岗位管理、按岗位上传简历、候选人流程看板、候选人台账维护
- 组织架构：从在线 XMind 分享链接生成 PNG，支持手动更新、北京时间更新时间、缩放与全屏查看

## 数据口径

- 招聘需求总数、（待）入职人数、剩余待招数来自需求明细表全量汇总。
- 已入职、待入职来自 `优沃森待入职表` / `待入职表-优沃森`。飞书表中 `是否已入职` 打勾计为已入职；未打勾时，`距离入职日` 为已延期计为放弃入职，显示还有天数计为待入职。
- 入职与待入职信息会跟随数据周期、项目线、汇报对象筛选重新计算。
- 业务负责人板块固定展示：吴双双、张蓉蓉、刘新风、巢育敏。
- P0 为最高优先级岗位，并在页面中突出显示。
