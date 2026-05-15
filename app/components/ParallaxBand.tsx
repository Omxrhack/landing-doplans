"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { DotPattern } from "@/components/ui/dot-pattern";

const WORDS = [
  "Descubre", "planes,", "conecta", "con", "tu", "ciudad",
  "y", "vive", "cada", "momento.",
];

const RANGE_START = 0.02;
const RANGE_END   = 0.98;

function AnimatedWord({ word }: { word: string }) {
  const chars = word.split("");
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center font-display font-black text-[clamp(3.5rem,10vw,10rem)] text-purple leading-none px-8"
      exit={{ opacity: 0, y: -32, scale: 0.94, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0, 0, 0.2, 1], delay: i * 0.045 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function ParallaxBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const step = (RANGE_END - RANGE_START) / WORDS.length;
    return scrollYProgress.on("change", (v) => {
      if (v < RANGE_START || v >= RANGE_END) {
        setActiveIndex(-1);
        return;
      }
      const idx = Math.floor((v - RANGE_START) / step);
      setActiveIndex(Math.min(idx, WORDS.length - 1));
    });
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen bg-bg overflow-hidden">

        {/* Fondo de dots congelado — no reacciona al cursor */}
        <DotPattern
          width={24} height={24} cr={1.2}
          className="absolute inset-0 text-purple-600/15 dark:text-purple-400/20"
        />

        {/* Halo central estático */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,_#2a0a5430_0%,_transparent_100%)]" />

        {/* Palabras animadas */}
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
