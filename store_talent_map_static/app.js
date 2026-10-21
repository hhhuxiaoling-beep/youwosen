const demoStores = [
  {
    id: 1, externalId: "YWS-SH1313773", short: "康桥店", city: "上海", district: "浦东新区", status: "open", opened: "开业日期待补",
    address: "上海浦东新区康桥镇川周公路3128号", longitude: 121.57, latitude: 31.15,
    baiduX: 13533257.746889, baiduY: 3629939.111391, geocodeScore: null, geocodeLevel: "表格坐标",
    active: [
      { name: "翟成祥", role: "店长", date: "2026-07-22 入职" }, { name: "刘洁", role: "店长", date: "2026-09-10 入职" },
      { name: "张稳丹", role: "拣货员", date: "2026-09-10 入职" }, { name: "李明会", role: "拣货员", date: "2026-09-14 入职" },
      { name: "张传奇", role: "拣货员", date: "2026-10-04 入职" }, { name: "周珅", role: "拣货员", date: "2026-09-21 入职" },
      { name: "刘金宁", role: "拣货员", date: "2026-10-10 入职" }
    ], exited: []
  },
  {
    id: 2, externalId: "YWS-SH1316751", short: "广丰路店", city: "上海", district: "奉贤区", status: "open", opened: "开业日期待补",
    address: "上海市奉贤区广丰路1110号", longitude: 121.48417, latitude: 30.962202,
    baiduX: 13523703.05, baiduY: 3605656.75, geocodeScore: 80, geocodeLevel: "门址",
    active: [
      { name: "董陈陈", role: "店长", date: "2026-07-21 入职" }, { name: "代高攀", role: "拣货员", date: "2026-07-26 入职" },
      { name: "谢泽明", role: "拣货员", date: "2026-07-26 入职" }, { name: "耿良锐", role: "拣货员", date: "2026-07-30 入职" },
      { name: "尹姗", role: "拣货员", date: "2026-09-14 入职" }
    ], exited: []
  },
  {
    id: 3, externalId: "YWS-SH1313770", short: "七宝店", city: "上海", district: "闵行区", status: "open", opened: "开业日期待补",
    address: "上海市闵行区七宝镇中谊路1058号南门5栋102室", longitude: 121.355701, latitude: 31.143435,
    baiduX: 13509401.78, baiduY: 3629089.49, geocodeScore: 80, geocodeLevel: "门址",
    active: [
      { name: "王超", role: "店长", date: "2026-07-21 入职" }, { name: "王新开", role: "拣货员", date: "2026-07-21 入职" },
      { name: "邓丽娜", role: "拣货员", date: "2026-07-21 入职" }, { name: "陈庚", role: "拣货员", date: "2026-07-22 入职" },
      { name: "舒姗", role: "拣货员", date: "2026-09-18 入职" }
    ], exited: []
  },
  {
    id: 4, externalId: "YWS-SH1320066", short: "青浦店", city: "上海", district: "青浦区", status: "open", opened: "开业日期待补",
    address: "上海市青浦区华新镇华丹路553号", longitude: 121.216459, latitude: 31.244997,
    baiduX: 13493901.282245, baiduY: 3642240.74898, geocodeScore: 80, geocodeLevel: "门址",
    active: [
      { name: "夏雪梅", role: "拣货员", date: "2026-08-06 入职" }, { name: "曾德桃", role: "拣货员", date: "2026-08-08 入职" },
      { name: "陈金", role: "店长", date: "2026-09-01 入职" }, { name: "陈嘉颖", role: "拣货员", date: "2026-09-20 入职" },
      { name: "王建", role: "拣货员", date: "2026-09-22 入职" }
    ], exited: []
  },
  {
    id: 5, externalId: "YWS-SWJ001", short: "滨湖店", city: "无锡", district: "滨湖区", status: "open", opened: "开业日期待补",
    address: "江苏省无锡市滨湖区荣巷街道梅园社区徐巷20号徐巷农贸市场1号淘宝便利店", longitude: 120.225751, latitude: 31.558321,
    baiduX: 13383615.01, baiduY: 3682903.68, geocodeScore: 50, geocodeLevel: "模糊匹配",
    active: [
      { name: "李春英", role: "店长", date: "2026-09-20 入职" }, { name: "姚佳辉", role: "拣货员", date: "2026-10-17 入职" },
      { name: "宗如如", role: "拣货员", date: "2026-09-20 入职" }, { name: "刘兆泽", role: "拣货员", date: "2026-09-20 入职" }
    ], exited: []
  },
  {
    id: 6, externalId: "YWS-WX1314003", short: "东站店", city: "无锡", district: "锡山区", status: "open", opened: "开业日期待补",
    address: "江苏省无锡市锡山区安镇街道先锋东路世奥广场", longitude: 120.463261, latitude: 31.602598,
    baiduX: 13410054.82, baiduY: 3688660.99, geocodeScore: 50, geocodeLevel: "模糊匹配",
    active: [
      { name: "黄志伟", role: "店长", date: "2026-07-27 入职" }, { name: "季天赐", role: "拣货员", date: "2026-10-16 入职" },
      { name: "马培育", role: "拣货员", date: "2026-07-28 入职" }, { name: "陈博", role: "拣货员", date: "2026-08-20 入职" }
    ], exited: []
  },
  {
    id: 7, externalId: "YWS-WX1326196", short: "洛社店", city: "无锡", district: "惠山区", status: "open", opened: "开业日期待补",
    address: "江苏省无锡市惠山区洛社镇亿丰商业广场A区A3067-3070", longitude: 120.194966, latitude: 31.631196,
    baiduX: 13380188.04, baiduY: 3692381.03, geocodeScore: 75, geocodeLevel: "商场",
    active: [
      { name: "时浩权", role: "店长", date: "2026-09-07 入职" }, { name: "张婷", role: "拣货员", date: "2026-09-21 入职" },
      { name: "段兴才", role: "拣货员", date: "2026-09-21 入职" }, { name: "李家豪", role: "拣货员", date: "2026-10-20 入职" }
    ], exited: []
  },
  {
    id: 8, externalId: "YWS-WX1314386", short: "皮革城店", city: "无锡", district: "锡山区", status: "open", opened: "开业日期待补",
    address: "江苏省无锡市锡山区万马商业广场53-8", longitude: 120.373897, latitude: 31.623766,
    baiduX: 13400106.73, baiduY: 3691414.35, geocodeScore: 50, geocodeLevel: "模糊匹配",
    active: [
      { name: "左词伍", role: "店长", date: "2026-07-27 入职" }, { name: "朱紫薇", role: "拣货员", date: "2026-07-27 入职" },
      { name: "景燕", role: "拣货员", date: "2026-08-31 入职" }, { name: "李海龙", role: "拣货员", date: "2026-09-21 入职" }
    ], exited: []
  },
  { id: 9, externalId: "JS01", short: "苏州待开1", city: "苏州", district: "相城区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市相城区泰元路 1 号汇众有限公司", longitude: 120.65336, latitude: 31.40339, baiduX: 13431216.75, baiduY: 3662779.72, geocodeScore: 80, geocodeLevel: "门址", active: [], exited: [] },
  { id: 10, externalId: "JS02", short: "苏州待开2", city: "苏州", district: "姑苏区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市姑苏区广济南路 18 号", longitude: 120.607584, latitude: 31.313508, baiduX: 13426120.94, baiduY: 3651120.35, geocodeScore: 80, geocodeLevel: "门址", active: [], exited: [] },
  { id: 11, externalId: "JS03", short: "苏州待开3", city: "苏州", district: "吴中区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市吴中区郭新东路 199 号", longitude: 120.703786, latitude: 31.254753, baiduX: 13436830.18, baiduY: 3643504.82, geocodeScore: 80, geocodeLevel: "门址", active: [], exited: [] },
  { id: 12, externalId: "JS04", short: "苏州待开4", city: "苏州", district: "吴中区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市吴中区龙西路 265 号", longitude: 120.623494, latitude: 31.275643, baiduX: 13427892.04, baiduY: 3646211.99, geocodeScore: 80, geocodeLevel: "门址", active: [], exited: [] },
  { id: 13, externalId: "JS05", short: "苏州待开5", city: "苏州", district: "吴中区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市吴中区木渎镇花苑东路 199-1 号", longitude: 120.545729, latitude: 31.267249, baiduX: 13419235.19, baiduY: 3645124.13, geocodeScore: 80, geocodeLevel: "门址", active: [], exited: [] },
  { id: 14, externalId: "JS06", short: "苏州待开6", city: "苏州", district: "虎丘区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市虎丘区狮山街道金山东路 3 号", longitude: 120.575051, latitude: 31.303782, baiduX: 13422499.36, baiduY: 3649859.41, geocodeScore: 80, geocodeLevel: "门址", active: [], exited: [] },
  { id: 15, externalId: "JS07", short: "苏州待开7", city: "苏州", district: "吴江区", status: "pending", opened: "开业日期待补", address: "江苏省苏州市吴江区邦宁电子信息产业园", longitude: 120.67001, latitude: 31.126343, baiduX: 13433070.23, baiduY: 3626877.59, geocodeScore: 50, geocodeLevel: "模糊匹配", active: [], exited: [] }
];

