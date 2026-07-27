"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ArrowRight, Puzzle, Globe } from "lucide-react";
import Link from "next/link";

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const integrations = [
    {
      name: "PostgreSQL",
      description: "Sync data from your PostgreSQL databases.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/postgresql/336791" alt="PostgreSQL" className="w-8 h-8" />,
      connected: true,
    },
    {
      name: "Notion",
      description: "Ingest pages and documents from Notion.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" className="w-8 h-8" />,
      connected: true,
    },
    {
      name: "Google Drive",
      description: "Ingest files from your Google Drive.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/googledrive/0061FF" alt="Google Drive" className="w-8 h-8" />,
      connected: true,
    },
    {
      name: "Confluence",
      description: "Ingest spaces and pages from Confluence.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/confluence/172B4D" alt="Confluence" className="w-8 h-8" />,
      connected: false,
    },
    {
      name: "Slack",
      description: "Enable notifications and search in Slack.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/slack/E01E5A" alt="Slack" className="w-8 h-8" />,
      connected: true,
    },
    {
      name: "Web Crawling",
      description: "Crawl and index websites automatically.",
      icon: <Globe className="text-indigo-600 w-8 h-8" />,
      connected: true,
    },
    {
      name: "Amazon S3",
      description: "Import files from your S3 buckets.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/amazons3/E3163B" alt="Amazon S3" className="w-8 h-8" />,
      connected: false,
    },
    {
      name: "Microsoft OneDrive",
      description: "Ingest files from OneDrive.",
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/microsoftonedrive/0078D4" alt="OneDrive" className="w-8 h-8" />,
      connected: false,
    },
  ];

  const displayedIntegrations = 
    activeTab === "connected" 
      ? integrations.filter(i => i.connected) 
      : integrations;

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-10">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
          <p className="mt-2 text-sm text-gray-500">
            Connect KnowMatrix with your favorite tools and platforms.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
              A
            </div>
            <ChevronDown size={14} className="text-indigo-700" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-3 text-sm font-semibold transition-colors border-b-2 ${
            activeTab === "all"
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          All Integrations
        </button>
        <button
          onClick={() => setActiveTab("connected")}
          className={`px-4 py-3 text-sm font-semibold transition-colors border-b-2 ${
            activeTab === "connected"
              ? "border-indigo-600 text-indigo-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Connected
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {displayedIntegrations.map((integration, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] min-h-[160px]"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex shrink-0 items-center justify-center">
                {integration.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                  {integration.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              {integration.connected ? (
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 size={14} className="fill-emerald-100" />
                  <span className="text-xs font-bold">Connected</span>
                </div>
              ) : (
                <div className="w-1"></div> // placeholder to keep button right aligned if no text
              )}
              
              <button 
                className={`text-xs font-bold transition-colors ${
                  integration.connected 
                    ? "text-indigo-600 hover:text-indigo-800 bg-indigo-50/50 hover:bg-indigo-50 px-3 py-1.5 rounded-md" 
                    : "text-indigo-600 hover:text-indigo-800"
                }`}
              >
                {integration.connected ? "Manage" : "Connect"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-[#F3E8FF] p-6 flex flex-col sm:flex-row items-center justify-center gap-3 border border-indigo-100/50">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
          <Puzzle size={16} />
        </div>
        <p className="text-sm font-bold text-gray-900">
          Don't see the integration you need?
        </p>
        <p className="text-sm font-medium text-gray-600">
          We're constantly adding new integrations.
        </p>
        <Link 
          href="#" 
          className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 ml-1"
        >
          Request an integration <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
