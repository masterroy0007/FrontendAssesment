"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { SalesRecord } from "@/data/salesData";

type BarChartComponentProps = {
  data: SalesRecord[];
};

export function BarChartComponent({ data }: BarChartComponentProps) {
  return (
    <section className="card">
      <h2 className="card-title">Sales by Year (Bar)</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={{ stroke: "#cbd5f5" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ stroke: "#cbd5f5" }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Sales"]}
              labelFormatter={(label) => `Year ${label}`}
              contentStyle={{ borderRadius: 8, borderColor: "#e2e8f0" }}
            />
            <Bar dataKey="sales" fill="#2563EB" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}


