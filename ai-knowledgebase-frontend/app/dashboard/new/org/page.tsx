"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Building2, Shield, Upload } from "lucide-react";

export default function CreateOrganizationDashboardPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_GATEWAY_URL ||
        process.env.API_GATEWAY_URL ||
        "";
      const res = await fetch(`${baseUrl}/organizations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          description,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create organization.");
      }

      router.push("/dashboard/orgs");
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-section-bg pb-32 pt-8 sm:pt-10 relative">
      <div className="container-main max-w-6xl">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-lighter">
          <Link href="/dashboard" className="hover:text-text-dark">
            Dashboard
          </Link>
          <span>/</span>
          <Link href="/dashboard/orgs" className="hover:text-text-dark">
            Organizations
          </Link>
          <span>/</span>
          <span className="text-text-medium font-medium">New</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Left Column - Form */}
          <form id="create-org-form" onSubmit={handleSubmit}>
            {/* Header */}
            <div className="mb-10 flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Building2 size={30} />
              </div>
              <div>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
                  Create Organization
                </h1>
                <p className="text-sm leading-relaxed text-text-light sm:text-base">
                  Create a new organization to manage your projects, team and billing in one place.
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {error && (
                <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Organization Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-text-dark">
                  Organization Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Enter organization name"
                  className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
                <p className="mt-1.5 text-xs text-text-lighter">
                  This is the name of your organization.
                </p>
              </div>

              {/* Organization Slug */}
              <div>
                <label className="mb-2 block text-sm font-bold text-text-dark">
                  Organization Slug
                </label>
                <div className="flex h-12 items-center overflow-hidden rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                  <span className="flex h-full items-center border-r border-border bg-section-bg px-4 text-sm text-text-lighter select-none whitespace-nowrap">
                    knowmatrix.ai/
                  </span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="your-org-slug"
                    className="h-full min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter"
                  />
                </div>
                <p className="mt-1.5 text-xs text-text-lighter">
                  This will be your organization&apos;s unique URL.
                </p>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-bold text-text-dark">
                  Description <span className="font-normal text-text-lighter">(Optional)</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your organization"
                  rows={3}
                  className="w-full resize-y rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
                <p className="mt-1.5 text-xs text-text-lighter">
                  Briefly describe your organization or what it does.
                </p>
              </div>

              {/* Logo Upload */}
              <div>
                <label className="mb-2 block text-sm font-bold text-text-dark">
                  Organization Logo <span className="font-normal text-text-lighter">(Optional)</span>
                </label>
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-white py-8 transition-colors hover:bg-section-bg">
                  <button type="button" className="btn btn-secondary h-10 px-4 text-sm mb-3 rounded-md border-border text-text-dark bg-white shadow-sm font-medium">
                    <Upload size={16} className="text-primary" />
                    Upload logo
                  </button>
                  <p className="text-xs text-text-lighter">PNG, JPG or SVG. Max size 2MB.</p>
                </div>
              </div>
            </div>
          </form>

          {/* Right Column - Sidebar */}
          <div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-8 text-base font-bold text-text-dark">What&apos;s next?</h2>

              <div className="relative mb-10 space-y-8 before:absolute before:left-4 before:top-4 before:-bottom-4 before:w-[2px] before:bg-border">
                {/* Step 1 */}
                <div className="relative flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white z-10 ring-4 ring-white">
                    1
                  </div>
                  <div className="pt-1.5">
                    <h3 className="mb-1.5 text-sm font-bold text-text-dark">Create Organization</h3>
                    <p className="text-sm leading-relaxed text-text-light">
                      Set up your organization details and preferences.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-section-bg text-text-lighter text-xs font-bold z-10 ring-4 ring-white border border-border">
                    2
                  </div>
                  <div className="pt-1.5">
                    <h3 className="mb-1.5 text-sm font-bold text-text-medium">Invite Members</h3>
                    <p className="text-sm leading-relaxed text-text-lighter">
                      Invite your team members to collaborate.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-section-bg text-text-lighter text-xs font-bold z-10 ring-4 ring-white border border-border">
                    3
                  </div>
                  <div className="pt-1.5">
                    <h3 className="mb-1.5 text-sm font-bold text-text-medium">Create Project</h3>
                    <p className="text-sm leading-relaxed text-text-lighter">
                      Create your first project and start building your knowledge base.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Alert */}
              <div className="flex items-start gap-3 rounded-xl bg-primary-lighter p-4">
                <div className="mt-0.5 shrink-0 text-primary">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold text-text-dark">Your data is secure</h4>
                  <p className="text-xs leading-relaxed text-text-light">
                    We use enterprise-grade security to protect your data and ensure privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-white p-4 sm:px-8">
        <div className="container-main mx-auto flex max-w-6xl items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push("/dashboard/orgs")}
            className="btn btn-secondary h-12 px-6"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="create-org-form"
            disabled={loading}
            className="btn btn-primary h-12 px-8 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating..." : "Create Organization"}
          </button>
        </div>
      </div>
    </div>
  );
}