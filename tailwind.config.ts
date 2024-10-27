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
        golden_yellow: "#F1C40F",
        yellow: "#FFD700",
        dark_purple: "#4B0082",
      },
      gridTemplateRows: {
        hero: "1fr auto",
        section: "auto auto",
        services: "auto auto auto",
        card: "auto auto",
      },
      gridTemplateColumns: {
        section: "auto auto",
        services: "auto auto",
        lg: "auto auto auto",
      },

      backgroundImage: {
        texture: "url('./components/bg.webp')",
        residential: "url('./components/residential.webp')",
        industrial: "url('./components/industrial.webp')",
      },
      keyframes: {
        fade_in: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        fade_out: {
          "0%": {
            opacity: "100",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        fade_in: "fade_in 1s ease-in-out 1",
        fade_out: "fade_out 1s ease-in-out 1 ",
        pageOpen: "fade_in 0.75s ease-in-out 1",
      },
      backgroundSize: {
        down: "2px 100%",
      },
      backgroundPosition: {
        under: "0 100%",
      },
    },
  },
  plugins: [],
};
export default config;
