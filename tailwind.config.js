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
        custom: "930px",
      },
    },
  },

  plugins: [],
};
