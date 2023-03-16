/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fbf1ea",
        black: "#312E1D",
        ...defaultTheme.colors,
      },
      fontFamily: {
        serif: ["var(--hv-analogue)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
