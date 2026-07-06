import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/faq", destination: "/contact", permanent: true },
      { source: "/appointment", destination: "/contact#appointment", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
    ];
  },
};

export default nextConfig;
