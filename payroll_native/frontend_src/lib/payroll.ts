export type Rules = {
  year: number;
  month: number;
  receiving_sku_rate: number;
  receiving_item_rate: number;
  picking_item_rate: number;
  picking_order_rate: number;
  fault_free_quota: number;
  fault_order_amount: number;
  rating_baseline: number;
  rating_cap_score: number;
  rating_cap_award: number;
  rating_step_award: number;
  rating_low_threshold: number;
  rating_low_penalty: number;
  manager_score_component_points: number;
  manager_score_floor: number;
  manager_score_target: number;
  manager_overdue_component_points: number;
  manager_overdue_full_score_count: number;
  manager_management_component_points: number;
  manager_gmv_component_points: number;
  manager_gmv_min_achievement_percent: number;
  manager_overdue_zero_score_count: number;
};

export type EmployeeRow = {
  employee_code: string;
  city: string;
  store: string;
  name: string;
  role: string;
  status: string;
  expected_days: number | null;
  attendance_days: number | null;
  coefficient_override: number | null;
  base_salary: number | null;
  subsidy: number | null;
  performance_base: number | null;
  include: string;
  note: string;
};

export type PickerRow = {
  employee_code: string;
  name: string;
  receiving_sku: number | null;
  receiving_items: number | null;
  picking_items: number | null;
  picking_orders: number | null;
  wrong_orders: number | null;
  second_delivery_orders: number | null;
  excellent_award: number | null;
};

export type ManagerRow = {
  employee_code: string;
  name: string;
  store_score: number | null;
  overdue_orders: number | null;
  management_percent: number | null;
  gmv_target: number | null;
  gmv_actual: number | null;
};

export type RatingRow = {
  store: string;
  display_score: number | null;
  incentive_override: number | null;
};

export type AdjustmentRow = {
  employee_code: string;
  name: string;
  adjustment_amount: number | null;
  reason: string;
  actual_paid: number | null;
};

export type PayrollMonthData = {
  month: string;
  rules: Rules;
  employees: EmployeeRow[];
  picker_rows: PickerRow[];
  manager_rows: ManagerRow[];
  rating_rows: RatingRow[];
  adjustment_rows: AdjustmentRow[];
};

export type AuditIssue = {
  level: "错误" | "提醒";
  employee: string;
  item: string;
  detail: string;
};

export type PayrollDetail = EmployeeRow & {
  employee_key: string;
  attendance_coefficient: number;
  coefficient_base: number;
  attendance_pay: number;
  receiving_performance: number;
  picking_performance: number;
  fault_adjustment: number;
  excellent_award: number;
  picker_commission: number;
  manager_score_points: number;
  manager_overdue_points: number;
  manager_management_points: number;
  manager_gmv_points: number;
  manager_total_points: number;
  manager_performance: number;
  manager_commission: number;
  rating_incentive: number;
  adjustment_amount: number;
  adjustment_reason: string;
  gross_salary: number;
  actual_paid: number | null;
  payment_difference: number | null;
};

const n = (value: unknown) => {
  const number = typeof value === "number" ? value : Number(value ?? 0);
  return Number.isFinite(number) ? number : 0;
};

export const money = (value: number) =>
  Math.round((value + Number.EPSILON) * 100) / 100;

export const employeeKey = (row: { employee_code?: string; name?: string }) =>
  row.employee_code?.trim() || `NAME:${row.name?.trim() || ""}`;

const isManager = (role: string) => role.includes("店长");
const isPicker = (role: string) => role.includes("拣货") || role.includes("店员");

function indexRows<T extends { employee_code: string; name: string }>(rows: T[]) {
  const map = new Map<string, T>();
  const duplicates: string[] = [];
  rows.forEach((row) => {
    const key = employeeKey(row);
    if (!key || key === "NAME:") return;
    if (map.has(key)) duplicates.push(key);
    map.set(key, row);
  });
  return { map, duplicates };
}

