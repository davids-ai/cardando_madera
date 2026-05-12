"use client";

import { MoonStar, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/components/providers";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      className="inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-white/80 px-3 py-2 text-sm font-medium text-amber-900 backdrop-blur transition hover:bg-amber-100 dark:border-amber-100/30 dark:bg-stone-900/70 dark:text-amber-100"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={16} /> : <MoonStar size={16} />}
      {theme === "dark" ? "Claro" : "Oscuro"}
    </button>
  );
}
