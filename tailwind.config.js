/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        red1: "#FF444A",
        black117: "rgba(11, 11, 11, 0.7)",
      },
      backgroundColor: {},
    },
  },
  plugins: [],
};
