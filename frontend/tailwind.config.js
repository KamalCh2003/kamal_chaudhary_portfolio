/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(.22, 1, .36, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};