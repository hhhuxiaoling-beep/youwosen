type RequestEvent = { id: string; method: string; path: string; body?: unknown };
type Pending = { event: RequestEvent; resolve: (value: Response) => void; timer?: ReturnType<typeof setTimeout> };

const queue: Pending[] = [];
let active: Pending | undefined;
let ready = false;
const parentOrigin = (() => { try { return new URL(document.referrer).origin; } catch { return window.location.origin; } })();
const send = (type: string, fields: Record<string, unknown> = {}) => {
  window.parent.postMessage({ isStreamlitMessage: true, type, ...fields }, parentOrigin);
};

function pump() {
  if (!ready || active || !queue.length) return;
  active = queue.shift()!;
  const pending = active;
  pending.timer = setTimeout(() => {
    if (active !== pending) return;
    pending.resolve(new Response(JSON.stringify({ error: "云端响应超时。保存结果未确认，请先重新加载云端数据。" }), { status: 504 }));
    active = undefined;
    pump();
  }, 45000);
  send("streamlit:setComponentValue", { dataType: "json", value: pending.event });
}

window.addEventListener("message", (message) => {
  if (message.source !== window.parent || message.origin !== parentOrigin || message.data?.type !== "streamlit:render") return;
  ready = true;
  const reply = message.data.args?.reply;
  if (reply && active && reply.id === active.event.id) {
    clearTimeout(active.timer);
    active.resolve(new Response(JSON.stringify(reply.payload), { status: reply.status }));
    active = undefined;
  }
  send("streamlit:setFrameHeight", { height: 1050 });
  pump();
});

send("streamlit:componentReady", { apiVersion: 1 });
send("streamlit:setFrameHeight", { height: 1050 });

export function payrollFetch(path: string, options: RequestInit = {}): Promise<Response> {
  if (window.parent === window) {
    return Promise.resolve(new Response(JSON.stringify({ error: "请从优沃森数据平台的薪资中心打开此模块。" }), { status: 401 }));
  }
  if (!/^\/api\/(months(?:\/clone|\/\d{4}-\d{2})?|auth\/logout)$/.test(path)) {
    return Promise.resolve(new Response(JSON.stringify({ error: "不支持的薪资请求" }), { status: 404 }));
  }
  let body: unknown;
  try { body = options.body ? JSON.parse(String(options.body)) : undefined; }
  catch { return Promise.resolve(new Response(JSON.stringify({ error: "请求数据格式错误" }), { status: 400 })); }
  return new Promise((resolve) => {
    queue.push({ event: { id: crypto.randomUUID(), method: options.method || "GET", path, body }, resolve });
    pump();
  });
}
