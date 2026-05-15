"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const WORDS = [
  "Descubre", "planes,", "conecta", "con", "tu", "ciudad",
  "y", "vive", "cada", "momento.",
];

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const peakIn  = start + (end - start) * 0.18;
  const peakOut = start + (end - start) * 0.72;

  const opacity = useTransform(progress, [start, peakIn, peakOut, end], [0, 1, 1, 0]);
  const y       = useTransform(progress, [start, peakIn, peakOut, end], ["32px", "0px", "0px", "-32px"]);
  const scale   = useTransform(progress, [start, peakIn, peakOut, end], [0.82, 1, 1, 0.94]);
  return (
    <motion.span
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center font-display font-black text-[clamp(3.5rem,10vw,10rem)] text-purple leading-none text-center px-8"
    >
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
  const rangeStart = 0.12;
  const rangeEnd   = 0.97;
  const step = (rangeEnd - rangeStart) / total;

  return (
    <div ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen">
        <div className="relative w-full h-full">
          {WORDS.map((word, i) => {
            const start = rangeStart + i * step;
            const end   = start + step;
            return (
              <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
