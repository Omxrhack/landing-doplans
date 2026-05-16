"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/app/components/Navbar";
import { WordRotate } from "@/components/ui/word-rotate";
import dynamic from "next/dynamic";
import { type GlobeEvent } from "@/lib/globe-events";

const GlobeDoplans = dynamic(() => import("@/components/globe"), { ssr: false });

export default function Hero() {
  const [activeEvent, setActiveEvent] = useState<GlobeEvent | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      <div className="absolute inset-0 z-0 overflow-hidden">
        <GlobeDoplans onActiveEvent={setActiveEvent} />
      </div>

      {/* Texto hero */}
      <div className="relative flex-1 flex items-center z-20 px-4 lg:pl-[7%] lg:pr-12 min-h-screen pt-20 pointer-events-none">
        <div className="flex flex-col gap-5 max-w-xl">
          <div className="flex flex-col">
            <h1 className="font-display font-black text-[9vw] sm:text-5xl lg:text-7xl text-fg leading-tight">
              Descubre los mejores
            </h1>
            <WordRotate
              words={["eventos", "planes", "comunidades"]}
              className="font-display font-black text-[9vw] sm:text-5xl lg:text-7xl text-purple leading-tight"
              duration={2500}
            />
            <h1 className="font-display font-black text-[9vw] sm:text-5xl lg:text-7xl text-fg leading-tight">
              en tu ciudad
            </h1>
          </div>

          <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-sm">
            La app para encontrar, vivir y compartir los mejores planes con quienes más quieres.
          </p>
        </div>
      </div>

      {/* Card dinámica sincronizada con el globo */}
      <AnimatePresence mode="wait">
        {activeEvent && (
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 32, scale: 0.92, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0,  scale: 1,    filter: "blur(0px)" }}
            exit={{    opacity: 0, y: -24, scale: 0.94, filter: "blur(6px)" }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              filter: { duration: 0.3 },
            }}
            className="hidden lg:block absolute right-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
          >
            {/* Glow exterior */}
            <div className="absolute -inset-4 rounded-3xl bg-purple/10 blur-2xl" />

            <div className="relative w-72 rounded-3xl border border-border/60 bg-bg/80 backdrop-blur-2xl shadow-2xl shadow-purple/20 overflow-hidden p-5 flex flex-col gap-4">
              {/* Glow ambiental interior */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-purple/8 via-transparent to-transparent pointer-events-none" />

              {/* Header: emoji + nombre + ciudad */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple/30 to-purple/10 flex items-center justify-center text-2xl shrink-0">
                  {activeEvent.emoji}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-sm text-fg leading-snug truncate">
                    {activeEvent.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
                    <p className="text-[11px] text-purple font-semibold truncate">{activeEvent.city}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-fg-muted uppercase tracking-widest mb-1">Hora</p>
                  <p className="font-display font-bold text-sm text-fg">{activeEvent.time}</p>
                </div>
                <div>
                  <p className="text-[10px] text-fg-muted uppercase tracking-widest mb-1">Asistentes</p>
                  <p className="font-display font-bold text-sm text-fg">{activeEvent.attendees.toLocaleString()}</p>
                </div>
              </div>

              {/* Category pill */}
              <div className="flex">
                <span className="text-[10px] font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full px-3 py-1">
                  {activeEvent.category}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
