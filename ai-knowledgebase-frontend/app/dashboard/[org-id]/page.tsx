import { notFound, redirect } from "next/navigation";

export default async function OrganizationRedirectPage({ params }: { params: { "org-id": string } }) {
  const orgId = params["org-id"];
  const baseUrl = process.env.API_GATEWAY_URL || process.env.NEXT_PUBLIC_API_GATEWAY_URL || "";

  try {
    const res = await fetch(`${baseUrl}/organizations/${orgId}`, {
      // Depending on your API, you might need cache: "no-store" or to pass auth headers
      cache: "no-store", 
    });

    if (!res.ok) {
      return notFound();
    }
  } catch (err) {
    // If the fetch fails entirely (network error, etc.), we can also fallback to 404
    return notFound();
  }

  redirect(`/dashboard/${orgId}/projects`);
}
