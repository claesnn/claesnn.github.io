/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      literata: ["Literata Variable", "serif"],
      inter: ["Inter Variable", "sans-serif"],
    },
  },
  plugins: [],
}
