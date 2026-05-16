"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { DotPattern } from "@/components/ui/dot-pattern";

const WORDS = ["Descubre", "planes,", "vive", "tu", "ciudad."];

function Word({ word, dir }: { word: string; dir: "fwd" | "bwd" }) {
  const y0 = dir === "fwd" ? 56 : -56;
  const yExit = dir === "fwd" ? -56 : 56;

  return (
    <motion.span
      className="absolute inset-0 flex items-center justify-center font-display font-black text-[clamp(3.5rem,10vw,10rem)] text-purple select-none"
      initial={{ opacity: 0, y: y0, filter: "blur(20px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: yExit, filter: "blur(20px)" }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.span>
  );
}

export default function ParallaxBand() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dir, setDir] = useState<"fwd" | "bwd">("fwd");
  const idxRef = useRef(-1);
  const outerRef = useRef<HTMLDivElement>(null);

  // scrollYProgress: 0 cuando top del elemento = top del viewport
  //                  1 cuando bottom del elemento = bottom del viewport
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // Palabras: reaccionan a cada cambio de scrollYProgress (RAF-synced)
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p <= 0) {
      if (idxRef.current !== -1) {
        idxRef.current = -1;
        setDir("bwd");
        setActiveIndex(-1);
      }
      return;
    }

    const target = Math.min(Math.floor(p * WORDS.length), WORDS.length - 1);
    if (target === idxRef.current) return;

    const forward = target > idxRef.current;
    idxRef.current = target;
    setDir(forward ? "fwd" : "bwd");
    setActiveIndex(target);
  });

  return (
    <div ref={outerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen bg-bg overflow-hidden">

        <DotPattern
          width={24} height={24} cr={1.2}
          className="absolute inset-0 text-purple-600/15 dark:text-purple-400/20"
        />

        {/* Halo */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,_#2a0a5430_0%,_transparent_100%)]" />

        {/* Palabras */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="popLayout">
            {activeIndex >= 0 && (
              <Word key={activeIndex} word={WORDS[activeIndex]} dir={dir} />
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
