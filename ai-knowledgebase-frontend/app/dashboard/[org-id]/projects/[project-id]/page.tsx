import React from "react";
import {
  Calendar,
  RefreshCw,
  FileText,
  Boxes,
  MessageSquareText,
  Database,
  Globe,
  MessageSquare,
  Plug,
  Key,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const statCards = [
  {
    label: "Documents Ingested",
    value: "12,458",
    change: "+18.6%",
    icon: FileText,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    label: "Chunks Created",
    value: "98,213",
    change: "+24.1%",
    icon: Boxes,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    label: "Queries",
    value: "5,671",
    change: "+12.4%",
    icon: MessageSquareText,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    label: "Storage Used",
    value: "23.4 GB",
    change: "+8.7%",
    icon: Database,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const ingestionSources = [
  { source: "PDF Uploads", docs: "1,248", status: "Success", date: "May 26, 2024" },
  { source: "Web Crawling", docs: "534", status: "Success", date: "May 25, 2024" },
  { source: "Database (Postgres)", docs: "2,105", status: "Success", date: "May 24, 2024" },
  { source: "Notion Integration", docs: "842", status: "Success", date: "May 24, 2024" },
  { source: "Manual Text", docs: "67", status: "Success", date: "May 23, 2024" },
];

const recentActivity = [
  {
    title: "Ingestion completed from Web Crawling",
    desc: "534 documents added",
    time: "2h ago",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "File upload completed",
    desc: "annual_report.pdf",
    time: "5h ago",
    icon: FileText,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Query executed in Playground",
    desc: "How does the system handle data updates?",
    time: "6h ago",
    icon: MessageSquare,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    title: "Integration connected",
    desc: "PostgreSQL Database",
    time: "1d ago",
    icon: Plug,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "API key generated",
    desc: "Production key",
    time: "2d ago",
    icon: Key,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

export default function ProjectOverviewPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Welcome back, Adeel <span className="text-xl">👋</span>
          </h1>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Here's what's happening with your project.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            <Calendar size={16} className="text-gray-500" />
            May 20 - May 26, 2024
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            <RefreshCw size={16} className="text-gray-500" />
            Refresh
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-600">{card.label}</p>
                  <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                    {card.value}
                  </p>
                  <p className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <ArrowUp size={14} strokeWidth={3} />
                    {card.change} <span className="font-semibold text-gray-400">vs last 7 days</span>
                  </p>
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.bgColor}`}
                >
                  <Icon size={24} className={card.color} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Ingestion Summary Panel */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900">Ingestion Summary</h2>
            <Link href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              View all
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 text-xs font-bold text-gray-400">
                  <th className="pb-3 font-medium">Source</th>
                  <th className="pb-3 font-medium">Documents</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Last Ingested</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {ingestionSources.map((row, idx) => (
                  <tr key={idx} className="group transition-colors hover:bg-gray-50/50">
                    <td className="py-4 text-sm font-bold text-gray-700">{row.source}</td>
                    <td className="py-4 text-sm font-bold text-gray-900">{row.docs}</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm font-semibold text-gray-500">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity Panel */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900">Recent Activity</h2>
            <Link href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              View all
            </Link>
          </div>

          <div className="relative pl-2">
            {/* Vertical Line */}
            <div className="absolute bottom-4 left-[27px] top-4 w-[2px] bg-gray-100"></div>

            <div className="space-y-7">
              {recentActivity.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <div key={idx} className="relative flex gap-4">
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-4 border-white ${activity.bgColor} shadow-sm`}
                    >
                      <Icon size={18} className={activity.color} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-1 items-start justify-between gap-4 pt-1">
                      <div>
                        <p className="text-sm font-bold text-gray-900">{activity.title}</p>
                        <p className="mt-0.5 text-sm font-medium text-gray-500">{activity.desc}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-gray-400">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}