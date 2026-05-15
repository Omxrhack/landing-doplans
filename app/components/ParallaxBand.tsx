"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParallax } from "react-scroll-parallax";
import { DotPattern } from "@/components/ui/dot-pattern";

const WORDS = [
  "Descubre", "planes,", "conecta", "con", "tu", "ciudad",
  "y", "vive", "cada", "momento.",
];

// Para 280vh de elemento en viewport 100vh:
// progreso total = 380vh → zona sticky activa = [100/380, 280/380]
const RANGE_START = 100 / 380;
const RANGE_END   = 280 / 380;

function AnimatedWord({ word }: { word: string }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center font-display font-black text-[clamp(3.5rem,10vw,10rem)] text-purple leading-none px-8"
      exit={{ opacity: 0, y: -32, scale: 0.94, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }}
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: i * 0.05, ease: [0, 0, 0.2, 1] }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function ParallaxBand() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      if (progress < RANGE_START || progress > RANGE_END) {
        setActiveIndex(-1);
        return;
      }
      const p = (progress - RANGE_START) / (RANGE_END - RANGE_START);
      const idx = Math.floor(p * WORDS.length);
      setActiveIndex(Math.min(idx, WORDS.length - 1));
    },
    shouldAlwaysCompleteAnimation: true,
  });

  return (
    <div ref={ref} className="relative h-[280vh]">
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
