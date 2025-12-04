"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { SalesRecord } from "@/data/salesData";

type LineChartComponentProps = {
  data: SalesRecord[];
};

export function LineChartComponent({ data }: LineChartComponentProps) {
  return (
    <section className="card">
      <h2 className="card-title">Sales Trend (Line)</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
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
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#16A34A"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, stroke: "#16A34A", fill: "white" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}


