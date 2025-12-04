"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { SalesRecord } from "@/data/salesData";

type PieChartComponentProps = {
  data: SalesRecord[];
};

const COLORS = ["#2563EB", "#F59E0B", "#16A34A"];

export function PieChartComponent({ data }: PieChartComponentProps) {
  const total = data.reduce((sum, item) => sum + item.sales, 0);

  return (
    <section className="card">
      <h2 className="card-title">Sales Distribution (Pie)</h2>
      <div className="mb-3 text-sm text-slate-600">
        Total Sales: <span className="font-semibold">${total.toLocaleString()}</span>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="h-64 w-full md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="sales"
                nameKey="year"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.year}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#ffffff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Sales"]}
                labelFormatter={(label) => `Year ${label}`}
                contentStyle={{ borderRadius: 8, borderColor: "#e2e8f0" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex-1 space-y-2 text-sm text-slate-700">
          {data.map((item, index) => {
            const percentage = total
              ? ((item.sales / total) * 100).toFixed(1)
              : "0.0";
            return (
              <li
                key={item.year}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="font-medium">Year {item.year}</span>
                </span>
                <span className="tabular-nums text-slate-600">
                  {percentage}% &middot; ${item.sales.toLocaleString()}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}


