"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Rellax from "rellax";
import { DotPattern } from "@/components/ui/dot-pattern";

const WORDS = ["Descubre", "planes,", "vive", "tu", "ciudad."];

function AnimatedWord({ word, dir }: { word: string; dir: "fwd" | "bwd" }) {
  const fromY = dir === "fwd" ? 48 : -48;
  const exitY = dir === "fwd" ? -48 : 48;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center font-display font-black text-[clamp(3.5rem,10vw,10rem)] text-purple select-none"
      initial={{ opacity: 0, y: fromY, filter: "blur(16px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: exitY, filter: "blur(16px)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.div>
  );
}

export default function ParallaxBand() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dir, setDir] = useState<"fwd" | "bwd">("fwd");
  const currentIdxRef = useRef(-1);
  const outerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Rellax sólo para el fondo — efecto de profundidad real
    const bgRellax = bgRef.current
      ? new Rellax(bgRef.current, { speed: -3, center: true, round: true })
      : null;

    // Scroll listener confiable para las palabras
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;

      if (rect.top > 0) {
        if (currentIdxRef.current !== -1) {
          currentIdxRef.current = -1;
          setDir("bwd");
          setActiveIndex(-1);
        }
        return;
      }

      if (-rect.top > scrollable) return;

      const progress = -rect.top / scrollable;
      const targetIdx = Math.min(
        Math.floor(progress * WORDS.length),
        WORDS.length - 1
      );

      if (targetIdx === currentIdxRef.current) return;

      const forward = targetIdx > currentIdxRef.current;
      const nextIdx = forward
        ? currentIdxRef.current + 1
        : currentIdxRef.current - 1;

      currentIdxRef.current = nextIdx;
      setDir(forward ? "fwd" : "bwd");
      setActiveIndex(nextIdx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      bgRellax?.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={outerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen bg-bg overflow-hidden">

        {/* Fondo con parallax Rellax */}
        <div ref={bgRef} className="absolute -inset-20 pointer-events-none">
          <DotPattern
            width={24} height={24} cr={1.2}
            className="absolute inset-0 text-purple-600/15 dark:text-purple-400/20"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,_#2a0a5430_0%,_transparent_100%)]" />

        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            {activeIndex >= 0 && (
              <AnimatedWord key={activeIndex} word={WORDS[activeIndex]} dir={dir} />
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
