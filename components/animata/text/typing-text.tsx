"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  delay?: number;
  repeat?: boolean;
  cursor?: ReactNode;
  className?: string;
  grow?: boolean;
  alwaysVisibleCount?: number;
  smooth?: boolean;
  waitTime?: number;
  onComplete?: () => void;
  hideCursorOnComplete?: boolean;
}

function Blinker() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShow((p) => !p), 500);
    return () => clearInterval(interval);
  }, []);
  return <span className={show ? "" : "opacity-0"}>|</span>;
}

enum TypingDirection { Forward = 1, Backward = -1 }

function Type({ text, repeat, cursor, delay, grow, className, alwaysVisibleCount, smooth, waitTime = 1000, onComplete, hideCursorOnComplete }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<TypingDirection>(TypingDirection.Forward);
  const [isComplete, setIsComplete] = useState(false);
  const words = useMemo(() => text.split(/\s+/), [text]);
  const total = smooth ? words.length : text.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (direction === TypingDirection.Forward && prev >= total - 1) { clearInterval(interval); return prev; }
        if (direction === TypingDirection.Backward && prev <= 0) { clearInterval(interval); return prev; }
        return prev + direction;
      });
    }, delay);
    return () => clearInterval(interval);
  }, [total, direction, delay]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (index >= total && repeat) timeout = setTimeout(() => setDirection(-1), waitTime);
    if (index <= 0 && repeat) timeout = setTimeout(() => setDirection(1), waitTime);
    return () => clearTimeout(timeout);
  }, [index, total, repeat, waitTime]);

  useEffect(() => {
    if (index === total && !repeat) { setIsComplete(true); onComplete?.(); }
  }, [index, total, repeat, onComplete]);

  return (
    <div className={cn("relative font-mono", className)}>
      {!grow && <div className="invisible">{text}</div>}
      <div className={cn({ "absolute inset-0 h-full w-full": !grow })}>
        {smooth
          ? words.map((word, wi) => (
              <span key={wi} className={cn("whitespace-pre transition-opacity duration-300", { "opacity-100": wi < index, "opacity-0": wi >= index + (alwaysVisibleCount ?? 1) })}>
                {word}{" "}
              </span>
            ))
          : text.slice(0, Math.max(index, Math.min(text.length, alwaysVisibleCount ?? 1)))}
        {cursor && (!hideCursorOnComplete || !isComplete) && cursor}
      </div>
    </div>
  );
}

export default function TypingText({ text, repeat = true, cursor = <Blinker />, delay = 32, className, grow = false, alwaysVisibleCount = 1, smooth = false, waitTime, onComplete, hideCursorOnComplete = false }: TypingTextProps) {
  return <Type key={text} delay={delay} waitTime={waitTime ?? 1000} grow={grow} repeat={repeat} text={text} cursor={cursor} className={className} smooth={smooth} alwaysVisibleCount={alwaysVisibleCount} onComplete={onComplete} hideCursorOnComplete={hideCursorOnComplete} />;
}
