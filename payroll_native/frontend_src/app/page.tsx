"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { payrollFetch as fetch, subscribeCloudRefresh } from "../bridge";
import { readCloudSnapshot, type MonthItem } from "../lib/cloud";
import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Copy,
  Download,
  FileSpreadsheet,
  FileSliders,
  Gauge,
  LogOut,
  Menu,
  Plus,
  RefreshCw,
  Save,
  Search,
  Settings2,
  Store,
  Trash2,
  Upload,
  UserRoundCog,
  UsersRound,
  X,
} from "lucide-react";
import {
  calculateRatingIncentive,
  calculatePayroll,
  employeeKey,
  normalizeMonthData,
  reconcileEmployeeSources,
  type AdjustmentRow,
  type EmployeeRow,
  type ManagerRow,
  type PayrollMonthData,
  type PickerRow,
  type RatingRow,
  type Rules,
} from "../lib/payroll";
import { exportPayrollWorkbook, readPayrollWorkbook, type WorkbookImport } from "../lib/excel";

type View = "summary" | "employees" | "pickers" | "managers" | "ratings" | "adjustments" | "rules";
type Field<T> = {
  key: keyof T;
  label: string;
  type?: "text" | "number" | "select";
  width?: number;
  options?: string[];
  step?: string;
};
type CalculatedField<T> = {
  label: string;
  width?: number;
  value: (row: T) => string | number;
};

const navItems: { id: View; label: string; helper: string; icon: typeof BarChart3 }[] = [
  { id: "summary", label: "薪资汇总", helper: "自动核算", icon: BarChart3 },
  { id: "employees", label: "员工与考勤", helper: "人员、出勤、薪资标准", icon: UsersRound },
  { id: "pickers", label: "拣货绩效", helper: "收货、拣货、差错", icon: ClipboardCheck },
  { id: "managers", label: "店长绩效", helper: "评分、GMV、管理", icon: Gauge },
  { id: "ratings", label: "门店评分", helper: "评分提成", icon: Store },
  { id: "adjustments", label: "人工调整", helper: "奖惩、实发核对", icon: UserRoundCog },
  { id: "rules", label: "计算参数", helper: "单价与计分规则", icon: Settings2 },
];

const employeeFields: Field<EmployeeRow>[] = [
  { key: "employee_code", label: "员工编号", width: 130 },
  { key: "name", label: "姓名", width: 100 },
  { key: "city", label: "城市", width: 90 },
  { key: "store", label: "门店", width: 220 },
  { key: "role", label: "岗位", type: "select", options: ["店长", "门店拣货员", "店员"], width: 140 },
  { key: "status", label: "状态", type: "select", options: ["在职", "离职"], width: 90 },
  { key: "expected_days", label: "应出勤", type: "number", width: 90 },
  { key: "attendance_days", label: "实际出勤", type: "number", step: "0.5", width: 100 },
  { key: "coefficient_override", label: "系数覆盖", type: "number", step: "0.01", width: 100 },
  { key: "base_salary", label: "基本工资", type: "number", step: "0.01", width: 110 },
  { key: "subsidy", label: "补贴", type: "number", step: "0.01", width: 100 },
  { key: "performance_base", label: "绩效基数（店长）", type: "number", step: "0.01", width: 140 },
  { key: "include", label: "计薪", type: "select", options: ["是", "否"], width: 80 },
  { key: "note", label: "备注", width: 180 },
];

const pickerFields: Field<PickerRow>[] = [
  { key: "employee_code", label: "员工编号", width: 130 },
  { key: "name", label: "姓名", width: 100 },
  { key: "receiving_sku", label: "收货SKU", type: "number", width: 100 },
  { key: "receiving_items", label: "收货件数", type: "number", width: 100 },
  { key: "picking_items", label: "拣货件数", type: "number", width: 100 },
  { key: "picking_orders", label: "拣货单数", type: "number", width: 100 },
  { key: "wrong_orders", label: "错单数", type: "number", width: 90 },
  { key: "second_delivery_orders", label: "二次配送", type: "number", width: 100 },
  { key: "excellent_award", label: "优秀奖励", type: "number", step: "0.01", width: 110 },
];

const ratingFields: Field<RatingRow>[] = [
  { key: "store", label: "门店", width: 280 },
  { key: "display_score", label: "展示评分", type: "number", step: "0.1", width: 120 },
  { key: "incentive_override", label: "提成覆盖", type: "number", step: "0.01", width: 140 },
];

const adjustmentFields: Field<AdjustmentRow>[] = [
  { key: "employee_code", label: "员工编号", width: 130 },
  { key: "name", label: "姓名", width: 100 },
  { key: "adjustment_amount", label: "调整金额", type: "number", step: "0.01", width: 120 },
  { key: "reason", label: "调整原因", width: 260 },
  { key: "actual_paid", label: "实际发放", type: "number", step: "0.01", width: 130 },
];

