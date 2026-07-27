"use client";

import React from "react";
import { CreditCard, CheckCircle2, Download, Zap, BarChart2 } from "lucide-react";

export default function BillingPage() {
  // Simulated usage data for a 30-day period
  const usageData = Array.from({ length: 30 }).map((_, i) => {
    // Generate some fake "realistic" fluctuating data
    const base = 50;
    const random = Math.random() * 40;
    const isWeekend = i % 7 === 0 || i % 7 === 6;
    const value = isWeekend ? base * 0.4 + random : base + random;
    return { day: i + 1, value: Math.floor(value) };
  });

  const maxValue = Math.max(...usageData.map((d) => d.value));

  const invoices = [
    { id: "INV-2024-001", date: "May 01, 2024", amount: "$99.00", status: "Paid" },
    { id: "INV-2024-002", date: "Apr 01, 2024", amount: "$99.00", status: "Paid" },
    { id: "INV-2024-003", date: "Mar 01, 2024", amount: "$99.00", status: "Paid" },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Billing & Usage</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your subscription plan, payment methods, and monitor API usage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan Card */}
        <div className="lg:col-span-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Current Plan
            </h2>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-bold text-indigo-700">
              Pro
            </span>
          </div>
          
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-gray-900">$99</span>
            <span className="text-sm font-semibold text-gray-500">/ month</span>
          </div>

          <div className="space-y-3 mb-8 flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="font-medium">100,000 API calls / mo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="font-medium">50GB Vector Storage</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span className="font-medium">Up to 10 Team Members</span>
            </div>
          </div>

          <button className="w-full rounded-lg bg-indigo-50 px-4 py-2.5 text-sm font-bold text-indigo-700 transition-colors hover:bg-indigo-100">
            Upgrade Plan
          </button>
        </div>

        {/* Usage Graph Card */}
        <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <BarChart2 size={20} className="text-indigo-600" />
                API Usage (Last 30 Days)
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                You have used <span className="font-bold text-gray-900">45,231</span> of your 100,000 requests.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">45%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Utilized</div>
            </div>
          </div>

          {/* Simple CSS Bar Chart */}
          <div className="h-48 flex items-end gap-1 sm:gap-2 mt-8 border-b border-gray-100 pb-2">
            {usageData.map((data, idx) => (
              <div key={idx} className="group relative flex-1 flex flex-col items-center justify-end h-full">
                {/* Tooltip */}
                <div className="absolute -top-8 hidden rounded bg-gray-900 px-2 py-1 text-xs font-bold text-white group-hover:block z-10 whitespace-nowrap">
                  {data.value * 100} calls
                </div>
                {/* Bar */}
                <div 
                  className="w-full rounded-t-sm bg-indigo-100 transition-all group-hover:bg-indigo-600"
                  style={{ height: `${(data.value / maxValue) * 100}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Method */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h2>
          <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-14 items-center justify-center rounded bg-white border border-gray-200 shadow-sm">
                <CreditCard size={24} className="text-gray-700" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Visa ending in 4242</p>
                <p className="text-xs text-gray-500">Expires 12/2025</p>
              </div>
            </div>
            <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
              Update
            </button>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Billing History</h2>
            <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
              View All
            </button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50">
                <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500">
                  <th className="px-6 py-3">Invoice</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 bg-white">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="transition-colors hover:bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-gray-900">{inv.id}</div>
                      <div className="text-xs text-gray-500">{inv.date}</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">{inv.amount}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <Download size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
