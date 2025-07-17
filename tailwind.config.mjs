/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', 'Verdana', 'sans-serif'"],
      },
      colors: {
        blue: "#08243F",
        rose: "#FF5677",
        water: "#D7ECFF",
        silver: "#D9D9D9",
        "silver-blue": "#D7ECFF",
        "yankees-blue": "#24283B",
        "light-sky-blue": "#7DCFFF",
        "battery-blue": "#2AC3DE",
        "french-blue": "#7AA2F7",
        "black-hard": "#1a1a1a",
        "black-medium": "#4a4a4a",
        "black-soft": "#6a6a6a",
        "dark-blue-gradient": "#071a2e",
      },
    },
  },
  plugins: [typography],
};
