/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '10px 30px 10px -5px rgba(0, 0, 0, 0.3)',
        '4xl': '0px 4px 3px 4px rgba(0, 0, 0, 0.3)',
      },
      minWidth: {
        '800': '800px',
      },
      width:{
        '400': '400px',
      },
      borderWidth:{
        1: '1px',
      },
      borderRadius: {
        'xxl' : '30px',
        'xl' : '20px',
      }
    },
  },
  plugins: [],
}

