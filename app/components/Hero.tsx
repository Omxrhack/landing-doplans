"use client";

import Navbar from "@/app/components/Navbar";
import { WordRotate } from "@/components/ui/word-rotate";
import dynamic from "next/dynamic";

const GlobeDoplans = dynamic(() => import("@/components/globe"), { ssr: false });

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      {/* overflow-hidden solo aquí para recortar el globo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <GlobeDoplans />
      </div>

      {/* Texto hero */}
      <div className="relative flex-1 flex items-center z-20 px-12 lg:px-24 min-h-screen pt-20 pointer-events-none">
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

    </div>
  );
}
