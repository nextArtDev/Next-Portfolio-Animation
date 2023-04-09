/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-Iransans)', ...fontFamily.sans],
      },
      colors: {
        dark: '#264653',
        light: '#fefae0',
        primary: '#f4a261', //
        primaryDark: '#e76f51', // 2a9d8f
        secondary: '#e9c46a',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0, 0 , 0 , 0.4) 2px ,  #fefae0 5px, #fefae0 100px)',
        circularDark:
          'repeating-radial-gradient(rgba(255, 255 , 255 , 0.6) 2px , #264653 8px,#264653 100px)',
        circularLightLg:
          'repeating-radial-gradient(rgba(0, 0 , 0 , 0.4) 2px ,  #fefae0 5px, #fefae0 80px)',
        circularDarkLg:
          'repeating-radial-gradient(rgba(255, 255 , 255 , 0.6) 2px , #264653 8px,#264653 80px)',
        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',

        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#264653 8px,#264653 60px)',

        circularLightSm:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',

        circularDarkSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#264653 8px,#264653 40px)',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 479px) { ... }},
    },
  },
  plugins: [require('tailwindcss-rtl')],
}