function cloneData(value) { return JSON.parse(JSON.stringify(value)); }
function readSavedStores() {
  try { return JSON.parse(localStorage.getItem("youwoStoreDataV3") || "null"); }
  catch { return null; }
}
function saveStores(value) {
  try { localStorage.setItem("youwoStoreDataV3", JSON.stringify(value)); }
  catch { /* Local-file privacy settings may disable persistence; the session still works. */ }
}
function clearSavedStores() {
  try {
    localStorage.removeItem("youwoStoreDataV2");
    localStorage.removeItem("youwoStoreDataV3");
  }
  catch { /* Nothing to clear when storage is unavailable. */ }
}
let stores = readSavedStores() || cloneData(demoStores);
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let activeFilter = "all";
let activeStore = null;
let activeTab = "seats";
let selectedCity = "上海";
let pendingImport = null;

const cityCenters = {
  "北京": [116.4, 39.9], "上海": [121.47, 31.23], "广州": [113.27, 23.13], "深圳": [114.06, 22.55],
  "成都": [104.07, 30.67], "重庆": [106.55, 29.56], "武汉": [114.31, 30.59], "杭州": [120.16, 30.27],
  "南京": [118.8, 32.06], "西安": [108.94, 34.34], "苏州": [120.59, 31.3], "无锡": [120.31, 31.49], "郑州": [113.62, 34.75],
  "长沙": [112.94, 28.23], "昆明": [102.83, 24.88], "青岛": [120.38, 36.07], "天津": [117.2, 39.13]
};
const BAIDU_TILE_SPAN = 16384;
const BAIDU_TILE_ZOOM = 12;
const cityTileViews = {
  "上海": { xMin: 821, xMax: 827, yMin: 219, yMax: 223, columns: 7, rows: 5 },
  "无锡": { xMin: 815, xMax: 821, yMin: 223, yMax: 227, columns: 7, rows: 5 },
  "苏州": { xMin: 817, xMax: 823, yMin: 220, yMax: 224, columns: 7, rows: 5 }
};

