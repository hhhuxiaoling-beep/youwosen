const data = window.DASHBOARD_DATA;
const ALL_VALUE = "__all__";
let currentSelection = ALL_VALUE;
let currentPeriod = "9/14—9/19";

const fmt = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 1 });
const moneyFmt = new Intl.NumberFormat("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
  if (store.loadRate >= 1.15) return "red";
  if (store.loadRate <= 0.85) return "amber";
  if (store.wow > 0) return "green";
  return "blue";
}

function statusText(store) {
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
  return `<span class="score-inline"><span class="score-number">${fmt.format(score)}</span>${deltaBadge(delta)}</span>`;
}

function deltaBadge(delta) {
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
    registeredGap: data.totals.registeredStaff - data.totals.staff,
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
    judgment: "整体负荷接近标准，但门店之间差异大。康桥高负荷需要优先保障承接，低负荷门店需先查经营与排班原因。",
    risk: `合计均值会掩盖康桥高压、低负荷门店和部分门店订单回落。评分已补充，当前平均 ${fmt.format(data.ratingSummary.score922)} 分，短板集中在商品体验与配送履约。`,
    action: "下周按门店拆解订单、人效、单均人工、小时峰谷和实际出勤。评分纳入周复盘，高负荷门店先盯商品体验，低负荷门店同步看配送和转化。",
    acceptance: "复盘日均单量、负荷率、单均人工、24小时覆盖、缺货取消、拣货超时和评分变化。",
    weekly: data.weeklyTotals,
  };
}

const aggregateStore = buildAggregateStore();

function getSelectedStore(value) {
  if (value === ALL_VALUE) return aggregateStore;
  return data.stores.find((store) => store.name === value) || aggregateStore;
}

function storesForView(value) {
  return value === ALL_VALUE ? data.stores : [getSelectedStore(value)];
}

function getPeriodRows(selectionValue) {
  const selected = getSelectedStore(selectionValue);
  return selected.weekly || [];
}

function selectedPeriodRow(store) {
  return (store.weekly || []).find((row) => row.period === currentPeriod) || null;
}

function periodLabel(period) {
  return String(period).replace(" 全期", "").replace("—", "-");
}

