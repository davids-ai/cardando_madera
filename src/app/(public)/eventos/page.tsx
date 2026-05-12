import { CalendarDays, MapPin } from "lucide-react";
import { getEvents } from "@/lib/supabase/queries";

export default async function EventosPage() {
  const events = await getEvents();
  const today = new Date();

  const futuros = events.filter((event) => new Date(event.fecha_evento) >= today);
  const pasados = events.filter((event) => new Date(event.fecha_evento) < today);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <h1 className="text-3xl font-bold">Eventos y calendario</h1>
      <p className="mt-2 text-stone-700 dark:text-stone-300">
        Agenda dinamica administrada desde el panel de la fundacion.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Proximos eventos</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {futuros.map((event) => (
            <article key={event.id} className="rounded-2xl border border-amber-900/10 bg-white p-5 dark:border-amber-100/10 dark:bg-stone-900">
              <h3 className="text-lg font-semibold">{event.titulo}</h3>
              <p className="mt-2 text-stone-700 dark:text-stone-300">{event.descripcion}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
                <CalendarDays size={16} /> {new Date(event.fecha_evento).toLocaleDateString("es-CO")}
              </p>
              <p className="mt-1 inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
                <MapPin size={16} /> {event.lugar}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Eventos pasados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {pasados.map((event) => (
            <article key={event.id} className="rounded-2xl border border-stone-300/70 bg-stone-100 p-5 dark:border-stone-700 dark:bg-stone-900">
              <h3 className="text-lg font-semibold">{event.titulo}</h3>
              <p className="mt-2 text-stone-700 dark:text-stone-300">{event.descripcion}</p>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                {new Date(event.fecha_evento).toLocaleDateString("es-CO")} - {event.lugar}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