function normalizedCity(value) { return String(value || "").replace(/市$/, "").trim() || "待确认"; }
function hasCoordinate(store) {
  return typeof store.longitude === "number" && Number.isFinite(store.longitude) && Math.abs(store.longitude) > 1
    && typeof store.latitude === "number" && Number.isFinite(store.latitude) && Math.abs(store.latitude) > 1;
}
function hasBaiduPoint(store) {
  return typeof store.baiduX === "number" && Number.isFinite(store.baiduX)
    && typeof store.baiduY === "number" && Number.isFinite(store.baiduY);
}

function llToBaiduMercator(longitude, latitude) {
  if (!Number.isFinite(longitude) || !Number.isFinite(latitude)) return null;
  const bands = [75, 60, 45, 30, 15, 0];
  const factors = [
    [-0.0015702102444,111320.7020616939,1704480524535203,-10338987376042340,26112667856603880,-35149669176653700,26595700718403920,-10725012454188240,1800819912950474,82.5],
    [0.0008277824516172526,111320.7020463578,647795574.6671607,-4082003173.641316,10774905663.51142,-15171875531.51559,12053065338.62167,-5124939663.577472,913311935.9512032,67.5],
    [0.00337398766765,111320.7020202162,4481351.045890365,-23393751.19931662,79682215.47186455,-115964993.2797253,97236711.15602145,-43661946.33752821,8477230.501135234,52.5],
    [0.00220636496208,111320.7020209128,51751.86112841131,3796837.749470245,992013.7397791013,-1221952.21711287,1340652.697009075,-620943.6990984312,144416.9293806241,37.5],
    [-0.0003441963504368392,111320.7020576856,278.2353980772752,2485758.690035394,6070.750963243378,54821.18345352118,9540.606633304236,-2710.55326746645,1405.483844121726,22.5],
    [-0.0003218135878613132,111320.7020701615,0.00369383431289,823725.6402795718,0.46104986909093,2351.343141331292,1.58060784298199,8.77738589078284,0.37238884252424,7.45]
  ];
  const index = bands.findIndex(band => Math.abs(latitude) >= band);
  const factor = factors[index < 0 ? factors.length - 1 : index];
  const t = Math.abs(latitude) / factor[9];
  return {
    x: (factor[0] + factor[1] * Math.abs(longitude)) * Math.sign(longitude || 1),
    y: (factor[2] + factor[3] * t + factor[4] * t ** 2 + factor[5] * t ** 3 + factor[6] * t ** 4 + factor[7] * t ** 5 + factor[8] * t ** 6) * Math.sign(latitude || 1)
  };
}
const requiredFields = ["store_id", "store_name", "city", "address", "store_status", "role", "employment_status"];
const fieldAliases = {
  store_id: ["store_id", "门店编号", "门店id", "门店ID"],
  store_name: ["store_name", "门店名称", "门店名", "门店"],
  province: ["province", "省", "省份"], city: ["city", "城市", "市"],
  district: ["district", "区县", "区域", "行政区"], address: ["address", "地址", "详细地址", "门店地址"],
  longitude: ["longitude", "经度", "lng"], latitude: ["latitude", "纬度", "lat"],
  store_status: ["store_status", "开业状态", "门店状态"], opening_date: ["opening_date", "开业日期", "计划开业日期"],
  role: ["role", "岗位", "职位"], name: ["name", "姓名", "员工姓名"],
  employment_status: ["employment_status", "人员状态", "在离职状态", "员工状态"],
  hire_date: ["hire_date", "入职日期", "入职时间"], leave_date: ["leave_date", "离职日期", "离职时间"]
};

function h(value = "") {
  return String(value).replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));
}

function initials(name) { return name ? name.slice(-1) : "+"; }

