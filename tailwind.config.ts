import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F4EE",
          secondary: "#EFE9DF",
          subtle: "#E7E0D3",
        },
        charcoal: {
          DEFAULT: "#171614",
          light: "#2C2A26",
        },
        taupe: {
          DEFAULT: "#706B63",
          light: "#948E85",
        },
        champagne: {
          DEFAULT: "#B59668",
          light: "#C9B28D",
          dark: "#96784D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        editorial: "0.08em",
      },
      lineHeight: {
        editorial: "1.15",
      },
    },
  },
  plugins: [],
} satisfies Config;
