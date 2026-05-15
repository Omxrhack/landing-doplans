import dynamic from "next/dynamic";
import { PointerDotBackground } from "./components/PointerDotBackground";
import Hero from "./components/Hero";

const Caracteristicas = dynamic(() => import("./components/Caracteristicas"), { ssr: false });
const Problematica    = dynamic(() => import("./components/Problematica"),    { ssr: false });
const ParallaxBand    = dynamic(() => import("./components/ParallaxBand"),    { ssr: false });

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
