/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFF0",
        navy: "#011222",
        gold: "#E9C279",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['"Courier New"', 'monospace'],
        // Add your custom font families here
        custom: ['"Your Custom Font"', 'sans-serif'],
        title: ['"Playfair Display"', 'serif'],
        body: ["Inria Serif", "serif"],
      },
    },
  },
  plugins: [],
};
