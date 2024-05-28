/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primarycolor": "#57e964",
        "seconderycolor": "#ffff42",
        "thirdcolor": "#ffa500",
        "lightcolor": "#ffffff",
        "bgcolor-1": "#171a1c",
        "bgcolor-2": "#22282a",
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

