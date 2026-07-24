"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowRight, FolderOpen, Globe, Sparkles } from "lucide-react";

const llmProviders = ["Google Gemini", "OpenAI", "Anthropic", "Azure OpenAI", "AWS Bedrock"];
const modelsByProvider: Record<string, string[]> = {
  "Google Gemini": ["Gemini 1.5 Pro", "Gemini 1.5 Flash", "Gemini 2.0 Flash"],
  "OpenAI": ["GPT-4o", "GPT-4o Mini", "GPT-4 Turbo"],
  "Anthropic": ["Claude 3.5 Sonnet", "Claude 3 Opus", "Claude 3 Haiku"],
};
const embeddingModels = [
  "text-embedding-004 (Recommended)",
  "text-embedding-003-large",
  "text-embedding-003-small",
];
const regions = [
  "US East (N. Virginia)",
  "US West (Oregon)",
  "EU West (Ireland)",
];

export default function CreateProjectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orgId = searchParams.get("orgId") || "";
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form State
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [llmProvider, setLlmProvider] = useState("Google Gemini");
  const [model, setModel] = useState("Gemini 1.5 Pro");
  const [embeddingModel, setEmbeddingModel] = useState("text-embedding-004 (Recommended)");
  const [region, setRegion] = useState("US East (N. Virginia)");

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    );
  };

  const handleProviderChange = (provider: string) => {
    setLlmProvider(provider);
    setModel(modelsByProvider[provider]?.[0] || "");
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_GATEWAY_URL ||
        process.env.API_GATEWAY_URL ||
        "";
      const res = await fetch(`${baseUrl}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          description,
          llm_provider: llmProvider,
          model,
          embedding_model: embeddingModel,
          default_region: region,
          org_id: orgId,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create project.");
      }

      router.push(`/dashboard/${orgId}/projects`);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-8 sm:pt-10 px-6 sm:px-10 lg:px-12 max-w-6xl mx-auto pb-24 relative">
      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-2 text-sm text-text-lighter">
        <Link href="/dashboard" className="hover:text-text-dark">Dashboard</Link>
        <span>/</span>
        <span className="hover:text-text-dark cursor-pointer">Acme Corporation</span>
        <span>/</span>
        <Link href={`/dashboard/${orgId}/projects`} className="hover:text-text-dark">Projects</Link>
        <span>/</span>
        <span className="text-text-medium font-medium">New</span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        {/* Left Column - Stepper */}
        <div>
          <div className="relative space-y-8 before:absolute before:left-4 before:top-4 before:-bottom-4 before:w-[2px] before:bg-border">
            
            {/* Step 1 */}
            <div className="relative flex gap-4">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-white transition-colors ${step >= 1 ? "bg-primary text-white" : "bg-section-bg text-text-lighter border border-border"}`}>
                1
              </div>
              <div className="pt-1.5">
                <h3 className={`mb-1.5 text-sm font-bold ${step >= 1 ? "text-text-dark" : "text-text-medium"}`}>Project Details</h3>
                <p className={`text-sm leading-relaxed ${step >= 1 ? "text-text-light" : "text-text-lighter"}`}>
                  Basic information about your project
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-4">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-white transition-colors ${step >= 2 ? "bg-primary text-white" : "bg-section-bg text-text-lighter border border-border"}`}>
                2
              </div>
              <div className="pt-1.5">
                <h3 className={`mb-1.5 text-sm font-bold ${step >= 2 ? "text-text-dark" : "text-text-medium"}`}>AI Configuration</h3>
                <p className={`text-sm leading-relaxed ${step >= 2 ? "text-text-light" : "text-text-lighter"}`}>
                  Choose models and settings
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-4">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold z-10 ring-4 ring-white transition-colors ${step >= 3 ? "bg-primary text-white" : "bg-section-bg text-text-lighter border border-border"}`}>
                3
              </div>
              <div className="pt-1.5">
                <h3 className={`mb-1.5 text-sm font-bold ${step >= 3 ? "text-text-dark" : "text-text-medium"}`}>Review</h3>
                <p className={`text-sm leading-relaxed ${step >= 3 ? "text-text-light" : "text-text-lighter"}`}>
                  Review and create your project
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column - Form Card */}
        <div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] sm:p-10">
            
            {error && (
              <div className="mb-8 rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* --- STEP 1: Project Details --- */}
            {step === 1 && (
              <div className="animate-fade-in-up">
                <h2 className="mb-2 text-xl font-bold text-text-dark">Project Details</h2>
                <p className="mb-8 text-sm text-text-light">Let&apos;s start with the basics.</p>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">Project Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      placeholder="Enter project name"
                      className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                    <p className="mt-1.5 text-xs text-text-lighter">Give your project a friendly and descriptive name.</p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">Project Slug</label>
                    <div className="flex h-12 items-center overflow-hidden rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                      <span className="flex h-full items-center border-r border-border bg-section-bg px-4 text-sm text-text-lighter select-none whitespace-nowrap">
                        acme-corporation.knowmatrix.ai/
                      </span>
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="my-new-project"
                        className="h-full min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-text-lighter">This will be your project&apos;s unique URL.</p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">
                      Description <span className="font-normal text-text-lighter">(Optional)</span>
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us about this project. What is it for?"
                      rows={4}
                      className="w-full resize-y rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                    <p className="mt-1.5 text-xs text-text-lighter">Describe the purpose or use case of this project.</p>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-end gap-4 border-t border-border-light pt-6">
                  <button onClick={() => router.push(`/dashboard/${orgId}/projects`)} className="btn btn-secondary px-6">Cancel</button>
                  <button onClick={() => setStep(2)} disabled={!name} className="btn btn-primary px-8 disabled:opacity-50">Next <ArrowRight size={16} /></button>
                </div>
              </div>
            )}

            {/* --- STEP 2: AI Configuration --- */}
            {step === 2 && (
              <div className="animate-fade-in-up">
                <h2 className="mb-2 text-xl font-bold text-text-dark">AI Configuration</h2>
                <p className="mb-8 text-sm text-text-light">Select the models that will power your project.</p>

                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-text-dark">LLM Provider</label>
                      <div className="relative">
                        <Sparkles size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-primary" />
                        <select
                          value={llmProvider}
                          onChange={(e) => handleProviderChange(e.target.value)}
                          className="h-11 w-full appearance-none rounded-lg border border-border bg-white pl-10 pr-9 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                        >
                          {llmProviders.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                      <p className="mt-1.5 text-xs text-text-lighter">Select the model provider for chat and Q&A.</p>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-text-dark">Model</label>
                      <div className="relative">
                        <select
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          className="h-11 w-full appearance-none rounded-lg border border-border bg-white pl-4 pr-9 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                        >
                          {(modelsByProvider[llmProvider] || []).map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <p className="mt-1.5 text-xs text-text-lighter">Choose the model for generating responses.</p>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">Embedding Model</label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-primary">G</span>
                      <select
                        value={embeddingModel}
                        onChange={(e) => setEmbeddingModel(e.target.value)}
                        className="h-11 w-full appearance-none rounded-lg border border-border bg-white pl-10 pr-9 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                      >
                        {embeddingModels.map((em) => <option key={em} value={em}>{em}</option>)}
                      </select>
                    </div>
                    <p className="mt-1.5 text-xs text-text-lighter">Used to convert your documents into vectors for search.</p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-text-dark">Region</label>
                    <div className="relative">
                      <Globe size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-lighter" />
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="h-12 w-full appearance-none rounded-lg border border-border bg-white pl-11 pr-10 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                      >
                        {regions.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <p className="mt-1.5 text-xs text-text-lighter">Choose the region where your data will be stored.</p>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-border-light pt-6">
                  <button onClick={() => setStep(1)} className="btn btn-secondary px-6"><ArrowLeft size={16} /> Back</button>
                  <button onClick={() => setStep(3)} className="btn btn-primary px-8">Next <ArrowRight size={16} /></button>
                </div>
              </div>
            )}

            {/* --- STEP 3: Review --- */}
            {step === 3 && (
              <div className="animate-fade-in-up">
                <h2 className="mb-2 text-xl font-bold text-text-dark">Review</h2>
                <p className="mb-8 text-sm text-text-light">Verify your project details before creation.</p>

                <div className="space-y-6">
                  <div className="rounded-xl border border-border bg-section-bg p-5">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FolderOpen size={24} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-text-dark">{name}</h3>
                        <p className="text-xs text-text-lighter font-mono">acme.knowmatrix.ai/{slug}</p>
                        {description && <p className="mt-2 text-sm text-text-medium">{description}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm border-t border-border-light pt-4">
                      <div>
                        <p className="text-text-lighter mb-1">LLM Provider</p>
                        <p className="font-semibold text-text-dark">{llmProvider}</p>
                      </div>
                      <div>
                        <p className="text-text-lighter mb-1">Model</p>
                        <p className="font-semibold text-text-dark">{model}</p>
                      </div>
                      <div>
                        <p className="text-text-lighter mb-1">Embedding</p>
                        <p className="font-semibold text-text-dark">{embeddingModel}</p>
                      </div>
                      <div>
                        <p className="text-text-lighter mb-1">Region</p>
                        <p className="font-semibold text-text-dark">{region}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-border-light pt-6">
                  <button onClick={() => setStep(2)} disabled={loading} className="btn btn-secondary px-6"><ArrowLeft size={16} /> Back</button>
                  <button onClick={handleSubmit} disabled={loading} className="btn btn-primary px-8 disabled:opacity-70">
                    {loading ? "Creating..." : "Create Project"}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
