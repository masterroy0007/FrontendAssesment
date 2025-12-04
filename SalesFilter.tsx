"use client";

import { useState, useEffect } from "react";
import type { SalesRecord } from "@/data/salesData";

type SalesFilterProps = {
  data: SalesRecord[];
  threshold: number;
  onThresholdChange: (value: number) => void;
};

export function SalesFilter({
  data,
  threshold,
  onThresholdChange
}: SalesFilterProps) {
  const [inputValue, setInputValue] = useState<string>(
    threshold > 0 ? String(threshold) : ""
  );

  useEffect(() => {
    setInputValue(threshold > 0 ? String(threshold) : "");
  }, [threshold]);

  const handleChange = (value: string) => {
    setInputValue(value);
    const numeric = Number(value.replace(/[^0-9]/g, ""));
    if (!Number.isNaN(numeric)) {
      onThresholdChange(numeric);
    }
  };

  const filtered = data.filter((record) => record.sales >= threshold);

  return (
    <section className="card">
      <h2 className="card-title">Sales Filter</h2>
      <div className="space-y-4">
        <div className="space-y-1">
          <label
            htmlFor="sales-threshold"
            className="block text-sm font-medium text-slate-700"
          >
            Minimum Sales Threshold
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              $
            </span>
            <input
              id="sales-threshold"
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="e.g. 50000"
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-7 pr-3 text-sm shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <p className="text-xs text-slate-500">
            Showing years with sales greater than or equal to the threshold.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Filtered Results
          </h3>
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">
              No years match the current threshold.
            </p>
          ) : (
            <ul className="divide-y divide-slate-200 text-sm">
              {filtered.map((record) => (
                <li
                  key={record.year}
                  className="flex items-center justify-between py-1.5"
                >
                  <span className="font-medium text-slate-700">
                    Year {record.year}
                  </span>
                  <span className="tabular-nums text-slate-600">
                    ${record.sales.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}


