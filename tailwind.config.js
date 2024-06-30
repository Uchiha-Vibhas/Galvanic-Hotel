module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: { fontFamily: { barlow: ["Barlow", "sans-serif"] } },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus"],
      textColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
