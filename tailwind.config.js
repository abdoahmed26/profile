/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        "primarycolor": "#10b981", // More vibrant, thicker green
        "seconderycolor": "#fbbf24",
        "thirdcolor": "#f97316",
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

