"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthField, AuthShell } from "../components/auth/AuthShell";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_GATEWAY_URL ||
        process.env.API_GATEWAY_URL ||
        "";
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Invalid email or password");
      }

      // If login is successful, redirect
      router.push("/dashboard/orgs");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred during login.");
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue building secure AI knowledge assistants."
    >
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-dark">
          Sign in to KnowMatrix
        </h2>
        <p className="text-sm leading-6 text-text-light">
          Access your workspace, assistants, documents, and analytics.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleLogin}>
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
            {error}
          </div>
        )}

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

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-text-medium">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border accent-primary"
            />
            Remember me
          </label>
          <Link
            href="#"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-text-light">
        New to KnowMatrix?{" "}
        <Link
          href="/signup"
          className="font-semibold text-primary hover:text-primary-dark"
        >
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