function storeCity(store) { return normalizedCity(store.city); }

function updateDashboard() {
  const open = stores.filter(s => s.status === "open").length;
  const active = stores.reduce((sum, s) => sum + s.active.length, 0);
  $("#metricStores").textContent = stores.length;
  $("#metricOpen").textContent = open;
  $("#metricPending").textContent = stores.length - open;
  $("#metricSeats").textContent = stores.length * 4;
  $("#metricActive").textContent = active;
  $("#metricVacant").textContent = stores.reduce((sum, store) => sum + vacancies(store).length, 0);
  $$(".segmented button").forEach(button => {
    const count = button.dataset.filter === "all" ? stores.length : stores.filter(s => s.status === button.dataset.filter).length;
    const badge = button.querySelector("b"); if (badge) badge.textContent = count;
  });
  renderCityClusters();
  renderCityStrip();
}

function cityPosition(city, cityStores) {
  const located = cityStores.filter(hasCoordinate);
  const center = located.length
    ? [located.reduce((sum, store) => sum + store.longitude, 0) / located.length, located.reduce((sum, store) => sum + store.latitude, 0) / located.length]
    : (cityCenters[city] || [104, 31]);
  return {
    x: Math.max(5, Math.min(95, 10.2 + (center[0] - 73) / 62 * 80.7)),
    y: Math.max(7, Math.min(91, 13.4 + (54 - center[1]) / 36 * 74.9))
  };
}

function renderCityClusters() {
  const groups = Object.groupBy ? Object.groupBy(stores, storeCity) : stores.reduce((acc, store) => ((acc[storeCity(store)] ||= []).push(store), acc), {});
  const entries = Object.entries(groups).map(([city, cityStores]) => ({ city, cityStores, anchor: cityPosition(city, cityStores) }));
  const buckets = entries.reduce((acc, entry) => {
    const key = `${Math.round(entry.anchor.x / 9)}-${Math.round(entry.anchor.y / 11)}`;
    (acc[key] ||= []).push(entry);
    return acc;
  }, {});
  const offsets = [[0,-14],[-14,9],[14,9],[-15,-10],[15,-10],[0,14]];
  Object.values(buckets).forEach(bucket => bucket.forEach((entry, index) => {
    const offset = bucket.length > 1 ? offsets[index % offsets.length] : [0,0];
    entry.position = {
      x: Math.max(6, Math.min(94, entry.anchor.x + offset[0])),
      y: Math.max(8, Math.min(88, entry.anchor.y + offset[1]))
    };
  }));
  const leaders = entries.filter(entry => entry.position.x !== entry.anchor.x || entry.position.y !== entry.anchor.y)
    .map(entry => `<line x1="${entry.anchor.x}" y1="${entry.anchor.y}" x2="${entry.position.x}" y2="${entry.position.y}" />`).join("");
  $("#cityClusters").innerHTML = `${leaders ? `<svg class="cluster-leaders" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${leaders}</svg>` : ""}${entries.map(({city, cityStores, position}) => `
    <button class="city-cluster" style="--x:${position.x}%;--y:${position.y}%" data-city="${h(city)}" aria-label="${h(city)}${cityStores.length}家门店，点击展开"><span class="pulse"></span><span class="cluster-count">${cityStores.length}</span><b>${h(city)}</b><small>点击展开</small></button>`).join("")}`;
  $$(".city-cluster").forEach(button => button.addEventListener("click", () => showCity(button.dataset.city)));
}

function renderCityStrip() {
  const groups = stores.reduce((acc, store) => {
    const city = storeCity(store);
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});
  const [topCity = "上海", count = 0] = Object.entries(groups).sort((a,b) => b[1] - a[1])[0] || [];
  $("#cityShanghai").innerHTML = `<b>${h(topCity)}</b><span><i></i></span><strong>${count} 家</strong>`;
  $("#cityShanghai").dataset.city = topCity;
}

function cityTileView(cityStores) {
  if (cityTileViews[selectedCity]) return cityTileViews[selectedCity];
  const points = cityStores.filter(hasBaiduPoint);
  if (!points.length) return null;
  const centerX = Math.round(points.reduce((sum, store) => sum + store.baiduX / BAIDU_TILE_SPAN, 0) / points.length);
  const centerY = Math.round(points.reduce((sum, store) => sum + store.baiduY / BAIDU_TILE_SPAN, 0) / points.length);
  return { xMin: centerX - 3, xMax: centerX + 3, yMin: centerY - 2, yMax: centerY + 2, columns: 7, rows: 5 };
}

