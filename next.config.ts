import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Declared here so Vercel surfaces it as a required env var
    // Set RESEND_API_KEY in Vercel Dashboard → Settings → Environment Variables
  },
  // Suppress the @import order warning from Tailwind CSS v4
  experimental: {},
};

export default nextConfig;
