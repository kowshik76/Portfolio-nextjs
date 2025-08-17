// next.config.ts
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // 🚀 Disable ESLint checks during build
    ignoreDuringBuilds: true,
  },
  // You can add other Next.js options here if needed
};

export default withSentryConfig(nextConfig, {
  org: "kowshik-sangada",
  project: "javascript-nextjs",

  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  // tunnelRoute: "/monitoring", // optional
});