function renderBaiduTiles(view) {
  if (!view) {
    $("#tileMap").innerHTML = `<div class="no-location">当前城市暂无有效经纬度，点位未绘制</div>`;
    return;
  }
  const tiles = [];
  for (let y = view.yMax; y >= view.yMin; y -= 1) {
    for (let x = view.xMin; x <= view.xMax; x += 1) {
      const column = x - view.xMin;
      const row = view.yMax - y;
      const fallback = `https://maponline0.bdimg.com/tile/?qt=vtile&x=${x}&y=${y}&z=${BAIDU_TILE_ZOOM}&styles=pl&scaler=1&udt=20261021`;
      const embeddedTile = window.__YOUWO_TILE_DATA__?.[`${x}_${y}`];
      const tileSource = embeddedTile || `./assets/baidu-tiles/${BAIDU_TILE_ZOOM}/${x}_${y}.png`;
      tiles.push(`<img src="${tileSource}" data-fallback="${fallback}" alt="" style="left:${column / view.columns * 100}%;top:${row / view.rows * 100}%;width:${100 / view.columns}%;height:${100 / view.rows}%" />`);
    }
  }
  $("#tileMap").innerHTML = tiles.join("");
  $$("#tileMap img").forEach(tile => tile.addEventListener("error", () => {
    if (tile.dataset.fallback && tile.src !== tile.dataset.fallback) tile.src = tile.dataset.fallback;
  }, { once: true }));
}

function markerPosition(store, view) {
  if (!view || !hasBaiduPoint(store)) return null;
  return {
    x: (store.baiduX / BAIDU_TILE_SPAN - view.xMin) / view.columns * 100,
    y: (view.yMax + 1 - store.baiduY / BAIDU_TILE_SPAN) / view.rows * 100
  };
}

function buildMarkers() {
  const cityStores = stores.filter(store => storeCity(store) === selectedCity);
  const view = cityTileView(cityStores);
  renderBaiduTiles(view);
  const located = cityStores.filter(store => hasBaiduPoint(store));
  const unlocated = cityStores.filter(store => !hasBaiduPoint(store));
  $("#storeMarkers").innerHTML = located.map((store, index) => {
    const position = markerPosition(store, view);
    const lowConfidence = Number.isFinite(store.geocodeScore) && store.geocodeScore < 70;
    return `
    <button class="store-marker ${store.status} ${position.x > 58 ? "label-left" : ""} ${lowConfidence ? "low-confidence" : ""}" style="--x:${position.x}%;--y:${position.y}%" data-store="${store.id}" aria-label="${h(store.short)}，${store.status === "open" ? "已开业" : "待开业"}${lowConfidence ? "，地址为模糊匹配" : ""}">
      <span class="marker-pin"><i>${String(index + 1).padStart(2, "0")}</i></span>
      <span class="marker-label"><b>${h(store.short)}</b><small>${h(store.district)} · ${store.status === "open" ? "已开业" : "待开业"}${lowConfidence ? " · 待核准" : ""}</small></span>
    </button>`;
  }).join("");
  $("#unlocatedStores").hidden = !unlocated.length;
  $("#unlocatedStores").innerHTML = unlocated.length
    ? `<span>待定位 ${unlocated.length}</span>${unlocated.map(store => `<button data-store="${store.id}">${h(store.short)}</button>`).join("")}`
    : "";
  $$(".store-marker").forEach(marker => marker.addEventListener("click", () => selectStore(Number(marker.dataset.store))));
  $$("#unlocatedStores button").forEach(button => button.addEventListener("click", () => selectStore(Number(button.dataset.store))));
}

function showCity(city = "上海") {
  selectedCity = city;
  buildMarkers();
  $("#chinaMap").hidden = true;
  $("#shanghaiMap").hidden = false;
  $("#backChina").hidden = false;
  const cityStores = stores.filter(store => storeCity(store) === city);
  const unlocatedCount = cityStores.filter(store => !hasBaiduPoint(store)).length;
  $("#mapTitle").textContent = `${city} · ${cityStores.length} 家门店${unlocatedCount ? ` · ${unlocatedCount} 个待定位` : ""}`;
  $("#mapHint").hidden = true;
  applyFilter();
}

function showChina() {
  $("#chinaMap").hidden = false;
  $("#shanghaiMap").hidden = true;
  $("#backChina").hidden = true;
  $("#mapTitle").textContent = "全国总览";
  $("#mapHint").hidden = false;
  $$(".store-marker").forEach(m => m.classList.remove("selected"));
}

function vacancies(store) {
  const roles = ["店长", "拣货员", "拣货员", "拣货员"];
  store.active.forEach(person => {
    const idx = roles.indexOf(person.role);
    if (idx >= 0) roles.splice(idx, 1);
  });
  return roles;
}

function personCard(person, type = "active") {
  if (type === "vacant") return `<article class="person vacant"><span class="avatar">+</span><div class="person-info"><strong>待招</strong><span>尚未到岗</span></div><div class="role"><b>${h(person)}</b><small>招聘中</small></div></article>`;
  return `<article class="person ${type === "exited" ? "exited" : ""}"><span class="avatar">${h(initials(person.name))}</span><div class="person-info"><strong>${h(person.name)}</strong><span>${h(person.date)}</span></div><div class="role"><b>${h(person.role)}</b><small>${type === "exited" ? "已离职" : "在职"}</small></div></article>`;
}

