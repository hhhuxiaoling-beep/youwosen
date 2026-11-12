import type {
  AdjustmentRow,
  EmployeeRow,
  ManagerRow,
  PayrollMonthData,
  PickerRow,
  RatingRow,
  Rules,
} from "./payroll";

type ImportableKey = "employees" | "picker_rows" | "manager_rows" | "rating_rows" | "adjustment_rows" | "rules";
type Column<T> = { header: string; key: keyof T; kind?: "number"; required?: boolean };

export type WorkbookImport = {
  nextData: PayrollMonthData;
  importedKeys: ImportableKey[];
  sheetCounts: { sheet: string; count: number }[];
  errors: string[];
  warnings: string[];
};

const employeeColumns: Column<EmployeeRow>[] = [
  { header: "员工编号", key: "employee_code" }, { header: "城市", key: "city" }, { header: "门店", key: "store" },
  { header: "姓名", key: "name" }, { header: "岗位", key: "role" }, { header: "状态", key: "status" },
  { header: "应出勤天数", key: "expected_days", kind: "number" }, { header: "实际出勤天数", key: "attendance_days", kind: "number" },
  { header: "出勤系数覆盖", key: "coefficient_override", kind: "number" }, { header: "基本工资", key: "base_salary", kind: "number" },
  { header: "补贴", key: "subsidy", kind: "number" }, { header: "绩效基数（店长）", key: "performance_base", kind: "number" },
  { header: "是否计薪", key: "include" }, { header: "备注", key: "note" },
];

const pickerColumns: Column<PickerRow>[] = [
  { header: "员工编号", key: "employee_code" }, { header: "姓名", key: "name" },
  { header: "收货SKU", key: "receiving_sku", kind: "number" }, { header: "收货件数", key: "receiving_items", kind: "number" },
  { header: "拣货件数", key: "picking_items", kind: "number" }, { header: "拣货单数", key: "picking_orders", kind: "number" },
  { header: "错单数", key: "wrong_orders", kind: "number" }, { header: "二次配送单数", key: "second_delivery_orders", kind: "number" },
  { header: "优秀奖励", key: "excellent_award", kind: "number" },
];

const managerColumns: Column<ManagerRow>[] = [
  { header: "员工编号", key: "employee_code" }, { header: "姓名", key: "name" },
  { header: "门店得分", key: "store_score", kind: "number" }, { header: "超时单数", key: "overdue_orders", kind: "number" },
  { header: "督导评分", key: "management_percent", kind: "number" }, { header: "GMV目标", key: "gmv_target", kind: "number" },
  { header: "GMV实际", key: "gmv_actual", kind: "number" },
];

const ratingColumns: Column<RatingRow>[] = [
  { header: "门店", key: "store" }, { header: "展示评分", key: "display_score", kind: "number" },
  { header: "提成覆盖", key: "incentive_override", kind: "number" },
];

const adjustmentColumns: Column<AdjustmentRow>[] = [
  { header: "员工编号", key: "employee_code" }, { header: "姓名", key: "name" },
  { header: "调整金额", key: "adjustment_amount", kind: "number" }, { header: "调整原因", key: "reason" },
  { header: "实际发放", key: "actual_paid", kind: "number" },
];

const ruleLabels: { key: keyof Rules; label: string }[] = [
  { key: "year", label: "年份" }, { key: "month", label: "月份" },
  { key: "receiving_sku_rate", label: "收货SKU单价" }, { key: "receiving_item_rate", label: "收货件数单价" },
  { key: "picking_item_rate", label: "拣货件数单价" }, { key: "picking_order_rate", label: "拣货单数单价" },
  { key: "fault_free_quota", label: "免扣差错额度" }, { key: "fault_order_amount", label: "每单差错金额" },
  { key: "rating_baseline", label: "评分基准" }, { key: "rating_cap_score", label: "封顶评分" },
  { key: "rating_cap_award", label: "封顶奖励" }, { key: "rating_step_award", label: "每0.1分奖励" },
  { key: "rating_low_threshold", label: "低分阈值" }, { key: "rating_low_penalty", label: "低分扣款" },
  { key: "manager_score_component_points", label: "门店评分权重" }, { key: "manager_score_floor", label: "门店评分起点" },
  { key: "manager_score_target", label: "门店评分目标" }, { key: "manager_overdue_component_points", label: "超时单权重" },
  { key: "manager_overdue_full_score_count", label: "未收货满分上限" },
  { key: "manager_management_component_points", label: "管理达成权重" }, { key: "manager_gmv_component_points", label: "GMV权重" },
  { key: "manager_overdue_zero_score_count", label: "超时零分单数" },
  { key: "manager_gmv_min_achievement_percent", label: "GMV最低计分达成率%" },
];

