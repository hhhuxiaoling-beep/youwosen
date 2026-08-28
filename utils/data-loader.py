from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, quote, urlparse
from urllib.request import Request, urlopen

import pandas as pd


SHEET_REQUIREMENTS = "优沃森需求明细&岗位JD"
SHEET_ONBOARD = "待入职表-优沃森"
SHEET_ONBOARD_CANDIDATES = ["待入职表-优沃森", "优沃森待入职表"]
SHEET_INTERVIEW_CANDIDATES = ["面试记录表-优沃森", "面试记录表"]
FEISHU_API_BASE = "https://open.feishu.cn/open-apis"
FEISHU_LOCAL_TZ = "Asia/Shanghai"


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


def normalize_columns(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df.columns = [re.sub(r"\s+", "", str(col).replace("\u3000", " ")).strip() for col in df.columns]
    return df


def copy_column_if_present(df: pd.DataFrame, target: str, candidates: list[str]) -> pd.DataFrame:
    if target in df.columns:
        return df
    for candidate in candidates:
        if candidate in df.columns:
            df[target] = df[candidate]
            return df
    return df


def read_workbook(path: Path) -> dict[str, pd.DataFrame]:
    workbook = pd.ExcelFile(path)
    return {
        SHEET_REQUIREMENTS: _read_first_existing_sheet(path, workbook, [SHEET_REQUIREMENTS]),
        SHEET_ONBOARD: _read_first_existing_sheet(path, workbook, SHEET_ONBOARD_CANDIDATES),
        "面试记录表": _read_first_existing_sheet(path, workbook, SHEET_INTERVIEW_CANDIDATES),
    }


def clean_requirements(df: pd.DataFrame) -> pd.DataFrame:
    df = normalize_columns(df)
    rename_map = {
        "Base": "Base地",
        "base": "Base地",
        "城市": "Base地",
        "需求人数": "需求数量",
        "招聘人数": "需求数量",
        "HC": "需求数量",
        "已/待入职人数": "（待）入职人数",
        "已待入职人数": "（待）入职人数",
        "已入职+待入职": "（待）入职人数",
        "待招人数": "剩余待招",
        "缺口人数": "剩余待招",
        "招聘进度": "招聘状态",
        "状态": "招聘状态",
        "优先级": "招聘优先级",
        "岗位优先级": "招聘优先级",
        "简历推荐数": "推荐简历数",
        "推荐数量": "推荐简历数",
        "推荐人数": "推荐简历数",
    }
    for source, target in rename_map.items():
        if source in df.columns and target not in df.columns:
            df[target] = df[source]
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
            df[col] = df[col].fillna("未填写").astype(str).str.strip()
    for col in ["需求提出日期", "需求完成日期"]:
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors="coerce")
    return df


def normalize_onboard_status(value: Any, unchecked_status: str = "待入职") -> str:
    if isinstance(value, bool):
        return "入职" if value else unchecked_status
    if value is None or pd.isna(value):
        return "未填写"
    text = str(value).strip().replace(" ", "")
    if not text or text.lower() in {"nan", "none", "null"}:
        return "未填写"
    if "放弃" in text:
        return "放弃入职"
    if any(keyword in text for keyword in ["终止", "取消", "淘汰", "爽约"]):
        return "终止"
    if text in {"入职", "已入职", "是", "已到岗", "到岗", "在职", "true", "True", "TRUE", "1", "✅", "✓", "✔", "☑"} or "已入职" in text:
        return "入职"
    if text in {"待入职", "未入职", "否", "待到岗", "未到岗", "false", "False", "FALSE", "0", "□", "☐"} or "待入职" in text:
        return unchecked_status
    if "延期" in text:
        return "放弃入职"
    if "到期" in text or "还有" in text:
        return "待入职"
    return str(value).strip()


