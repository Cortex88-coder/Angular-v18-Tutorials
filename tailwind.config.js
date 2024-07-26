/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
        fadeIn: "fadeIn 2s ease-in",
      },

      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),

      container: {
        center: true,
        padding: {
          // default: "10rem",
          sm: "2rem",
          "2xl": "6rem",
          xl: "10rem",
        },
      },

      screens: {
        xs: "374px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
