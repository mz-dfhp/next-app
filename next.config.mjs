import process from 'node:process'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'github' ? '/next-app' : '',
  assetPrefix: process.env.NODE_ENV === 'github' ? '/next-app/' : '',
  trailingSlash: process.env.NODE_ENV === 'github',
}

export default nextConfig
