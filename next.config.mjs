/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [{ hostname: "*" }],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
