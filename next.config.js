// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = async (phase, { defaultConfig }) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {}
  // }

  /*** @type {import('next').NextConfig} */
  const nextConfig = {
    pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  
    experimental: {
      instrumentationHook: true,
    },
  }
  return nextConfig
}
