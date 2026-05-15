"use client";

import { useRef, useEffect } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function PointerDotBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const brightWrapperRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function showBright(x: number, y: number) {
    if (!brightWrapperRef.current) return;
    brightWrapperRef.current.style.opacity = "1";
    brightWrapperRef.current.style.maskImage = `radial-gradient(circle 280px at ${x}px ${y}px, black 0%, transparent 100%)`;
  }

  function hideBright() {
    if (!brightWrapperRef.current) return;
    brightWrapperRef.current.style.opacity = "0";
  }

  useEffect(() => {
    function reset() {
      hideBright();
      if (glowRef.current) glowRef.current.style.background = "transparent";
    }
    window.addEventListener("blur", reset);
    return () => window.removeEventListener("blur", reset);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    showBright(x, y);
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(90,24,154,0.12), transparent 50%)`;
    }
  }

  function handleMouseLeave() {
    hideBright();
    if (glowRef.current) glowRef.current.style.background = "transparent";
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative bg-bg", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base dot layer — always visible, very dim */}
      <DotPattern width={24} height={24} cr={1.2} className="text-purple-600/15 dark:text-purple-400/20" />

      {/* Bright dot layer — hidden by default, revealed near cursor */}
      <div
        ref={brightWrapperRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <DotPattern width={24} height={24} cr={1.2} className="text-purple-600/80 dark:text-purple-300/90" />
      </div>

      {/* Purple glow following cursor */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none z-[1]" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-400/10 dark:bg-purple-900/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
