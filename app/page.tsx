import { PointerDotBackground } from "./components/PointerDotBackground";
import Hero from "./components/Hero";
import BelowFoldSections from "./components/BelowFoldSections";

export default function Home() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Hero />
      <BelowFoldSections />
    </PointerDotBackground>
  );
}
