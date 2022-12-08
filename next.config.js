
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ["placeimg.com" , "challenge.webjar.ir"] // <== Domain name
  }
}

module.exports = nextConfig

module.exports = ({ defaultConfig }) => {
  return {
    ...defaultConfig,
    images : {
      domains : ["placeimg.com" , "challenge.webjar.ir"] // <== Domain name
    },
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}