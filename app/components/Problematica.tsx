"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import TypingText from "@/components/animata/text/typing-text";

const PROBLEMS = [
  {
    number: "01",
    title: "Sin plan para hoy",
    description: "Los fines de semana llegan y no sabes qué hacer ni dónde ir.",
    solution: "Descubre en segundos qué pasa hoy",
  },
  {
    number: "02",
    title: "¿Con quién salgo?",
    description: "Tienes ganas de salir pero nadie en tu círculo comparte tus planes.",
    solution: "Conecta con gente de tus intereses",
  },
  {
    number: "03",
    title: "Me entero cuando ya pasó",
    description: "Te enteras de conciertos, exposiciones y eventos después de que terminaron.",
    solution: "Alertas inteligentes antes del evento",
  },
  {
    number: "04",
    title: "Mil apps, ninguna solución",
    description: "Instagram, Facebook, Eventbrite, WhatsApp… y aun así te pierdes cosas.",
    solution: "Todo en un solo lugar",
  },
];

function ProblemRow({
  number,
  title,
  description,
  solution,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  solution: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="border-t border-border grid lg:grid-cols-12 gap-6 lg:gap-8 py-10"
    >
      {/* Left */}
      <div className="lg:col-span-7 flex gap-5 items-start">
        <span
          className="text-7xl font-display font-black text-purple/20 dark:text-purple/35 leading-none select-none shrink-0 mt-1"
          aria-hidden
        >
          {number}
        </span>
        <div>
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-fg leading-tight">
            {title}
          </h3>
          <p className="font-sans text-sm text-fg-muted leading-relaxed mt-2 max-w-md">
            {description}
          </p>
        </div>
      </div>

      {/* Right — desktop only */}
      <div className="hidden lg:flex lg:col-span-5 min-w-0 overflow-hidden flex-col justify-center gap-2 pl-8 border-l border-border">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-purple">
          ✦ Solución
        </span>
        {isInView && (
          <TypingText
            text={solution}
            delay={38}
            repeat={false}
            hideCursorOnComplete
            grow={true}
            cursor={<span className="text-purple">|</span>}
            className="text-fg font-display font-semibold text-lg not-italic"
          />
        )}
      </div>

      {/* Solution badge — mobile only */}
      <div className="lg:hidden">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple bg-purple/10 rounded-full px-3 py-1">
          ✦ {solution}
        </span>
      </div>
    </motion.div>
  );
}

export default function Problematica() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="problematica" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-xl"
        >
          <span className="inline-block text-xs font-sans font-semibold tracking-widest uppercase text-purple mb-4">
            Problemática
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-tight mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="font-sans text-lg text-fg-muted leading-relaxed">
            Son los problemas que millones enfrentan cada semana. doplans los resuelve.
          </p>
        </motion.div>

        <div>
          {PROBLEMS.map((problem, i) => (
            <ProblemRow key={problem.number} {...problem} delay={i * 0.15} />
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
