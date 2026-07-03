# 优沃森项目招聘进度 Streamlit 看板

这是一个基于 Excel 数据源生成的 Streamlit 招聘进度看板。

## 项目结构

- `app.py`: Streamlit 主应用
- `data/`: 数据源文件夹，默认读取 `数据源6.29-7.3.xlsx`
- `utils/data-loader.py`: Excel 数据读取与清洗
- `utils/metrics.py`: 指标计算与排序逻辑
- `requirements.txt`: Streamlit Cloud 部署依赖

## 本地运行

```bash
pip install -r requirements.txt
streamlit run app.py
```

## 数据口径

- 招聘需求总数、（待）入职人数、剩余待招数来自需求明细表全量汇总。
- 已入职、待入职来自 `待入职表-优沃森` 的 `入职状态` 字段。
- 业务负责人板块固定展示：吴双双、张蓉蓉、刘新风、巢育敏。
- P0 为最高优先级岗位，并在页面中突出显示。
