"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParallax } from "react-scroll-parallax";
import { DotPattern } from "@/components/ui/dot-pattern";

const WORDS = [
  "Descubre", "planes,", "conecta", "con", "tu", "ciudad",
  "y", "vive", "cada", "momento.",
];

// Para 600vh de elemento en viewport 100vh:
// progreso total = 700vh → zona sticky activa = [100/700, 600/700]
const RANGE_START = 100 / 700;
const RANGE_END   = 600 / 700;

function AnimatedWord({ word }: { word: string }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center font-display font-black text-[clamp(3.5rem,10vw,10rem)] text-purple leading-none px-8"
      exit={{ opacity: 0, y: -40, scale: 0.92, transition: { duration: 0.45, ease: [0.4, 0, 0.6, 1] } }}
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function ParallaxBand() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const currentIdxRef  = useRef(-1);
  const isAnimatingRef = useRef(false);
  const timerRef       = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showWord(idx: number) {
    if (idx === currentIdxRef.current) return;
    isAnimatingRef.current = true;
    currentIdxRef.current  = idx;
    setActiveIndex(idx);

    // Tiempo hasta que las letras terminan de entrar + margen de lectura
    const word    = idx >= 0 ? WORDS[idx] : "";
    const lockMs  = word.length * 70 + 550 + 400;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, lockMs);
  }

  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      // Salida: ocultar solo si se sale por arriba (scroll hacia atrás al inicio)
      if (progress < RANGE_START) {
        if (timerRef.current) clearTimeout(timerRef.current);
        isAnimatingRef.current = false;
        currentIdxRef.current  = -1;
        setActiveIndex(-1);
        return;
      }

      const p = progress >= RANGE_END
        ? 1
        : (progress - RANGE_START) / (RANGE_END - RANGE_START);

      const targetIdx = Math.min(
        Math.floor(p * WORDS.length),
        WORDS.length - 1
      );

      // Si estamos animando, ignorar avances — esperar a que termine
      if (isAnimatingRef.current) return;

      if (targetIdx !== currentIdxRef.current) {
        // Avanzar solo 1 palabra a la vez (nunca saltar)
        const nextIdx = targetIdx > currentIdxRef.current
          ? currentIdxRef.current + 1
          : targetIdx;
        showWord(nextIdx);
      }
    },
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <div ref={ref} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen bg-bg overflow-hidden">

        {/* Fondo dots estático — no reacciona al cursor */}
        <DotPattern
          width={24} height={24} cr={1.2}
          className="absolute inset-0 text-purple-600/15 dark:text-purple-400/20"
        />

        {/* Halo central */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,_#2a0a5430_0%,_transparent_100%)]" />

        {/* Palabras */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            {activeIndex >= 0 && (
              <AnimatedWord key={activeIndex} word={WORDS[activeIndex]} />
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
