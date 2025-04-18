/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Playfair Display", "serif"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
