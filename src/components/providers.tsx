"use client";

import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [mounted, theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
      <Toaster position="top-right" />
    </>
  );
}

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => undefined,
});
