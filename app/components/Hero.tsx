"use client";

import AnimatedBeam from "@/components/animata/background/animated-beam";
import { Globe } from "@/components/ui/globe";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Marquee } from "@/components/ui/marquee";

const categories = [
  { emoji: "🎵", label: "Música" },
  { emoji: "🍕", label: "Gastronomía" },
  { emoji: "🏃", label: "Deportes" },
  { emoji: "🎨", label: "Arte" },
  { emoji: "🎭", label: "Teatro" },
  { emoji: "🌙", label: "Nightlife" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "🏖️", label: "Outdoors" },
  { emoji: "🎪", label: "Festivales" },
  { emoji: "📸", label: "Fotografía" },
];

const stats = [
  { value: 10000, label: "Usuarios", suffix: "+" },
  { value: 50, label: "Ciudades", suffix: "+" },
  { value: 1000, label: "Eventos", suffix: "+" },
];

function EventCard({
  emoji,
  title,
  time,
  attendees,
  className,
  style,
}: {
  emoji: string;
  title: string;
  time: string;
  attendees: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`hidden lg:block absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 w-44 text-white select-none ${className ?? ""}`}
      style={style}
    >
      <div className="text-2xl mb-1">{emoji}</div>
      <p className="font-sans font-semibold text-sm leading-snug">{title}</p>
      <p className="font-sans text-xs text-white/60 mt-1">{time}</p>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-xs text-white/50">❤️ {attendees} van</span>
      </div>
    </div>
  );
}

const globeConfig = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 22000,
  mapBrightness: 8,
  baseColor: [0.18, 0.05, 0.32] as [number, number, number],
  markerColor: [0.65, 0.15, 0.95] as [number, number, number],
  glowColor: [0.45, 0.1, 0.75] as [number, number, number],
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
};

export default function Hero() {
  return (
    <AnimatedBeam className="min-h-[90vh] flex flex-col">
      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        {/* LEFT — Text content */}
        <div className="flex flex-col gap-6 z-10">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-sm">✨</span>
            <AnimatedShinyText
              className="text-sm font-sans font-medium text-white/80"
              shimmerWidth={120}
            >
              Ahora en iOS y Android
            </AnimatedShinyText>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-0">
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight">
              Descubre los mejores
            </h1>
            <WordRotate
              words={["eventos", "planes", "comunidades"]}
              className="font-display font-bold text-4xl lg:text-6xl text-purple-400 leading-tight"
              duration={2500}
            />
            <h2 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight">
              en tu ciudad
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-lg text-white/70 max-w-md leading-relaxed">
            La app para encontrar, vivir y compartir los mejores planes con
            quienes más quieres.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <ShimmerButton
              background="#5A189A"
              shimmerColor="#c084fc"
              borderRadius="100px"
              className="font-sans font-semibold text-sm px-6 py-3"
            >
              Descargar app
            </ShimmerButton>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white font-sans font-semibold bg-transparent"
            >
              Unirse gratis →
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <div className="flex items-baseline gap-0.5">
                  <NumberTicker
                    value={stat.value}
                    className="font-display font-bold text-2xl text-white"
                  />
                  <span className="font-display font-bold text-2xl text-white">
                    {stat.suffix}
                  </span>
                </div>
                <span className="font-sans text-xs text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Globe + floating cards */}
        <div className="relative flex items-center justify-center overflow-visible">
          <EventCard
            emoji="🎵"
            title="Concierto en el Parque"
            time="Hoy · 8:00 pm"
            attendees={234}
            className="-left-4 top-8"
            style={{ animation: "float 3s ease-in-out infinite" }}
          />

          <Globe className="w-full" config={globeConfig} />

          <EventCard
            emoji="🍕"
            title="Foodie Night CDMX"
            time="Sábado · 7:00 pm"
            attendees={89}
            className="-right-4 bottom-8"
            style={{ animation: "float 3s ease-in-out 1.5s infinite" }}
          />
        </div>
      </div>

      {/* Marquee bar */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm py-3">
        <Marquee pauseOnHover repeat={4} className="[--duration:30s] [--gap:2rem]">
          {categories.map((cat) => (
            <span
              key={cat.label}
              className="font-sans text-sm text-white/50 flex items-center gap-2 px-4"
            >
              <span>{cat.emoji}</span>
              {cat.label}
              <span className="text-white/20 ml-2">·</span>
            </span>
          ))}
        </Marquee>
      </div>
    </AnimatedBeam>
  );
}
