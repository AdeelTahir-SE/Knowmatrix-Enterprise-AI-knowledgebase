import { ReactNode } from "react";
import { Sidebar } from "../../components/organization/Sidebar";

export default async function OrganizationDashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ "org-id": string }>;
}) {
  const { "org-id": orgId } = await params;

  return (
    <div className="min-h-screen bg-white lg:pl-64">
      <Sidebar orgId={orgId} />
      <main className="min-h-screen pb-24">
        {children}
      </main>
    </div>
  );
}
