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

      {/* overflow-hidden solo aquí para recortar el globo */}
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
          >
            <div className="bg-bg/80 backdrop-blur-md border border-border rounded-2xl p-4 w-56 shadow-lg shadow-purple/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{activeEvent.emoji}</span>
                <div>
                  <p className="font-display font-semibold text-sm text-fg leading-tight">{activeEvent.name}</p>
                  <p className="text-[10px] text-purple font-medium">{activeEvent.city}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-fg-muted">{activeEvent.time}</span>
                <span className="font-semibold text-fg">{activeEvent.attendees.toLocaleString()} van</span>
              </div>
              <div className="mt-2 inline-block bg-purple/10 text-purple text-[10px] font-medium px-2 py-0.5 rounded-full border border-purple/20">
                {activeEvent.category}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
