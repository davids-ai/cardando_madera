"use client";

import { MoonStar, Sun } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/components/providers";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      className="inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-white/80 px-3 py-2 text-sm font-medium text-amber-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-amber-100 dark:border-amber-100/20 dark:bg-stone-900/70 dark:text-amber-100"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      disabled={!mounted}
    >
      {mounted && theme === "dark" ? <Sun size={16} /> : <MoonStar size={16} />}
      {mounted ? (theme === "dark" ? "Claro" : "Oscuro") : "Tema"}
    </button>
  );
}
