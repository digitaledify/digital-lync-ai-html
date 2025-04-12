/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, // Centers the container
      // padding: "1rem", // Adds padding to the container
      screens: {
        sm: '576px',
        md: "720px", // @media (min-width: 768px)
        lg: "960px", // @media (min-width: 992px)
        xl: "1240px", // @media (min-width: 1200px)
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "circle-bg": "rgba(255, 41, 41, 0.059)",
      },
      boxShadow: {
        "circle-shadow": "0 0 200px rgba(255, 41, 41, 0.141)",
      },
    },
  },
  plugins: [],
};
