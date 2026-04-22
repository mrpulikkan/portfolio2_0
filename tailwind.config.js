/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        lightBg: {
          DEFAULT: "#ffffff",
          secondary: "#f0f4ff",
          tertiary: "#e0e7ff",
        },
        darkText: {
          DEFAULT: "#0f172a",
          mid: "#1e293b",
          light: "#64748b",
        },
        accentBlue: {
          DEFAULT: "#0a95ac",
          light: "#dbeafe",
          dark: "#0d4a55",
        },
        mutedText: "#475569",
      },
    },
  },
  plugins: [],
};
