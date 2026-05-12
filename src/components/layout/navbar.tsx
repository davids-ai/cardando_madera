"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#impacto", label: "Impacto" },
  { href: "#eventos", label: "Eventos" },
  { href: "#noticias", label: "Noticias" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#f7f0e6]/85 backdrop-blur dark:border-amber-100/10 dark:bg-stone-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-amber-900 dark:text-amber-100">
          Fundacion Cardando Madera
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition hover:text-emerald-700 dark:text-stone-200"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md p-2 text-amber-900 dark:text-amber-100"
            aria-label="Abrir menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-amber-900/10 px-4 py-4 md:hidden dark:border-amber-100/10">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-700 dark:text-stone-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
