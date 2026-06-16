/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        ink: "#1A1A1A",
        graphite: "#6B6660",
        terracotta: {
          DEFAULT: "#A65A3A",
          light: "#C17A56",
          dark: "#823F26",
        },
        noir: "#12100E",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wides: "0.18em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(26, 26, 26, 0.25)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
