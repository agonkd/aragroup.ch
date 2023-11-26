import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#FF6900",
        "primary-light": "#ED8C39",
        secondary: "#0A0E11",
        "secondary-light": "#1E1E1E",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "12px" },
      });
    }),
  ],
};
