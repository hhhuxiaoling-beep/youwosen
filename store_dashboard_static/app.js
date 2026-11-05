const data = window.DASHBOARD_DATA;
const ALL_VALUE = "__all__";
let currentSelection = ALL_VALUE;
let currentPeriod = data.currentPeriodKey;
let periodMode = "week";
let customStart = shiftIso(data.dateMax, -6);
let customEnd = data.dateMax;

function shiftIso(value, days) {
  return new Date(Date.parse(`${value}T00:00:00Z`) + days * 86400000).toISOString().slice(0,10);
}

function dateText(value) {
  return `${Number(value.slice(5,7))}/${Number(value.slice(8,10))}`;
}

function customPeriodRow(store) {
  const rows = store.daily.filter(row=>row.isoDate>=customStart && row.isoDate<=customEnd);
  const days = rows.length;
  if (!days) throw new Error("所选日期无源数据");
  const total = key=>rows.reduce((n,row)=>n+row[key],0);
  const staff = total("staff")/days;
  const dailyOrders = total("orders")/days;
  const previousStart = shiftIso(customStart,-days);
  const previousEnd = shiftIso(customStart,-1);
  const priorRows = store.daily.filter(row=>row.isoDate>=previousStart && row.isoDate<=previousEnd);
  const previousDailyOrders = priorRows.length===days ? priorRows.reduce((n,row)=>n+row.orders,0)/days : null;
  return {period:currentPeriod,startDate:customStart,endDate:customEnd,days,periodOrders:total("orders"),dailyOrders,staff,staffEnd:rows.at(-1).staff,
    ordersPerPerson:staff ? dailyOrders/staff : null,laborDaily:total("laborDaily")/days,
    previousDailyOrders,wow:previousDailyOrders ? dailyOrders/previousDailyOrders-1 : null,
    comparison:priorRows.length===days ? `${dateText(previousStart)}—${dateText(previousEnd)}` : "源表缺少完整前一等长周期"};
}

function aggregatePeriods(key) {
  return data.stores[0][key].map((row,index)=>{
    const records=data.stores.map(store=>store[key][index]);
    const total=field=>records.reduce((n,item)=>n+(item[field]??0),0);
    const staff=total("staff"),dailyOrders=total("dailyOrders");
    const previousDailyOrders=row.previousDailyOrders===null ? null : total("previousDailyOrders");
    return {...row,staff,dailyOrders,staffEnd:total("staffEnd"),periodOrders:total("periodOrders"),
      laborDaily:total("laborDaily"),ordersPerPerson:staff ? dailyOrders/staff : null,previousDailyOrders,
      wow:previousDailyOrders ? dailyOrders/previousDailyOrders-1 : null};
  });
}

const fmt = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 1 });
const moneyFmt = new Intl.NumberFormat("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function fmtValue(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "暂无";
  return fmt.format(value);
}

function pct(value, digits = 1) {
  if (value === null || value === undefined) return "-";
  return `${(value * 100).toFixed(digits)}%`;
}

function signedPct(value) {
  if (value === null || value === undefined) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${(value * 100).toFixed(1)}%`;
}

function signedNumber(value, digits = 1) {
  if (value === null || value === undefined) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${Number(value).toFixed(digits)}`;
}

function statusClass(store) {
  if (store.loadRate === null) return "neutral";
  if (store.loadRate >= 1.15) return "red";
  if (store.loadRate <= 0.85) return "amber";
  if (store.wow > 0) return "green";
  return "blue";
}

function statusText(store) {
  if (store.loadRate === null) return "人效暂无";
  if (store.loadRate >= 1.15) return "高负荷";
  if (store.loadRate <= 0.85) return "低负荷";
  if (store.wow > 0) return "增长";
  return "跟进回落";
}

function scoreClass(score) {
  if (score >= 80) return "green";
  if (score >= 65) return "blue";
  if (score >= 55) return "amber";
  return "red";
}

function gradeClass(grade) {
  const rank = { 青铜: "bronze", 白银: "silver", 黄金: "gold", 钻石: "diamond", 王者: "king" };
  return rank[grade] || "neutral";
}

function scoreWithDelta(score, delta) {
  if (score === null || score === undefined) return '<span class="score-inline"><span class="score-number">暂无</span></span>';
  return `<span class="score-inline"><span class="score-number">${fmt.format(score)}</span>${deltaBadge(delta)}</span>`;
}

function deltaBadge(delta) {
  if (delta === null || delta === undefined || Number.isNaN(Number(delta))) return '<span class="score-delta flat">—</span>';
  const direction = delta > 0 ? "up" : delta < 0 ? "down" : "flat";
  const arrow = delta > 0 ? "↑" : delta < 0 ? "↓" : "—";
  return `<span class="score-delta ${direction}">${arrow}${Math.abs(delta).toFixed(1)}</span>`;
}

function svgEl(tag, attrs = {}, children = []) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  children.forEach((child) => node.appendChild(child));
  return node;
}

function textEl(text, attrs = {}) {
  const node = svgEl("text", attrs);
  node.textContent = text;
  return node;
}

function clear(node) {
  node.replaceChildren();
}

