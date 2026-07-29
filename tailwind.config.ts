import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunny: {
          DEFAULT: "#FFD93D",
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE983",
          300: "#FFD93D",
          400: "#F7C31B",
          500: "#DDA800",
        },
        sky: {
          DEFAULT: "#5BC0FF",
          50: "#EFF9FF",
          100: "#D6F0FF",
          200: "#AEE2FF",
          300: "#5BC0FF",
          400: "#2FA8F5",
          500: "#0B87D4",
        },
        grape: {
          DEFAULT: "#8B5CF6",
          50: "#F5F1FE",
          100: "#EAE2FD",
          200: "#D3C3FB",
          300: "#8B5CF6",
          400: "#7642EC",
          500: "#5B29C9",
        },
        bubble: {
          DEFAULT: "#FF80BF",
          50: "#FFF1F8",
          100: "#FFE0EF",
          200: "#FFBEDC",
          300: "#FF80BF",
          400: "#F759A4",
          500: "#D63384",
        },
        mint: {
          DEFAULT: "#6EE7B7",
          50: "#EEFCF6",
          100: "#D6F9EA",
          200: "#A9F1D3",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#0FA97A",
        },
        cream: "#FFFDF8",
        ink: {
          DEFAULT: "#2A2145",
          soft: "#5A5175",
          faint: "#8F88A6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-rounded", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-rounded", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        blob: "2.5rem",
        pill: "999px",
      },
      boxShadow: {
        sticker: "0 18px 40px -18px rgba(42,33,69,0.35)",
        lift: "0 30px 60px -28px rgba(42,33,69,0.45)",
        glow: "0 0 0 6px rgba(255,255,255,0.85)",
        inset: "inset 0 -6px 0 0 rgba(0,0,0,0.06)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(var(--tw-rotate,0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--tw-rotate,0deg))" },
        },
        drift: {
          "0%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(106%)" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        pop: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "70%": { transform: "scale(1.04)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        drift: "drift 40s linear infinite",
        wiggle: "wiggle 2.4s ease-in-out infinite",
        pop: "pop .45s cubic-bezier(.22,1.2,.36,1) both",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spinSlow 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
