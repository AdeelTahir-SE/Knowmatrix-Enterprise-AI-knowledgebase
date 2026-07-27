import { ReactNode } from "react";
import { ProjectSidebar } from "@/app/components/project/ProjectSidebar";

export default async function ProjectDashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ "org-id": string, "project-id": string }>;
}) {
  const { "org-id": orgId, "project-id": projectId } = await params;

  return (
    <>
      <ProjectSidebar orgId={orgId} projectId={projectId} />
      <div className="min-h-screen bg-white">
        {/* We don't need lg:pl-64 here if it's already inside a layout that has lg:pl-64. 
            Wait, if it IS inside the main layout, rendering ProjectSidebar (which is fixed and w-64) 
            will just overlap the main Sidebar, and the content will be in the right place because 
            the parent layout already provides lg:pl-64! 
            Let's test this assumption. */}
        {children}
      </div>
    </>
  );
}
