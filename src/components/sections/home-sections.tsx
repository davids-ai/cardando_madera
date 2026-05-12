import Image from "next/image";
import Link from "next/link";
import { CalendarDays, HandHeart, HeartHandshake, MapPin, Sparkles, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import type { Event, GalleryItem, News, Stat, Testimonial } from "@/lib/types/database";

type HomeSectionsProps = {
  stats: Stat[];
  events: Event[];
  news: News[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
};

export function HomeSections({ stats, events, news, gallery, testimonials }: HomeSectionsProps) {
  const nearestEvent = events[0];

  return (
    <>
      <section id="nosotros" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Sobre nosotros"
          title="Arte, educacion y comunidad para transformar realidades"
          description="Somos una organizacion cultural y comunitaria que impulsa procesos artisticos y educativos gratuitos para ninos, jovenes y familias de Duitama, articulando trabajo territorial junto a aliados como Culturama."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <HandHeart className="text-emerald-700" />,
              title: "Impacto social",
              text: "Fortalecemos habilidades, confianza y tejido social desde experiencias culturales.",
            },
            {
              icon: <Sparkles className="text-emerald-700" />,
              title: "Formacion artistica",
              text: "Clases y talleres gratuitos de expresion artistica para infancia y juventud.",
            },
            {
              icon: <HeartHandshake className="text-emerald-700" />,
              title: "Trabajo comunitario",
              text: "Construimos oportunidades con voluntariado, familias y organizaciones locales.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-amber-900/10 bg-[#f9f2e8] p-6 dark:border-amber-100/10 dark:bg-stone-900"
            >
              {card.icon}
              <h3 className="mt-3 text-xl font-semibold text-stone-900 dark:text-stone-100">{card.title}</h3>
              <p className="mt-2 text-stone-700 dark:text-stone-300">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Mision, vision y valores" title="Nuestra identidad institucional" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-amber-900/10 bg-white p-6 dark:border-amber-100/10 dark:bg-stone-900">
            <h3 className="text-lg font-semibold">Mision</h3>
            <p className="mt-2 text-stone-700 dark:text-stone-300">
              Promover el desarrollo integral de la comunidad a traves del arte y la educacion.
            </p>
          </article>
          <article className="rounded-3xl border border-amber-900/10 bg-white p-6 dark:border-amber-100/10 dark:bg-stone-900">
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="mt-2 text-stone-700 dark:text-stone-300">
              Ser referente regional de transformacion social cultural en Boyaca.
            </p>
          </article>
          <article className="rounded-3xl border border-amber-900/10 bg-white p-6 dark:border-amber-100/10 dark:bg-stone-900">
            <h3 className="text-lg font-semibold">Valores</h3>
            <p className="mt-2 text-stone-700 dark:text-stone-300">
              Solidaridad, inclusion, cultura, educacion, comunidad y creatividad.
            </p>
          </article>
        </div>
      </section>

      <section id="impacto" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Impacto social" title="Resultados que inspiran" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.id}
              className="rounded-2xl border border-emerald-800/20 bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-emerald-50"
            >
              <p className="text-3xl font-bold">
                <AnimatedCounter value={stat.valor} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-emerald-100/90">{stat.nombre}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="eventos" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Eventos y calendario" title="Agenda cultural y comunitaria" />
        {nearestEvent ? (
          <article className="mt-10 grid gap-6 overflow-hidden rounded-3xl border border-amber-900/10 bg-white md:grid-cols-2 dark:border-amber-100/10 dark:bg-stone-900">
            <Image
              src={nearestEvent.imagen || "https://placehold.co/1000x700"}
              alt={nearestEvent.titulo}
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
            <div className="p-6">
              <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                Proximo evento destacado
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{nearestEvent.titulo}</h3>
              <p className="mt-3 text-stone-700 dark:text-stone-300">{nearestEvent.descripcion}</p>
              <div className="mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-300">
                <p className="inline-flex items-center gap-2">
                  <CalendarDays size={16} /> {new Date(nearestEvent.fecha_evento).toLocaleDateString("es-CO")}
                </p>
                <p className="inline-flex items-center gap-2">
                  <MapPin size={16} /> {nearestEvent.lugar}
                </p>
              </div>
              <Link
                href="/eventos"
                className="mt-5 inline-flex rounded-full bg-amber-900 px-5 py-2 text-sm font-semibold text-amber-50"
              >
                Ver calendario completo
              </Link>
            </div>
          </article>
        ) : null}
      </section>

      <section id="noticias" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Noticias" title="Historias que visibilizan nuestra accion" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.slice(0, 3).map((item) => (
            <article key={item.id} className="overflow-hidden rounded-3xl border border-amber-900/10 bg-white dark:border-amber-100/10 dark:bg-stone-900">
              <Image
                src={item.imagen || "https://placehold.co/900x600"}
                alt={item.titulo}
                width={900}
                height={600}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-stone-500">{new Date(item.fecha).toLocaleDateString("es-CO")}</p>
                <h3 className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-100">{item.titulo}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-stone-700 dark:text-stone-300">{item.contenido}</p>
                <Link href={`/noticias/${item.id}`} className="mt-4 inline-flex text-sm font-semibold text-emerald-700">
                  Leer mas
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Galeria" title="Momentos de arte y comunidad" />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 8).map((item) => (
            <article key={item.id} className="group relative overflow-hidden rounded-2xl">
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={700}
                height={700}
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 md:h-56"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                <p className="text-sm font-medium">{item.titulo}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Testimonios" title="Voces de nuestra comunidad" />
        <TestimonialsCarousel items={testimonials} />
      </section>

      <section id="contacto" className="mx-auto mt-20 max-w-5xl px-4 md:px-8">
        <SectionTitle overline="Contacto" title="Conectemos para seguir transformando" />
        <form className="mt-10 grid gap-4 rounded-3xl border border-amber-900/10 bg-white p-6 dark:border-amber-100/10 dark:bg-stone-900">
          <input
            type="text"
            placeholder="Nombre"
            className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none ring-emerald-700 focus:ring-2 dark:border-stone-700 dark:bg-stone-950"
          />
          <input
            type="email"
            placeholder="Correo"
            className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none ring-emerald-700 focus:ring-2 dark:border-stone-700 dark:bg-stone-950"
          />
          <textarea
            rows={5}
            placeholder="Mensaje"
            className="rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none ring-emerald-700 focus:ring-2 dark:border-stone-700 dark:bg-stone-950"
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Enviar mensaje
          </button>
          <p className="text-sm text-stone-600 dark:text-stone-300">
            Ubicacion: Duitama, Boyaca, Colombia
          </p>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-xl"
          >
            <Users size={16} /> WhatsApp
          </a>
        </form>
      </section>
    </>
  );
}
