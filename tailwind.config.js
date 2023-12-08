/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      hedvig: ["Hedvig", "serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}
