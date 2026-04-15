/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0E1F3D",
        navy2: "#142850",
        green: "#009A44",
        green2: "#007A35",
        red: "#D0021B",
        orange: "#FF6600",
        gold: "#F5A623",
        muted: "#6B7280",
        light: "#E8EBF0",
      },
      fontFamily: {
        condensed: ["'Roboto Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