function renderPeople() {
  if (!activeStore) return;
  if (activeTab === "history") {
    $("#peopleList").innerHTML = activeStore.exited.length
      ? activeStore.exited.map(person => personCard(person, "exited")).join("")
      : `<div class="person"><span class="avatar">✓</span><div class="person-info"><strong>暂无离职记录</strong><span>当前团队稳定</span></div></div>`;
    return;
  }
  $("#peopleList").innerHTML = [
    ...activeStore.active.map(person => personCard(person)),
    ...vacancies(activeStore).map(role => personCard(role, "vacant"))
  ].join("");
}

function selectStore(id) {
  activeStore = stores.find(store => store.id === id);
  if (!activeStore) return;
  showCity(storeCity(activeStore));
  activeTab = "seats";
  $$(".tabs button").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === activeTab));
  $$(".store-marker").forEach(marker => marker.classList.toggle("selected", Number(marker.dataset.store) === id));
  $("#panelEmpty").hidden = true;
  $("#panelContent").hidden = false;
  $("#storeIndex").textContent = String(activeStore.id).padStart(2, "0");
  const pill = $("#statusPill");
  pill.textContent = activeStore.status === "open" ? "已开业" : "待开业";
  pill.classList.toggle("pending", activeStore.status === "pending");
  $("#openingDate").textContent = activeStore.opened;
  $("#storeName").textContent = `${activeStore.district} · ${activeStore.short}`;
  $("#storeAddress").textContent = activeStore.address;
  const coordinateMeta = $("#coordinateMeta");
  if (hasCoordinate(activeStore)) {
    const score = Number.isFinite(activeStore.geocodeScore) ? ` · 百度匹配 ${activeStore.geocodeScore} 分` : "";
    coordinateMeta.textContent = `坐标 ${activeStore.longitude.toFixed(6)}, ${activeStore.latitude.toFixed(6)} · ${activeStore.geocodeLevel || "已定位"}${score}`;
    coordinateMeta.classList.toggle("warning", Number.isFinite(activeStore.geocodeScore) && activeStore.geocodeScore < 70);
  } else {
    coordinateMeta.textContent = "待定位：当前数据未提供有效经纬度";
    coordinateMeta.classList.add("warning");
  }
  const rate = Math.round(activeStore.active.length / 4 * 100);
  $("#fillRate").textContent = `${rate}%`;
  $("#fillBar").style.width = `${Math.min(rate, 100)}%`;
  $("#fillCaption").textContent = `已到岗 ${activeStore.active.length} 人 · 岗位缺口 ${vacancies(activeStore).length} 人`;
  $("#seatCount").textContent = 4;
  $("#historyCount").textContent = activeStore.exited.length;
  renderPeople();
  if (window.innerWidth < 1080) $("#detailPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyFilter() {
  $$(".store-marker").forEach(marker => {
    const store = stores.find(s => s.id === Number(marker.dataset.store));
    marker.classList.toggle("filtered", activeFilter !== "all" && store.status !== activeFilter);
  });
  renderCityClusters();
}

function parseCSV(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i], next = text[i + 1];
    if (char === '"' && quoted && next === '"') { cell += '"'; i++; }
    else if (char === '"') quoted = !quoted;
    else if (char === ',' && !quoted) { row.push(cell.trim()); cell = ""; }
    else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i++;
      row.push(cell.trim()); if (row.some(Boolean)) rows.push(row); row = []; cell = "";
    } else cell += char;
  }
  row.push(cell.trim()); if (row.some(Boolean)) rows.push(row);
  if (rows.length < 2) throw new Error("文件中没有可导入的数据行");
  const headers = rows[0].map(key => key.replace(/^\uFEFF/, "").trim());
  return rows.slice(1).map(values => Object.fromEntries(headers.map((key, index) => [key, values[index] || ""])));
}

function normalizeHeaders(rows) {
  return rows.map(row => {
    const normalized = {};
    Object.entries(fieldAliases).forEach(([field, aliases]) => {
      const alias = aliases.find(key => Object.prototype.hasOwnProperty.call(row, key));
      normalized[field] = alias ? row[alias] : "";
    });
    return normalized;
  });
}

function parseExcel(buffer) {
  if (!window.XLSX) throw new Error("Excel 解析组件未加载，请确认 vendor 文件夹与 index.html 放在一起");
  const workbook = XLSX.read(buffer, { type: "array", cellDates: true });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) throw new Error("Excel 文件中没有工作表");
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: "", raw: false, dateNF: "yyyy-mm-dd" });
}

function normalizeStatus(value) {
  const text = String(value || "").toLowerCase();
  return text.includes("待") || text.includes("pending") ? "pending" : "open";
}

function normalizeEmployment(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("离") || text.includes("exit")) return "exited";
  if (text.includes("待") || text.includes("vacant")) return "vacant";
  return "active";
}

