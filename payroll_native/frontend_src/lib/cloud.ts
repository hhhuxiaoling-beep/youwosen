import { normalizeMonthData, type PayrollMonthData } from "./payroll";

export type MonthItem = { month: string; status: string; updatedAt: string };

// Refresh the directory as well as the selected month. An iframe can remain
// mounted while its Streamlit parent imports new months into the database.
export async function readCloudSnapshot(
  fetcher: (path: string) => Promise<Response>, preferredMonth?: string,
): Promise<{ months: MonthItem[]; data: PayrollMonthData }> {
  const response = await fetcher("/api/months");
  const payload = await response.json() as { error?: string; months: MonthItem[]; current: PayrollMonthData };
  if (!response.ok) throw new Error(payload.error || "读取云端月份失败");
  let current = payload.current;
  if (preferredMonth && preferredMonth !== current.month && payload.months.some(item => item.month === preferredMonth)) {
    const selected = await fetcher(`/api/months/${preferredMonth}`);
    const body = await selected.json() as { error?: string; data: PayrollMonthData };
    if (!selected.ok) throw new Error(body.error || "读取月份失败");
    current = body.data;
  }
  return { months: payload.months, data: normalizeMonthData(current) };
}
