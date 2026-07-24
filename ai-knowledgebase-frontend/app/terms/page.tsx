"use client";

import Navbar from "@/app/components/landing/Navbar";
import Footer from "@/app/components/landing/Footer";
import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Shield,
  Lock,
  Database,
  Cookie,
  Server,
  Headset,
  RefreshCw,
  Mail,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

const policies = [
  { id: "tos", label: "Terms of Service", icon: FileText },
  { id: "aup", label: "Acceptable Use Policy", icon: Shield },
  { id: "privacy", label: "Privacy Policy", icon: Lock },
  { id: "dpa", label: "Data Processing Agreement", icon: Database },
  { id: "cookie", label: "Cookie Policy", icon: Cookie },
  { id: "security", label: "Security", icon: Shield },
  { id: "subprocessors", label: "Subprocessors", icon: Server },
  { id: "sla", label: "Service Level Agreement", icon: Headset },
  { id: "refund", label: "Refund Policy", icon: RefreshCw },
  { id: "updates", label: "Updates to Policies", icon: FileText },
  { id: "contact", label: "Contact Us", icon: Mail },
];

export default function TermsPage() {
  const [activePolicy, setActivePolicy] = useState("tos");

  return (
    <div className="min-h-screen bg-section-bg">
      <Navbar />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="bg-white pt-16 pb-12 border-b border-border">
          <div className="container-main max-w-6xl grid md:grid-cols-[1fr_300px] items-center gap-12">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
                Terms and Policies
              </h1>
              <p className="text-lg text-text-medium max-w-2xl leading-relaxed">
                Please read these terms and policies carefully before using the KnowMatrix platform and services. By using our services, you agree to these terms.
              </p>
            </div>
            
            <div className="hidden md:flex justify-end opacity-80">
              {/* Decorative document icon based on mockup */}
              <div className="relative w-48 h-48">
                 <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 scale-105" />
                 <div className="absolute inset-0 bg-white border border-border shadow-sm rounded-xl p-6 flex flex-col gap-4">
                    <div className="h-3 w-3/4 bg-border rounded-full" />
                    <div className="h-3 w-full bg-border rounded-full opacity-50" />
                    <div className="h-3 w-5/6 bg-border rounded-full opacity-50" />
                    <div className="h-3 w-full bg-border rounded-full opacity-50" />
                    <div className="mt-4 flex gap-2">
                       <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center -ml-4 -mb-4 border-4 border-white shadow-sm">
                          <Shield size={16} className="text-white" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container-main max-w-6xl pt-12">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            
            {/* Sidebar Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <nav className="flex flex-col space-y-1">
                  {policies.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => setActivePolicy(policy.id)}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors text-left ${
                        activePolicy === policy.id
                          ? "bg-primary/10 text-primary"
                          : "text-text-medium hover:bg-black/5 hover:text-text-dark"
                      }`}
                    >
                      <policy.icon size={18} className={activePolicy === policy.id ? "text-primary" : "text-text-lighter"} />
                      {policy.label}
                    </button>
                  ))}
                </nav>

                <div className="rounded-xl border border-primary/10 bg-primary/5 p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Headset size={24} />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-text-dark">Questions about our policies?</h3>
                  <p className="mb-4 text-xs text-text-medium">Contact our legal team.</p>
                  <button className="btn bg-white border border-primary/20 text-primary hover:bg-white w-full justify-center shadow-sm h-10 text-xs">
                    Contact Sales <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown (Visible only on small screens) */}
            <div className="block lg:hidden mb-6">
               <select 
                 className="w-full h-12 rounded-lg border border-border bg-white px-4 text-sm font-bold text-text-dark"
                 value={activePolicy}
                 onChange={(e) => setActivePolicy(e.target.value)}
               >
                 {policies.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
               </select>
            </div>

            {/* Main Content Area */}
            <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
              
              {/* Active Section - Terms of Service */}
              <div className="p-8 sm:p-10 border-b border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-text-dark">1. Terms of Service</h2>
                </div>
                
                <div className="prose prose-sm sm:prose-base max-w-none text-text-medium">
                  <p className="text-sm text-text-light mb-8">Last updated: May 20, 2024</p>
                  <p>
                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of the KnowMatrix platform and services (&quot;Services&quot;) operated by KnowMatrix Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                  </p>

                  <hr className="my-8 border-border" />

                  <h3 className="text-lg font-bold text-text-dark mt-8 mb-4">1.1 Acceptance of Terms</h3>
                  <p>
                    By creating an account or using our Services, you agree to be bound by these Terms and our other policies referenced herein. If you do not agree, do not use our Services.
                  </p>

                  <h3 className="text-lg font-bold text-text-dark mt-8 mb-4">1.2 Description of Services</h3>
                  <p>
                    KnowMatrix provides an AI-powered knowledge base platform that allows organizations to upload, index, and search their content using advanced AI models and integrations.
                  </p>

                  <h3 className="text-lg font-bold text-text-dark mt-8 mb-4">1.3 User Accounts</h3>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access.
                  </p>
                  
                  <div className="mt-6">
                    <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:underline">
                      View full Terms of Service <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Sections as Accordions (Mock visual presentation) */}
              <div className="divide-y divide-border">
                
                <button className="flex w-full items-center justify-between p-6 sm:px-10 text-left hover:bg-section-bg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <Shield size={20} />
                    </div>
                    <span className="text-lg font-bold text-text-dark">2. Acceptable Use Policy</span>
                  </div>
                  <ChevronDown size={20} className="text-text-lighter" />
                </button>

                <button className="flex w-full items-center justify-between p-6 sm:px-10 text-left hover:bg-section-bg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Lock size={20} />
                    </div>
                    <span className="text-lg font-bold text-text-dark">3. Privacy Policy</span>
                  </div>
                  <ChevronDown size={20} className="text-text-lighter" />
                </button>

                <button className="flex w-full items-center justify-between p-6 sm:px-10 text-left hover:bg-section-bg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                      <Database size={20} />
                    </div>
                    <span className="text-lg font-bold text-text-dark">4. Data Processing Agreement</span>
                  </div>
                  <ChevronDown size={20} className="text-text-lighter" />
                </button>

                <button className="flex w-full items-center justify-between p-6 sm:px-10 text-left hover:bg-section-bg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <Cookie size={20} />
                    </div>
                    <span className="text-lg font-bold text-text-dark">5. Cookie Policy</span>
                  </div>
                  <ChevronDown size={20} className="text-text-lighter" />
                </button>

                <button className="flex w-full items-center justify-between p-6 sm:px-10 text-left hover:bg-section-bg transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                      <Shield size={20} />
                    </div>
                    <span className="text-lg font-bold text-text-dark">6. Security</span>
                  </div>
                  <ChevronDown size={20} className="text-text-lighter" />
                </button>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
