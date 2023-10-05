/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': "'Syne', sans-serif"
      },
      colors: {
        'gray': '#3E3E3E',
        'yellow': '#F2F062',
      }
    },
  },
  plugins: [],
}