const ruleGroups: { title: string; description: string; items: { key: keyof Rules; label: string; suffix?: string; step?: string }[] }[] = [
  {
    title: "拣货绩效单价",
    description: "根据每月业务量自动计算收货、拣货和差错绩效。",
    items: [
      { key: "receiving_sku_rate", label: "收货 SKU 单价", suffix: "元" },
      { key: "receiving_item_rate", label: "收货件数单价", suffix: "元" },
      { key: "picking_item_rate", label: "拣货件数单价", suffix: "元" },
      { key: "picking_order_rate", label: "拣货单数单价", suffix: "元" },
      { key: "fault_free_quota", label: "免扣差错额度", suffix: "单" },
      { key: "fault_order_amount", label: "每单差错金额", suffix: "元" },
    ],
  },
  {
    title: "门店评分提成",
    description: "评分按 0.1 分步进计算，达到封顶评分后采用封顶金额。",
    items: [
      { key: "rating_baseline", label: "评分基准", suffix: "分", step: "0.1" },
      { key: "rating_cap_score", label: "封顶评分", suffix: "分", step: "0.1" },
      { key: "rating_cap_award", label: "封顶奖励", suffix: "元" },
      { key: "rating_step_award", label: "每 0.1 分奖励", suffix: "元" },
      { key: "rating_low_threshold", label: "低分阈值", suffix: "分", step: "0.1" },
      { key: "rating_low_penalty", label: "低分扣款", suffix: "元" },
    ],
  },
  {
    title: "店长绩效权重",
    description: "四个维度合计 100 分，并按绩效基数折算。",
    items: [
      { key: "manager_score_component_points", label: "门店评分权重", suffix: "分" },
      { key: "manager_score_floor", label: "门店评分起点", suffix: "分", step: "0.1" },
      { key: "manager_score_target", label: "门店评分目标", suffix: "分", step: "0.1" },
      { key: "manager_overdue_component_points", label: "超时单权重", suffix: "分" },
      { key: "manager_overdue_full_score_count", label: "未收货满分上限", suffix: "SKU" },
      { key: "manager_overdue_zero_score_count", label: "未收货零分起点", suffix: "SKU" },
      { key: "manager_management_component_points", label: "管理达成权重", suffix: "分" },
      { key: "manager_gmv_component_points", label: "GMV 权重", suffix: "分" },
      { key: "manager_gmv_min_achievement_percent", label: "GMV 最低计分达成率", suffix: "%" },
    ],
  },
];

const emptyEmployee = (): EmployeeRow => ({ employee_code: "", city: "", store: "", name: "", role: "门店拣货员", status: "在职", expected_days: null, attendance_days: null, coefficient_override: null, base_salary: null, subsidy: 0, performance_base: null, include: "是", note: "" });
const emptyRating = (): RatingRow => ({ store: "", display_score: null, incentive_override: null });
const emptyAdjustment = (): AdjustmentRow => ({ employee_code: "", name: "", adjustment_amount: 0, reason: "", actual_paid: null });

const currency = (value: number) => new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY", minimumFractionDigits: 2 }).format(value);
const percent = (value: number) => new Intl.NumberFormat("zh-CN", { style: "percent", maximumFractionDigits: 2 }).format(value);
const monthLabel = (month: string) => {
  const [year, value] = month.split("-");
  return `${year}年${Number(value)}月`;
};

