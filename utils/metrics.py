from __future__ import annotations

import pandas as pd


BUSINESS_OWNERS = ["吴双双", "张蓉蓉", "刘新风", "巢育敏"]
STATUS_ORDER = ["招聘进行中", "招聘完成", "招聘暂停"]
PRIORITY_ORDER = [0, 1, 2, 3, 4]


def int_sum(df: pd.DataFrame, col: str) -> int:
    if df.empty or col not in df.columns:
        return 0
    return int(pd.to_numeric(df[col], errors="coerce").fillna(0).sum())


def overview_metrics(requirements: pd.DataFrame, onboard: pd.DataFrame) -> dict[str, object]:
    demand = int_sum(requirements, "需求数量")
    hired_from_req = int_sum(requirements, "（待）入职人数")
    gap = int_sum(requirements, "剩余待招")
    joined = int((onboard["入职状态"] == "入职").sum()) if "入职状态" in onboard.columns else 0
    pending = int((onboard["入职状态"] == "待入职").sum()) if "入职状态" in onboard.columns else 0
    rate = hired_from_req / demand if demand else 0
    owners_df = requirements[requirements["业务负责人"].isin(BUSINESS_OWNERS)].copy()
    return {
        "demand": demand,
        "hired_from_req": hired_from_req,
        "gap": gap,
        "joined": joined,
        "pending": pending,
        "rate": rate,
        "owner_demand": int_sum(owners_df, "需求数量"),
        "owner_gap": int_sum(owners_df, "剩余待招"),
    }


def owner_requirements(requirements: pd.DataFrame) -> pd.DataFrame:
    return requirements[requirements["业务负责人"].isin(BUSINESS_OWNERS)].copy()


def other_requirements(requirements: pd.DataFrame) -> pd.DataFrame:
    return requirements[~requirements["业务负责人"].isin(BUSINESS_OWNERS)].copy()


def pending_onboard(onboard: pd.DataFrame) -> pd.DataFrame:
    if onboard.empty or "入职状态" not in onboard.columns:
        return pd.DataFrame()
    pending = onboard[onboard["入职状态"].eq("待入职")].copy()
    if pending.empty:
        return pending
    pending = pending.sort_values(["汇报对象", "拟定岗位", "拟入职日期"], ascending=[True, True, True], na_position="last")
    return pending


def running_priority(requirements: pd.DataFrame) -> pd.DataFrame:
    running = requirements[requirements["招聘状态"].eq("招聘进行中")].copy()
    if running.empty:
        return running
    running["优先级排序"] = running["招聘优先级"].fillna(99).astype(float)
    return running.sort_values(["优先级排序", "业务负责人", "剩余待招"], ascending=[True, True, False])


def priority_label(value) -> str:
    if pd.isna(value):
        return "未设"
    priority = int(float(value))
    return "P0 紧急" if priority == 0 else f"P{priority}"


def status_summary(df: pd.DataFrame) -> pd.DataFrame:
    if df.empty:
        return pd.DataFrame(columns=["招聘状态", "岗位数", "需求数量", "（待）入职人数", "剩余待招"])
    return (
        df.groupby("招聘状态", dropna=False)
        .agg(岗位数=("岗位", "count"), 需求数量=("需求数量", "sum"), **{"（待）入职人数": ("（待）入职人数", "sum"), "剩余待招": ("剩余待招", "sum")})
        .reset_index()
    )
