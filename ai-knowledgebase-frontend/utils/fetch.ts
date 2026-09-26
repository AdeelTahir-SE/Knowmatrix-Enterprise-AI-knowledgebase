"use client";

import { getCookie } from "cookies-next";

export default function fetchRequest(url: string, options: RequestInit = {}) {
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_API_GATEWAY_URL ??
    process.env.API_GATEWAY_URL ??
    "";
  const baseUrl = rawBaseUrl.replace(/\/+$/, "");
  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return fetch(`${baseUrl}${normalizedUrl}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "x-csrf-token": String(getCookie("csrfToken") ?? ""),
    },
    credentials: "include",
  });
}