function rowsToStores(rows) {
  if (!Array.isArray(rows) || !rows.length) throw new Error("文件中没有可导入的数据");
  const missing = requiredFields.filter(field => !(field in rows[0]));
  if (missing.length) throw new Error(`缺少必填字段：${missing.join("、")}`);
  const groups = new Map();
  rows.forEach((row, rowIndex) => {
    requiredFields.forEach(field => { if (!String(row[field] ?? "").trim()) throw new Error(`第 ${rowIndex + 2} 行的 ${field} 为空`); });
    const key = String(row.store_id).trim();
    if (!groups.has(key)) groups.set(key, { base: row, people: [] });
    groups.get(key).people.push(row);
  });
  const cityIndex = {};
  return [...groups.values()].map(({base, people}, index) => {
    const city = normalizedCity(base.city);
    const order = cityIndex[city] = (cityIndex[city] || 0) + 1;
    const position = { x: 17 + ((order - 1) % 4) * 22, y: 22 + (Math.floor((order - 1) / 4) % 4) * 19 };
    const active = [], exited = [];
    people.forEach(person => {
      const state = normalizeEmployment(person.employment_status);
      if (state === "vacant") return;
      const item = {
        name: String(person.name || "未命名").trim(), role: String(person.role || "拣货员").trim(),
        date: state === "exited"
          ? `${person.hire_date || "日期待补"} 入职 · ${person.leave_date || "日期待补"} 离职`
          : `${person.hire_date || "日期待补"} 入职`
      };
      (state === "exited" ? exited : active).push(item);
    });
    const status = normalizeStatus(base.store_status);
    const opening = String(base.opening_date || "日期待补").trim();
    const longitudeText = String(base.longitude ?? "").trim();
    const latitudeText = String(base.latitude ?? "").trim();
    const longitude = longitudeText === "" ? null : Number(longitudeText);
    const latitude = latitudeText === "" ? null : Number(latitudeText);
    const validCoordinate = Number.isFinite(longitude) && Number.isFinite(latitude) && Math.abs(longitude) > 1 && Math.abs(latitude) > 1;
    const baiduPoint = validCoordinate ? llToBaiduMercator(longitude, latitude) : null;
    return {
      id: index + 1, externalId: String(base.store_id), short: String(base.store_name).trim(), city,
      district: String(base.district || city).trim(), address: String(base.address).trim(), status,
      opened: `${status === "pending" ? "计划 " : ""}${opening} 开业`, active, exited,
      longitude: validCoordinate ? longitude : null, latitude: validCoordinate ? latitude : null,
      baiduX: baiduPoint?.x ?? null, baiduY: baiduPoint?.y ?? null,
      geocodeScore: null, geocodeLevel: validCoordinate ? "上传坐标" : "待定位",
      x: position.x, y: position.y
    };
  });
}

async function inspectFile(file) {
  $("#importPreview").hidden = false;
  $("#previewFileName").textContent = file.name;
  $("#previewRows").textContent = "正在校验…";
  $("#validationMessage").classList.remove("error");
  $("#applyImport").disabled = true;
  try {
    const lowerName = file.name.toLowerCase();
    let raw;
    if (lowerName.endsWith(".xlsx") || lowerName.endsWith(".xls")) raw = parseExcel(await file.arrayBuffer());
    else {
      const text = await file.text();
      raw = lowerName.endsWith(".json") ? JSON.parse(text) : parseCSV(text);
    }
    const sourceRows = Array.isArray(raw) ? raw : raw.rows;
    const rows = normalizeHeaders(sourceRows);
    pendingImport = rowsToStores(rows);
    const active = pendingImport.reduce((sum, store) => sum + store.active.length, 0);
    const exited = pendingImport.reduce((sum, store) => sum + store.exited.length, 0);
    $("#previewRows").textContent = `${rows.length} 行数据`;
    $("#previewStores").textContent = pendingImport.length;
    $("#previewActive").textContent = active;
    $("#previewExited").textContent = exited;
    $("#previewVacant").textContent = pendingImport.reduce((sum, store) => sum + vacancies(store).length, 0);
    $("#validationMessage").textContent = "✓ 字段校验通过，可以应用到地图";
    $("#applyImport").disabled = false;
  } catch (error) {
    pendingImport = null;
    $("#previewRows").textContent = "校验失败";
    $("#validationMessage").textContent = `请检查文件：${error.message}`;
    $("#validationMessage").classList.add("error");
  }
}

function setDataModal(open) {
  $("#dataModal").hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
}

