"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  CalendarDays,
  Drum,
  Guitar,
  HeartHandshake,
  MapPin,
  MicVocal,
  Music2,
  PartyPopper,
  Piano,
  PlayCircle,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { FacebookBadge, InstagramBadge } from "@/components/ui/social-icons";
import type { Event, GalleryItem, News, Stat, Testimonial } from "@/lib/types/database";

type HomeSectionsProps = {
  stats: Stat[];
  events: Event[];
  news: News[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
};

export function HomeSections({ stats, events, news }: HomeSectionsProps) {
  const nearestEvent = events[0];
  const featuredEvents = events.slice(0, 3);
  const latestNews = news[0];

  const culturalStats = [
    {
      label: "Estudiantes beneficiados",
      value: stats[0]?.valor ?? 120,
      icon: Users,
    },
    {
      label: "Talleres realizados",
      value: stats[1]?.valor ?? 48,
      icon: BookOpenCheck,
    },
    {
      label: "Conciertos realizados",
      value: stats[2]?.valor ?? 16,
      icon: Music2,
    },
    {
      label: "Actividades comunitarias",
      value: stats[3]?.valor ?? 32,
      icon: HeartHandshake,
    },
  ];

  const workshops = [
    {
      title: "Guitarra",
      description: "Ritmo, técnica y acompañamiento para crear desde el primer acorde.",
      icon: Guitar,
      audience: ["Niños", "Jóvenes", "Principiantes"],
    },
    {
      title: "Piano",
      description: "Explora melodía, armonía y sensibilidad musical con acompañamiento cercano.",
      icon: Piano,
      audience: ["Niños", "Jóvenes", "Intermedios"],
    },
    {
      title: "Percusión y ensamble",
      description: "Tambores, base rítmica y trabajo en equipo para crecer en conjunto.",
      icon: Drum,
      audience: ["Niños", "Jóvenes", "Principiantes"],
    },
    {
      title: "Canto y expresión",
      description: "Respiración, afinación y confianza escénica para comunicar con la voz.",
      icon: MicVocal,
      audience: ["Jóvenes", "Principiantes", "Intermedios"],
    },
  ];

  const ageTags = [
    { label: "Niños", icon: Baby },
    { label: "Jóvenes", icon: UserRound },
    { label: "Principiantes", icon: PlayCircle },
    { label: "Intermedios", icon: Sparkles },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/cardando_madera/",
      icon: InstagramBadge,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/funda.cardando.madera?locale=es_LA",
      icon: FacebookBadge,
    },
  ];

  return (
    <>
      <section id="talleres" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Talleres artísticos"
          title="Aprende música con nosotros"
          description="Descubre una ruta cultural pensada para niños, jóvenes y familias que quieren aprender, crear y compartir en comunidad."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {workshops.map((workshop, index) => (
            <motion.article
              key={workshop.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[1.75rem] border border-amber-900/10 bg-gradient-to-b from-white to-amber-50 p-6 shadow-sm transition dark:border-amber-100/10 dark:from-stone-900 dark:to-stone-950"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-950 dark:bg-amber-300">
                <workshop.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900 dark:text-stone-100">{workshop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{workshop.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {workshop.audience.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-900/10 bg-white px-3 py-1 text-xs font-medium text-stone-700 dark:border-amber-100/10 dark:bg-stone-900 dark:text-stone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {ageTags.map((tag) => (
            <div
              key={tag.label}
              className="flex items-center gap-3 rounded-2xl border border-amber-900/10 bg-white px-4 py-3 text-stone-800 shadow-sm dark:border-amber-100/10 dark:bg-stone-900 dark:text-stone-100"
            >
              <tag.icon size={18} className="text-emerald-700 dark:text-emerald-300" />
              <span className="font-medium">{tag.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="inscripcion" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-amber-900/10 bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 text-white shadow-2xl dark:border-amber-100/10">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Academia artistica premium</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">APRENDE A TOCAR GUITARRA CON NOSOTROS</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-amber-50/85 md:text-lg">
                Clases divertidas y grupales para desarrollar habilidades musicales y creativas.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Aprende a tocar guitarra de manera divertida e interactiva",
                  "Desarrolla habilidades musicales y creativas",
                  "Aumenta la confianza y autoestima",
                  "Haz nuevos amigos con intereses similares",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm leading-relaxed text-amber-50/90 backdrop-blur">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300 text-stone-950">
                      <Sparkles size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/573114755830"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                Inscríbete ahora <ArrowRight size={16} />
              </a>
            </div>

            <div className="border-t border-white/10 bg-white/5 p-8 md:p-10 lg:border-l lg:border-t-0">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Información del taller</p>
                <div className="mt-5 space-y-4 text-sm text-amber-50/90">
                  <p><span className="font-semibold text-white">Nivel:</span> principiante o intermedio</p>
                  <p><span className="font-semibold text-white">Horarios:</span> sábados de 10:00 a.m. a 12:00 p.m.</p>
                  <p><span className="font-semibold text-white">Lugar:</span> Fundación Cardando Madera Cra 17 #17-48 piso 3, Duitama</p>
                  <p><span className="font-semibold text-white">Contacto:</span> 3114755830</p>
                  <p><span className="font-semibold text-white">Correo:</span> <span className="break-words">fundacioncardandomadera@gmail.com</span></p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Acompañamiento musical cercano",
                    "Grupos reducidos y ambiente creativo",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-amber-50/85">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impacto" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Nuestro impacto cultural"
          title="Resultados que inspiran"
          description="La cultura se mide en procesos sostenidos, vínculos reales y oportunidades para crecer en comunidad."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {culturalStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-emerald-800/20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-stone-950 p-6 text-emerald-50 shadow-xl"
            >
              <stat.icon size={22} className="text-emerald-200" />
              <p className="mt-5 text-4xl font-bold md:text-5xl">
                <AnimatedCounter value={stat.value} />
                <span className="text-2xl text-emerald-200">+</span>
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-emerald-100/90">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="eventos" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Eventos y conciertos"
          title="Agenda cultural y comunitaria"
          description="Conciertos, muestras musicales, eventos infantiles, presentaciones culturales y talleres artísticos que mantienen viva la comunidad."
        />
        {nearestEvent ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 grid gap-6 overflow-hidden rounded-[2rem] border border-amber-900/10 bg-white md:grid-cols-2 dark:border-amber-100/10 dark:bg-stone-900"
          >
            <Image
              src={nearestEvent.imagen || "https://placehold.co/1000x700"}
              alt={nearestEvent.titulo}
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                Próximo evento destacado
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
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-900 px-5 py-2 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5"
              >
                Ver calendario completo <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        ) : null}

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {featuredEvents.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-amber-900/10 bg-gradient-to-br from-white to-amber-50 p-5 shadow-sm dark:border-amber-100/10 dark:from-stone-900 dark:to-stone-950"
            >
              <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
                <PartyPopper size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.24em]">Actividad comunitaria</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900 dark:text-stone-100">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{item.descripcion}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                <CalendarDays size={16} /> {new Date(item.fecha_evento).toLocaleDateString("es-CO")}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="noticias" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle overline="Noticias" title="La noticia más reciente" />
        {latestNews ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-[2rem] border border-amber-900/10 bg-white shadow-sm dark:border-amber-100/10 dark:bg-stone-900"
          >
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <Image
                src={latestNews.imagen || "https://placehold.co/1200x800"}
                alt={latestNews.titulo}
                width={1200}
                height={800}
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="p-6 md:p-8">
                <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                  Última publicación
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-900 dark:text-stone-100">{latestNews.titulo}</h3>
                <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">
                  {new Date(latestNews.fecha).toLocaleDateString("es-CO")}
                </p>
                <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  {latestNews.contenido}
                </p>
                <Link
                  href={`/noticias/${latestNews.id}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-900 px-5 py-2 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5"
                >
                  Leer noticia completa <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.article>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {news.slice(1, 4).map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[1.75rem] border border-amber-900/10 bg-white shadow-sm dark:border-amber-100/10 dark:bg-stone-900"
            >
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
                <Link href={`/noticias/${item.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Leer más <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="galeria" className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle
          overline="Instagram"
          title="Así se vive Cardando Madera en redes"
          description="Haz clic para abrir el perfil oficial y seguir sus publicaciones, actividades y momentos de comunidad."
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-amber-900/10 bg-white shadow-sm dark:border-amber-100/10 dark:bg-stone-900">
          <iframe
            title="Instagram Cardando Madera"
            src="https://www.instagram.com/cardando_madera/embed/"
            className="h-[980px] w-full bg-white dark:bg-stone-950"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="border-t border-amber-900/10 px-5 py-4 dark:border-amber-100/10">
            <a
              href="https://www.instagram.com/cardando_madera/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-stone-950"
            >
              Abrir Instagram oficial <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto mt-20 max-w-5xl px-4 md:px-8">
        <SectionTitle
          overline="Contacto"
          title="Conectemos para seguir transformando"
          description="Escríbenos si quieres participar, apoyar o conocer más sobre nuestros talleres y eventos."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-amber-900/10 bg-white p-6 shadow-sm dark:border-amber-100/10 dark:bg-stone-900">
            <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">Redes sociales reales</h3>
            <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">
              Síguenos para ver avances, eventos y la vida cultural de la fundación.
            </p>
            <div className="mt-6 grid gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-stone-900 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:hover:bg-stone-800"
                >
                  <span className="inline-flex items-center gap-3 font-medium">
                    <social.icon className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                    {social.label}
                  </span>
                  <ArrowRight size={16} className="text-stone-400" />
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-3 text-sm text-stone-700 dark:text-stone-300">
              <p className="inline-flex items-center gap-2"><MapPin size={16} /> Cra 17 #17-48 piso 3, Duitama</p>
              <p className="inline-flex items-center gap-2"><Users size={16} /> Comunidad, arte y acompañamiento cercano</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-[1.75rem] border border-amber-900/10 bg-gradient-to-br from-white to-amber-50 p-6 shadow-sm dark:border-amber-100/10 dark:from-stone-900 dark:to-stone-950">
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-emerald-700 transition focus:ring-2 dark:border-stone-700 dark:bg-stone-950"
            />
            <input
              type="email"
              placeholder="Correo"
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-emerald-700 transition focus:ring-2 dark:border-stone-700 dark:bg-stone-950"
            />
            <textarea
              rows={5}
              placeholder="Mensaje"
              className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-emerald-700 transition focus:ring-2 dark:border-stone-700 dark:bg-stone-950"
            />
            <button
              type="submit"
              className="w-fit rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              Enviar mensaje
            </button>
            <div className="grid gap-3 sm:grid-cols-2">
              <p className="rounded-2xl border border-amber-900/10 bg-white px-4 py-3 text-sm text-stone-700 dark:border-amber-100/10 dark:bg-stone-900 dark:text-stone-300">
                WhatsApp: 3114755830
              </p>
              <p className="rounded-2xl border border-amber-900/10 bg-white px-4 py-3 text-sm text-stone-700 break-words dark:border-amber-100/10 dark:bg-stone-900 dark:text-stone-300">
                Correo: <span className="break-words">fundacioncardandomadera@gmail.com</span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}