function toChineseRows<T extends object>(rows: T[], columns: Column<T>[]) {
  return rows.map((row) => Object.fromEntries(columns.map((column) => [column.header, row[column.key] ?? ""])));
}

function parseRows<T extends object>(rawRows: Record<string, unknown>[], columns: Column<T>[]): T[] {
  return rawRows
    .filter((raw) => columns.some((column) => String(raw[column.header] ?? "").trim() !== ""))
    .map((raw) => Object.fromEntries(columns.map((column) => {
      const value = raw[column.header];
      if (column.kind === "number") {
        const text = String(value ?? "").trim();
        return [column.key, text === "" ? null : Number(text.replaceAll(",", ""))];
      }
      return [column.key, String(value ?? "").trim()];
    })) as T);
}

function validateEmployees(rows: EmployeeRow[], errors: string[], warnings: string[]) {
  const seen = new Set<string>();
  rows.forEach((row, index) => {
    if (!row.name) errors.push(`员工与考勤第 ${index + 2} 行缺少姓名`);
    const key = row.employee_code || `姓名:${row.name}`;
    if (seen.has(key)) errors.push(`员工与考勤存在重复人员：${key}`);
    seen.add(key);
    if (!row.employee_code && row.name) warnings.push(`${row.name} 未填写员工编号，将暂时按姓名关联`);
    if (row.name && !row.role.includes("店长") && !row.role.includes("拣货") && !row.role.includes("店员")) {
      warnings.push(`${row.name} 的岗位“${row.role || "空白"}”不会生成绩效行`);
    }
  });
}

export async function exportPayrollWorkbook(data: PayrollMonthData) {
  const XLSX = await import("xlsx");
  const workbook = XLSX.utils.book_new();
  const instructions = [
    ["优沃森月度薪资数据模板"],
    ["当前月份", data.month],
    ["使用方法", "按工作表维护数据；不要修改工作表名称和首行列名；导入时可只保留需要更新的工作表。"],
    ["关联规则", "员工与考勤是主数据。员工编号、姓名、岗位或门店变化会联动绩效和门店评分表。"],
    ["空白单元格", "数值留空会按空值导入；导入前系统会展示行数与校验问题，确认后才应用。"],
  ];
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet(instructions), "使用说明");

  const append = <T extends object>(name: string, rows: T[], columns: Column<T>[]) => {
    const sheet = XLSX.utils.json_to_sheet(toChineseRows(rows, columns), { header: columns.map((column) => column.header) });
    sheet["!cols"] = columns.map((column) => ({ wch: Math.max(12, column.header.length * 2 + 2) }));
    XLSX.utils.book_append_sheet(workbook, sheet, name);
  };
  append("员工与考勤", data.employees, employeeColumns);
  append("拣货绩效", data.picker_rows, pickerColumns);
  append("店长绩效", data.manager_rows, managerColumns);
  append("门店评分", data.rating_rows, ratingColumns);
  append("人工调整", data.adjustment_rows, adjustmentColumns);
  const ruleSheet = XLSX.utils.json_to_sheet(ruleLabels.map((item) => ({ 参数键: item.key, 参数名称: item.label, 数值: data.rules[item.key] })));
  ruleSheet["!cols"] = [{ wch: 38 }, { wch: 22 }, { wch: 14 }];
  XLSX.utils.book_append_sheet(workbook, ruleSheet, "计算参数");
  XLSX.writeFile(workbook, `优沃森薪资数据模板_${data.month}.xlsx`, { compression: true });
}

