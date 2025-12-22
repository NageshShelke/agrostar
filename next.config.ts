/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    serverSourceMaps: false,        // Prevents Windows SSR crash
    turbo: {
      resolveAlias: {},             // Fixes Windows turbopack sourcemap bug
    },
  },

  productionBrowserSourceMaps: false, // Disable source maps in production
};

export default nextConfig;