function renderKpis(selectionValue) {
  const view = getSelectedStore(selectionValue);
  const isAll = selectionValue === ALL_VALUE;
  const cards = [
    [isAll ? "6店日均单量" : "日均单量", fmt.format(view.dailyOrders), `环比 ${signedPct(view.wow)}`],
    [isAll ? "表内拣货员" : "拣货员", `${view.staff} 人`, isAll ? "康桥店按 3 人口径" : `${view.name} 当前口径`],
    [isAll ? "整体人均单量" : "人均单量", fmt.format(view.ordersPerPerson), `负荷 ${pct(view.loadRate)}`],
    [isAll ? "9.22综合体验分" : "综合体验分", fmt.format(view.rating.score922), `较9.16 ${signedNumber(view.rating.scoreChange, 1)} 分`],
    ["日均人工成本", `${fmt.format(view.laborDaily)} 元`, `单均人工 ${moneyFmt.format(view.laborPerOrder)} 元/单`],
    ["24h在册建议", `${view.registeredStaff} 人`, isAll ? "合计建议，不等于直接招聘数" : `较原表 ${signedNumber(view.registeredGap, 0)} 人`],
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
    const kangqiao = data.stores.find((store) => store.name === "康桥店");
    const highestCost = [...data.stores].sort((a, b) => b.laborPerOrder - a.laborPerOrder)[0];
    const lowLoad = data.signals.lowLoadStores.join("、");
    const growth = data.signals.growthStores.join("、");
    const declining = data.signals.decliningStores.join("、");
    cards = [
      {
        className: "is-red",
        title: "先保康桥承接",
        body: `康桥日均 ${fmt.format(kangqiao.dailyOrders)} 单，人均 ${fmt.format(kangqiao.ordersPerPerson)} 单，负荷 ${pct(kangqiao.loadRate)}。低单均人工不代表可长期维持当前压力。`,
      },
      {
        className: "is-amber",
        title: "低负荷先查原因",
        body: `${lowLoad} 低于85%负荷，先核查订单来源、缺货取消、时段覆盖和排班匹配，再判断调岗或共享替休。`,
      },
      {
        className: "is-blue",
        title: "成本最高门店",
        body: `${highestCost.name} 单均人工 ${moneyFmt.format(highestCost.laborPerOrder)} 元/单，同时环比 ${signedPct(highestCost.wow)}，需要拆解单量回落与班次效率。`,
      },
      {
        className: "is-green",
        title: "评分纳入周复盘",
        body: `9.22六店平均 ${fmt.format(data.ratingSummary.score922)} 分，较9.16 ${signedNumber(data.ratingSummary.scoreChange, 1)} 分。增长门店：${growth}；回落门店：${declining}。`,
      },
    ];
  } else {
    const store = getSelectedStore(selectionValue);
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
  const maxOrders = Math.max(...stores.map((store) => store.dailyOrders)) * 1.18;
  const maxCost = Math.max(...stores.map((store) => store.laborPerOrder)) * 1.2;
  const x = (value) => margin.left + (value / maxOrders) * (width - margin.left - margin.right);
  const y = (value) => height - margin.bottom - (value / maxCost) * (height - margin.top - margin.bottom);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "日均单量与单均人工散点图" });

  svg.appendChild(svgEl("line", { x1: margin.left, y1: height - margin.bottom, x2: width - margin.right, y2: height - margin.bottom, stroke: "#cbd5e1" }));
  svg.appendChild(svgEl("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: height - margin.bottom, stroke: "#cbd5e1" }));
  svg.appendChild(textEl("日均单量", { x: width - 98, y: height - 14, class: "axis-label" }));
  svg.appendChild(textEl("单均人工", { x: 10, y: 18, class: "axis-label" }));

  stores.forEach((store) => {
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
  const allValues = stores.flatMap((store) => store.weekly?.map((row) => row.dailyOrders) || []);
  const min = Math.min(...allValues) * 0.88;
  const max = Math.max(...allValues) * 1.08;
  const periods = stores[0].weekly.map((row) => row.period);
  const x = (index) => margin.left + (index / (periods.length - 1)) * (width - margin.left - margin.right);
  const y = (value) => height - margin.bottom - ((value - min) / (max - min)) * (height - margin.top - margin.bottom);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "三周日均单量趋势" });

  svg.appendChild(svgEl("line", { x1: margin.left, y1: height - margin.bottom, x2: width - margin.right, y2: height - margin.bottom, stroke: "#cbd5e1" }));
  periods.forEach((period, index) => {
    svg.appendChild(textEl(period.replace("—", "-"), { x: x(index) - 34, y: height - 24, class: "axis-label" }));
  });

  stores.forEach((store) => {
    const points = store.weekly.map((row, index) => `${x(index)},${y(row.dailyOrders)}`).join(" ");
    svg.appendChild(svgEl("polyline", { points, fill: "none", stroke: colorForStore(store), "stroke-width": 2.5, "stroke-linecap": "round", "stroke-linejoin": "round", opacity: 0.86 }));
    const last = store.weekly[store.weekly.length - 1];
    svg.appendChild(textEl(store.name.replace("店", ""), { x: width - 70, y: y(last.dailyOrders) + 4, class: "chart-label" }));
  });

  target.appendChild(svg);
}

function renderTable(selectionValue) {
  const body = document.getElementById("storeTable");
  clear(body);
  const stores = storesForView(selectionValue);
  document.getElementById("tableTitle").textContent = selectionValue === ALL_VALUE ? `门店核心指标：${currentPeriod}` : `${stores[0].name}核心指标：${currentPeriod}`;
  stores.forEach((store) => {
    const periodRow = selectedPeriodRow(store);
    const dailyOrders = periodRow?.dailyOrders ?? store.dailyOrders;
    const ordersPerPerson = periodRow?.ordersPerPerson ?? store.ordersPerPerson;
    const loadRate = ordersPerPerson / data.standardOrdersPerPerson;
    const wow = periodRow?.wow ?? store.wow;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${store.name}</strong></td>
      <td><span class="grade-pill ${gradeClass(store.rating.grade922)}">${store.rating.grade922}</span></td>
      <td>${store.staff}</td>
      <td>${fmt.format(dailyOrders)}</td>
      <td>${fmt.format(ordersPerPerson)}</td>
      <td><span class="pill ${statusClass({ ...store, loadRate })}">${pct(loadRate)}</span></td>
      <td>${wow === null || wow === undefined ? "-" : signedPct(wow)}</td>
      <td>${scoreWithDelta(store.rating.score922, store.rating.scoreChange)}</td>
      <td>${scoreWithDelta(store.rating.display922, store.rating.displayChange)}</td>
      <td>${moneyFmt.format(store.laborPerOrder)}</td>
      <td>${store.registeredStaff} 人</td>
    `;
    body.appendChild(row);
  });
}

function renderPeriodSwitch(selectionValue) {
  const target = document.getElementById("periodSwitch");
  clear(target);
  const rows = getPeriodRows(selectionValue);
  if (!rows.some((row) => row.period === currentPeriod)) {
    currentPeriod = rows[rows.length - 2]?.period || rows[0]?.period || currentPeriod;
  }
  rows.forEach((row) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `period-button${row.period === currentPeriod ? " is-active" : ""}`;
    button.textContent = periodLabel(row.period);
    button.addEventListener("click", () => {
      currentPeriod = row.period;
      renderDashboard(currentSelection);
    });
    target.appendChild(button);
  });
}

function renderEfficiencyGrid(selectionValue) {
  const store = getSelectedStore(selectionValue);
  const target = document.getElementById("efficiencyGrid");
  clear(target);
  document.getElementById("efficiencyTitle").textContent = selectionValue === ALL_VALUE ? "6店负荷、成本与工作量折算" : `${store.name}负荷、成本与工作量折算`;

  const cards = [
    ["本周负荷率", pct(store.loadRate), `本周人均 ${fmt.format(store.ordersPerPerson)} 单/人/天`],
    ["超出/不足", `${signedNumber(store.surplusOrders, 1)} 单/天`, `相对 ${fmt.format(store.standardOrders || store.staff * data.standardOrdersPerPerson)} 单/店/天标准量`],
    ["工作量折算", `${fmt.format(store.workloadPeople)} 人`, `折算人数差 ${signedNumber(store.peopleGap, 2)} 人，非编制结论`],
    ["本周单均人工", `${moneyFmt.format(store.laborPerOrder)} 元/单`, `日均人工 ${fmt.format(store.laborDaily)} 元`],
    ["全期人均", `${fmt.format(store.periodOrdersPerPerson)} 单`, `全期负荷 ${pct(store.periodLoadRate)}`],
    ["全期单均人工", `${moneyFmt.format(store.periodLaborPerOrder)} 元/单`, "未含货品、配送、租金等成本"],
    ["周环比", signedPct(store.wow), `日均增减 ${signedNumber(store.dailyChange, 1)} 单`],
    ["综合体验分", `${fmt.format(store.rating.score922)} 分`, `较9.16 ${signedNumber(store.rating.scoreChange, 1)} 分；${store.rating.grade922}`],
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
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "9.16与9.22评分变化" });

  [50, 65, 80].forEach((tick) => {
    svg.appendChild(svgEl("line", { x1: x(tick), y1: 12, x2: x(tick), y2: height - 18, stroke: "#e2e8f0", "stroke-dasharray": tick === 80 ? "4 4" : "" }));
    svg.appendChild(textEl(String(tick), { x: x(tick) - 7, y: height - 4, class: "axis-label" }));
  });

  stores.forEach((store, index) => {
    const y = margin.top + index * rowHeight;
    const rating = store.rating;
    svg.appendChild(textEl(store.name.replace("店", ""), { x: 0, y: y + 21, class: "chart-label" }));
    svg.appendChild(svgEl("line", { x1: x(rating.score916), y1: y + 16, x2: x(rating.score922), y2: y + 16, stroke: rating.scoreChange >= 0 ? "#0f766e" : "#be123c", "stroke-width": 4, "stroke-linecap": "round" }));
    svg.appendChild(svgEl("circle", { cx: x(rating.score916), cy: y + 16, r: 5, fill: "#94a3b8" }));
    svg.appendChild(svgEl("circle", { cx: x(rating.score922), cy: y + 16, r: 7, fill: colorForStore(store), stroke: "#ffffff", "stroke-width": 2 }));
    svg.appendChild(textEl(`${fmt.format(rating.score922)}分`, { x: width - 76, y: y + 13, class: "chart-value" }));
    svg.appendChild(textEl(signedNumber(rating.scoreChange, 1), { x: width - 76, y: y + 29, class: rating.scoreChange >= 0 ? "chart-positive" : "chart-negative" }));
  });

  svg.appendChild(textEl("灰点9.16，彩点9.22", { x: margin.left, y: 14, class: "axis-label" }));
  target.appendChild(svg);
}

function renderScoreInsight(selectionValue) {
  const target = document.getElementById("scoreInsight");
  clear(target);
  const store = getSelectedStore(selectionValue);
  const isAll = selectionValue === ALL_VALUE;
  document.getElementById("scoreTitle").textContent = isAll ? "6店评分变化" : `${store.name}评分变化`;
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
      <span>${isAll ? "9.22平均综合体验分" : "9.22综合体验分"}</span>
      <strong>${fmt.format(rating.score922)}</strong>
      <small>${rating.grade922}；较9.16 ${signedNumber(rating.scoreChange, 1)} 分</small>
    </div>
    <p>${rating.risk}</p>
  `;
  target.appendChild(summary);

  const dimGrid = document.createElement("div");
  dimGrid.className = "score-dim-grid";
  dimensions.forEach(([label, value, delta]) => {
    const item = document.createElement("section");
    item.className = "score-dim";
    item.innerHTML = `<span>${label}</span><strong>${fmt.format(value)}</strong>${deltaBadge(delta)}`;
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
    ["人均单量", fmt.format(store.ordersPerPerson), `标准 150 单/人/天`],
    ["工作负荷率", pct(store.loadRate), `折算人数差 ${signedNumber(store.peopleGap, 2)} 人`],
    ["单均人工", `${moneyFmt.format(store.laborPerOrder)} 元`, `日均人工 ${fmt.format(store.laborDaily)} 元`],
    ["综合体验分", `${fmt.format(store.rating.score922)} 分`, `较9.16 ${signedNumber(store.rating.scoreChange, 1)} 分`],
    ["客户端展示评分", fmt.format(store.rating.display922), `较9.16 ${signedNumber(store.rating.displayChange, 1)} 分`],
    ["24h在册建议", `${store.registeredStaff} 人`, `较原表 ${signedNumber(store.registeredGap, 0)} 人`],
    ["峰时速度验证", `${fmt.format(store.requiredPeakSpeed)} 单/人/时`, `平均日基础方案`],
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
  const max = Math.max(...detail.map((row) => row.recentEstimate), ...detail.map((row) => row.peakSpeed * row.baseStaff)) * 1.12;
  const x = (hour) => margin.left + (hour / 23) * (width - margin.left - margin.right);
  const y = (value) => height - margin.bottom - (value / max) * (height - margin.top - margin.bottom);
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": `${store.name}小时单量和覆盖` });
  const orderPoints = detail.map((row) => `${x(row.hour)},${y(row.recentEstimate)}`).join(" ");
  const capacityPoints = detail.map((row) => `${x(row.hour)},${y(row.baseStaff * 12.5)}`).join(" ");

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

  svg.appendChild(svgEl("polyline", { points: capacityPoints, fill: "none", stroke: "#94a3b8", "stroke-width": 2, "stroke-dasharray": "5 5" }));
  svg.appendChild(svgEl("polyline", { points: orderPoints, fill: "none", stroke: colorForStore(store), "stroke-width": 3.5, "stroke-linecap": "round", "stroke-linejoin": "round" }));

  detail.forEach((row) => {
    const fill = row.gap > 0 ? "#be123c" : colorForStore(store);
    svg.appendChild(svgEl("circle", { cx: x(row.hour), cy: y(row.recentEstimate), r: row.gap > 0 ? 4.5 : 3.5, fill }));
  });

  svg.appendChild(textEl("近期小时估计", { x: margin.left, y: 14, class: "chart-value" }));
  svg.appendChild(textEl("虚线：12.5单/人/小时参考覆盖", { x: margin.left + 108, y: 14, class: "axis-label" }));
  target.appendChild(svg);
}

function renderShiftPlan(store) {
  const target = document.getElementById("shiftPlan");
  clear(target);

  if (store.name === "全部门店") {
    const summary = document.createElement("section");
    summary.className = "shift-card";
    summary.innerHTML = `
      <h3>6店排班口径</h3>
      <p class="shift-note">基础日出勤 ${data.totals.baseDailyShifts} 个12小时班，月休2天后独立在册建议 ${data.totals.registeredStaff} 人。该结果是排班测算，不直接等于新增招聘人数。</p>
    `;
    target.appendChild(summary);

    const list = document.createElement("section");
    list.className = "shift-card";
    list.innerHTML = "<h3>各店在册建议</h3>";
    data.stores.forEach((item) => {
      const row = document.createElement("div");
      row.className = "shift-row";
      const width = Math.max(8, (item.registeredStaff / data.totals.registeredStaff) * 100);
      row.innerHTML = `
        <span class="shift-time">${item.name}</span>
        <span class="shift-track"><span class="shift-bar" style="left:0%; width:${width}%;"></span></span>
        <span class="shift-count">${item.registeredStaff} 人</span>
      `;
      list.appendChild(row);
    });
    target.appendChild(list);

    const note = document.createElement("section");
    note.className = "shift-card";
    note.innerHTML = `
      <h3>执行提示</h3>
      <p class="shift-note">康桥需优先验证高峰履约和支援方案；广丰路、皮革城先看低负荷原因和时段覆盖。若改用保守覆盖边界，6店合计会提高到43人在册。</p>
    `;
    target.appendChild(note);
    return;
  }

  const summary = document.createElement("section");
  summary.className = "shift-card";
  summary.innerHTML = `
    <h3>${store.name}排班口径</h3>
    <p class="shift-note">基础日出勤 ${store.baseDailyShifts} 个12小时班，月休2天后独立在册 ${store.registeredStaff} 人。近期最高日量 ${fmt.format(store.peakDayOrders)} 单，仅按总量下限需 ${store.peakDayMinimum} 人。</p>
  `;
  target.appendChild(summary);

  const rows = document.createElement("section");
  rows.className = "shift-card";
  rows.innerHTML = "<h3>基础班型</h3>";
  store.shifts.forEach((shift) => {
    const row = document.createElement("div");
    row.className = "shift-row";
    const firstLeft = (shift.start / 24) * 100;
    const firstWidth = Math.min(12, 24 - shift.start) / 24 * 100;
    const secondWidth = shift.start + 12 > 24 ? ((shift.start + 12) % 24) / 24 * 100 : 0;
    const bars = [
      `<span class="shift-bar" style="left:${firstLeft}%; width:${firstWidth}%;"></span>`,
      secondWidth ? `<span class="shift-bar" style="left:0%; width:${secondWidth}%;"></span>` : "",
    ].join("");
    row.innerHTML = `
      <span class="shift-time">${shift.label} ${String(shift.start).padStart(2, "0")}:00</span>
      <span class="shift-track">${bars}</span>
      <span class="shift-count">${shift.count} 人</span>
    `;
    rows.appendChild(row);
  });
  target.appendChild(rows);

  const conservative = document.createElement("section");
  conservative.className = "shift-card";
  conservative.innerHTML = `
    <h3>保守覆盖边界</h3>
    <p class="shift-note">若每小时均不超过12.5单/人/小时，需 ${store.conservativeDailyShifts} 个日班、${store.conservativeRegisteredStaff} 人在册。A ${store.conservativePlan.a}；B ${store.conservativePlan.b}；C ${store.conservativePlan.c}。</p>
  `;
  target.appendChild(conservative);
}

function renderStore(store) {
  document.getElementById("storeTitle").textContent = store.name;
  document.getElementById("storeTag").textContent = store.name === "全部门店" ? "汇总" : statusText(store);
  document.getElementById("storeTag").className = `store-tag pill ${store.name === "全部门店" ? "blue" : statusClass(store)}`;
  document.getElementById("storeJudgment").textContent = store.judgment || "";
  document.getElementById("storeRisk").textContent = store.rating?.risk || store.risk || "";
  document.getElementById("storeAction").textContent = store.rating?.action || store.action || "";
  document.getElementById("storeAcceptance").textContent = store.acceptance || "";
  renderStoreMetrics(store);
  renderHourChart(store);
  renderShiftPlan(store);
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
  document.getElementById("periodLine").textContent = `统计期：${data.period}；环比对比：${data.comparisonPeriod}；评分已补充9.16与9.22两期。`;
  document.getElementById("sourceLine").textContent = `来源：${data.sourceWorkbook}；人效标准：${data.standardOrdersPerPerson} 单/人/天；24小时排班按12小时班、月休2天测算。`;
  initStoreSelect();
  renderDashboard(ALL_VALUE);
}

init();
