/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'search': '#23262d',
      },
      textColor:{
        'premium': '#aca7ab',
      }
    },
  },
  plugins: [],
}

