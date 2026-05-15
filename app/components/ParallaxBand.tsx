"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const WORDS = [
  "Descubre",
  "planes,",
  "conecta",
  "con",
  "tu",
  "ciudad",
  "y",
  "vive",
  "cada",
  "momento.",
];

function Word({ word, progress, start, end }: { word: string; progress: MotionValue<number>; start: number; end: number }) {
  const peak = start + (end - start) * 0.4;
  const opacity = useTransform(progress, [start, peak, end], [0, 1, 0]);
  const y = useTransform(progress, [start, peak], ["20px", "0px"]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block mx-[0.2em]">
      {word}
    </motion.span>
  );
}

export default function ParallaxBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const total = WORDS.length;
  const step = 1 / total;
  const overlap = step * 0.5;

  return (
    <div ref={ref} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-8">
        <p className="font-display font-black text-[clamp(2rem,6vw,5rem)] text-fg text-center leading-tight max-w-4xl">
          {WORDS.map((word, i) => {
            const start = Math.max(0, i * step - overlap);
            const end = Math.min(1, (i + 1) * step + overlap);
            return (
              <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            );
          })}
        </p>
      </div>
    </div>
  );
}