export function calculateRatingIncentive(row: RatingRow | undefined, rules: Rules) {
  if (!row) return 0;
  if (row.incentive_override !== null && row.incentive_override !== undefined)
    return money(n(row.incentive_override));
  if (row.display_score === null || row.display_score === undefined) return 0;
  const score = Math.round((n(row.display_score) + Number.EPSILON) * 10) / 10;
  if (score >= rules.rating_cap_score) return money(rules.rating_cap_award);
  if (score < rules.rating_low_threshold) return money(rules.rating_low_penalty);
  return money(((score - rules.rating_baseline) / 0.1) * rules.rating_step_award);
}

export function calculatePayroll(data: PayrollMonthData) {
  const pickerIndex = indexRows(data.picker_rows);
  const managerIndex = indexRows(data.manager_rows);
  const adjustmentIndex = indexRows(data.adjustment_rows);
  const ratingMap = new Map<string, RatingRow>();
  const issues: AuditIssue[] = [];

  data.rating_rows.forEach((row) => {
    if (!row.store.trim()) return;
    if (ratingMap.has(row.store.trim())) {
      issues.push({ level: "错误", employee: "", item: "门店评分重复", detail: row.store });
    }
    ratingMap.set(row.store.trim(), row);
  });

  const seen = new Set<string>();
  const rows: PayrollDetail[] = [];

  data.employees.forEach((employee) => {
    if (!["是", "Y", "y", "1", "True", "true"].includes(String(employee.include || "是"))) return;
    const name = employee.name.trim();
    if (!name) return;
    const key = employeeKey(employee);
    if (seen.has(key)) {
      issues.push({ level: "错误", employee: name, item: "员工重复", detail: key });
      return;
    }
    seen.add(key);

    if (key.startsWith("NAME:")) {
      issues.push({ level: "提醒", employee: name, item: "缺少员工编号", detail: "当前按姓名匹配，重名时会失败" });
    }

    let coefficient = 1;
    if (employee.coefficient_override !== null && employee.coefficient_override !== undefined) {
      coefficient = Math.max(0, Math.min(1, n(employee.coefficient_override)));
      if (n(employee.coefficient_override) !== coefficient) {
        issues.push({ level: "错误", employee: name, item: "出勤系数", detail: "覆盖值已限制在0至1之间" });
      }
    } else if (n(employee.expected_days) > 0) {
      coefficient = Math.max(0, Math.min(1, n(employee.attendance_days) / n(employee.expected_days)));
      if (n(employee.attendance_days) > n(employee.expected_days)) {
        issues.push({ level: "提醒", employee: name, item: "实际出勤高于应出勤", detail: "出勤系数已按1封顶" });
      }
    } else {
      coefficient = 0;
      issues.push({ level: "错误", employee: name, item: "出勤系数", detail: "应出勤天数缺失或不大于0" });
    }

    if (employee.base_salary === null || employee.base_salary === undefined) {
      issues.push({ level: "错误", employee: name, item: "基本工资", detail: "未填写，当前按0计算" });
    }

    let receivingPerformance = 0;
    let pickingPerformance = 0;
    let faultAdjustment = 0;
    let excellentAward = 0;
    let pickerCommission = 0;
    if (isPicker(employee.role)) {
      const picker = pickerIndex.map.get(key);
      if (!picker) {
        issues.push({ level: "错误", employee: name, item: "拣货绩效数据", detail: "未找到，提成按0计算" });
      } else {
        receivingPerformance = money(n(picker.receiving_sku) * data.rules.receiving_sku_rate + n(picker.receiving_items) * data.rules.receiving_item_rate);
        pickingPerformance = money(n(picker.picking_orders) * data.rules.picking_order_rate + n(picker.picking_items) * data.rules.picking_item_rate);
        faultAdjustment = money((data.rules.fault_free_quota - n(picker.wrong_orders) - n(picker.second_delivery_orders)) * data.rules.fault_order_amount);
        excellentAward = money(n(picker.excellent_award));
        pickerCommission = money(receivingPerformance + pickingPerformance + faultAdjustment + excellentAward);
      }
    }

    let managerScorePoints = 0;
    let managerOverduePoints = 0;
    let managerManagementPoints = 0;
    let managerGmvPoints = 0;
    let managerTotalPoints = 0;
    let managerPerformance = 0;
    const managerCommission = 0;
    let ratingIncentive = 0;
    if (isManager(employee.role)) {
      const manager = managerIndex.map.get(key);
      if (!manager) {
        issues.push({ level: "错误", employee: name, item: "店长绩效数据", detail: "未找到，月度绩效按0计算" });
      } else {
        const span = data.rules.manager_score_target - data.rules.manager_score_floor;
        if (manager.store_score === null || manager.store_score === undefined) {
          issues.push({ level: "错误", employee: name, item: "店铺综合评分", detail: "未填写，当前按0计算" });
        }
        const scoreFactor = span > 0 && manager.store_score !== null && manager.store_score !== undefined
          ? Math.max(0, Math.min(1, (n(manager.store_score) - data.rules.manager_score_floor) / span))
          : 0;
        managerScorePoints = money(scoreFactor * data.rules.manager_score_component_points);
        const overdueFullScoreCount = data.rules.manager_overdue_full_score_count ?? 5;
        const overdueLimit = data.rules.manager_overdue_zero_score_count;
        const overdueOrders = n(manager.overdue_orders);
        if (manager.overdue_orders === null || manager.overdue_orders === undefined) {
          issues.push({ level: "错误", employee: name, item: "超七天未收货 SKU", detail: "未填写，当前按0计算" });
        }
        const overdueFactor = manager.overdue_orders !== null && manager.overdue_orders !== undefined && overdueLimit > overdueFullScoreCount
          ? overdueOrders <= overdueFullScoreCount
            ? 1
            : overdueOrders >= overdueLimit
              ? 0
              : (overdueLimit - overdueOrders) / (overdueLimit - overdueFullScoreCount)
          : 0;
        managerOverduePoints = money(overdueFactor * data.rules.manager_overdue_component_points);
        if (manager.management_percent === null || manager.management_percent === undefined) {
          issues.push({ level: "错误", employee: name, item: "门店管理评分", detail: "督导评分未填写，当前按0计算" });
        }
        managerManagementPoints = manager.management_percent === null || manager.management_percent === undefined
          ? 0
          : money(Math.max(0, Math.min(100, n(manager.management_percent))) / 100 * data.rules.manager_management_component_points);
        if (n(manager.gmv_target) > 0 && manager.gmv_actual !== null && manager.gmv_actual !== undefined) {
          const gmvAchievement = n(manager.gmv_actual) / n(manager.gmv_target);
          const minimumAchievement = (data.rules.manager_gmv_min_achievement_percent ?? 70) / 100;
          managerGmvPoints = gmvAchievement < minimumAchievement
            ? 0
            : money(Math.min(1, gmvAchievement) * data.rules.manager_gmv_component_points);
        } else if (n(manager.gmv_target) <= 0) {
          issues.push({ level: "错误", employee: name, item: "GMV绩效", detail: "GMV目标未填写，当前按0计算" });
        } else {
          issues.push({ level: "错误", employee: name, item: "GMV绩效", detail: "GMV实际未填写，当前按0计算" });
        }
        managerTotalPoints = money(managerScorePoints + managerOverduePoints + managerManagementPoints + managerGmvPoints);
        if (employee.performance_base === null || employee.performance_base === undefined) {
          issues.push({ level: "错误", employee: name, item: "绩效基数", detail: "请在员工与考勤中填写，当前按0计算" });
        }
        managerPerformance = money(n(employee.performance_base) * managerTotalPoints / 100);
      }
      const rating = ratingMap.get(employee.store.trim());
      if (!rating || rating.display_score === null || rating.display_score === undefined) {
        issues.push({ level: "提醒", employee: name, item: "门店评分提成", detail: "未找到门店评分，按0计算" });
      }
      ratingIncentive = calculateRatingIncentive(rating, data.rules);
    }

    const adjustment = adjustmentIndex.map.get(key);
    const adjustmentAmount = money(n(adjustment?.adjustment_amount));
    const coefficientBase = money(n(employee.base_salary) + n(employee.subsidy) + managerPerformance);
    const attendancePay = money(coefficient * coefficientBase);
    const grossSalary = money(attendancePay + pickerCommission + managerCommission + ratingIncentive + adjustmentAmount);
    const actualPaid = adjustment?.actual_paid === null || adjustment?.actual_paid === undefined ? null : money(n(adjustment.actual_paid));
    const paymentDifference = actualPaid === null ? null : money(actualPaid - grossSalary);

    rows.push({
      ...employee,
      employee_key: key,
      attendance_coefficient: coefficient,
      coefficient_base: coefficientBase,
      attendance_pay: attendancePay,
      receiving_performance: receivingPerformance,
      picking_performance: pickingPerformance,
      fault_adjustment: faultAdjustment,
      excellent_award: excellentAward,
      picker_commission: pickerCommission,
      manager_score_points: managerScorePoints,
      manager_overdue_points: managerOverduePoints,
      manager_management_points: managerManagementPoints,
      manager_gmv_points: managerGmvPoints,
      manager_total_points: managerTotalPoints,
      manager_performance: managerPerformance,
      manager_commission: managerCommission,
      rating_incentive: ratingIncentive,
      adjustment_amount: adjustmentAmount,
      adjustment_reason: adjustment?.reason || employee.note || "",
      gross_salary: grossSalary,
      actual_paid: actualPaid,
      payment_difference: paymentDifference,
    });
  });

  [...pickerIndex.duplicates, ...managerIndex.duplicates, ...adjustmentIndex.duplicates].forEach((key) => {
    issues.push({ level: "错误", employee: "", item: "匹配键重复", detail: key });
  });

  const storeMap = new Map<string, { city: string; store: string; headcount: number; gross_salary: number }>();
  rows.forEach((row) => {
    const key = `${row.city}\u0000${row.store}`;
    const current = storeMap.get(key) || { city: row.city, store: row.store, headcount: 0, gross_salary: 0 };
    current.headcount += 1;
    current.gross_salary = money(current.gross_salary + row.gross_salary);
    storeMap.set(key, current);
  });

  return {
    rows,
    issues,
    storeSummary: [...storeMap.values()].sort((a, b) => `${a.city}${a.store}`.localeCompare(`${b.city}${b.store}`, "zh-CN")),
    totals: {
      headcount: rows.length,
      gross_salary: money(rows.reduce((sum, row) => sum + row.gross_salary, 0)),
      error_count: issues.filter((issue) => issue.level === "错误").length,
      warning_count: issues.filter((issue) => issue.level === "提醒").length,
    },
  };
}

