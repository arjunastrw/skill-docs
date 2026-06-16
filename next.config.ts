import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Set NEXT_PUBLIC_BASE_PATH=/repo-name for project pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
