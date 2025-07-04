const { keyframes } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gugugaga: ['Poppins', 'sans-serif'],
      },

      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },

      animation: {
        pop: 'pop 300ms ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
