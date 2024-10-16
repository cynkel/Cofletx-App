import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark_gray: "#4B5563",
        light_gray: "#9CA3AF",
        mint_green: "#B2F2BB",
        lemon_chiffon: "#FFFACD",
      },
      backgroundImage: {
        mobile: "url('./components/construction-sm.jpg')",
        desktop: "url('./components/construction.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
