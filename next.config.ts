const nextConfig = {
    allowedDevOrigins: ["127.0.0.1"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s4.anilist.co",
            },
        ],
    },
};

export default nextConfig;
