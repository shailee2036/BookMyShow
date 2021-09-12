// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vaish: {
          50: '#fdfce0',
          100: '#333332',
          200: '#CCCCCC',
          300: '#F84464',
          400: '#e0da3b',
          500: '#c6c122',
          600: '#9a9618',
          700: '#6e6b0f',
          800: '#424005',
          900: '#171500',
        },

        navCol: {
          50: '#f5effb',
          100: '#dad5df',
          200: '#2B3148',
          300: '#a69fad',
          400: '#8c8394',
          500: '#736a7b',
          600: '#595260',
          700: '#403b46',
          800: '#27222b',
          900: '#100a15',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