def distance_based_onboard_status(value: Any) -> str:
    if value is None or pd.isna(value):
        return "待入职"
    text = str(value).strip().replace(" ", "")
    if not text or text.lower() in {"nan", "none", "null"}:
        return "待入职"
    if "已延期" in text or "延期" in text:
        return "放弃入职"
    if "还有" in text or "到期" in text:
        return "待入职"
    return normalize_onboard_status(value)


def derive_onboard_status(row: pd.Series) -> str:
    distance_status = distance_based_onboard_status(row.get("距离入职日"))
    raw_status = row.get("入职状态")
    normalized_status = normalize_onboard_status(raw_status, unchecked_status=distance_status)
    if normalized_status == "未填写":
        return distance_status
    return normalized_status


def clean_onboard(df: pd.DataFrame) -> pd.DataFrame:
    df = normalize_columns(df)
    rename_map = {
        "人员姓名": "候选人姓名",
        "姓名": "候选人姓名",
        "候选人": "候选人姓名",
        "办公地点": "Base地",
        "Base": "Base地",
        "base": "Base地",
        "城市": "Base地",
        "岗位名称": "拟定岗位",
        "岗位": "拟定岗位",
        "入职岗位": "拟定岗位",
        "职位名称": "拟定岗位",
        "招聘渠道": "渠道来源",
        "用工类型": "聘用类型",
        "是否已入职": "入职状态",
        "是否入职": "入职状态",
        "当前状态": "入职状态",
        "状态": "入职状态",
        "入职日期": "拟入职日期",
        "预计入职日期": "拟入职日期",
        "计划入职日期": "拟入职日期",
        "入职时间": "拟入职日期",
        "招聘负责人": "HR",
    }
    for source, target in rename_map.items():
        if source in df.columns and target not in df.columns:
            df[target] = df[source]
    df = copy_column_if_present(
        df,
        "入职状态",
        [
            "入职状态",
            "是否已入职",
            "是否入职",
            "当前状态",
            "状态",
            "入职情况",
            "到岗状态",
            "是否到岗",
            "已入职",
        ],
    )
    df = copy_column_if_present(
        df,
        "距离入职日",
        [
            "距离入职日",
            "距离入职时间",
            "距离到岗日",
            "距离到岗时间",
        ],
    )
    df = copy_column_if_present(
        df,
        "拟入职日期",
        [
            "拟入职日期",
            "入职日期",
            "预计入职日期",
            "计划入职日期",
            "入职时间",
            "到岗日期",
            "预计到岗日期",
            "计划到岗日期",
        ],
    )
    if "入职状态" not in df.columns:
        status_candidates = [
            col
            for col in df.columns
            if ("入职" in col or "到岗" in col)
            and any(keyword in col for keyword in ["状态", "是否", "情况"])
            and not any(keyword in col for keyword in ["日期", "时间", "距离", "用品", "原因"])
        ]
        if status_candidates:
            df["入职状态"] = df[status_candidates[0]]
    if "拟入职日期" not in df.columns:
        date_candidates = [
            col
            for col in df.columns
            if ("入职" in col or "到岗" in col)
            and any(keyword in col for keyword in ["日期", "时间"])
            and not any(keyword in col for keyword in ["距离", "用品"])
        ]
        if date_candidates:
            df["拟入职日期"] = df[date_candidates[0]]
    if "入职状态" in df.columns:
        df["入职状态"] = df.apply(derive_onboard_status, axis=1)
    elif "距离入职日" in df.columns:
        df["入职状态"] = df["距离入职日"].apply(distance_based_onboard_status)
    for col in ["HR", "候选人姓名", "Base地", "拟定岗位", "汇报对象", "渠道来源", "聘用类型", "入职状态"]:
        if col in df.columns:
            df[col] = df[col].fillna("未填写").astype(str).str.strip()
    if "拟入职日期" in df.columns:
        df["拟入职日期"] = pd.to_datetime(df["拟入职日期"], errors="coerce")
    return df