export async function readPayrollWorkbook(file: File, current: PayrollMonthData): Promise<WorkbookImport> {
  const XLSX = await import("xlsx");
  const workbook = XLSX.read(await file.arrayBuffer(), { type: "array", cellDates: false });
  const nextData = JSON.parse(JSON.stringify(current)) as PayrollMonthData;
  const importedKeys: ImportableKey[] = [];
  const sheetCounts: { sheet: string; count: number }[] = [];
  const errors: string[] = [];
  const warnings: string[] = [];

  const read = <T extends object>(sheetName: string, key: ImportableKey, columns: Column<T>[]) => {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) return undefined;
    const grid = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, defval: "", raw: false });
    const headers = new Set((grid[0] || []).map((value) => String(value).trim()));
    const missing = columns.filter((column) => column.required !== false && !headers.has(column.header));
    if (missing.length) errors.push(`${sheetName}缺少列：${missing.map((column) => column.header).join("、")}`);
    const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "", raw: false });
    raw.forEach((row, rowIndex) => columns.filter((column) => column.kind === "number").forEach((column) => {
      const text = String(row[column.header] ?? "").trim();
      if (text && !Number.isFinite(Number(text.replaceAll(",", "")))) {
        errors.push(`${sheetName}第 ${rowIndex + 2} 行“${column.header}”不是有效数字`);
      }
    }));
    const rows = parseRows(raw, columns);
    importedKeys.push(key);
    sheetCounts.push({ sheet: sheetName, count: rows.length });
    return rows;
  };

  const employees = read("员工与考勤", "employees", employeeColumns);
  if (employees) { nextData.employees = employees; validateEmployees(employees, errors, warnings); }
  const pickers = read("拣货绩效", "picker_rows", pickerColumns);
  if (pickers) nextData.picker_rows = pickers;
  const managers = read("店长绩效", "manager_rows", managerColumns);
  if (managers) nextData.manager_rows = managers;
  const ratings = read("门店评分", "rating_rows", ratingColumns);
  if (ratings) nextData.rating_rows = ratings;
  const adjustments = read("人工调整", "adjustment_rows", adjustmentColumns);
  if (adjustments) nextData.adjustment_rows = adjustments;

  const employeeKeys = new Set(nextData.employees.flatMap((row) => [row.employee_code && `C:${row.employee_code}`, row.name && `N:${row.name}`].filter(Boolean)));
  const warnUnmatched = (sheet: string, rows: { employee_code: string; name: string }[]) => rows.forEach((row) => {
    if (!employeeKeys.has(`C:${row.employee_code}`) && !employeeKeys.has(`N:${row.name}`)) {
      warnings.push(`${sheet}中的“${row.name || row.employee_code || "空白人员"}”不在员工主数据中，将不会生成关联记录`);
    }
  });
  if (pickers) warnUnmatched("拣货绩效", pickers);
  if (managers) warnUnmatched("店长绩效", managers);
  if (adjustments) warnUnmatched("人工调整", adjustments);

  const ruleSheet = workbook.Sheets["计算参数"];
  if (ruleSheet) {
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ruleSheet, { defval: "", raw: false });
    const rules = { ...current.rules };
    rows.forEach((row, index) => {
      const key = String(row["参数键"] || "") as keyof Rules;
      if (!ruleLabels.some((item) => item.key === key)) return;
      const value = Number(String(row["数值"] ?? "").replaceAll(",", ""));
      if (Number.isFinite(value)) rules[key] = value;
      else warnings.push(`计算参数第 ${index + 2} 行数值无效，已保留原值`);
    });
    nextData.rules = rules;
    importedKeys.push("rules");
    sheetCounts.push({ sheet: "计算参数", count: rows.length });
  }

  if (importedKeys.length === 0) errors.push("没有找到可导入的工作表，请使用系统导出的模板");
  const knownSheets = new Set(["使用说明", "员工与考勤", "拣货绩效", "店长绩效", "门店评分", "人工调整", "计算参数"]);
  workbook.SheetNames.filter((name) => !knownSheets.has(name)).forEach((name) => warnings.push(`工作表“${name}”不会被导入`));
  return { nextData, importedKeys, sheetCounts, errors, warnings };
}
