from __future__ import annotations

import re
from pathlib import Path

import pandas as pd


SHEET_REQUIREMENTS = "优沃森需求明细&岗位JD"
SHEET_ONBOARD = "待入职表-优沃森"
SHEET_ONBOARD_CANDIDATES = ["待入职表-优沃森", "优沃森待入职表"]
SHEET_INTERVIEW_CANDIDATES = ["面试记录表-优沃森", "面试记录表"]


def _date_score(path: Path) -> tuple[int, int, str]:
    match = re.search(r"(\d{1,2})\.(\d{1,2})-(\d{1,2})\.(\d{1,2})", path.stem)
    if not match:
        return (0, 0, path.name)
    start_month, start_day, end_month, end_day = [int(x) for x in match.groups()]
    return (end_month, end_day, path.name)


def find_default_data_file(data_dir: Path) -> Path:
    files = sorted(data_dir.glob("*.xlsx"), key=_date_score, reverse=True)
    if not files:
        raise FileNotFoundError(f"No .xlsx file found in {data_dir}")
    return files[0]


def _read_first_existing_sheet(path: Path, workbook: pd.ExcelFile, sheet_names: list[str]) -> pd.DataFrame:
    for sheet_name in sheet_names:
        if sheet_name in workbook.sheet_names:
            return pd.read_excel(path, sheet_name=sheet_name)
    return pd.DataFrame()


def read_workbook(path: Path) -> dict[str, pd.DataFrame]:
    workbook = pd.ExcelFile(path)
    return {
        SHEET_REQUIREMENTS: _read_first_existing_sheet(path, workbook, [SHEET_REQUIREMENTS]),
        SHEET_ONBOARD: _read_first_existing_sheet(path, workbook, SHEET_ONBOARD_CANDIDATES),
        "面试记录表": _read_first_existing_sheet(path, workbook, SHEET_INTERVIEW_CANDIDATES),
    }


def clean_requirements(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    numeric_cols = [
        "招聘优先级",
        "需求数量",
        "（待）入职人数",
        "剩余待招",
        "推荐简历数",
        "平均分",
        "招聘周期（天）",
    ]
    for col in numeric_cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    for col in ["需求数量", "（待）入职人数", "剩余待招", "推荐简历数", "平均分", "招聘周期（天）"]:
        if col in df.columns:
            df[col] = df[col].fillna(0)
    for col in ["项目", "业务负责人", "招聘负责人", "岗位", "Base地", "招聘状态", "阶段", "备注"]:
        if col in df.columns:
            df[col] = df[col].fillna("未填写").astype(str)
    for col in ["需求提出日期", "需求完成日期"]:
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors="coerce")
    return df


def clean_onboard(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    rename_map = {
        "人员姓名": "候选人姓名",
        "办公地点": "Base地",
        "岗位名称": "拟定岗位",
        "招聘渠道": "渠道来源",
        "用工类型": "聘用类型",
        "是否已入职": "入职状态",
        "入职日期": "拟入职日期",
        "招聘负责人": "HR",
    }
    for source, target in rename_map.items():
        if source in df.columns and target not in df.columns:
            df[target] = df[source]
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
    interview = sheets["面试记录表"].copy()
    return requirements, onboard, interview
