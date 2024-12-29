import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: {
          DEFAULT: "#323232",
        },
        paragraph : {
          DEFAULT: "#252525",
        },
        peach: {
          DEFAULT: "#FE986D",
        },
        purple: {
          DEFAULT: "#A814A7",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        italiana: ["Italiana", "serif"],
        mochiy: ["Mochiy Pop P One", "sans-serif"],
        parkinsans: ["Parkinsans", "sans-serif"],
        work_sans: ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        'gradient-peach-purple': 'linear-gradient(to right, #FE986D, #A814A7)',
      },
    },
  },
  plugins: [],
} satisfies Config;
