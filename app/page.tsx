import { PointerDotBackground } from "./components/PointerDotBackground";
import Hero from "./components/Hero";
import Caracteristicas from "./components/Caracteristicas";
import Problematica from "./components/Problematica";

export default function Home() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Hero />
      <Caracteristicas />
      <Problematica />
    </PointerDotBackground>
  );
}
