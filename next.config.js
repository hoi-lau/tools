const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  i18n: {
    locales: ['zh-Hans'],
    defaultLocale: 'zh-Hans',
  },
  reactStrictMode: false,
  swcMinify: true,
  // assetPrefix: isProd ? 'https://img.imliuk.com' : undefined,
  images: {
    // minimumCacheTTL: 60,
    unoptimized: true,
    domains: ['img.imliuk.com']
  },
  experimental: {
    nextScriptWorkers: true
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.resolve.fallback = { fs: false, module: false }
    }

    // config.plugins.push(
    //   new options.webpack.DefinePlugin({
    //     'process.env.DEV': JSON.stringify(options.dev),
    //     IN_BROWSER: !options.isServer,
    //     IS_DEV: options.dev
    //   })
    // )
    return config
  }
}

module.exports = nextConfig