function EditableTable<T extends object>({
  rows,
  fields,
  onChange,
  onAdd,
  canDelete = true,
  lockedFields = [],
  title,
  description,
  calculatedFields = [],
  getStore,
}: {
  rows: T[];
  fields: Field<T>[];
  onChange: (rows: T[]) => void;
  onAdd?: () => T;
  canDelete?: boolean;
  lockedFields?: (keyof T)[];
  title: string;
  description: string;
  calculatedFields?: CalculatedField<T>[];
  getStore?: (row: T) => string;
}) {
  const [search, setSearch] = useState("");
  const [storeFilter, setStoreFilter] = useState("");
  const storeOptions = getStore ? [...new Set(rows.map(getStore).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-CN")) : [];
  const visible = rows.map((row, index) => ({ row, index })).filter(({ row }) =>
    (!search || JSON.stringify(row).toLowerCase().includes(search.toLowerCase())) &&
    (!storeFilter || getStore?.(row) === storeFilter));

  const updateCell = (index: number, field: Field<T>, raw: string) => {
    const next = [...rows];
    const value = field.type === "number" ? (raw === "" ? null : Number(raw)) : raw;
    next[index] = { ...next[index], [field.key]: value };
    onChange(next);
  };

  const remove = (index: number) => onChange(rows.filter((_, rowIndex) => rowIndex !== index));

  return (
    <section className="panel data-panel">
      <div className="section-head">
        <div>
          <p className="eyebrow">月度数据源</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="table-actions">
          {getStore && <label className="store-filter"><Store size={16} /><select aria-label="门店筛选" value={storeFilter} onChange={(event) => setStoreFilter(event.target.value)}><option value="">全部门店</option>{storeOptions.map((store) => <option key={store} value={store}>{store}</option>)}</select></label>}
          <label className="search-box">
            <Search size={16} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索当前表" />
          </label>
          {onAdd && <button className="secondary-button" onClick={() => onChange([...rows, onAdd()])}>
            <Plus size={16} />新增一行
          </button>}
        </div>
      </div>
      <div className="table-scroll">
        <table className="edit-table">
          <thead>
            <tr>
              <th className="row-number">#</th>
              {fields.map((field) => <th key={String(field.key)} style={{ minWidth: field.width }}>{field.label}</th>)}
              {calculatedFields.map((field) => <th className="calculated-header" key={field.label} style={{ minWidth: field.width }}>{field.label}</th>)}
              {canDelete && <th className="delete-cell">操作</th>}
            </tr>
          </thead>
          <tbody>
            {visible.map(({ row, index }) => (
              <tr key={index}>
                <td className="row-number">{index + 1}</td>
                {fields.map((field) => {
                  const value = row[field.key] as string | number | null | undefined;
                  return (
                    <td key={String(field.key)}>
                      {field.type === "select" ? (
                        <select value={String(value ?? "")} onChange={(event) => updateCell(index, field, event.target.value)}>
                          {(field.options || []).map((option) => <option key={option}>{option}</option>)}
                        </select>
                      ) : (
                        <input
                          type={field.type || "text"}
                          value={value ?? ""}
                          step={field.step || (field.type === "number" ? "1" : undefined)}
                          readOnly={lockedFields.includes(field.key)}
                          onChange={(event) => updateCell(index, field, event.target.value)}
                        />
                      )}
                    </td>
                  );
                })}
                {calculatedFields.map((field) => <td className="calculated-cell" key={field.label}>{field.value(row)}</td>)}
                {canDelete && <td className="delete-cell"><button title="删除此行" onClick={() => remove(index)}><Trash2 size={16} /></button></td>}
              </tr>
            ))}
          </tbody>
        </table>
        {visible.length === 0 && <div className="empty-state">没有匹配的数据</div>}
      </div>
      <div className="table-footer"><span>共 {rows.length} 行</span><span>修改后请点击右上角“保存本月”</span></div>
    </section>
  );
}

function ManagerPerformanceTable({ data, onChange, getStore }: { data: PayrollMonthData; onChange: (rows: ManagerRow[]) => void; getStore: (row: ManagerRow) => string }) {
  const [search, setSearch] = useState("");
  const [storeFilter, setStoreFilter] = useState("");
  const result = useMemo(() => calculatePayroll(data), [data]);
  const details = useMemo(() => new Map(result.rows.map((row) => [row.employee_key, row])), [result.rows]);
  const employees = useMemo(() => new Map(data.employees.map((row) => [employeeKey(row), row])), [data.employees]);
  const stores = [...new Set(data.manager_rows.map(getStore).filter(Boolean))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  const visible = data.manager_rows.map((row, index) => ({ row, index })).filter(({ row }) =>
    (!search || JSON.stringify(row).toLowerCase().includes(search.toLowerCase())) &&
    (!storeFilter || getStore(row) === storeFilter));

  const updateNumber = (index: number, key: keyof ManagerRow, raw: string) => {
    const next = [...data.manager_rows];
    next[index] = { ...next[index], [key]: raw === "" ? null : Number(raw) };
    onChange(next);
  };
  const input = (index: number, key: keyof ManagerRow, value: number | null | undefined, step = "0.01") =>
    <input type="number" step={step} value={value ?? ""} onChange={(event) => updateNumber(index, key, event.target.value)} />;

  return <section className="panel data-panel">
    <div className="section-head">
      <div><p className="eyebrow">月度数据源</p><h2>店长绩效</h2><p>录入实际经营数据后，系统按 40% / 20% / 20% / 20% 的规则实时核算。绩效基数来自“员工与考勤”。</p></div>
      <div className="table-actions">
        <label className="store-filter"><Store size={16} /><select aria-label="门店筛选" value={storeFilter} onChange={(event) => setStoreFilter(event.target.value)}><option value="">全部门店</option>{stores.map((store) => <option key={store} value={store}>{store}</option>)}</select></label>
        <label className="search-box"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索当前表" /></label>
      </div>
    </div>
    <div className="table-scroll">
      <table className="edit-table grouped-table manager-performance-table">
        <thead>
          <tr className="group-head">
            <th className="row-number" rowSpan={2}>#</th><th rowSpan={2}>员工编号</th><th rowSpan={2}>姓名</th><th rowSpan={2}>门店</th>
            <th colSpan={4}>店铺综合评分</th><th colSpan={3}>超七天未收货 SKU</th><th colSpan={2}>门店管理指标</th><th colSpan={3}>月度 GMV</th><th colSpan={1}>合计</th>
            <th rowSpan={2}>绩效系数</th><th rowSpan={2}>绩效基数</th><th className="result-head" rowSpan={2}>店长绩效得分</th>
          </tr>
          <tr className="sub-head"><th>标准</th><th>实际得分</th><th>评分</th><th>得分</th><th>实际未收货</th><th>实际得分</th><th>得分</th><th>打分</th><th>得分</th><th>目标</th><th>实际</th><th>得分</th><th>合计</th></tr>
        </thead>
        <tbody>{visible.map(({ row, index }) => {
          const detail = details.get(employeeKey(row));
          const employee = employees.get(employeeKey(row));
          const scoreRatio = data.rules.manager_score_component_points ? (detail?.manager_score_points || 0) / data.rules.manager_score_component_points : 0;
          const overdueRatio = data.rules.manager_overdue_component_points ? (detail?.manager_overdue_points || 0) / data.rules.manager_overdue_component_points : 0;
          return <tr key={employeeKey(row)}>
            <td className="row-number">{index + 1}</td><td><input readOnly value={row.employee_code} /></td><td><input readOnly value={row.name} /></td><td className="store-name-cell">{getStore(row) || "—"}</td>
            <td className="calculated-cell">{data.rules.manager_score_target}</td><td>{input(index, "store_score", row.store_score)}</td><td className="calculated-cell">{percent(scoreRatio)}</td><td className="calculated-cell">{detail?.manager_score_points ?? 0}</td>
            <td>{input(index, "overdue_orders", row.overdue_orders, "1")}</td><td className="calculated-cell">{Math.round(overdueRatio * 100)}</td><td className="calculated-cell">{detail?.manager_overdue_points ?? 0}</td>
            <td>{input(index, "management_percent", row.management_percent)}</td><td className="calculated-cell">{detail?.manager_management_points ?? 0}</td>
            <td>{input(index, "gmv_target", row.gmv_target)}</td><td>{input(index, "gmv_actual", row.gmv_actual)}</td><td className="calculated-cell">{detail?.manager_gmv_points ?? 0}</td>
            <td className="calculated-cell total-score-cell">{detail?.manager_total_points ?? 0}</td><td className="calculated-cell">{((detail?.manager_total_points || 0) / 100).toFixed(2)}</td><td className="calculated-cell source-value-cell">{employee?.performance_base == null ? "未填写" : currency(employee.performance_base)}</td><td className="calculated-cell final-result-cell">{currency(detail?.manager_performance || 0)}</td>
          </tr>;
        })}</tbody>
      </table>
      {visible.length === 0 && <div className="empty-state">没有匹配的数据</div>}
    </div>
    <div className="table-footer"><span>共 {data.manager_rows.length} 行</span><span>录入数据后分项得分与绩效结果会实时重算</span></div>
  </section>;
}

function Summary({ data, onNavigate }: { data: PayrollMonthData; onNavigate: (view: View) => void }) {
  const result = useMemo(() => calculatePayroll(data), [data]);
  const [storeFilter, setStoreFilter] = useState("");
  const storeOptions = result.storeSummary.map((item) => item.store).filter((store, index, stores) => stores.indexOf(store) === index);
  const rows = storeFilter ? result.rows.filter((row) => row.store === storeFilter) : result.rows;
  const storeSummary = storeFilter ? result.storeSummary.filter((row) => row.store === storeFilter) : result.storeSummary;
  const visibleEmployees = new Set(rows.map((row) => row.name));
  const issues = storeFilter
    ? result.issues.filter((issue) => visibleEmployees.has(issue.employee) || issue.detail === storeFilter)
    : result.issues;
  const totals = {
    headcount: rows.length,
    gross_salary: rows.reduce((sum, row) => sum + row.gross_salary, 0),
    error_count: issues.filter((issue) => issue.level === "错误").length,
    warning_count: issues.filter((issue) => issue.level === "提醒").length,
  };
  const exportCsv = () => {
    const columns: [string, keyof (typeof result.rows)[number]][] = [
      ["员工编号", "employee_code"], ["城市", "city"], ["门店", "store"], ["姓名", "name"], ["岗位", "role"],
      ["出勤系数", "attendance_coefficient"], ["计薪基数", "coefficient_base"], ["系数后工资", "attendance_pay"],
      ["拣货提成", "picker_commission"], ["店长月度绩效", "manager_performance"],
      ["评分提成", "rating_incentive"], ["其他调整", "adjustment_amount"], ["综合工资", "gross_salary"],
      ["实际发放", "actual_paid"], ["发放差异", "payment_difference"], ["备注", "adjustment_reason"],
    ];
    const quote = (value: unknown) => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const csv = [columns.map(([label]) => quote(label)).join(","), ...rows.map((row) => columns.map(([, key]) => quote(row[key])).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `优沃森薪资汇总_${data.month}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="summary-stack">
      <section className="welcome-card">
        <div>
          <p className="eyebrow">实时核算结果</p>
          <h2>{monthLabel(data.month)}薪资概览</h2>
          <p>综合工资 = 出勤系数 ×（基本薪资 + 补贴 + 月度绩效）+ 提成 + 评分提成 + 其他调整。</p>
        </div>
        <div className="welcome-actions">
          <label className="store-filter summary-store-filter"><Store size={16} /><select aria-label="门店筛选" value={storeFilter} onChange={(event) => setStoreFilter(event.target.value)}><option value="">全部门店</option>{storeOptions.map((store) => <option key={store} value={store}>{store}</option>)}</select></label>
          <button className="export-button" onClick={exportCsv}><Download size={17} />导出薪资明细</button>
        </div>
      </section>

      <section className="metrics-grid">
        <article className="metric-card featured"><span className="metric-icon"><CircleDollarSign size={20} /></span><p>本月综合工资合计</p><strong>{currency(totals.gross_salary)}</strong><small>根据当前筛选实时计算</small></article>
        <article className="metric-card"><span className="metric-icon"><UsersRound size={20} /></span><p>计薪人数</p><strong>{totals.headcount}<em> 人</em></strong><small>仅统计“计薪=是”</small></article>
        <article className="metric-card"><span className="metric-icon"><Store size={20} /></span><p>涉及门店</p><strong>{storeSummary.length}<em> 家</em></strong><small>覆盖 {new Set(rows.map((row) => row.city)).size} 个城市</small></article>
        <article className={`metric-card ${totals.error_count ? "attention" : ""}`}><span className="metric-icon"><AlertTriangle size={20} /></span><p>核对事项</p><strong>{totals.error_count + totals.warning_count}<em> 项</em></strong><small>{totals.error_count} 个错误 · {totals.warning_count} 个提醒</small></article>
      </section>

      <div className="summary-grid">
        <section className="panel">
          <div className="section-head compact"><div><p className="eyebrow">门店汇总</p><h3>各门店薪资</h3></div></div>
          <div className="store-list">
            {storeSummary.map((store, index) => {
              const max = Math.max(...storeSummary.map((item) => item.gross_salary), 1);
              return <div className="store-row" key={`${store.city}-${store.store}`}><span className="store-rank">{String(index + 1).padStart(2, "0")}</span><div className="store-main"><div><strong>{store.store.replace("优沃森超市", "")}</strong><small>{store.city} · {store.headcount} 人</small></div><div className="bar-track"><span style={{ width: `${Math.max(4, store.gross_salary / max * 100)}%` }} /></div></div><b>{currency(store.gross_salary)}</b></div>;
            })}
          </div>
        </section>

        <section className="panel audit-panel">
          <div className="section-head compact"><div><p className="eyebrow">自动检查</p><h3>核算提醒</h3></div><span className="count-badge">{issues.length}</span></div>
          <div className="audit-list">
            {issues.length === 0 ? <div className="all-good"><CheckCircle2 size={24} /><strong>全部检查通过</strong><span>未发现需要处理的问题</span></div> : issues.slice(0, 8).map((issue, index) => <button key={`${issue.employee}-${issue.item}-${index}`} onClick={() => onNavigate(issue.item.includes("评分") ? "ratings" : issue.item.includes("绩效") || issue.item.includes("GMV") ? "managers" : "employees")}><span className={issue.level === "错误" ? "issue-error" : "issue-warning"}>{issue.level}</span><div><strong>{issue.employee || issue.item}</strong><p>{issue.employee ? `${issue.item}：` : ""}{issue.detail}</p></div><ChevronRight size={16} /></button>)}
          </div>
          {issues.length > 8 && <p className="more-issues">另有 {issues.length - 8} 项，请在数据源中核对</p>}
        </section>
      </div>

      <section className="panel payroll-panel">
        <div className="section-head">
          <div><p className="eyebrow">计算明细</p><h3>员工薪资汇总</h3><p>店长月度绩效计入出勤系数的核算基数；提成、评分提成和其他调整计入系数外。</p></div>
        </div>
        <div className="table-scroll">
          <table className="payroll-table">
            <thead><tr><th>员工</th><th>门店 / 岗位</th><th className="number">出勤系数</th><th className="number">计薪基数</th><th className="number">系数后工资</th><th className="number">提成</th><th className="number">评分提成</th><th className="number">其他</th><th className="number total-column">综合工资</th></tr></thead>
            <tbody>{rows.map((row) => <tr key={row.employee_key}><td><strong>{row.name}</strong><small>{row.employee_code || "未填编号"}</small></td><td><strong>{row.store.replace("优沃森超市", "")}</strong><small>{row.role}</small></td><td className="number">{percent(row.attendance_coefficient)}</td><td className="number">{currency(row.coefficient_base)}</td><td className="number">{currency(row.attendance_pay)}</td><td className="number">{currency(row.picker_commission + row.manager_commission)}</td><td className="number">{currency(row.rating_incentive)}</td><td className={`number ${row.adjustment_amount < 0 ? "negative" : ""}`}>{currency(row.adjustment_amount)}</td><td className="number total-column"><strong>{currency(row.gross_salary)}</strong></td></tr>)}</tbody>
            <tfoot><tr><td colSpan={8}>合计 · {totals.headcount} 人</td><td className="number total-column"><strong>{currency(totals.gross_salary)}</strong></td></tr></tfoot>
          </table>
        </div>
      </section>
    </div>
  );
}

function RulesEditor({ rules, onChange }: { rules: Rules; onChange: (rules: Rules) => void }) {
  return <div className="rules-stack"><section className="panel rules-intro"><div><p className="eyebrow">核算规则</p><h2>计算参数</h2><p>这些参数会影响整个薪资结果。修改后系统会立即重算，请在保存前检查薪资汇总。</p></div><FileSliders size={38} /></section>{ruleGroups.map((group) => <section className="panel rule-group" key={group.title}><div className="section-head"><div><h3>{group.title}</h3><p>{group.description}</p></div></div><div className="rule-grid">{group.items.map((item) => <label key={item.key}><span>{item.label}</span><div><input type="number" step={item.step || "0.01"} value={rules[item.key]} onChange={(event) => onChange({ ...rules, [item.key]: Number(event.target.value) })} /><b>{item.suffix}</b></div></label>)}</div></section>)}</div>;
}

export default function Home() {
  const [data, setData] = useState<PayrollMonthData | null>(null);
  const [months, setMonths] = useState<MonthItem[]>([]);
  const [view, setView] = useState<View>("summary");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cloneOpen, setCloneOpen] = useState(false);
  const [targetMonth, setTargetMonth] = useState("");
  const [importing, setImporting] = useState(false);
  const [importPreview, setImportPreview] = useState<(WorkbookImport & { fileName: string }) | null>(null);
  const importInput = useRef<HTMLInputElement>(null);
  const cloudState = useRef({ dirty, saving, loading, month: data?.month });
  cloudState.current = { dirty, saving, loading, month: data?.month };

  const refreshCloud = async (preferredMonth?: string, automatic = false) => {
    const state = cloudState.current;
    if (state.saving || state.loading) {
      setNotice("云端月份已变化，请等待当前操作完成后点击“重新加载云端数据”。");
      return;
    }
    if (state.dirty) {
      if (automatic) {
        setNotice("云端月份已变化。当前有未保存的修改，请保存后点击“重新加载云端数据”。");
        return;
      }
      if (!window.confirm("当前修改尚未保存，重新加载会丢弃这些修改，是否继续？")) return;
    }
    setLoading(true); setError("");
    try {
      const snapshot = await readCloudSnapshot(fetch, preferredMonth || state.month);
      setMonths(snapshot.months); setData(snapshot.data); setDirty(false); setImportPreview(null);
      setNotice(`已更新云端月份列表，当前为${monthLabel(snapshot.data.month)}，共${snapshot.data.employees.length}名员工`);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "刷新云端数据失败"); }
    finally { setLoading(false); }
  };

  useEffect(() => {
    readCloudSnapshot(fetch).then((snapshot) => {
      setMonths(snapshot.months);
      setData(snapshot.data);
    }).catch((reason) => setError(reason instanceof Error ? reason.message : "读取数据失败")).finally(() => setLoading(false));
    return subscribeCloudRefresh((month) => { void refreshCloud(month, true); });
  }, []);

  const update = (next: PayrollMonthData) => { setData(next); setDirty(true); setNotice(""); };

  const exportTemplate = async () => {
    if (!data) return;
    setError("");
    try {
      await exportPayrollWorkbook(data);
      setNotice(`已导出${monthLabel(data.month)} Excel 数据模板`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "模板导出失败");
    }
  };

  const chooseImport = async (file: File | undefined) => {
    if (!data || !file) return;
    setImporting(true); setError("");
    try {
      const preview = await readPayrollWorkbook(file, data);
      if (preview.importedKeys.some((key) => key !== "rules")) {
        const linkageBase: PayrollMonthData = {
          ...data,
          rules: preview.nextData.rules,
          picker_rows: preview.nextData.picker_rows,
          manager_rows: preview.nextData.manager_rows,
          rating_rows: preview.nextData.rating_rows,
          adjustment_rows: preview.nextData.adjustment_rows,
        };
        preview.nextData = reconcileEmployeeSources(linkageBase, preview.nextData.employees);
      }
      setImportPreview({ ...preview, fileName: file.name });
    } catch (reason) {
      setError(reason instanceof Error ? `导入文件无法读取：${reason.message}` : "导入文件无法读取");
    } finally {
      setImporting(false);
      if (importInput.current) importInput.current.value = "";
    }
  };

  const applyImport = () => {
    if (!importPreview || importPreview.errors.length) return;
    update(importPreview.nextData);
    const total = importPreview.sheetCounts.reduce((sum, item) => sum + item.count, 0);
    setNotice(`已导入 ${importPreview.sheetCounts.length} 个工作表、${total} 行数据；请检查汇总后保存本月`);
    setImportPreview(null);
  };

  const save = async () => {
    if (!data) return;
    setSaving(true); setError("");
    try {
      const response = await fetch(`/api/months/${data.month}`, { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
      const payload = await response.json() as { error?: string; data: PayrollMonthData };
      if (!response.ok) throw new Error(payload.error || "保存失败");
      setData(normalizeMonthData(payload.data)); setDirty(false); setNotice(`${monthLabel(data.month)}已保存`);
      setMonths((current) => current.map((item) => item.month === data.month ? { ...item, updatedAt: new Date().toISOString() } : item));
    } catch (reason) { setError(reason instanceof Error ? reason.message : "保存失败"); }
    finally { setSaving(false); }
  };

  const selectMonth = async (month: string, force = false) => {
    if (!data || (!force && month === data.month)) return;
    if (dirty && !window.confirm("当前修改尚未保存，确定切换月份吗？")) return;
    setLoading(true); setError("");
    try {
      const response = await fetch(`/api/months/${month}`); const payload = await response.json() as { error?: string; data: PayrollMonthData };
      if (!response.ok) throw new Error(payload.error || "读取月份失败");
      setData(normalizeMonthData(payload.data)); setDirty(false); setView("summary");
    } catch (reason) { setError(reason instanceof Error ? reason.message : "读取月份失败"); }
    finally { setLoading(false); }
  };

  const cloneMonth = async () => {
    if (!data || !targetMonth) { setError("请选择要创建的新月份"); return; }
    setSaving(true); setError("");
    try {
      const response = await fetch("/api/months/clone", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ sourceMonth: data.month, targetMonth }) });
      const payload = await response.json() as { error?: string; data: PayrollMonthData };
      if (!response.ok) throw new Error(payload.error || "复制月份失败");
      setData(normalizeMonthData(payload.data)); setMonths((current) => [{ month: targetMonth, status: "draft", updatedAt: new Date().toISOString() }, ...current]); setDirty(false); setCloneOpen(false); setTargetMonth(""); setView("employees"); setNotice(`已创建${monthLabel(targetMonth)}，请录入本月出勤和绩效数据`);
    } catch (reason) { setError(reason instanceof Error ? reason.message : "复制月份失败"); }
    finally { setSaving(false); }
  };

  if (loading && !data) return <main className="loading-screen"><div className="brand-mark">优</div><RefreshCw className="spin" size={22} /><p>正在加载薪资数据…</p></main>;
  if (!data) return <main className="loading-screen error-screen"><AlertTriangle size={30} /><h1>暂时无法打开薪资中心</h1><p>{error || "请稍后重试"}</p><button className="primary-button" onClick={() => location.reload()}>重新加载</button></main>;

  const selectedNav = navItems.find((item) => item.id === view)!;
  const go = (next: View) => { setView(next); setMobileOpen(false); };
  const employeeFor = (row: { employee_code?: string; name?: string }) => data.employees.find((employee) =>
    (row.employee_code && employee.employee_code === row.employee_code) || (!row.employee_code && employee.name === row.name));
  const personStore = (row: { employee_code?: string; name?: string }) => employeeFor(row)?.store || "";
  const payrollResult = calculatePayroll(data);

  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="brand"><div className="brand-mark">优</div><div><strong>优沃森</strong><span>薪资核算中心</span></div><button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={20} /></button></div>
        <nav>{navItems.map((item) => { const Icon = item.icon; return <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => go(item.id)}><Icon size={19} /><span><strong>{item.label}</strong><small>{item.helper}</small></span>{view === item.id && <ChevronRight size={16} />}</button>; })}</nav>
        <div className="sidebar-help"><CalendarDays size={20} /><strong>每月使用流程</strong><p>复制上月 → 维护数据源 → 查看核算提醒 → 保存并导出</p></div>
      </aside>
      {mobileOpen && <button aria-label="关闭菜单" className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}

      <section className="workspace">
        <header className="topbar">
          <div className="page-title"><button className="menu-button" onClick={() => setMobileOpen(true)}><Menu size={20} /></button><div><span>{selectedNav.helper}</span><h1>{selectedNav.label}</h1></div></div>
          <div className="top-actions">
            <label className="month-select"><CalendarDays size={17} /><select disabled={loading || saving} value={data.month} onChange={(event) => selectMonth(event.target.value)}>{months.map((item) => <option key={item.month} value={item.month}>{monthLabel(item.month)}</option>)}</select></label>
            <button className="secondary-button copy-button" onClick={() => setCloneOpen(!cloneOpen)}><Copy size={16} /><span>复制到新月份</span></button>
            <button className="primary-button" disabled={loading || saving || !dirty} onClick={save}>{saving ? <RefreshCw className="spin" size={16} /> : <Save size={16} />}<span>{saving ? "保存中" : dirty ? "保存本月" : "已保存"}</span></button>
            <button className="secondary-button" disabled={loading || saving} onClick={() => { void refreshCloud(); }} aria-label="重新加载云端数据" title="刷新全部月份及当前月份数据"><RefreshCw size={17} /><span>{loading ? "加载中" : "重新加载云端数据"}</span></button>
            <button className="icon-button logout-button" onClick={() => { void fetch("/api/auth/logout"); }} aria-label="锁定薪资中心" title="锁定薪资中心"><LogOut size={17} /></button>
          </div>
        </header>

        {cloneOpen && <div className="clone-bar"><div><strong>从 {monthLabel(data.month)} 复制基础资料</strong><span>保留员工和薪资标准，清空新月份的出勤、绩效与调整数据。</span></div><div><input type="month" value={targetMonth} onChange={(event) => setTargetMonth(event.target.value)} /><button className="primary-button" onClick={cloneMonth} disabled={saving}>创建月份</button><button className="icon-button" onClick={() => setCloneOpen(false)}><X size={18} /></button></div></div>}
        {(notice || error) && <div className={`toast ${error ? "error" : "success"}`}>{error ? <AlertTriangle size={17} /> : <CheckCircle2 size={17} />}<span>{error || notice}</span><button onClick={() => { setError(""); setNotice(""); }}><X size={16} /></button></div>}
        {loading && <div className="loading-line" />}

        <div className="content-area">
          {view !== "summary" && <section className="excel-tools">
            <div><span className="excel-icon"><FileSpreadsheet size={20} /></span><div><strong>Excel 批量维护</strong><p>下载包含全部数据源的模板，编辑后上传；导入前会先校验和预览。</p></div></div>
            <div>
              <button className="secondary-button" onClick={exportTemplate}><Download size={16} />导出 Excel 模板</button>
              <button className="secondary-button import-button" disabled={importing} onClick={() => importInput.current?.click()}>{importing ? <RefreshCw className="spin" size={16} /> : <Upload size={16} />}{importing ? "读取中" : "上传并导入"}</button>
              <input ref={importInput} className="hidden-file" type="file" accept=".xlsx,.xls" onChange={(event) => chooseImport(event.target.files?.[0])} />
            </div>
          </section>}
          {view === "summary" && <Summary data={data} onNavigate={go} />}
          {view === "employees" && <EditableTable title="员工与考勤" description="这是所有核算的主数据；修改编号、姓名、岗位或门店后，相关绩效表和门店评分会自动联动。" rows={data.employees} fields={employeeFields} getStore={(row) => row.store} onAdd={emptyEmployee} onChange={(employees) => update(reconcileEmployeeSources(data, employees))} />}
          {view === "pickers" && <EditableTable title="拣货绩效" description="名单自动取自“员工与考勤”中岗位为门店拣货员或店员的人员；最后一列实时显示拣货绩效核算结果。" rows={data.picker_rows} fields={pickerFields} getStore={personStore} calculatedFields={[{ label: "拣货绩效结果", width: 130, value: (row) => currency(payrollResult.rows.find((item) => item.employee_key === employeeKey(row))?.picker_commission || 0) }]} canDelete={false} lockedFields={["employee_code", "name"]} onChange={(picker_rows) => update({ ...data, picker_rows })} />}
          {view === "managers" && <ManagerPerformanceTable data={data} getStore={personStore} onChange={(manager_rows) => update({ ...data, manager_rows })} />}
          {view === "ratings" && <EditableTable title="门店评分" description="每家门店一行；新增“评分提成”列，按当前评分规则实时核算。" rows={data.rating_rows} fields={ratingFields} getStore={(row) => row.store} calculatedFields={[{ label: "评分提成", width: 120, value: (row) => currency(calculateRatingIncentive(row, data.rules)) }]} onAdd={emptyRating} onChange={(rating_rows) => update({ ...data, rating_rows })} />}
          {view === "adjustments" && <EditableTable title="人工调整" description="录入额外奖惩、调整原因和实际发放，用于最后核对；空白员工无需添加。" rows={data.adjustment_rows} fields={adjustmentFields} getStore={personStore} onAdd={emptyAdjustment} onChange={(adjustment_rows) => update({ ...data, adjustment_rows })} />}
          {view === "rules" && <RulesEditor rules={data.rules} onChange={(rules) => update({ ...data, rules })} />}
        </div>
      </section>
      {importPreview && <div className="modal-backdrop" role="presentation">
        <section className="import-modal" role="dialog" aria-modal="true" aria-labelledby="import-title">
          <div className="modal-head"><div><p className="eyebrow">导入前确认</p><h2 id="import-title">Excel 导入预览</h2><p>{importPreview.fileName}</p></div><button className="icon-button" onClick={() => setImportPreview(null)}><X size={18} /></button></div>
          <div className="import-body">
            <div className="sheet-summary">{importPreview.sheetCounts.map((item) => <div key={item.sheet}><span>{item.sheet}</span><strong>{item.count} 行</strong></div>)}</div>
            {importPreview.errors.length > 0 && <div className="import-message error"><strong><AlertTriangle size={17} />有 {importPreview.errors.length} 项必须修正</strong>{importPreview.errors.map((item) => <p key={item}>{item}</p>)}</div>}
            {importPreview.warnings.length > 0 && <div className="import-message warning"><strong><AlertTriangle size={17} />{importPreview.warnings.length} 项提醒</strong>{importPreview.warnings.slice(0, 8).map((item) => <p key={item}>{item}</p>)}{importPreview.warnings.length > 8 && <p>另有 {importPreview.warnings.length - 8} 项提醒</p>}</div>}
            {!importPreview.errors.length && <div className="linkage-message"><CheckCircle2 size={20} /><div><strong>文件可以导入</strong><p>员工主数据会自动联动对应绩效和门店评分。确认后仍需点击“保存本月”才会写入数据库。</p></div></div>}
          </div>
          <div className="modal-actions"><button className="secondary-button" onClick={() => setImportPreview(null)}>取消</button><button className="primary-button" disabled={importPreview.errors.length > 0} onClick={applyImport}>确认导入</button></div>
        </section>
      </div>}
    </main>
  );
}
