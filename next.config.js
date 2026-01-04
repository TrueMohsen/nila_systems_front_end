import path from 'path';
import { fileURLToPath } from 'url';

/** Fix for __dirname in ESM (Vercel build) */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://va.vercel-scripts.com https://*.clarity.ms https://phpstack-207002-5085356.cloudwaysapps.com;
    style-src 'self' 'unsafe-inline' https://phpstack-207002-5085356.cloudwaysapps.com https://fonts.googleapis.com;
    img-src 'self' blob: data: https://www.googletagmanager.com https://flagcdn.com https://*.openstreetmap.org https://*.clarity.ms https://*.bing.com https://phpstack-207002-5085356.cloudwaysapps.com;
    font-src 'self' https://*.gstatic.com;
    object-src 'self';
    base-uri 'self';
    form-action 'self';
    media-src 'self' https://*.cloudfront.net;
    connect-src 'self' https://www.googletagmanager.com https://raw.githubusercontent.com https://phpstack-207002-5085356.cloudwaysapps.com https://*.clarity.ms https://*.azurewebsites.net;
`;

const nextConfig = {
  experimental: {
    appDir: true, // keep App Router enabled
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  },
  webpack(config) {
    // Allow absolute imports from project root
    config.resolve.modules.push(__dirname);
    return config;
  }
};

export default nextConfig;
