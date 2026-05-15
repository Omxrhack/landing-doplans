import { PointerDotBackground } from "./components/PointerDotBackground";
import Hero from "./components/Hero";
import Caracteristicas from "./components/Caracteristicas";

export default function Home() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Hero />
      <Caracteristicas />
    </PointerDotBackground>
  );
}
