"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/types/database";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  const active = items[index];

  if (!active) return null;

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-900/10 bg-white p-6 shadow-sm dark:border-amber-100/10 dark:bg-stone-900">
      <div className="flex items-center gap-4">
        <Image
          src={active.imagen || "https://placehold.co/200x200"}
          alt={active.nombre}
          width={60}
          height={60}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-stone-900 dark:text-stone-100">{active.nombre}</p>
          <p className="text-sm text-stone-600 dark:text-stone-300">{active.rol}</p>
        </div>
      </div>
      <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-stone-200">"{active.mensaje}"</p>
    </div>
  );
}
