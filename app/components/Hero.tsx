"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/app/components/Navbar";
import { WordRotate } from "@/components/ui/word-rotate";
import dynamic from "next/dynamic";
import { type GlobeEvent } from "@/lib/globe-events";
import { MapPin, Clock, Users } from "lucide-react";

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
      <div className="relative flex-1 flex items-center z-20 px-12 lg:px-24 min-h-screen pt-20 pointer-events-none">
        <div className="flex flex-col gap-5 max-w-lg">
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-fg leading-tight">
              Descubre los mejores
            </h1>
            <WordRotate
              words={["eventos", "planes", "comunidades"]}
              className="font-display font-bold text-5xl lg:text-7xl text-purple leading-tight"
              duration={2500}
            />
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-fg leading-tight">
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
            <div className="absolute -inset-3 rounded-3xl bg-purple/10 blur-xl" />

            <div className="relative w-60 rounded-2xl border border-border bg-bg-secondary shadow-2xl shadow-purple/15 overflow-hidden">

              {/* Franja superior con color de categoría */}
              <div className="h-1 w-full bg-gradient-to-r from-purple via-purple-light to-transparent" />

              <div className="p-4">
                {/* Header: emoji + evento + ciudad */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple/15 flex items-center justify-center text-xl">
                    {activeEvent.emoji}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-sm text-fg leading-snug truncate">
                      {activeEvent.name}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5 text-purple shrink-0" />
                      <p className="text-[11px] text-purple font-semibold truncate">{activeEvent.city}</p>
                    </div>
                  </div>
                </div>

                {/* Info: horario + asistentes */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-fg-muted">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{activeEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-fg-muted">
                    <Users className="w-3 h-3 shrink-0" />
                    <span className="font-semibold text-fg">{activeEvent.attendees.toLocaleString()}</span>
                  </div>
                </div>

                {/* Categoría + barra de progreso decorativa */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="bg-purple/10 text-purple text-[10px] font-semibold px-2.5 py-1 rounded-full border border-purple/20">
                    {activeEvent.category}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-purple"
                        style={{ height: `${8 + Math.random() * 8}px`, opacity: 0.3 + i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
