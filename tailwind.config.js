/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite FR Moderne Guides", "serif"],
        dosis: ["Dosis", " serif"],
        fira: ["Fira Sans Condensed", "serif"],
      },
      screens: {
        xs: "425px",
        custom: "950px",
        smalltablet: "600px",
        mediumtablet: "768px",
        largetablet: "1026px",
        desktop: "1280px",
      },
    },
  },

  plugins: [],
};
