// components/ui/theme-toggle.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-[#1D212A] border border-white/10" />;
  }

  return (
    <div className="flex items-center gap-0.5 p-1 rounded-xl bg-[#1D212A] border border-white/10">
      <button
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`p-1.5 rounded-lg transition-colors ${
          theme === "light"
            ? "bg-white text-zinc-900 shadow-sm"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => setTheme("system")}
        aria-label="System mode"
        className={`p-1.5 rounded-lg transition-colors ${
          theme === "system"
            ? "bg-white/20 text-white shadow-sm"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        <Laptop className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`p-1.5 rounded-lg transition-colors ${
          theme === "dark"
            ? "bg-white/20 text-white shadow-sm"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}