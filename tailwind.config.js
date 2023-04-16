/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen:{
      sm : '375px',
      md : '600px',
      lg : '976px',
      xl : '1440px'
    },
    extend: {},
  },
  plugins: [],
}

