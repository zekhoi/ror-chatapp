/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: "#CBFBF1",
          100: "#9BF8E5",
          200: "#67F4D8",
          300: "#38F0CB",
          400: "#11DFB6",
          500: "#0DAD8E",
          600: "#0B8E74",
          700: "#09725D",
          800: "#065546",
          900: "#04392E",
          950: "#021C17",
        },
        grayed: {
          DEFAULT: "#F7F7F7",
        },
      },
    },
  },
  plugins: [],
};
