/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
