import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        tinyOrange: {
          light: "#ff9a1f",
          base: "#de6f00",
          dark: "#b95e00",
        },
        tinyPink: {
          lighter: "#fac3e3",
          light: "#eda6d0",
          base: "#e381ba",
          dark: "#e0389a",
        },
        tinyBlue: {
          light: "#7ed3ed",
          base: "#18a2c4",
          dark: "#0e6b8b",
        },
        tinyBlack: {
          light: "#333333",
          base: "#242424",
          dark: "#1a1a1a",
      },
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
