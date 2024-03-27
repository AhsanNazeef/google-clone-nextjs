/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.google.co.uk'],
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    googleApiKey: process.env.GOOGLE_API_KEY,
    googleContextKey: process.env.GOOGLE_CONTEXT_KEY,
    customSearchApi: 'https://www.googleapis.com/customsearch/v1',
  }
};

export default nextConfig;