function colorForStore(store) {
  if (store.loadRate === null) return "#64748b";
  if (store.loadRate >= 1.15) return "#be123c";
  if (store.loadRate <= 0.85) return "#b45309";
  if (store.wow > 0) return "#15803d";
  return "#2563eb";
}

function buildAggregateStore() {
  const hourlyDetail = Array.from({ length: 24 }, (_, hour) => {
    const rows = data.stores.map((store) => store.hourlyDetail[hour]).filter(Boolean);
    const recentEstimate = rows.reduce((sum, row) => sum + row.recentEstimate, 0);
    const baseStaff = rows.reduce((sum, row) => sum + row.baseStaff, 0);
    const conservativeStaff = rows.reduce((sum, row) => sum + row.conservativeStaff, 0);
    const capacity = baseStaff * 12.5;
    return {
      hour,
      recentEstimate,
      baseStaff,
      conservativeStaff,
      peakSpeed: baseStaff ? recentEstimate / baseStaff : 0,
      gap: Math.max(0, recentEstimate - capacity),
    };
  });

  return {
    name: "全部门店",
    staff: data.totals.staff,
    dailyOrders: data.totals.dailyOrders,
    ordersPerPerson: data.totals.ordersPerPerson,
    wow: data.totals.wow,
    laborDaily: data.totals.laborDaily,
    loadRate: data.totals.overallLoadRate,
    laborPerOrder: data.totals.laborPerOrder,
    periodOrdersPerPerson: data.totals.periodOrdersPerPerson,
    periodLoadRate: data.totals.periodLoadRate,
    periodLaborPerOrder: data.totals.periodLaborPerOrder,
    dailyChange: data.totals.dailyChange,
    surplusOrders: data.totals.surplusOrders,
    workloadPeople: data.totals.workloadPeople,
    peopleGap: data.totals.peopleGap,
    baseDailyShifts: data.totals.baseDailyShifts,
    registeredStaff: data.totals.registeredStaff,
    registeredGap: data.totals.registeredStaff - data.totals.staffEnd,
    rating: {
      grade916: "—",
      score916: data.ratingSummary.score916,
      grade922: "—",
      score922: data.ratingSummary.score922,
      scoreChange: data.ratingSummary.scoreChange,
      display916: data.ratingSummary.display916,
      display922: data.ratingSummary.dimensions922["展示"],
      displayChange: data.ratingSummary.displayChange,
      service922: data.ratingSummary.dimensions922["服务"],
      product922: data.ratingSummary.dimensions922["商品"],
      fulfillment922: data.ratingSummary.dimensions922["履约"],
      shortBoard: "商品体验、配送时效、配送准时率",
      risk: data.ratingSummary.mainRisk,
      action: data.ratingSummary.action,
    },
    hourlyDetail,
    requiredPeakSpeed: Math.max(...hourlyDetail.map((row) => row.peakSpeed)),
    judgment: `整体负荷 ${pct(data.totals.overallLoadRate)}。高负荷门店：${data.signals.highLoadStores.join('、') || '无'}；低负荷门店：${data.signals.lowLoadStores.join('、') || '无'}，结合订单与排班分店判断。`,
      risk: `合计均值会掩盖高负荷、低负荷门店和部分门店订单回落。评分对比覆盖 ${data.ratingSummary.comparableStoreCount}/${data.ratingSummary.totalStoreCount} 家可比门店，${data.ratingCurrentDate}平均 ${fmtValue(data.ratingSummary.score922)} 分。`,
    action: "下周按门店拆解订单、人效、单均人工、小时峰谷和实际出勤。评分纳入周复盘，高负荷门店先盯商品体验，低负荷门店同步看配送和转化。",
    acceptance: "复盘日均单量、负荷率、单均人工、24小时覆盖、缺货取消、拣货超时和评分变化。",
    weekly: data.weeklyTotals,
    monthly: aggregatePeriods("monthly"),
    daily: data.stores[0].daily.map((row,index)=>({...row,
      ...Object.fromEntries(["orders","staff","laborDaily"].map(key=>[key,data.stores.reduce((n,store)=>n+store.daily[index][key],0)]))})),
  };
}

const aggregateStore = buildAggregateStore();

function getSelectedStore(value) {
  if (value === ALL_VALUE) return aggregateStore;
  return data.stores.find((store) => store.name === value) || aggregateStore;
}

function storesForView(value) {
  return value === ALL_VALUE ? data.stores.map(periodAdjustedStore) : [periodAdjustedStore(getSelectedStore(value))];
}

function getPeriodRows(selectionValue) {
  const selected = getSelectedStore(selectionValue);
  return periodMode === "custom" ? [customPeriodRow(selected)] : periodMode === "month" ? selected.monthly : selected.weekly;
}

function selectedPeriodRow(store) {
  if (periodMode === "custom") return customPeriodRow(store);
  return (periodMode === "month" ? store.monthly : store.weekly).find((row) => row.period === currentPeriod) || null;
}

