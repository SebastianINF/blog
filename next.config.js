// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = async (phase, { defaultConfig }) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {}
  // }

  /**
   * @type {import('next').NextConfig} Son los tipo para tener intellisense
   */
  const nextConfig = {
    pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
    experimental: {
      // experimental opciones que estan en fase beta todavía
      instrumentationHook: true
    }
  }
  return nextConfig
}
