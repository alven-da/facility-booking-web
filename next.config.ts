import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true, // Enables React strict mode for catching potential issues.
  swcMinify: true, // Uses the faster SWC compiler for minification.
  env: {
    CUSTOM_ENV_VAR: 'your-value' // Example of adding environment variables.
  },
  images: {
    domains: ['example.com'] // Configures allowed domains for optimized image loading.
  },
  i18n: {
    locales: ['en', 'fr', 'es'], // Specifies supported locales for internationalization.
    defaultLocale: 'en' // Sets the default locale.
  }
};

export default nextConfig;
