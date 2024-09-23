/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Build/sunny.html"],
  theme: {
    extend: {
      screens: {
        xs: "344px",
      },
      fontFamily: {
        fraun: "Fraunces",
        barlow: "Barlow",
      },
    },
  },
  plugins: [],
};