def _request_json(url: str, method: str = "GET", token: str | None = None, payload: dict[str, Any] | None = None) -> dict[str, Any]:
    data = json.dumps(payload).encode("utf-8") if payload is not None else None
    headers = {"Content-Type": "application/json; charset=utf-8"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    request = Request(url, data=data, headers=headers, method=method)
    try:
        with urlopen(request, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
    except HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        try:
            detail = json.loads(body)
            body = f"code={detail.get('code')}, msg={detail.get('msg')}"
        except json.JSONDecodeError:
            body = body[:500] if body else "empty response body"
        raise RuntimeError(f"Feishu HTTP {exc.code} {exc.reason}: {body}") from exc
    except URLError as exc:
        raise RuntimeError(f"Feishu request failed: {exc.reason}") from exc
    if result.get("code", 0) != 0:
        raise RuntimeError(f"Feishu API error {result.get('code')}: {result.get('msg')}")
    return result


def get_feishu_tenant_access_token(app_id: str, app_secret: str) -> str:
    result = _request_json(
        f"{FEISHU_API_BASE}/auth/v3/tenant_access_token/internal",
        method="POST",
        payload={"app_id": app_id, "app_secret": app_secret},
    )
    token = result.get("tenant_access_token") or result.get("data", {}).get("tenant_access_token")
    if not token:
        raise RuntimeError("Feishu tenant_access_token not found in response")
    return token


def _parse_feishu_link(link: str, token: str) -> dict[str, str | None]:
    parsed = urlparse(link)
    path_parts = [part for part in parsed.path.split("/") if part]
    query = parse_qs(parsed.query)
    table_id = query.get("table", [None])[0]
    view_id = query.get("view", [None])[0]
    app_token = None

    if len(path_parts) >= 2 and path_parts[0] == "base":
        app_token = path_parts[1]
    elif len(path_parts) >= 2 and path_parts[0] == "wiki":
        wiki_token = path_parts[1]
        quoted_token = quote(wiki_token)
        try:
            node = _request_json(f"{FEISHU_API_BASE}/wiki/v2/spaces/get_node?token={quoted_token}&obj_type=wiki", token=token)
        except RuntimeError:
            node = _request_json(f"{FEISHU_API_BASE}/wiki/v2/spaces/get_node?token={quoted_token}", token=token)
        app_token = node.get("data", {}).get("node", {}).get("obj_token")

    if not app_token:
        raise ValueError(f"Cannot parse Feishu app token from link: {link}")
    if not table_id:
        raise ValueError(f"Cannot parse Feishu table id from link: {link}")
    return {"app_token": app_token, "table_id": table_id, "view_id": view_id}


def _normalize_feishu_value(value: Any) -> Any:
    if isinstance(value, list):
        normalized = [_normalize_feishu_value(item) for item in value]
        normalized = [item for item in normalized if item not in (None, "")]
        return ", ".join(map(str, normalized)) if normalized else None
    if isinstance(value, dict):
        for key in ("checked", "text", "name", "zh_name", "en_name", "value", "email", "link"):
            if key in value and value[key] not in (None, ""):
                return _normalize_feishu_value(value[key])
        return ", ".join(f"{key}:{_normalize_feishu_value(val)}" for key, val in value.items() if val not in (None, ""))
    return value


def _feishu_records_to_dataframe(records: list[dict[str, Any]]) -> pd.DataFrame:
    rows = []
    for record in records:
        fields = record.get("fields", {})
        rows.append({key: _normalize_feishu_value(value) for key, value in fields.items()})
    return pd.DataFrame(rows)


def _fetch_feishu_records_page(info: dict[str, str | None], token: str, page_token: str = "", use_view: bool = False) -> dict[str, Any]:
    app_token = quote(str(info["app_token"]), safe="")
    table_id = quote(str(info["table_id"]), safe="")
    params = ["page_size=100"]
    if use_view and info["view_id"]:
        params.append(f"view_id={quote(str(info['view_id']))}")
    if page_token:
        params.append(f"page_token={quote(page_token)}")
    url = f"{FEISHU_API_BASE}/bitable/v1/apps/{app_token}/tables/{table_id}/records?{'&'.join(params)}"
    return _request_json(url, token=token)


def _list_feishu_records(link: str, token: str, use_view: bool = False) -> pd.DataFrame:
    info = _parse_feishu_link(link, token)
    page_token = ""
    records: list[dict[str, Any]] = []
    while True:
        try:
            result = _fetch_feishu_records_page(info, token, page_token, use_view)
        except RuntimeError as exc:
            if info["view_id"] and use_view and not page_token:
                use_view = False
                result = _fetch_feishu_records_page(info, token, page_token, use_view)
            else:
                raise exc
        data = result.get("data", {})
        records.extend(data.get("items", []))
        if not data.get("has_more"):
            break
        page_token = data.get("page_token", "")
        if not page_token:
            break
    return _feishu_records_to_dataframe(records)


def _coerce_possible_feishu_dates(df: pd.DataFrame) -> pd.DataFrame:
    df = normalize_columns(df)
    known_date_cols = ["需求提出日期", "需求完成日期", "OFFER时间", "入职日期", "拟入职日期", "预计入职日期", "计划入职日期", "入职时间"]
    fuzzy_date_cols = [
        col
        for col in df.columns
        if any(keyword in col for keyword in ["日期", "时间"])
        and not any(keyword in col for keyword in ["距离", "用品"])
    ]
    for col in list(dict.fromkeys(known_date_cols + fuzzy_date_cols)):
        if col not in df.columns:
            continue
        numeric_values = pd.to_numeric(df[col], errors="coerce")
        parsed = pd.to_datetime(df[col], errors="coerce")
        ms_mask = numeric_values.notna() & numeric_values.ge(1_000_000_000_000)
        second_mask = numeric_values.notna() & numeric_values.ge(1_000_000_000) & numeric_values.lt(1_000_000_000_000)
        if ms_mask.any():
            local_dates = (
                pd.to_datetime(numeric_values.loc[ms_mask], unit="ms", utc=True, errors="coerce")
                .dt.tz_convert(FEISHU_LOCAL_TZ)
                .dt.tz_localize(None)
            )
            parsed.loc[ms_mask] = local_dates
        if second_mask.any():
            local_dates = (
                pd.to_datetime(numeric_values.loc[second_mask], unit="s", utc=True, errors="coerce")
                .dt.tz_convert(FEISHU_LOCAL_TZ)
                .dt.tz_localize(None)
            )
            parsed.loc[second_mask] = local_dates
        df[col] = parsed
    return df


def load_feishu_table(link: str, app_id: str, app_secret: str) -> pd.DataFrame:
    token = get_feishu_tenant_access_token(app_id, app_secret)
    return _coerce_possible_feishu_dates(_list_feishu_records(link, token))


def load_feishu_data(
    requirements_link: str,
    onboard_link: str,
    requirements_app_id: str,
    requirements_app_secret: str,
    onboard_app_id: str | None = None,
    onboard_app_secret: str | None = None,
) -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    onboard_app_id = onboard_app_id or requirements_app_id
    onboard_app_secret = onboard_app_secret or requirements_app_secret
    requirements = clean_requirements(load_feishu_table(requirements_link, requirements_app_id, requirements_app_secret))
    onboard = clean_onboard(load_feishu_table(onboard_link, onboard_app_id, onboard_app_secret))
    return requirements, onboard, pd.DataFrame()


def load_data(path: Path) -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    sheets = read_workbook(path)
    requirements = clean_requirements(sheets[SHEET_REQUIREMENTS])
    onboard = clean_onboard(sheets[SHEET_ONBOARD])
    interview = sheets["面试记录表"].copy()
    return requirements, onboard, interview
