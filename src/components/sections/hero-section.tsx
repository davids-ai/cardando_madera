"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Music2, Sparkles, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-16 md:px-8 md:pt-24">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-20 bg-cover bg-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_28%),linear-gradient(180deg,rgba(19,11,7,0.2)_0%,rgba(19,11,7,0.72)_45%,rgba(19,11,7,0.88)_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.12),transparent_22%),linear-gradient(180deg,rgba(10,10,10,0.15)_0%,rgba(10,10,10,0.78)_45%,rgba(10,10,10,0.94)_100%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-3xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-amber-50 backdrop-blur"
          >
            <Sparkles size={14} /> Fundacion cultural en Duitama
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Arte, música y cultura para transformar vidas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-amber-50/90 md:text-2xl"
          >
            Clases musicales gratuitas, conciertos y espacios culturales para niños, jóvenes y comunidad en Duitama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#talleres">Ver talleres</Button>
            <Button href="#inscripcion" variant="outline">
              Inscribirme ahora
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Music2, label: "Talleres musicales" },
              { icon: Users2, label: "Comunidad viva" },
              { icon: Sparkles, label: "Aprendizaje artistico" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + index * 0.08 }}
                className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-xl"
              >
                <item.icon className="text-amber-200" size={18} />
                <p className="mt-2 text-sm font-medium text-amber-50/95">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.4 }}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-50/90 backdrop-blur"
          >
            <ChevronDown size={14} />
            Explora la experiencia cultural
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-stone-950/45 p-6 text-white shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_38%)]" />
          <div className="relative space-y-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <div className="bg-gradient-to-br from-amber-300 via-orange-400 to-emerald-500 px-5 py-4 text-stone-950">
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">Próxima actividad</p>
                <h2 className="mt-2 text-2xl font-semibold">Taller musical comunitario</h2>
                <p className="mt-2 text-sm text-stone-900/80">Guitarra, canto y percusión para niños y jóvenes.</p>
              </div>
              <div className="space-y-3 bg-black/20 px-5 py-4 text-sm text-amber-50/90">
                <p className="inline-flex items-center gap-2"><Music2 size={16} /> Acompañamiento artístico cercano</p>
                <p className="inline-flex items-center gap-2"><Users2 size={16} /> Espacios para aprender en grupo</p>
                <p className="inline-flex items-center gap-2"><Sparkles size={16} /> Comunidad, creatividad e inspiración</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Clases gratuitas", text: "Procesos formativos abiertos a la comunidad." },
                { title: "Conciertos vivos", text: "Muestras musicales y encuentros culturales." },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <h3 className="font-semibold text-amber-50">{card.title}</h3>
                  <p className="mt-1 text-sm text-amber-50/80">{card.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#inscripcion"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Ver inscripción <ArrowRight size={16} />
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
