"use client";

import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Info,
  Save,
  Download,
  Play,
  Copy,
  Plus,
  Filter,
  RotateCcw,
  FileText,
  Globe,
  Database,
  Scissors,
  RefreshCw,
  Users,
  BarChart3,
  FileBox
} from "lucide-react";

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("raw-context");

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Left Configuration Sidebar */}
      <aside className="w-80 shrink-0 border-r border-gray-200 bg-white p-6 overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
            Configuration
          </h2>
          <ChevronUp size={16} className="text-gray-400" />
        </div>

        <div className="space-y-6">
          {/* Model */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Model
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm font-semibold text-gray-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                <option>gpt-4o</option>
                <option>gpt-3.5-turbo</option>
                <option>claude-3-opus</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Retrieval Strategy */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Retrieval Strategy
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm font-semibold text-gray-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                <option>Hybrid Search</option>
                <option>Semantic Search</option>
                <option>Keyword Search</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Top K */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-sm font-bold text-gray-900">Top K</label>
              <Info size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="20"
                defaultValue="10"
                className="h-1 flex-1 appearance-none rounded-full bg-gray-200 accent-indigo-600"
              />
              <input
                type="number"
                defaultValue="10"
                className="w-16 rounded-lg border border-gray-200 px-2 py-1 text-center text-sm font-semibold text-gray-700 shadow-sm"
              />
            </div>
          </div>

          {/* Reranking */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <label className="text-sm font-bold text-gray-900">Reranking</label>
                <Info size={14} className="text-gray-400" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-indigo-100 bg-indigo-50/50 p-3">
              <span className="text-sm font-semibold text-gray-700">Enabled</span>
              <div className="relative h-5 w-9 rounded-full bg-indigo-600 shadow-inner">
                <div className="absolute bottom-0.5 right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all"></div>
              </div>
            </div>
          </div>

          {/* Reranker Model */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-900">
              Reranker Model
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm font-semibold text-gray-700 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                <option>bge-reranker-large</option>
                <option>cohere-rerank-v3</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Score Threshold */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-sm font-bold text-gray-900">Score Threshold</label>
              <Info size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue="0.30"
                className="h-1 flex-1 appearance-none rounded-full bg-gray-200 accent-indigo-600"
              />
              <input
                type="number"
                step="0.01"
                defaultValue="0.30"
                className="w-16 rounded-lg border border-gray-200 px-2 py-1 text-center text-sm font-semibold text-gray-700 shadow-sm"
              />
            </div>
          </div>

          {/* Temperature */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-sm font-bold text-gray-900">Temperature</label>
              <Info size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                defaultValue="0.2"
                className="h-1 flex-1 appearance-none rounded-full bg-gray-200 accent-indigo-600"
              />
              <input
                type="number"
                step="0.1"
                defaultValue="0.2"
                className="w-16 rounded-lg border border-gray-200 px-2 py-1 text-center text-sm font-semibold text-gray-700 shadow-sm"
              />
            </div>
          </div>

          {/* Max Tokens */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-sm font-bold text-gray-900">Max Tokens</label>
              <Info size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="4096"
                defaultValue="1024"
                className="h-1 flex-1 appearance-none rounded-full bg-gray-200 accent-indigo-600"
              />
              <input
                type="number"
                defaultValue="1024"
                className="w-20 rounded-lg border border-gray-200 px-2 py-1 text-center text-sm font-semibold text-gray-700 shadow-sm"
              />
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Metadata Filters */}
          <div>
            <div className="mb-3 flex cursor-pointer items-center justify-between rounded-lg border border-indigo-100 bg-white px-3 py-2 shadow-sm">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-600">
                  Metadata Filters
                </span>
              </div>
              <ChevronDown size={16} className="text-indigo-600" />
            </div>
            
            <button className="mb-3 w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-50/50 py-2.5 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50">
              <Plus size={16} />
              Add Filter
            </button>
            
            <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
              <RotateCcw size={16} />
              Reset Configuration
            </button>
          </div>
        </div>
      </aside>

      {/* Main Playground Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">Playground</h1>
              <button className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                <Plus size={14} />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                <Save size={16} className="text-gray-500" />
                Save
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                <Download size={16} className="text-gray-500" />
                Export
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
                <Play size={16} className="fill-white" />
                Run
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {/* Your Query Box */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
              <div className="px-5 py-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  Your Query
                </h3>
              </div>
              <div className="flex min-h-[100px]">
                <div className="flex w-10 flex-col items-center border-r border-gray-100 bg-gray-50 py-4 text-xs text-gray-400 font-mono">
                  <span>1</span>
                </div>
                <div className="flex-1 p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    What are the key features of the system?
                  </p>
                </div>
              </div>
            </div>

            {/* Response Box */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  Response
                </h3>
                <span className="text-xs font-semibold text-gray-500">
                  812 tokens • 1.24s
                </span>
              </div>
              <div className="p-5">
                <p className="mb-4 text-sm font-medium text-gray-900">
                  The system includes the following key features:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                      <Database size={14} />
                    </div>
                    <p className="text-sm text-gray-900 pt-0.5">
                      <span className="font-bold">Data ingestion</span> from multiple sources
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                      <Scissors size={14} />
                    </div>
                    <p className="text-sm text-gray-900 pt-0.5">
                      <span className="font-bold">Vector-based</span> semantic search
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                      <RefreshCw size={14} />
                    </div>
                    <p className="text-sm text-gray-900 pt-0.5">
                      <span className="font-bold">Real-time</span> data updates
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                      <Users size={14} />
                    </div>
                    <p className="text-sm text-gray-900 pt-0.5">
                      <span className="font-bold">Role-based</span> access control
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                      <BarChart3 size={14} />
                    </div>
                    <p className="text-sm text-gray-900 pt-0.5">
                      <span className="font-bold">Analytics</span> and monitoring dashboard
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sources Box */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  Sources
                </h3>
                <span className="text-xs font-semibold text-gray-500">
                  4 sources
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 bg-white">
                      <th className="px-5 py-4 w-1/4">Source</th>
                      <th className="px-5 py-4 w-[10%]">Chunk</th>
                      <th className="px-5 py-4 w-[10%]">Score</th>
                      <th className="px-5 py-4 w-1/4">Page / Section</th>
                      <th className="px-5 py-4">Preview</th>
                      <th className="px-5 py-4 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 bg-white">
                    <tr className="transition-colors hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-red-500" />
                          <span className="text-sm font-semibold text-gray-900">system_overview.pdf</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">4</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-600">
                          0.92
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">Page 4</td>
                      <td className="px-5 py-4">
                        <p className="truncate text-sm font-medium text-gray-600 max-w-[200px]">
                          The system supports ingen from...
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <ChevronRight size={16} className="text-gray-400" />
                      </td>
                    </tr>
                    
                    <tr className="transition-colors hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <FileBox size={16} className="text-blue-500" />
                          <span className="text-sm font-semibold text-gray-900">features_spec.docx</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">2</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-600">
                          0.87
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">Page 2</td>
                      <td className="px-5 py-4">
                        <p className="truncate text-sm font-medium text-gray-600 max-w-[200px]">
                          Key features include semantic search...
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <ChevronRight size={16} className="text-gray-400" />
                      </td>
                    </tr>

                    <tr className="transition-colors hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Globe size={16} className="text-blue-600" />
                          <span className="text-sm font-semibold text-gray-900">docs.knowmatrix.com</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">1.2</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-600">
                          0.75
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">Section 1.2</td>
                      <td className="px-5 py-4">
                        <p className="truncate text-sm font-medium text-gray-600 max-w-[200px]">
                          KnowMatrix provides a comprehensive...
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <ChevronRight size={16} className="text-gray-400" />
                      </td>
                    </tr>

                    <tr className="transition-colors hover:bg-gray-50/50">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-red-500" />
                          <span className="text-sm font-semibold text-gray-900">ingestion_guide.pdf</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">3</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-600">
                          0.68
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">Page 3</td>
                      <td className="px-5 py-4">
                        <p className="truncate text-sm font-medium text-gray-600 max-w-[200px]">
                          The ingestion pipeline consists of...
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <ChevronRight size={16} className="text-gray-400" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Code Box */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] overflow-hidden">
              <div className="flex items-center justify-between px-2 pt-2 pb-0 border-b border-gray-100">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("raw-context")}
                    className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors border-b-2 ${
                      activeTab === "raw-context"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    Raw Context
                  </button>
                  <button
                    onClick={() => setActiveTab("json-response")}
                    className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors border-b-2 ${
                      activeTab === "json-response"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    JSON Response
                  </button>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 mb-2 mr-2 text-xs font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                  <Copy size={14} className="text-gray-500" />
                  Copy
                </button>
              </div>
              <div className="flex font-mono text-[13px] bg-white leading-relaxed">
                {/* Line numbers */}
                <div className="flex w-12 flex-col items-center border-r border-gray-100 bg-gray-50 py-4 text-gray-400 select-none">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                </div>
                {/* Code Content */}
                <div className="flex-1 overflow-x-auto p-4">
                  <pre className="text-gray-900 m-0">
                    {`{\n`}
                    {`  "answer": `}<span className="text-emerald-600">"The system includes the following key features: Data ingestion from multiple sources,\n             vector-based semantic search, real-time data updates, role-based access control, and\n             analytics and monitoring dashboard."</span>{`,\n`}
                    {`  "sources": `}<span className="text-gray-900">{`[...],`}</span>{`\n`}
                    {`  "usage": {\n`}
                    {`    "prompt_tokens": `}<span className="text-blue-600">812</span>{`,\n`}
                    {`    "completion_tokens": `}<span className="text-blue-600">256</span>{`\n`}
                    {`  }\n`}
                    {`}`}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
