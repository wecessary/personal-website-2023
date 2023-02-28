/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { background: "#FBF9F9", ...defaultTheme.colors },
    extend: {
      fontFamily: {
        serif: ["var(--bodoni)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
