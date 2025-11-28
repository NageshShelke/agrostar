const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agrostar-api.onrender.com",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
