const defaultTheme = require("tailwindcss/defaultTheme");
const questionMark = require("tailwindcss-question-mark");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        img: "url('https://media.istockphoto.com/vectors/world-map-global-network-connection-technology-futuristic-plexus-vector-id924404340?k=20&m=924404340&s=612x612&w=0&h=c3A7VJCGRyJJXX2jlQx-yLjXkzZLwrCnT11hqCCK5OI=')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [questionMark],
};
