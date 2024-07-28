import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        customPurple: "#4534AC",
        customGrey: "#606060",
        customBlue: "#0054A1",
        customBlack: "#2D2D2D",
        bgInput: "#EBEBEB",
        textgrey: "#080808",
        whiteSmoke: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
export default config;
