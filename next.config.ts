import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth/nextjs";
import { create } from "domain";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "d6db0fa4-e647-4714-a95c-9c33a148c867"
});

export default withCivicAuth(nextConfig);
