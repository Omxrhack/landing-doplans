"use client";

import { PointerDotBackground } from "@/app/components/PointerDotBackground";
import Navbar from "@/app/components/Navbar";
import { WordRotate } from "@/components/ui/word-rotate";
import dynamic from "next/dynamic";

const GlobeDoplans = dynamic(() => import("@/components/globe"), { ssr: false });

export default function Hero() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      {/*
        Contenedor del globo — misma posición que funcionó:
        120vh × 120vh, borde izq ~50% viewport, cortado por overflow-hidden
      */}
      <div className="absolute inset-0 z-0">
        <GlobeDoplans />
      </div>

      {/* Texto hero */}
      <div className="relative flex-1 flex items-center z-20 px-12 lg:px-24 min-h-[calc(100vh-4rem)] pointer-events-none">
        <div className="flex flex-col gap-5 max-w-lg">
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-fg leading-tight">
              Descubre los mejores
            </h1>
            <WordRotate
              words={["eventos", "planes", "comunidades"]}
              className="font-display font-bold text-5xl lg:text-7xl text-purple leading-tight"
              duration={2500}
            />
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-fg leading-tight">
              en tu ciudad
            </h1>
          </div>

          <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-sm">
            La app para encontrar, vivir y compartir los mejores planes con quienes más quieres.
          </p>
        </div>
      </div>
    </PointerDotBackground>
  );
}
