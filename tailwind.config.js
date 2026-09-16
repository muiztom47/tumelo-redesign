/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#152238",
          light: "#2C3E58",
          soft: "#4C5D78",
        },
        paper: {
          DEFAULT: "#EDEAE0",
          raised: "#F6F4EC",
        },
        brass: {
          DEFAULT: "#A9822E",
          light: "#C7A45A",
          dark: "#7C5F20",
        },
        rule: "#D8D3C4",
        against: "#8A3B2E",
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["'Public Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "38rem",
      },
    },
  },
  plugins: [],
};
