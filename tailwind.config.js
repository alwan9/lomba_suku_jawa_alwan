/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    screens: {
      xs: "270px",
      sm: "400px",
      md: "620px",
      lg: "770px",
      xl: "1240px",
    },
    extend: {},
  },
  plugins: [],
};
