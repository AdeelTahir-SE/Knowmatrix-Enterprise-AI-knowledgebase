import { ReactNode } from "react";
import { ProjectSidebar } from "../../../components/ProjectSidebar";

export default async function ProjectDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border bg-white lg:flex">
        {/* We can include a header or logo here if needed, or maybe ProjectSidebar handles its own header */}
        <div className="flex h-16 shrink-0 items-center px-6 border-b border-border mb-4">
          <span className="text-xl font-bold text-text-dark">Project Settings</span>
        </div>
        <ProjectSidebar />
      </aside>
      <main className="min-h-screen lg:pl-64 pb-24">
        {children}
      </main>
    </div>
  );
}
