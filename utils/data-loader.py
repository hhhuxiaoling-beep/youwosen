from __future__ import annotations

from pathlib import Path

import pandas as pd


SHEET_REQUIREMENTS = "优沃森需求明细&岗位JD"
SHEET_ONBOARD = "待入职表-优沃森"
SHEET_INTERVIEW = "面试记录表-优沃森"


def find_default_data_file(data_dir: Path) -> Path:
    files = sorted(data_dir.glob("*.xlsx"))
    if not files:
        raise FileNotFoundError(f"No .xlsx file found in {data_dir}")
    preferred = [p for p in files if "6.29-7.3" in p.name]
    return preferred[0] if preferred else files[0]


def read_workbook(path: Path) -> dict[str, pd.DataFrame]:
    workbook = pd.ExcelFile(path)
    sheets = {}
    for sheet_name in [SHEET_REQUIREMENTS, SHEET_ONBOARD, SHEET_INTERVIEW]:
        sheets[sheet_name] = (
            pd.read_excel(path, sheet_name=sheet_name)
            if sheet_name in workbook.sheet_names
            else pd.DataFrame()
        )
    return sheets


def clean_requirements(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    numeric_cols = [
        "招聘优先级",
        "需求数量",
        "（待）入职人数",
        "剩余待招",
        "推荐简历数",
        "招聘周期（天）",
    ]
    for col in numeric_cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    for col in ["需求数量", "（待）入职人数", "剩余待招", "推荐简历数", "招聘周期（天）"]:
        if col in df.columns:
            df[col] = df[col].fillna(0)
    for col in ["项目", "业务负责人", "招聘负责人", "岗位", "Base地", "招聘状态", "阶段", "备注"]:
        if col in df.columns:
            df[col] = df[col].fillna("未填写").astype(str)
    return df


def clean_onboard(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    for col in ["HR", "候选人姓名", "Base地", "拟定岗位", "汇报对象", "渠道来源", "聘用类型", "入职状态"]:
        if col in df.columns:
            df[col] = df[col].fillna("未填写").astype(str)
    if "拟入职日期" in df.columns:
        df["拟入职日期"] = pd.to_datetime(df["拟入职日期"], errors="coerce")
    return df


def load_data(path: Path) -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    sheets = read_workbook(path)
    requirements = clean_requirements(sheets[SHEET_REQUIREMENTS])
    onboard = clean_onboard(sheets[SHEET_ONBOARD])
    interview = sheets[SHEET_INTERVIEW].copy()
    return requirements, onboard, interview
