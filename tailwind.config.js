/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFF0",
        navy: "#011222",
        goldLight: "#E9C279",
        gold: "#cd9c31",
        // "bg-gold-light": "#846d1e21",
        // "bg-gold-dark": "#846d1e63",
        "bg-gold-light": "#efece2",
        "bg-gold-dark": "#cfc6a8",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ['"Courier New"', "monospace"],
        // Add your custom font families here
        custom: ['"Your Custom Font"', "sans-serif"],
        title: ['"Playfair Display"', "serif"],
        body: ["Inria Serif", "serif"],
      },
    },
  },
  plugins: [],
};
