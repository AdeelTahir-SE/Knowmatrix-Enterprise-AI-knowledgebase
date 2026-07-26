"use client";

import { getCookie } from "cookies-next";

export default function fetchRequest(url: string, options: RequestInit = {}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_GATEWAY_URL ??
    process.env.API_GATEWAY_URL ??
    "";

  return fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "x-csrf-token": String(getCookie("csrfToken") ?? ""),
    },
    credentials: "include",
  });
}