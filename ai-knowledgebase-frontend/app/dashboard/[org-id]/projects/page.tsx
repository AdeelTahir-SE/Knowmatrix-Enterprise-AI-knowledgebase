"use client";

import { use } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  CircleDashed,
  Code2,
  FileText,
  FolderOpen,
  Globe,
  GraduationCap,
  Grid,
  List,
  MoreVertical,
  Plus,
  Search,
} from "lucide-react";

// Mock data matching the screenshot
const mockProjects = [
  {
    id: "proj_1",
    name: "HR Knowledge Base",
    isDefault: true,
    description: "Internal documentation, policies, and HR guides.",
    icon: FolderOpen,
    iconBg: "bg-purple-100",
    iconColor: "text-primary",
    avatars: ["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"],
    updatedAt: "2 hours ago",
    docs: 245,
    status: "Ready",
  },
  {
    id: "proj_2",
    name: "Product Documentation",
    isDefault: false,
    description: "Product manuals, guides and technical documentation.",
    icon: GraduationCap,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    avatars: ["/avatars/4.png", "/avatars/5.png"],
    updatedAt: "1 day ago",
    docs: 523,
    status: "Ready",
  },
  {
    id: "proj_3",
    name: "Website Knowledge Base",
    isDefault: false,
    description: "Knowledge base for help center and website content.",
    icon: Globe,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    avatars: ["/avatars/6.png"],
    updatedAt: "3 days ago",
    docs: 132,
    status: "Ready",
  },
  {
    id: "proj_4",
    name: "API Reference Docs",
    isDefault: false,
    description: "API reference and developer documentation.",
    icon: Code2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    avatars: ["/avatars/7.png", "/avatars/8.png"],
    updatedAt: "5 days ago",
    docs: 98,
    status: "Indexing",
  },
];

export default function ProjectsPage({ params }: { params: Promise<{ "org-id": string }> }) {
  const { "org-id": orgId } = use(params);

  return (
    <div className="pt-8 sm:pt-10 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-2 text-sm text-text-lighter">
        <Link href="/dashboard" className="hover:text-text-dark">
          Dashboard
        </Link>
        <span>/</span>
        <span className="hover:text-text-dark cursor-pointer">
          Acme Corporation
        </span>
        <span>/</span>
        <span className="text-text-medium font-medium">Projects</span>
      </div>

      {/* Header Section */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
            Projects
          </h1>
          <p className="text-sm text-text-light">
            All projects in Acme Corporation
          </p>
        </div>
        <Link
          href={`/dashboard/new/project?orgId=${orgId}`}
          className="btn btn-primary h-11 shrink-0"
        >
          <Plus size={18} />
          New Project
        </Link>
      </div>

      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative w-full sm:flex-1">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-lighter"
          />
          <input
            type="text"
            placeholder="Search projects..."
            className="h-11 w-full rounded-lg border border-border bg-white pl-10 pr-4 text-sm text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {/* Filters and Toggles */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative">
            <select className="h-11 appearance-none rounded-lg border border-border bg-white pl-4 pr-10 text-sm font-medium text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10">
              <option>All Projects</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-lighter"
            />
          </div>

          <div className="flex h-11 items-center rounded-lg border border-border bg-white p-1">
            <button className="flex h-full w-10 items-center justify-center rounded bg-section-bg text-text-dark shadow-sm">
              <Grid size={18} />
            </button>
            <button className="flex h-full w-10 items-center justify-center rounded text-text-lighter hover:text-text-dark">
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
          >
            <div className="flex items-start justify-between">
              {/* Left: Icon & Info */}
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${project.iconBg} ${project.iconColor}`}
                >
                  <project.icon size={24} />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-base font-bold text-text-dark">
                      {project.name}
                    </h3>
                    {project.isDefault && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-light">{project.description}</p>
                </div>
              </div>

              {/* Right: Avatars & Menu */}
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex -space-x-2">
                  {project.avatars.map((avatar, i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-bold text-blue-800"
                    >
                      U{i + 1}
                    </div>
                  ))}
                </div>
                <button className="text-text-lighter hover:text-text-dark">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-5 flex items-center gap-8 border-t border-border-light pt-4 text-xs font-medium text-text-light">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-section-bg flex items-center justify-center">
                   <div className="h-1.5 w-1.5 rounded-full bg-text-lighter" />
                </div>
                Updated {project.updatedAt}
              </div>
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-text-lighter" />
                {project.docs} Documents
              </div>
              <div className="flex items-center gap-2">
                {project.status === "Ready" ? (
                  <CheckCircle2 size={14} className="text-text-lighter" />
                ) : (
                  <CircleDashed size={14} className="text-primary animate-spin-slow" />
                )}
                {project.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="mt-8 flex items-center justify-between text-sm text-text-light">
        <div>Showing 1 to 4 of 4 projects</div>
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded border border-border bg-white text-text-lighter hover:bg-section-bg">
            &lt;
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded bg-primary font-bold text-white">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-border bg-white text-text-lighter hover:bg-section-bg">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}