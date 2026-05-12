import Link from "next/link";

const items = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/news", label: "Noticias" },
  { href: "/admin/events", label: "Eventos" },
  { href: "/admin/stats", label: "Estadisticas" },
  { href: "/admin/testimonials", label: "Testimonios" },
  { href: "/admin/gallery", label: "Galeria" },
];

export function AdminSidebar() {
  return (
    <aside className="w-full rounded-2xl border border-amber-900/10 bg-white p-4 md:w-72 dark:border-amber-100/10 dark:bg-stone-900">
      <h2 className="mb-3 text-lg font-bold text-amber-900 dark:text-amber-100">Panel administrador</h2>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-stone-700 transition hover:bg-amber-100 dark:text-stone-200 dark:hover:bg-stone-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
