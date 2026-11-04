import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/riskcuratorrecord",
  assetPrefix: "/riskcuratorrecord",
  trailingSlash: true,
  images: { unoptimized: true },
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost", "0.0.0.0"],
};

export default nextConfig;
