"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { PointerDotBackground } from "@/app/components/PointerDotBackground";
import Navbar from "@/app/components/Navbar";
import { Globe } from "@/components/ui/globe";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  const phiRef = useRef(0);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const globeConfig = useMemo(() => ({
    width: 1200,
    height: 1200,
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: isDark ? 1 : 0,
    diffuse: 1.2,
    mapSamples: 22000,
    mapBrightness: isDark ? 8 : 6,
    baseColor: isDark
      ? ([0.18, 0.05, 0.32] as [number, number, number])
      : ([0.82, 0.78, 0.9] as [number, number, number]),
    markerColor: [0.65, 0.15, 0.95] as [number, number, number],
    glowColor: isDark
      ? ([0.45, 0.1, 0.75] as [number, number, number])
      : ([0.35, 0.08, 0.6] as [number, number, number]),
    markers: [
      { location: [14.5995, 120.9842] as [number, number], size: 0.03 },
      { location: [19.076, 72.8777] as [number, number], size: 0.03 },
      { location: [23.8103, 90.4125] as [number, number], size: 0.03 },
      { location: [30.0444, 31.2357] as [number, number], size: 0.03 },
      { location: [39.9042, 116.4074] as [number, number], size: 0.03 },
      { location: [-23.5505, -46.6333] as [number, number], size: 0.04 },
      { location: [19.4326, -99.1332] as [number, number], size: 0.04 },
      { location: [40.7128, -74.006] as [number, number], size: 0.04 },
      { location: [34.6937, 135.5022] as [number, number], size: 0.03 },
      { location: [41.0082, 28.9784] as [number, number], size: 0.03 },
    ],
    onRender: (state: Record<string, number>) => {
      state.phi = phiRef.current;
      phiRef.current += 0.0018;
    },
  }), [isDark]);

  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Navbar />

      {/* Globe — absolute, massive, clipped by overflow-hidden */}
      <div className="absolute pointer-events-none z-0" style={{ width: '130vh', height: '130vh', right: '-20vh', top: 'calc(50vh - 65vh)' }}>
        <Globe className="w-full h-full" config={globeConfig} />
      </div>

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 flex items-center min-h-[calc(100vh-4rem)] z-10">
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex flex-col gap-0">
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-fg leading-tight">
              Descubre los mejores
            </h1>
            <WordRotate
              words={["eventos", "planes", "comunidades"]}
              className="font-display font-bold text-4xl lg:text-6xl text-purple leading-tight"
              duration={2500}
            />
            <h2 className="font-display font-bold text-4xl lg:text-6xl text-fg leading-tight">
              en tu ciudad
            </h2>
          </div>

          <p className="font-sans text-lg text-fg-muted max-w-md leading-relaxed">
            La app para encontrar, vivir y compartir los mejores planes con
            quienes más quieres.
          </p>
        </div>
      </div>
    </PointerDotBackground>
  );
}
