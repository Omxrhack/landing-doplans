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

  function setMask(value: string) {
    if (!brightWrapperRef.current) return;
    brightWrapperRef.current.style.maskImage = value;
  }

  useEffect(() => {
    function reset() {
      setMask("none");
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
    setMask(`radial-gradient(circle 280px at ${x}px ${y}px, black 0%, transparent 100%)`);
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(90,24,154,0.12), transparent 50%)`;
    }
  }

  function handleMouseLeave() {
    setMask("none");
    if (glowRef.current) glowRef.current.style.background = "transparent";
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative bg-[#09090b] overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base dot layer — always visible, very dim */}
      <DotPattern width={24} height={24} cr={1.2} className="text-purple-400/20" />

      {/* Bright dot layer — revealed only near cursor via CSS mask */}
      <div
        ref={brightWrapperRef}
        className="absolute inset-0 pointer-events-none"
        style={{ maskImage: "none" }}
      >
        <DotPattern width={24} height={24} cr={1.2} className="text-purple-300/90" />
      </div>

      {/* Purple glow following cursor */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none z-[1]" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
