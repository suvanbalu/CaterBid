/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "phorange": "#F09124",
        "greneu": "#6EE7B7",
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
  plugins: 
    [require("daisyui"),
    require('tailwind-scrollbar-hide')],
    daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
    animation: {
      none: {
        '0%, 100%': { transform: 'scale(1)' },
      }
    }
}
