import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECEDF1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        highlightFlash: {
          "0%, 100%": { boxShadow: "0 0 0 0 transparent" },
          "50%": { boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.15)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.35s ease-out both",
        "fade-in": "fadeIn 0.3s ease-out both",
        "scale-in": "scaleIn 0.2s ease-out both",
        "highlight-flash": "highlightFlash 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
