"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "#talleres", label: "Talleres" },
  { href: "#inscripcion", label: "Inscripcion" },
  { href: "#impacto", label: "Impacto" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-background/80 backdrop-blur-xl dark:border-amber-100/10 dark:bg-stone-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt="Fundacion Cardando Madera"
            width={360}
            height={120}
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
            priority
          />
          <span className="sr-only">Fundacion Cardando Madera</span>
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
            className="rounded-full border border-amber-900/10 bg-white/80 p-2 text-amber-900 shadow-sm dark:border-amber-100/10 dark:bg-stone-900/80 dark:text-amber-100"
            aria-label="Abrir menu"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-amber-900/10 bg-background px-4 py-4 md:hidden dark:border-amber-100/10 dark:bg-stone-950">
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
