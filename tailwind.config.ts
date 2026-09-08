import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        navy: "#020817",
        sky: { DEFAULT: "#2CB0EC", deep: "#0B6FA1", tint: "#E7F0FD", tint2: "#F1F6FD" },
        orange: { DEFAULT: "#F97316", dark: "#EA580C" },
        canvas: "#F7FAFC",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      maxWidth: { site: "1280px" },
      keyframes: { ticker: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } } },
      animation: { ticker: "ticker 38s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
