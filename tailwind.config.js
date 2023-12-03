/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto": "Roboto",
      },
      colors:{
        "dark":"#202020",
        "gray":"#D9D9D9",
        "purple":"#413659",
      },
      backgroundImage:{
        "banner":"url('./img/bg.png')",
        "login-banner":"url('./img/login-bg.png')",
      }
    },
  },
  plugins: [],
};