export function cloneMonthData(data: PayrollMonthData, month: string): PayrollMonthData {
  const cloned = JSON.parse(JSON.stringify(data)) as PayrollMonthData;
  cloned.month = month;
  const [year, monthNumber] = month.split("-").map(Number);
  cloned.rules.year = year;
  cloned.rules.month = monthNumber;
  cloned.employees.forEach((row) => {
    row.attendance_days = null;
    row.coefficient_override = null;
  });
  cloned.picker_rows.forEach((row) => {
    row.receiving_sku = 0;
    row.receiving_items = 0;
    row.picking_items = 0;
    row.picking_orders = 0;
    row.wrong_orders = 0;
    row.second_delivery_orders = 0;
    row.excellent_award = 0;
  });
  cloned.manager_rows.forEach((row) => {
    row.store_score = null;
    row.overdue_orders = null;
    row.management_percent = null;
    row.gmv_target = null;
    row.gmv_actual = null;
  });
  cloned.rating_rows.forEach((row) => {
    row.display_score = null;
    row.incentive_override = null;
  });
  cloned.adjustment_rows = [];
  return cloned;
}

function findEmployeeSource<T extends { employee_code: string; name: string }>(
  rows: T[],
  current: EmployeeRow,
  previous?: EmployeeRow,
) {
  const codes = [current.employee_code, previous?.employee_code].filter(Boolean);
  const names = [current.name, previous?.name].filter(Boolean);
  return rows.find((row) => codes.includes(row.employee_code)) || rows.find((row) => names.includes(row.name));
}

