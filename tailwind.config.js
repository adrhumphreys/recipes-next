module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Mono", "monospace"],
        heading: ["Merriweather", "serif"],
      },
      colors: {
        charcoal: "#424141",
        lightgray: "#717578",
        beige: "#FFFBF3",
      },
    },
  },
  plugins: [],
};
