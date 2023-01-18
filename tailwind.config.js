/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "phorange": "#F09124",
      },
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        mont: ['Montserrat', "sans-serif"],
      },
      screens: {
        'mobile': '360px',
      }
    },
  },
  plugins: [],
}
