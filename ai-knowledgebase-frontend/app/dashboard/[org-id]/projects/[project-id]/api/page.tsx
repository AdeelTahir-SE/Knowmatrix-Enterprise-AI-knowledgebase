"use client";

import React from "react";
import { Plus, Copy, MoreHorizontal, Bookmark, Activity, ChevronDown } from "lucide-react";

export default function ApiPage() {
  const apiKeys = [
    {
      name: "Production Key",
      key: "kmx_live_******************dr3a",
      created: "May 20, 2024",
      lastUsed: "May 26, 2024",
      status: "Active",
    },
    {
      name: "Development Key",
      key: "kmx_dev_******************zb7c",
      created: "May 18, 2024",
      lastUsed: "May 25, 2024",
      status: "Active",
    },
    {
      name: "Testing Key",
      key: "kmx_test_******************7ebe",
      created: "May 15, 2024",
      lastUsed: "May 20, 2024",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-10">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">API</h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your API keys and access the KnowMatrix API.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100">
            <Bookmark size={16} className="text-gray-500" />
            API Documentation
          </button>
          
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
            <Activity size={16} className="text-gray-500" />
            View Usage
          </button>
          
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
            <Plus size={16} />
            Generate API Key
          </button>

          <div className="ml-2 flex items-center gap-1 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
              A
            </div>
            <ChevronDown size={14} className="text-indigo-700" />
          </div>
        </div>
      </div>

      {/* API Keys Card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">API Keys</h2>
            <p className="mt-1 text-sm text-gray-500">
              Use API keys to authenticate your requests to the KnowMatrix API.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
            <Plus size={16} />
            Generate API Key
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500">
                <th className="pb-4 pr-6">Name</th>
                <th className="pb-4 pr-6">Key</th>
                <th className="pb-4 pr-6">Created</th>
                <th className="pb-4 pr-6">Last Used</th>
                <th className="pb-4 pr-6">Status</th>
                <th className="pb-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {apiKeys.map((item, idx) => (
                <tr key={idx} className="group transition-colors hover:bg-gray-50/50">
                  <td className="py-5 pr-6 text-sm font-bold text-gray-900">
                    {item.name}
                  </td>
                  <td className="py-5 pr-6 text-sm font-medium text-gray-900">
                    <div className="flex items-center gap-2 font-mono">
                      {item.key}
                      <button className="text-gray-400 transition-colors hover:text-indigo-600">
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="py-5 pr-6 text-sm font-bold text-gray-700">
                    {item.created}
                  </td>
                  <td className="py-5 pr-6 text-sm font-bold text-gray-700">
                    {item.lastUsed}
                  </td>
                  <td className="py-5 pr-6">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                        item.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-5 text-center">
                    <button className="inline-flex items-center justify-center text-gray-400 transition-colors hover:text-gray-900">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
