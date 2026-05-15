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
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
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

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-8 lg:px-24">
        <p className="font-display font-black text-[clamp(2.2rem,5.5vw,5rem)] text-fg text-center leading-[1.15] max-w-3xl">
          {WORDS.map((word, i) => {
            const start = i / total;
            const end = (i + 1) / total;
            return (
              <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
            );
          })}
        </p>
      </div>
    </div>
  );
}