/**
 * Treats employees as the master list while retaining already-entered monthly
 * performance values. This is intentionally pure so both UI edits and Excel
 * imports use the same linkage rules.
 */
export function reconcileEmployeeSources(
  previousData: PayrollMonthData,
  employees: EmployeeRow[],
): PayrollMonthData {
  const previousByCode = new Map(previousData.employees.filter((row) => row.employee_code).map((row) => [row.employee_code, row]));
  const previousByName = new Map(previousData.employees.filter((row) => row.name).map((row) => [row.name, row]));

  const previousFor = (employee: EmployeeRow, index: number) =>
    previousByCode.get(employee.employee_code) ||
    previousByName.get(employee.name) ||
    (previousData.employees.length === employees.length ? previousData.employees[index] : undefined);

  const picker_rows = employees.flatMap((employee, index): PickerRow[] => {
    if (!employee.name.trim() || !isPicker(employee.role)) return [];
    const existing = findEmployeeSource(previousData.picker_rows, employee, previousFor(employee, index));
    return [{
      employee_code: employee.employee_code,
      name: employee.name,
      receiving_sku: existing?.receiving_sku ?? 0,
      receiving_items: existing?.receiving_items ?? 0,
      picking_items: existing?.picking_items ?? 0,
      picking_orders: existing?.picking_orders ?? 0,
      wrong_orders: existing?.wrong_orders ?? 0,
      second_delivery_orders: existing?.second_delivery_orders ?? 0,
      excellent_award: existing?.excellent_award ?? 0,
    }];
  });

  const manager_rows = employees.flatMap((employee, index): ManagerRow[] => {
    if (!employee.name.trim() || !isManager(employee.role)) return [];
    const existing = findEmployeeSource(previousData.manager_rows, employee, previousFor(employee, index));
    return [{
      employee_code: employee.employee_code,
      name: employee.name,
      store_score: existing?.store_score ?? null,
      overdue_orders: existing?.overdue_orders ?? null,
      management_percent: existing?.management_percent ?? null,
      gmv_target: existing?.gmv_target ?? null,
      gmv_actual: existing?.gmv_actual ?? null,
    }];
  });

  const currentStores = [...new Set(employees.map((row) => row.store.trim()).filter(Boolean))];
  const rating_rows = currentStores.map((store) => {
    const existing = previousData.rating_rows.find((row) => row.store === store);
    return existing || { store, display_score: null, incentive_override: null };
  });

  const adjustment_rows = previousData.adjustment_rows.map((adjustment) => {
    const previousEmployee = previousData.employees.find((employee) =>
      (adjustment.employee_code && employee.employee_code === adjustment.employee_code) ||
      (!adjustment.employee_code && employee.name === adjustment.name),
    );
    if (!previousEmployee) return adjustment;
    const previousIndex = previousData.employees.indexOf(previousEmployee);
    const currentEmployee = employees.find((employee) =>
      (previousEmployee.employee_code && employee.employee_code === previousEmployee.employee_code) ||
      employee.name === previousEmployee.name,
    ) || (previousData.employees.length === employees.length ? employees[previousIndex] : undefined);
    return currentEmployee ? { ...adjustment, employee_code: currentEmployee.employee_code, name: currentEmployee.name } : adjustment;
  });

  return { ...previousData, employees, picker_rows, manager_rows, rating_rows, adjustment_rows };
}

/**
 * Repairs persisted or imported month data so every derived source list is
 * rebuilt from the employee master while retaining entered monthly values.
 */
export function normalizeMonthData(data: PayrollMonthData): PayrollMonthData {
  const legacyManagerBases = new Map(data.manager_rows.map((row) => [employeeKey(row), (row as ManagerRow & { performance_base?: number | null }).performance_base]));
  const normalizedRules = {
    ...data.rules,
    manager_overdue_full_score_count: data.rules.manager_overdue_full_score_count ?? 5,
    manager_gmv_min_achievement_percent: data.rules.manager_gmv_min_achievement_percent ?? 70,
  };
  const employees = data.employees.map((employee) => ({
    ...employee,
    performance_base: employee.performance_base ?? legacyManagerBases.get(employeeKey(employee)) ?? (isManager(employee.role) ? 1000 : null),
  }));
  return reconcileEmployeeSources({ ...data, rules: normalizedRules, employees }, employees);
}
