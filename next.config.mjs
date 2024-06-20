/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This option is not available in Next.js directly; typically handled in ESLint config
  },
};

module.exports = nextConfig;
