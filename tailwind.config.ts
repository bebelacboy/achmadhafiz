import type { Config } from "tailwindcss";
/**@type {import('tailwindcss').Config}*/

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['var(--font-russo-one)'],
        exo2: ['var(--font-exo2)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'theme-pink': "#ea00d9",
        'theme-cyan': "#0abdc6",
        'theme-darkblue': "#133e7c",
      },
    },
  },
  plugins: [],
};
export default config;
