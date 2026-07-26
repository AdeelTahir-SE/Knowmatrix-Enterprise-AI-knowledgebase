"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthField, AuthShell } from "../components/auth/AuthShell";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL || process.env.API_GATEWAY_URL || "";
      console.log(`${baseUrl}/auth/register`)
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ userName:name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create account. Please try again.");
      }

      // If signup is successful, redirect
      router.push("/dashboard/orgs");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred during signup.");
      }
      else{
        console.log(err)
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Create your account" subtitle="Start building AI-powered knowledge experiences in minutes.">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-dark">Create your account</h2>
        <p className="text-sm leading-6 text-text-light">Use your work email to start your KnowMatrix workspace.</p>
      </div>

      <form className="space-y-5" onSubmit={handleSignup}>
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <AuthField 
          label="Full name" 
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Sarah Johnson" 
          icon="user" 
        />
        <AuthField 
          label="Work email" 
          type="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="sarah.johnson@acme.com" 
          icon="mail" 
        />
        <AuthField 
          label="Password" 
          type="password" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••••••" 
          icon="lock" 
        />

        <p className="text-xs font-medium text-text-light">Password must be at least 8 characters.</p>

        <label className="flex items-start gap-3 text-sm text-text-medium">
          <input type="checkbox" defaultChecked required className="mt-1 h-4 w-4 rounded border-border accent-primary" />
          <span>I agree to the <Link href="#" className="font-semibold text-primary">Terms of Service</Link> and <Link href="#" className="font-semibold text-primary">Privacy Policy</Link>.</span>
        </label>

        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-text-light">
        Already have an account? <Link href="/login" className="font-semibold text-primary hover:text-primary-dark">Sign in</Link>
      </p>
    </AuthShell>
  );
}
