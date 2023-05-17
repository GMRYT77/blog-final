/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media-cdn.tripadvisor.com", "media.graphassets.com"],
  },
};

module.exports = nextConfig;
