import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  poweredByHeader: false,
};

export default nextConfig;
