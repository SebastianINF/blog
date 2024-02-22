/** @type {import('tailwindcss').Config} son los tipos para el intellisense de tailwind*/
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '369px' }
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'custom-black': '#242424'
      },
      fontFamily: {
        cascadia: ['Cascadia Code'],
        inter: ['var(--font-inter)'],
        "roboto-mono": ['var(--font-roboto-mono)']
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