function periodAdjustedStore(store) {
  const row = selectedPeriodRow(store);
  if (!row) return store;
  const staff = row.staff ?? store.staff;
  const dailyOrders = row.dailyOrders ?? store.dailyOrders;
  const ordersPerPerson = row.ordersPerPerson;
  const laborDaily = row.laborDaily;
  const gradeRecord = (store.gradeHistory || []).filter(item=>item.date<=row.endDate).at(-1);
  return {
    ...store,
    staff,
    staffEnd: row.staffEnd ?? store.staffEnd,
    registeredGap: store.registeredStaff - (row.staffEnd ?? store.staffEnd),
    dailyOrders,
    ordersPerPerson,
    laborDaily,
    periodGrade: gradeRecord?.grade ?? null,
    periodGradeDate: gradeRecord?.date ?? null,
    standardOrders: staff * data.standardOrdersPerPerson,
    loadRate: ordersPerPerson === null ? null : ordersPerPerson / data.standardOrdersPerPerson,
    wow: row.wow,
    dailyChange: row.previousDailyOrders === null || row.previousDailyOrders === undefined ? null : dailyOrders - row.previousDailyOrders,
    surplusOrders: staff ? dailyOrders - staff * data.standardOrdersPerPerson : null,
    workloadPeople: dailyOrders / data.standardOrdersPerPerson,
    peopleGap: staff ? dailyOrders / data.standardOrdersPerPerson - staff : null,
    laborPerOrder: dailyOrders ? laborDaily / dailyOrders : null,
    judgment: `所选${currentPeriod}日均${fmtValue(dailyOrders)}单，负荷${pct(ordersPerPerson===null ? null : ordersPerPerson/data.standardOrdersPerPerson)}，日均单量环比${signedPct(row.wow)}。`,
  };
}

function periodLabel(period) {
  return String(period).replace(" 全期", "").replace("—", "-");
}

