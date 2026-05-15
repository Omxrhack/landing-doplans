import dynamic from "next/dynamic";
import { PointerDotBackground } from "./components/PointerDotBackground";
import Hero from "./components/Hero";

import Caracteristicas from "./components/Caracteristicas";
import Problematica from "./components/Problematica";
import ParallaxBand from "./components/ParallaxBand";

export default function Home() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Hero />
      <Caracteristicas />
      <Problematica />
      <ParallaxBand />
    </PointerDotBackground>
  );
}
