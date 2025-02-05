import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        xsm:"500px",
        sm:"600px",
        md:"690px",
        ld:"980px",
        xl:"1078px",
        xxl:"1265px",
      },
      colors: {
        textGray: "#71767B",
        textGrayLight: "#e7e9ea",
        borderGray: "#2f3336",
        inputGray: "#202327",
        iconBlue: "#1d9bf0",
        iconGreen: "#00ba7c",
        iconPink: "#f91888",
      },
    },
  },
  plugins: [],
} satisfies Config;