function renderKpis(selectionValue) {
  const view = periodAdjustedStore(getSelectedStore(selectionValue));
  const isAll = selectionValue === ALL_VALUE;
  const cards = [
    [isAll ? `${data.stores.length}店日均单量` : "日均单量", fmt.format(view.dailyOrders), `环比 ${signedPct(view.wow)}`],
    ["平均在职人数", `${fmt.format(view.staff)} 人`, `拣货员 · ${currentPeriod}逐日计算`],
    [isAll ? "整体人均单量" : "人均单量", fmtValue(view.ordersPerPerson), `负荷 ${pct(view.loadRate)}`],
    [isAll ? `${data.ratingCurrentDate}综合体验分` : "综合体验分", fmtValue(view.rating.score922), `较${data.ratingPreviousDate} ${signedNumber(view.rating.scoreChange, 1)} 分`],
    ["日均人工成本", `${fmt.format(view.laborDaily)} 元`, view.laborPerOrder===null ? "单均人工暂无（无订单）" : `单均人工 ${moneyFmt.format(view.laborPerOrder)} 元/单`],
  ];

  const grid = document.getElementById("kpiGrid");
  clear(grid);
  cards.forEach(([label, value, note]) => {
    const card = document.createElement("article");
    card.className = "kpi";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong><small>${note}</small>`;
    grid.appendChild(card);
  });
}

function renderSignals(selectionValue) {
  let cards;
  if (selectionValue === ALL_VALUE) {
    const views = data.stores.map(periodAdjustedStore);
    const kangqiao = [...views].sort((a,b)=>(b.loadRate??-1)-(a.loadRate??-1))[0];
    const highestCost = [...views].filter(store=>store.laborPerOrder!==null).sort((a,b)=>b.laborPerOrder-a.laborPerOrder)[0];
    const lowLoad = views.filter(store=>store.loadRate!==null && store.loadRate<=.85).map(s=>s.name).join("、");
    const growth = views.filter(store=>store.wow>0).map(s=>s.name).join("、");
    const declining = views.filter(store=>store.wow<0).map(s=>s.name).join("、");
    cards = [
      {
        className: "is-red",
        title: "关注最高负荷门店",
        body: `${kangqiao.name}日均 ${fmtValue(kangqiao.dailyOrders)} 单，人均 ${fmtValue(kangqiao.ordersPerPerson)} 单，负荷 ${pct(kangqiao.loadRate)}。结合实际出勤核查高峰承接。`,
      },
      {
        className: "is-amber",
        title: "低负荷先查原因",
        body: `${lowLoad || "无门店"} 低于85%负荷，先核查订单来源、缺货取消、时段覆盖和排班匹配，再判断调岗或共享替休。`,
      },
      {
        className: "is-blue",
        title: "成本最高门店",
        body: highestCost ? `${highestCost.name} 单均人工 ${moneyFmt.format(highestCost.laborPerOrder)} 元/单，日均单量环比 ${signedPct(highestCost.wow)}，需结合订单变化和班次效率分析成本。` : "所选周期无订单，单均人工不可计算。",
      },
      {
        className: "is-green",
        title: "评分纳入周复盘",
        body: `${data.ratingCurrentDate}可比门店平均 ${fmtValue(data.ratingSummary.score922)} 分，较${data.ratingPreviousDate} ${signedNumber(data.ratingSummary.scoreChange, 1)} 分；两期可比 ${data.ratingSummary.comparableStoreCount}/${data.ratingSummary.totalStoreCount} 家。增长门店：${growth || "无"}；回落门店：${declining || "无"}。`,
      },
    ];
  } else {
    const store = periodAdjustedStore(getSelectedStore(selectionValue));
    cards = [
      {
        className: `is-${statusClass(store)}`,
        title: `${store.name}经营判断`,
        body: store.judgment || `${store.name}本周负荷 ${pct(store.loadRate)}，环比 ${signedPct(store.wow)}。`,
      },
      {
        className: "is-amber",
        title: "主要风险",
        body: store.rating?.risk || store.risk || "需结合评分、履约和现场出勤继续核实。",
      },
      {
        className: "is-blue",
        title: "调整建议",
        body: store.rating?.action || store.action || "结合小时峰谷、订单趋势和现场出勤继续复盘。",
      },
      {
        className: "is-green",
        title: "验收重点",
        body: store.acceptance || "跟踪订单、人效、单均人工和评分变化。",
      },
    ];
  }

  const grid = document.getElementById("signalGrid");
  clear(grid);
  cards.forEach((item) => {
    const card = document.createElement("section");
    card.className = `signal ${item.className}`;
    card.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
    grid.appendChild(card);
  });
}

function renderLoadChart(selectionValue) {
  const target = document.getElementById("loadChart");
  clear(target);
  const stores = storesForView(selectionValue);
  const width = 620;
  const rowHeight = 38;
  const margin = { top: 22, right: 82, bottom: 26, left: 78 };
  const height = margin.top + margin.bottom + rowHeight * stores.length;
  const max = Math.max(2, ...stores.map((store) => store.loadRate));
  const x = (value) => margin.left + (value / max) * (width - margin.left - margin.right);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "门店工作负荷率" });
  svg.appendChild(svgEl("line", { x1: x(1), y1: 12, x2: x(1), y2: height - 18, stroke: "#94a3b8", "stroke-dasharray": "4 4" }));
  svg.appendChild(textEl("100%", { x: x(1) + 5, y: 16, class: "axis-label" }));

  stores.forEach((store, index) => {
    const y = margin.top + index * rowHeight;
    svg.appendChild(textEl(store.name, { x: 0, y: y + 19, class: "chart-label" }));
    svg.appendChild(svgEl("rect", { x: margin.left, y: y + 6, width: width - margin.left - margin.right, height: 18, rx: 9, fill: "#e2e8f0" }));
    svg.appendChild(svgEl("rect", { x: margin.left, y: y + 6, width: Math.max(3, x(store.loadRate) - margin.left), height: 18, rx: 9, fill: colorForStore(store) }));
    svg.appendChild(textEl(pct(store.loadRate), { x: width - 70, y: y + 20, class: "chart-value" }));
  });

  target.appendChild(svg);
}

function renderCostChart(selectionValue) {
  const target = document.getElementById("costChart");
  clear(target);
  const stores = storesForView(selectionValue);
  const width = 720;
  const height = 320;
  const margin = { top: 18, right: 26, bottom: 54, left: 58 };
  const maxOrders = Math.max(1,...stores.map((store) => store.dailyOrders)) * 1.18;
  const maxCost = Math.max(1,...stores.map((store) => store.laborPerOrder ?? 0)) * 1.2;
  const x = (value) => margin.left + (value / maxOrders) * (width - margin.left - margin.right);
  const y = (value) => height - margin.bottom - (value / maxCost) * (height - margin.top - margin.bottom);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "日均单量与单均人工散点图" });

  svg.appendChild(svgEl("line", { x1: margin.left, y1: height - margin.bottom, x2: width - margin.right, y2: height - margin.bottom, stroke: "#cbd5e1" }));
  svg.appendChild(svgEl("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: height - margin.bottom, stroke: "#cbd5e1" }));
  svg.appendChild(textEl("日均单量", { x: width - 98, y: height - 14, class: "axis-label" }));
  svg.appendChild(textEl("单均人工", { x: 10, y: 18, class: "axis-label" }));

  stores.forEach((store) => {
    if (store.laborPerOrder === null) return;
    const cx = x(store.dailyOrders);
    const cy = y(store.laborPerOrder);
    svg.appendChild(svgEl("circle", { cx, cy, r: 8 + store.staff, fill: colorForStore(store), opacity: 0.88 }));
    svg.appendChild(textEl(store.name.replace("店", ""), { x: cx + 12, y: cy + 4, class: "chart-label" }));
  });

  target.appendChild(svg);
}

function renderTrendChart(selectionValue) {
  const target = document.getElementById("trendChart");
  clear(target);
  const stores = storesForView(selectionValue);
  const width = 620;
  const height = 320;
  const margin = { top: 20, right: 22, bottom: 58, left: 58 };
  const weeklySeries = stores.map((store) => ({
    store,
    rows: periodMode === "custom" ? store.daily.filter(row=>row.isoDate>=customStart && row.isoDate<=customEnd).map(row=>({period:row.date,dailyOrders:row.orders})) : (periodMode === "month" ? store.monthly : store.weekly).filter((row) => !row.period.includes("全期")),
  }));
  const allValues = weeklySeries.flatMap(({ rows }) => rows.map((row) => row.dailyOrders));
  const min = Math.min(...allValues) * 0.88;
  const max = Math.max(min+1,Math.max(...allValues) * 1.08);
  const periods = weeklySeries[0].rows.map((row) => row.period);
  document.getElementById('trendTitle').textContent = periodMode === "custom" ? "自定义周期逐日单量" : periodMode === "month" ? "月度日均单量" : "周度日均单量";
  const x = (index) => margin.left + (index / Math.max(1,periods.length - 1)) * (width - margin.left - margin.right);
  const y = (value) => height - margin.bottom - ((value - min) / (max - min)) * (height - margin.top - margin.bottom);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": `近${periods.length}周日均单量趋势` });

  svg.appendChild(svgEl("line", { x1: margin.left, y1: height - margin.bottom, x2: width - margin.right, y2: height - margin.bottom, stroke: "#cbd5e1" }));
  periods.forEach((period, index) => {
    if (index % Math.ceil(periods.length/6) !== 0 && index !== periods.length-1) return;
    svg.appendChild(textEl(period.replace("—", "-"), { x: x(index), y: height - 24, "text-anchor": index===0 ? "start" : index===periods.length-1 ? "end" : "middle", class: "axis-label" }));
  });

  weeklySeries.forEach(({ store, rows }) => {
    const points = rows.map((row, index) => `${x(index)},${y(row.dailyOrders)}`).join(" ");
    svg.appendChild(svgEl("polyline", { points, fill: "none", stroke: colorForStore(store), "stroke-width": 2.5, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: 0.86 }));
    if (rows.length === 1) svg.appendChild(svgEl("circle",{cx:x(0),cy:y(rows[0].dailyOrders),r:4,fill:colorForStore(store)}));
  });

  target.appendChild(svg);
  const legend=document.createElement("div");
  legend.className="trend-legend";
  weeklySeries.forEach(({store})=>{
    const item=document.createElement("span");
    item.style.color=colorForStore(store);item.textContent=`━ ${store.name}`;legend.appendChild(item);
  });
  target.appendChild(legend);
}

function renderTable(selectionValue) {
  const body = document.getElementById("storeTable");
  clear(body);
  const stores = storesForView(selectionValue);
  document.getElementById("tableTitle").textContent = selectionValue === ALL_VALUE ? `门店核心指标：${currentPeriod}` : `${stores[0].name}核心指标：${currentPeriod}`;
  const scopeRow = selectedPeriodRow(stores[0]);
  const volumeScope = scopeRow.previousDailyOrders === null
    ? `日均单量环比：${scopeRow.comparison}`
    : `日均单量${periodMode==="month" ? "月环比" : "环比"}：${currentPeriod} 对比 ${scopeRow.comparison}${scopeRow.previousDailyOrders===0 ? "（前期日均为0，不计算增幅）" : ""}`;
  document.getElementById("tableScopeNote").textContent = `${volumeScope}；评分变化：${data.ratingCurrentDate} 对比 ${data.ratingPreviousDate}（评分日期固定，不随单量周期切换）。`;
  stores.forEach((store) => {
    const periodRow = selectedPeriodRow(store);
    const dailyOrders = periodRow?.dailyOrders ?? store.dailyOrders;
    const staff = periodRow?.staff ?? store.staff;
    const ordersPerPerson = periodRow ? periodRow.ordersPerPerson : store.ordersPerPerson;
    const loadRate = ordersPerPerson === null ? null : ordersPerPerson / data.standardOrdersPerPerson;
    const wow = periodRow ? periodRow.wow : store.wow;
    const laborPerOrder = dailyOrders ? store.laborDaily / dailyOrders : null;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${store.name}</strong></td>
      <td><span class="grade-pill ${gradeClass(store.periodGrade)}">${store.periodGrade || "暂无"}</span><small class="grade-date">${store.periodGradeDate ? dateText(store.periodGradeDate) : "无当日或更早记录"}</small></td>
      <td>${fmt.format(staff)}</td>
      <td>${fmt.format(dailyOrders)}</td>
      <td>${fmtValue(ordersPerPerson)}</td>
      <td><span class="pill ${statusClass({ ...store, loadRate })}">${pct(loadRate)}</span></td>
      <td>${wow === null || wow === undefined ? "-" : signedPct(wow)}</td>
      <td>${scoreWithDelta(store.rating.score922, store.rating.scoreChange)}</td>
      <td>${scoreWithDelta(store.rating.display922, store.rating.displayChange)}</td>
      <td>${laborPerOrder === null ? "-" : moneyFmt.format(laborPerOrder)}</td>
    `;
    body.appendChild(row);
  });
}

