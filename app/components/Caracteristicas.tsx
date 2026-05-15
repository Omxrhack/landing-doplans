"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Eight from "@/components/animata/bento-grid/eight";

export default function Caracteristicas() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="caracteristicas" className="bg-bg py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-xl"
        >
          <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-purple mb-4">
            Características
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-tight mb-4">
            Todo lo que necesitas para vivir tu ciudad
          </h2>
          <p className="font-sans text-lg text-fg-muted leading-relaxed">
            Una sola app para descubrir, planificar y conectar con lo mejor de tu entorno.
          </p>
        </motion.div>

        <Eight />
      </div>
    </section>
  );
}
