/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "hsl(220, 20%, 10%)",
        "dark-card": "hsl(220, 20%, 15%)",
        "dark-tile": "hsl(220, 20%, 20%)",
      },
      animation: {
        flip: "flip 0.5s ease-in-out",
      },
      keyframes: {
        flip: {
          "0%": { transform: "perspective(600px) rotateY(0deg)" },
          "50%": { transform: "perspective(600px) rotateY(90deg)" },
          "100%": { transform: "perspective(600px) rotateY(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
