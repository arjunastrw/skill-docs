"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 rounded-full border border-edge/60 bg-white/60 dark:bg-card/60 flex items-center justify-center hover:border-stamp/40 transition-colors"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="text-sm transition-transform duration-300">
        {theme === "light" ? "☽" : "☀"}
      </span>
    </button>
  );
}
