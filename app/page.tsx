import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <Hero />
    </div>
  );
}
