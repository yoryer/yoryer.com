/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', 'Verdana', 'sans-serif'"],
      },
    },
    colors: {
      blue: "#08243F",
      rose: "#FF5677",
      water: "#D7ECFF",
      white: "#FFFFFF",
      silver: "#D9D9D9",
      transparent: "transparent",
      "silver-blue": "#D7ECFF",
      "yankees-blue": "#24283B",
      "light-sky-blue": "#7DCFFF",
      "battery-blue": "#2AC3DE",
      "french-blue": "#7AA2F7",
      black: "#000000",
      "dark-blue-gradient": "#071a2e",
    },
  },
  plugins: [],
};
