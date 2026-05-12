"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-20 md:px-8 md:pt-28">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-[#2e2219]/70" />
      <div className="mx-auto max-w-5xl text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-amber-100/90"
        >
          Cultura que transforma
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
        >
          Fundacion Cardando Madera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-amber-50/95 md:text-xl"
        >
          Transformando vidas a traves del arte, la cultura y la accion comunitaria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button href="#nosotros">Conoce nuestra labor</Button>
          <Button href="#contacto" variant="outline">
            Unete a nuestra comunidad
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs"
        >
          <ChevronDown size={14} />
          Desliza para explorar
        </motion.div>
      </div>
    </section>
  );
}
