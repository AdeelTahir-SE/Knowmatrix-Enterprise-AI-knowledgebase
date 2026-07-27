"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  PieChart,
  SquareTerminal,
  AppWindow,
  Plug,
} from "lucide-react";

export function ProjectSidebar({ orgId, projectId }: { orgId: string, projectId: string }) {
  const pathname = usePathname();

  const projectLinks = [
    {
      href: `/dashboard/${orgId}/projects/${projectId}`,
      label: "Overview",
      icon: PieChart,
    },
    {
      href: `/dashboard/${orgId}/projects/${projectId}/playground`,
      label: "Playground",
      icon: SquareTerminal,
    },
    {
      href: `/dashboard/${orgId}/projects/${projectId}/api`,
      label: "API",
      icon: AppWindow,
    },
    {
      href: `/dashboard/${orgId}/projects/${projectId}/integrations`,
      label: "Integrations",
      icon: Plug,
    },
  ];

  return (
    <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-64 flex-col border-r border-border bg-white lg:flex">
      {/* Top Logo */}
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="KnowMatrix"
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-bold text-text-dark">KnowMatrix</span>
        </Link>
      </div>

      {/* Org Switcher & Main Nav */}
      <div className="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar">
        {/* Org Switcher / Details */}
        <div className="mb-6 flex items-center justify-between rounded-lg p-3 hover:bg-section-bg cursor-pointer border border-border/50 bg-section-bg/50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-sm font-bold text-primary">
              A
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-text-dark">Acme Corporation</p>
              <p className="text-xs text-text-light">Owner</p>
            </div>
          </div>
          <ChevronDown size={16} className="text-text-lighter" />
        </div>

        {/* Nav Links */}
        <nav className="space-y-2">
          {projectLinks.map((link) => {
            // Exact match for overview, startsWith for subpages
            const isActive = link.label === "Overview" 
              ? pathname === link.href 
              : pathname.startsWith(link.href);
              
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-indigo-50/70"
                    : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-white border border-gray-200/80 text-gray-600 shadow-sm"
                  }`}
                >
                  <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={`font-medium text-sm ${
                    isActive ? "text-indigo-700" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-6 px-4">
          <div className="border-t border-gray-100"></div>
        </div>
      </div>

      {/* Bottom User Profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl bg-section-bg p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            AT
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-text-dark leading-tight">Adeel Tahir</p>
            <p className="truncate text-xs text-text-light">adeel@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
