import type { Config } from "tailwindcss";

/**
 * AL HIKMATH ENTERPRISES PVT LTD — Tailwind CSS Configuration
 *
 * NOTE: This project uses Tailwind CSS v4 which is primarily configured via
 * CSS custom properties in globals.css (@theme inline block).
 * This file documents the brand theme for reference and tooling compatibility.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#9EFF00",
        "electric-blue": "#00BFFF",
        "matte-black": "#0F0F0F",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "neon-green": "0 0 20px rgba(158, 255, 0, 0.4)",
        "neon-blue": "0 0 20px rgba(0, 191, 255, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