function downloadTemplate() {
  if (!window.XLSX) { alert("Excel 模板组件未加载，请确认 vendor 文件夹完整"); return; }
  const rows = [
    {门店编号:"SH001",门店名称:"康桥店",省份:"上海市",城市:"上海",区县:"浦东新区",地址:"上海浦东新区康桥镇川周公路3128号",经度:121.57,纬度:31.15,开业状态:"已开业",开业日期:"2026-07-18",岗位:"店长",姓名:"张晨",人员状态:"在职",入职日期:"2026-05-12",离职日期:""},
    {门店编号:"SH001",门店名称:"康桥店",省份:"上海市",城市:"上海",区县:"浦东新区",地址:"上海浦东新区康桥镇川周公路3128号",经度:121.57,纬度:31.15,开业状态:"已开业",开业日期:"2026-07-18",岗位:"拣货员",姓名:"李雪",人员状态:"在职",入职日期:"2026-06-03",离职日期:""},
    {门店编号:"SH001",门店名称:"康桥店",省份:"上海市",城市:"上海",区县:"浦东新区",地址:"上海浦东新区康桥镇川周公路3128号",经度:121.57,纬度:31.15,开业状态:"已开业",开业日期:"2026-07-18",岗位:"拣货员",姓名:"陈宇",人员状态:"离职",入职日期:"2026-05-28",离职日期:"2026-09-30"},
    {门店编号:"BJ001",门店名称:"朝阳店",省份:"北京市",城市:"北京",区县:"朝阳区",地址:"北京市朝阳区示例地址",经度:116.48,纬度:39.92,开业状态:"待开业",开业日期:"2026-12-01",岗位:"拣货员",姓名:"",人员状态:"待招",入职日期:"",离职日期:""}
  ];
  const instructions = [
    {字段:"门店编号",是否必填:"是",说明:"同一门店的人员使用相同编号"}, {字段:"门店名称",是否必填:"是",说明:"地图与详情面板显示名称"},
    {字段:"城市",是否必填:"是",说明:"用于全国地图城市聚合"}, {字段:"地址",是否必填:"是",说明:"门店详细地址"},
    {字段:"经度/纬度",是否必填:"推荐",说明:"用于全国地图精准定位"}, {字段:"开业状态",是否必填:"是",说明:"填写 已开业 或 待开业"},
    {字段:"岗位",是否必填:"是",说明:"填写 店长 或 拣货员"}, {字段:"人员状态",是否必填:"是",说明:"填写 在职、离职 或 待招"},
    {字段:"日期",是否必填:"按状态",说明:"建议使用 yyyy-mm-dd 格式"}
  ];
  const workbook = XLSX.utils.book_new();
  const dataSheet = XLSX.utils.json_to_sheet(rows);
  dataSheet["!cols"] = [12,14,11,10,12,42,11,11,12,14,11,12,12,14,14].map(wch => ({wch}));
  const guideSheet = XLSX.utils.json_to_sheet(instructions);
  guideSheet["!cols"] = [{wch:16},{wch:12},{wch:42}];
  XLSX.utils.book_append_sheet(workbook, dataSheet, "门店人员数据");
  XLSX.utils.book_append_sheet(workbook, guideSheet, "字段说明");
  XLSX.writeFile(workbook, "优沃森门店人力数据模板.xlsx", { compression: true });
}

updateDashboard();
buildMarkers();
$("#cityShanghai").addEventListener("click", () => showCity($("#cityShanghai").dataset.city || "上海"));
$("#emptyExplore").addEventListener("click", () => showCity(selectedCity));
$("#backChina").addEventListener("click", showChina);
$("#panelClose").addEventListener("click", () => {
  activeStore = null;
  $("#panelContent").hidden = true;
  $("#panelEmpty").hidden = false;
  $$(".store-marker").forEach(marker => marker.classList.remove("selected"));
});
$$('.segmented button').forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  $$(".segmented button").forEach(btn => btn.classList.toggle("active", btn === button));
  applyFilter();
}));
$$('.tabs button').forEach(button => button.addEventListener("click", () => {
  activeTab = button.dataset.tab;
  $$(".tabs button").forEach(btn => btn.classList.toggle("active", btn === button));
  renderPeople();
}));
$("#openData").addEventListener("click", () => setDataModal(true));
$("#closeData").addEventListener("click", () => setDataModal(false));
$("#closeDataBackdrop").addEventListener("click", () => setDataModal(false));
$("#downloadTemplate").addEventListener("click", downloadTemplate);
$("#dataFile").addEventListener("change", event => event.target.files[0] && inspectFile(event.target.files[0]));
const dropzone = $("#dropzone");
["dragenter", "dragover"].forEach(type => dropzone.addEventListener(type, event => { event.preventDefault(); dropzone.classList.add("dragging"); }));
["dragleave", "drop"].forEach(type => dropzone.addEventListener(type, event => { event.preventDefault(); dropzone.classList.remove("dragging"); }));
dropzone.addEventListener("drop", event => event.dataTransfer.files[0] && inspectFile(event.dataTransfer.files[0]));
$("#applyImport").addEventListener("click", () => {
  if (!pendingImport) return;
  stores = pendingImport;
  saveStores(stores);
  selectedCity = storeCity(stores[0]); activeStore = null;
  $("#panelContent").hidden = true; $("#panelEmpty").hidden = false;
  updateDashboard(); buildMarkers(); showChina(); setDataModal(false);
});
$("#resetDemo").addEventListener("click", () => {
  stores = cloneData(demoStores); clearSavedStores(); pendingImport = null; selectedCity = "上海"; activeStore = null;
  updateDashboard(); buildMarkers(); showChina(); setDataModal(false);
});
document.addEventListener("keydown", event => { if (event.key === "Escape" && !$("#dataModal").hidden) setDataModal(false); });
