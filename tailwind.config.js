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
      backgroundImage: {
        bg1: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('./assets/bgimage.jpeg')",
      },
    },
  },
  plugins: [],
};
