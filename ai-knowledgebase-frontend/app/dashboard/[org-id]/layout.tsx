import { ReactNode } from "react";
import { Sidebar } from "../../components/dashboard/Sidebar";

export default function OrganizationDashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { "org-id": string };
}) {
  return (
    <div className="min-h-screen bg-white lg:pl-64">
      <Sidebar orgId={params["org-id"]} />
      <main className="min-h-screen pb-24">
        {children}
      </main>
    </div>
  );
}
