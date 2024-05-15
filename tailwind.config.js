const colors = require('tailwindcss/colors');
const presetQuick = require('franken-ui/shadcn-ui/preset-quick');

module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // ou 'media' ou true
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        darkBackground: '#171717',
        grayText: {
          50: '#eaeaea',
          100: '#fafafa',
          150: 'f5f5f5',
          200: '#999',
          300: '#888',
          400: '#666',
          500: '#444',
          600: '#333',
          700: '#111',
        },
        orangeGrid: {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed7aa',
          '300': '#fdba74',
          '400': '#fb923c',
          '500': '#f97316',
          '600': '#ea580c',
          '700': '#c2410c',
          '800': '#9a3412',
          '900': '#7c2d12',
          '950': '#431407',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};