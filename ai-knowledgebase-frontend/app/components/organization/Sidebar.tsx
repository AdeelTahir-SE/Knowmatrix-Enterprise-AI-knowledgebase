"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  ChevronDown,
  CreditCard,
  FolderOpen,
  Home,
  Key,
  Puzzle,
  Settings,
  Users,
} from "lucide-react";

export function Sidebar({ orgId }: { orgId: string }) {
  const pathname = usePathname();

  const mainLinks = [
    {
      href: `/dashboard/${orgId}/projects`,
      label: "Projects",
      icon: FolderOpen,
    },
    { href: `/dashboard/${orgId}/team`, label: "Team", icon: Users },
    { href: `/dashboard/${orgId}/billing`, label: "Billing", icon: CreditCard },
    { href: `/dashboard/${orgId}/organization`, label: "Organization", icon: Building2 },
    { href: `/dashboard/${orgId}/settings`, label: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-64 flex-col border-r border-border bg-white lg:flex">
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
        <nav className="space-y-1">
          {mainLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary/5 text-primary"
                    : "text-text-medium hover:bg-section-bg hover:text-text-dark"
                }`}
              >
                <link.icon size={18} className={isActive ? "text-primary" : "text-text-lighter"} />
                {link.label}
              </Link>
            );
          })}
        </nav>
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
