/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      purple: { 100: "#5800FF", 200: "#3B00AA" },
    },
    fontFamily: {
      title: ["teko", "sans-serif"],
      sans: ["raleway", "sans-serif"],
    },
    extend: {
      spacing: {
        "5vw": "5vw",
        "7.5vw": "7.5vw",
      },
    },
  },
  plugins: [],
};
