/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "note": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage:{
        'orangegrad1':'linear-gradient(#FF7D14, #F42B03)'
      },
      backdropBlur: {
        "5": "5px",
      },
      boxShadow: {
        note: "inset -6px -4px 2px rgba(255, 255, 255, 0.03)",
      },
      borderColor: {
        "note": "rgba(255, 255, 255, 0.326)",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
