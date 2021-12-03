const defaultTheme = require("tailwindcss/defaultTheme");
const questionMark = require("tailwindcss-question-mark");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        back: "url('https://media.istockphoto.com/vectors/world-map-global-network-connection-technology-futuristic-plexus-vector-id924404340?k=20&m=924404340&s=612x612&w=0&h=c3A7VJCGRyJJXX2jlQx-yLjXkzZLwrCnT11hqCCK5OI=')",
        backa:
          "url(https://images.pexels.com/photos/7599547/pexels-photo-7599547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        backb:
          "url(https://images.pexels.com/photos/7599718/pexels-photo-7599718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        backc:
          "url(https://cdn.pixabay.com/photo/2016/11/21/18/17/abstract-1846974_1280.jpg)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [questionMark],
};