function renderPeriodSwitch(selectionValue) {
  const target = document.getElementById("periodSwitch");
  clear(target);
  const rows = getPeriodRows(selectionValue);
  document.getElementById("presetPeriodControl").hidden = periodMode === "custom";
  document.getElementById("customPeriodControl").hidden = periodMode !== "custom";
  document.querySelectorAll("[data-mode]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.mode===periodMode)));
  if (!rows.some((row) => row.period === currentPeriod)) {
    currentPeriod = rows[rows.length - 2]?.period || rows[0]?.period || currentPeriod;
  }
  rows.forEach((row) => {
    const option = document.createElement("option");
    option.value = row.period;
    option.textContent = periodLabel(row.period);
    target.appendChild(option);
  });
  target.value = currentPeriod;
  target.onchange = () => {
    currentPeriod = target.value;
    renderDashboard(currentSelection);
  };
}

function renderEfficiencyGrid(selectionValue) {
  const store = periodAdjustedStore(getSelectedStore(selectionValue));
  const target = document.getElementById("efficiencyGrid");
  clear(target);
  document.getElementById("efficiencyTitle").textContent = selectionValue === ALL_VALUE ? `${data.stores.length}店负荷、成本与工作量折算` : `${store.name}负荷、成本与工作量折算`;

  const cards = [
    ["周期负荷率", pct(store.loadRate), `周期人均 ${fmtValue(store.ordersPerPerson)} 单/人/天`],
    ["超出/不足", `${signedNumber(store.surplusOrders, 1)} 单/天`, `相对 ${fmt.format(store.standardOrders || store.staff * data.standardOrdersPerPerson)} 单/店/天标准量`],
    ["工作量折算", `${fmt.format(store.workloadPeople)} 人`, `折算人数差 ${signedNumber(store.peopleGap, 2)} 人，非编制结论`],
    ["周期单均人工", store.laborPerOrder===null ? "暂无" : `${moneyFmt.format(store.laborPerOrder)} 元/单`, `日均人工 ${fmt.format(store.laborDaily)} 元`],
    ["全期人均", `${fmt.format(store.periodOrdersPerPerson)} 单`, `全期负荷 ${pct(store.periodLoadRate)}`],
    ["全期单均人工", `${moneyFmt.format(store.periodLaborPerOrder)} 元/单`, "未含货品、配送、租金等成本"],
    [periodMode==="month" ? "日均单量月环比" : "日均单量环比", signedPct(store.wow), `日均增减 ${signedNumber(store.dailyChange, 1)} 单`],
    ["综合体验分", store.rating.score922 === null ? "暂无" : `${fmt.format(store.rating.score922)} 分`, `较${data.ratingPreviousDate} ${signedNumber(store.rating.scoreChange, 1)} 分；${store.rating.grade922 || "暂无等级"}`],
  ];

  cards.forEach(([label, value, note]) => {
    const card = document.createElement("section");
    card.className = "efficiency-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong><p>${note}</p>`;
    target.appendChild(card);
  });
}

function renderScoreChart(selectionValue) {
  const target = document.getElementById("scoreChart");
  clear(target);
  const stores = storesForView(selectionValue);
  const width = 680;
  const rowHeight = selectionValue === ALL_VALUE ? 42 : 72;
  const margin = { top: 24, right: 80, bottom: 30, left: 82 };
  const height = margin.top + margin.bottom + rowHeight * stores.length;
  const x = (value) => margin.left + (value / 100) * (width - margin.left - margin.right);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": `${data.ratingPreviousDate}与${data.ratingCurrentDate}评分变化` });

  [50, 65, 80].forEach((tick) => {
    svg.appendChild(svgEl("line", { x1: x(tick), y1: 12, x2: x(tick), y2: height - 18, stroke: "#e2e8f0", "stroke-dasharray": tick === 80 ? "4 4" : "" }));
    svg.appendChild(textEl(String(tick), { x: x(tick) - 7, y: height - 4, class: "axis-label" }));
  });

  stores.forEach((store, index) => {
    const y = margin.top + index * rowHeight;
    const rating = store.rating;
    svg.appendChild(textEl(store.name.replace("店", ""), { x: 0, y: y + 21, class: "chart-label" }));
    if (rating.score916 === null || rating.score916 === undefined || rating.score922 === null || rating.score922 === undefined) {
      const missingDate = rating.score922 === null || rating.score922 === undefined ? data.ratingCurrentDate : data.ratingPreviousDate;
      svg.appendChild(textEl(`缺少${missingDate}评分，暂无可比变化`, { x: margin.left, y: y + 21, class: "axis-label" }));
      return;
    }
    svg.appendChild(svgEl("line", { x1: x(rating.score916), y1: y + 16, x2: x(rating.score922), y2: y + 16, stroke: rating.scoreChange >= 0 ? "#0f766e" : "#be123c", "stroke-width": 4, "stroke-linecap": "round" }));
    svg.appendChild(svgEl("circle", { cx: x(rating.score916), cy: y + 16, r: 5, fill: "#94a3b8" }));
    svg.appendChild(svgEl("circle", { cx: x(rating.score922), cy: y + 16, r: 7, fill: colorForStore(store), stroke: "#ffffff", "stroke-width": 2 }));
    svg.appendChild(textEl(`${fmt.format(rating.score922)}分`, { x: width - 76, y: y + 13, class: "chart-value" }));
    svg.appendChild(textEl(signedNumber(rating.scoreChange, 1), { x: width - 76, y: y + 29, class: rating.scoreChange >= 0 ? "chart-positive" : "chart-negative" }));
  });

  svg.appendChild(textEl(`灰点${data.ratingPreviousDate}，彩点${data.ratingCurrentDate}`, { x: margin.left, y: 14, class: "axis-label" }));
  target.appendChild(svg);
}

function renderScoreInsight(selectionValue) {
  const target = document.getElementById("scoreInsight");
  clear(target);
  const store = getSelectedStore(selectionValue);
  const isAll = selectionValue === ALL_VALUE;
  document.getElementById("scoreTitle").textContent = isAll ? `${data.ratingSummary.comparableStoreCount}家可比门店评分变化` : `${store.name}评分变化`;
  document.getElementById("scoreRiskTitle").textContent = isAll ? "整体评分短板" : `${store.name}评分短板`;

  const rating = store.rating;
  const dimensions = [
    ["综合体验分", rating.score922, rating.scoreChange],
    ["客户端展示评分", rating.display922, rating.displayChange],
  ];

  const summary = document.createElement("section");
  summary.className = "score-summary-card";
  summary.innerHTML = `
    <div>
      <span>${isAll ? `${data.ratingCurrentDate}平均综合体验分` : `${data.ratingCurrentDate}综合体验分`}</span>
      <strong>${fmtValue(rating.score922)}</strong>
      <small>${rating.grade922 || "暂无等级"}；较${data.ratingPreviousDate} ${signedNumber(rating.scoreChange, 1)} 分</small>
    </div>
    <p>${rating.risk}</p>
  `;
  target.appendChild(summary);

  const dimGrid = document.createElement("div");
  dimGrid.className = "score-dim-grid";
  dimensions.forEach(([label, value, delta]) => {
    const item = document.createElement("section");
    item.className = "score-dim";
    item.innerHTML = `<span>${label}</span><strong>${fmtValue(value)}</strong>${deltaBadge(delta)}`;
    dimGrid.appendChild(item);
  });
  target.appendChild(dimGrid);

  const action = document.createElement("section");
  action.className = "score-action";
  action.innerHTML = `
    <h3>调整重点</h3>
    <p>${rating.action}</p>
    <small>主要短板：${rating.shortBoard}</small>
  `;
  target.appendChild(action);
}

function renderScorePanel(selectionValue) {
  renderScoreChart(selectionValue);
  renderScoreInsight(selectionValue);
}

function renderStoreMetrics(store) {
  const metrics = [
    ["日均单量", fmt.format(store.dailyOrders), `环比 ${signedPct(store.wow)}`],
    ["人均单量", fmtValue(store.ordersPerPerson), `标准 150 单/人/天`],
    ["工作负荷率", pct(store.loadRate), `折算人数差 ${signedNumber(store.peopleGap, 2)} 人`],
    ["单均人工", store.laborPerOrder===null ? "暂无" : `${moneyFmt.format(store.laborPerOrder)} 元`, `日均人工 ${fmt.format(store.laborDaily)} 元`],
    ["综合体验分", store.rating.score922 === null ? "暂无" : `${fmt.format(store.rating.score922)} 分`, `较${data.ratingPreviousDate} ${signedNumber(store.rating.scoreChange, 1)} 分`],
    ["客户端展示评分", fmtValue(store.rating.display922), `较${data.ratingPreviousDate} ${signedNumber(store.rating.displayChange, 1)} 分`],
  ];

  const target = document.getElementById("storeMetrics");
  clear(target);
  metrics.forEach(([label, value, note]) => {
    const card = document.createElement("section");
    card.className = "metric";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong><small>${note}</small>`;
    target.appendChild(card);
  });
}

function renderHourChart(store) {
  const target = document.getElementById("hourChart");
  clear(target);
  const detail = store.hourlyDetail;
  const width = 720;
  const height = 390;
  const margin = { top: 22, right: 58, bottom: 44, left: 46 };
  const max = Math.max(1,...detail.map((row) => row.recentEstimate)) * 1.12;
  const x = (hour) => margin.left + (hour / 23) * (width - margin.left - margin.right);
  const y = (value) => height - margin.bottom - (value / max) * (height - margin.top - margin.bottom);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": `${store.name}10月日均小时单量` });
  const orderPoints = detail.map((row) => `${x(row.hour)},${y(row.recentEstimate)}`).join(" ");

  const tickMax = Math.ceil(max / 50) * 50 || 50;
  const tickStep = tickMax <= 80 ? 20 : 50;
  for (let tick = 0; tick <= tickMax; tick += tickStep) {
    const yPos = y(tick);
    svg.appendChild(svgEl("line", { x1: margin.left, y1: yPos, x2: width - margin.right, y2: yPos, stroke: "#e2e8f0" }));
    svg.appendChild(textEl(String(tick), { x: 12, y: yPos + 4, class: "axis-label" }));
  }
  [0, 6, 12, 18, 23].forEach((hour) => {
    svg.appendChild(textEl(`${hour}:00`, { x: x(hour) - 16, y: height - 18, class: "axis-label" }));
  });

  svg.appendChild(svgEl("polyline", { points: orderPoints, fill: "none", stroke: colorForStore(store), "stroke-width": 3.5, "stroke-linecap": "round", "stroke-linejoin": "round" }));

  detail.forEach((row) => {
    svg.appendChild(svgEl("circle", { cx: x(row.hour), cy: y(row.recentEstimate), r: 3.5, fill:colorForStore(store) }));
  });

  svg.appendChild(textEl("10月日均小时画像（固定参考）", { x: margin.left, y: 14, class: "chart-value" }));
  target.appendChild(svg);
}


function renderStore(store) {
  const periodStore = periodAdjustedStore(store);
  document.getElementById("storeTitle").textContent = store.name;
  document.getElementById("storeTag").textContent = store.name === "全部门店" ? "汇总" : statusText(periodStore);
  document.getElementById("storeTag").className = `store-tag pill ${store.name === "全部门店" ? "blue" : statusClass(periodStore)}`;
  document.getElementById("storeJudgment").textContent = periodStore.judgment || "";
  document.getElementById("storeRisk").textContent = store.rating?.risk || store.risk || "";
  document.getElementById("storeAction").textContent = store.rating?.action || store.action || "";
  document.getElementById("storeAcceptance").textContent = store.acceptance || "";
  renderStoreMetrics(periodStore);
  renderHourChart(store);
}

function initStoreSelect() {
  const select = document.getElementById("storeSelect");
  const allOption = document.createElement("option");
  allOption.value = ALL_VALUE;
  allOption.textContent = "全部";
  select.appendChild(allOption);
  data.stores.forEach((store) => {
    const option = document.createElement("option");
    option.value = store.name;
    option.textContent = store.name;
    select.appendChild(option);
  });
  select.value = ALL_VALUE;
  select.addEventListener("change", () => {
    renderDashboard(select.value);
  });
}

function renderDashboard(selectionValue) {
  currentSelection = selectionValue;
  const store = getSelectedStore(selectionValue);
  const scope = selectedPeriodRow(store);
  document.getElementById("periodLine").textContent = `当前${periodMode==="week" ? "周" : periodMode==="month" ? "月" : "自定义"}周期：${currentPeriod}；日均单量环比：${scope.comparison}；评分：${data.ratingCurrentDate} 对比 ${data.ratingPreviousDate}（固定，可比${data.ratingSummary.comparableStoreCount}/${data.ratingSummary.totalStoreCount}店）。`;
  renderKpis(selectionValue);
  renderPeriodSwitch(selectionValue);
  renderSignals(selectionValue);
  renderLoadChart(selectionValue);
  renderCostChart(selectionValue);
  renderTrendChart(selectionValue);
  renderTable(selectionValue);
  renderEfficiencyGrid(selectionValue);
  renderScorePanel(selectionValue);
  renderStore(store);
}

function init() {
  document.getElementById("periodLine").textContent = `统计期：${data.period}；环比对比：${data.comparisonPeriod}；评分对比：${data.ratingPreviousDate}与${data.ratingCurrentDate}（可比${data.ratingSummary.comparableStoreCount}/${data.ratingSummary.totalStoreCount}店）。`;
  document.getElementById("sourceLine").textContent = `来源：${data.sourceWorkbook}；人效标准：${data.standardOrdersPerPerson} 单/人/天。${data.laborCostNote}${data.hourlyNote}门店等级取所选期末当日或向前最近一条等级记录；评分日期固定。`;
  document.getElementById('scoreBenchmark').textContent = `${data.ratingCurrentDate}综合体验分`;
  document.getElementById('ratingSourceLine').textContent = `评分对比${data.ratingPreviousDate}与${data.ratingCurrentDate}；评分变化只使用两期均有数据的同一批门店。无毛利、实际工时和完整履约明细，暂不形成盈利排名。`;
  document.getElementById("scoreHeaderScope").textContent = `${data.ratingCurrentDate}，较${data.ratingPreviousDate}`;
  document.getElementById("displayScoreHeaderScope").textContent = `${data.ratingCurrentDate}，较${data.ratingPreviousDate}`;
  ["customStart","customEnd"].forEach(id=>{
    const input = document.getElementById(id);
    input.min=data.dateMin; input.max=data.dateMax;
    input.value=id==="customStart" ? customStart : customEnd;
  });
  document.querySelectorAll("[data-mode]").forEach(button=>button.addEventListener("click",()=>{
    periodMode=button.dataset.mode;
    currentPeriod=periodMode==="week" ? data.currentPeriodKey : periodMode==="month" ? data.stores[0].monthly.at(-1).period : `${dateText(customStart)}—${dateText(customEnd)}`;
    renderDashboard(currentSelection);
  }));
  document.getElementById("applyCustomPeriod").addEventListener("click",()=>{
    const start=document.getElementById("customStart").value,end=document.getElementById("customEnd").value;
    const error=document.getElementById("customPeriodError");
    if (!start || !end || start>end || start<data.dateMin || end>data.dateMax) {
      error.textContent=`请选择${data.dateMin}至${data.dateMax}内的有效起止日期。`; return;
    }
    error.textContent=""; customStart=start; customEnd=end;
    currentPeriod=`${dateText(start)}—${dateText(end)}`;
    renderDashboard(currentSelection);
  });
  initStoreSelect();
  renderDashboard(ALL_VALUE);
}

init();
