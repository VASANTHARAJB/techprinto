import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-subtle": "var(--surface-subtle)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        brand: {
          dark: "#0B0D12",
          blue: "#1677FF",
          purple: "#7C3AED",
          cyan: "#00C2FF",
          orange: "#FF8A00",
          pink: "#FF2D8D",
        },
      },
      backgroundImage: {
        "gradient-tech": "linear-gradient(135deg, #7C3AED 0%, #1677FF 50%, #00C2FF 100%)",
        "gradient-accent": "linear-gradient(135deg, #FF8A00 0%, #FF2D8D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;