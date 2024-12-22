import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome-step',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
