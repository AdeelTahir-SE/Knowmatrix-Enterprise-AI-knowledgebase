"use client";

import Link from "next/link";
import { Folder, MoreVertical, Plus, Search, Users } from "lucide-react";

// Mock data based on the screenshot
const mockOrgs = [
  {
    id: "org_1",
    name: "Acme Corporation",
    role: "Owner",
    avatarBg: "bg-primary/20",
    avatarColor: "text-primary",
    initial: "A",
    dateLabel: "Created on",
    date: "May 12, 2024",
    members: 12,
    projects: 5,
    lastActive: "2 hours ago",
  },
  {
    id: "org_2",
    name: "TechFlow Solutions",
    role: "Member",
    avatarBg: "bg-green-100",
    avatarColor: "text-green-700",
    initial: "T",
    dateLabel: "Joined on",
    date: "Apr 28, 2024",
    members: 8,
    projects: 3,
    lastActive: "1 day ago",
  },
  {
    id: "org_3",
    name: "DataVerse Labs",
    role: "Owner",
    avatarBg: "bg-orange-100",
    avatarColor: "text-orange-700",
    initial: "D",
    dateLabel: "Created on",
    date: "Mar 15, 2024",
    members: 6,
    projects: 2,
    lastActive: "3 days ago",
  },
  {
    id: "org_4",
    name: "Nexus AI",
    role: "Member",
    avatarBg: "bg-blue-100",
    avatarColor: "text-blue-700",
    initial: "N",
    dateLabel: "Joined on",
    date: "Feb 2, 2024",
    members: 15,
    projects: 7,
    lastActive: "5 days ago",
  },
];

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-section-bg pb-20 pt-8 sm:pt-10">
      <div className="container-main max-w-6xl">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-lighter">
          <Link href="/dashboard" className="hover:text-text-dark">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-text-medium font-medium">Organizations</span>
        </div>

        {/* Header Section */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
              Organizations
            </h1>
            <p className="text-sm text-text-light">
              Manage all organizations you are a part of or have created.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-lighter"
              />
              <input
                type="text"
                placeholder="Search organizations..."
                className="h-11 w-full rounded-lg border border-border bg-white pl-10 pr-4 text-sm text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <Link href="/dashboard/new/org" className="btn btn-primary h-11 shrink-0">
              <Plus size={18} />
              New Organization
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex items-center gap-6 border-b border-border text-sm font-semibold text-text-medium">
          <button className="border-b-2 border-primary pb-3 text-primary">
            All Organizations
          </button>
          <button className="border-b-2 border-transparent pb-3 hover:text-text-dark">
            Owned by me
          </button>
          <button className="border-b-2 border-transparent pb-3 hover:text-text-dark">
            Member of
          </button>
        </div>

        {/* Organization List */}
        <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          {mockOrgs.map((org, index) => (
            <div
              key={org.id}
              className={`flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:justify-between ${
                index !== mockOrgs.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Info */}
              <div className="flex items-center gap-4 sm:w-[35%]">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${org.avatarBg} ${org.avatarColor}`}
                >
                  {org.initial}
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-bold text-text-dark">{org.name}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        org.role === "Owner"
                          ? "bg-primary/10 text-primary"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {org.role}
                    </span>
                  </div>
                  <p className="text-xs text-text-light">
                    {org.dateLabel} {org.date}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 sm:w-[40%] sm:justify-center">
                <div className="flex items-center gap-3 text-text-dark">
                  <div className="text-text-lighter">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{org.members}</p>
                    <p className="text-xs text-text-light">Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-dark">
                  <div className="text-text-lighter">
                    <Folder size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">{org.projects}</p>
                    <p className="text-xs text-text-light">Projects</p>
                  </div>
                </div>
              </div>

              {/* Activity & Action */}
              <div className="flex items-center justify-between gap-6 sm:w-[25%] sm:justify-end">
                <div>
                  <p className="text-xs text-text-light">Last active</p>
                  <p className="text-sm font-semibold text-text-dark">{org.lastActive}</p>
                </div>
                <button className="text-text-lighter hover:text-text-dark">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-6 text-sm text-text-light">
          Showing 1 to 4 of 4 organizations
        </div>
      </div>
    </div>
  );
}
