"use client";

import { MapPin, Bell, MessageCircle, Sparkles, Users, CalendarDays } from "lucide-react";

import BarChart from "@/components/animata/graphs/bar-chart";
import AvatarList from "@/components/animata/list/avatar-list";
import Counter from "@/components/animata/text/counter";
import Ticker from "@/components/animata/text/ticker";
import TypingText from "@/components/animata/text/typing-text";
import { cn } from "@/lib/utils";

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("group/bento relative h-full w-full overflow-hidden rounded-3xl border border-border p-5 transition-all duration-300 hover:border-purple/30", className)}>
      {children}
    </div>
  );
}

function FeatureOne() {
  return (
    <BentoCard className="flex flex-col bg-bg-secondary">
      <div className="flex items-center gap-2 text-sm font-medium text-fg-muted">
        <MapPin className="size-4 text-purple" />
        Eventos hoy
      </div>
      <div className="mt-auto">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-black text-fg">
            <Ticker value="247" numberClassName="leading-none" />
          </span>
          <span className="mb-1 text-lg font-semibold text-purple">+</span>
        </div>
        <div className="text-xs text-fg-muted">cerca de ti ahora</div>
      </div>
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="relative flex flex-col bg-purple sm:col-span-2">
      <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
        <Users className="size-4" />
        Comunidades activas
      </div>
      <Counter
        targetValue={10000}
        format={(v) => `${+Math.ceil(v / 1000).toFixed(0)}k+ usuarios`}
        className="mt-1 text-3xl font-black text-white"
      />
      <div className="mt-auto">
        <AvatarList size="sm" className="py-0" />
      </div>
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex flex-col bg-bg-secondary">
      <div className="flex items-center gap-2 text-sm font-medium text-fg-muted">
        <Sparkles className="size-4 text-purple" />
        IA personalizada
      </div>
      <div className="mt-auto">
        <div className="text-xs text-fg-muted mb-1">¿Qué hago hoy?</div>
        <div className="text-sm font-semibold text-fg">
          <TypingText text="Concierto de jazz en el centro a las 20h" waitTime={2000} alwaysVisibleCount={0} />
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureFour() {
  return (
    <BentoCard className="flex flex-col gap-3 bg-bg-secondary sm:col-span-2">
      <div className="flex items-center gap-2 text-sm font-medium text-fg-muted">
        <CalendarDays className="size-4 text-purple" />
        Planifica con amigos
      </div>
      <div className="text-xl font-bold text-fg leading-tight">
        Coordina sin el caos<br />
        <span className="text-purple">de los grupos de WhatsApp</span>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {["Crear plan", "Invitar amigos", "Votar lugar", "Confirmar"].map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className="flex size-5 items-center justify-center rounded-full bg-purple text-xs font-bold text-white">{i + 1}</span>
            <span className="text-xs text-fg-muted">{step}</span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

function FeatureFive() {
  return (
    <BentoCard className="flex items-center justify-center bg-bg-secondary sm:col-span-2">
      <div className="relative flex items-center justify-center">
        <div className="text-6xl font-black uppercase text-fg/10 transition duration-300 group-hover/bento:opacity-40 md:text-8xl">
          doplans
        </div>
        <div className="absolute text-2xl font-black uppercase text-fg transition-all duration-300 group-hover/bento:text-5xl md:text-4xl group-hover/bento:md:text-7xl">
          doplans
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureSix() {
  return (
    <BentoCard className="bg-bg-secondary">
      <div className="flex items-center gap-2 text-sm font-medium text-fg-muted mb-3">
        <MessageCircle className="size-4 text-purple" />
        Actividad semanal
      </div>
      <BarChart
        items={[
          { progress: 40, label: "L", className: "rounded-sm bg-purple/40" },
          { progress: 65, label: "M", className: "rounded-sm bg-purple/50" },
          { progress: 55, label: "X", className: "rounded-sm bg-purple/45" },
          { progress: 80, label: "J", className: "rounded-sm bg-purple/60" },
          { progress: 30, label: "V", className: "rounded-sm bg-purple/35" },
          { progress: 90, label: "S", className: "rounded-sm bg-purple" },
          { progress: 75, label: "D", className: "rounded-sm bg-purple/70" },
        ]}
        height={80}
      />
      <div className="mt-2 text-xs text-fg-muted text-center">posts y eventos compartidos</div>
    </BentoCard>
  );
}

function FeatureSeven() {
  return (
    <BentoCard className="flex flex-col gap-2 bg-bg-secondary">
      <div className="flex items-center gap-2 text-sm font-medium text-fg-muted mb-1">
        <MapPin className="size-4 text-purple" />
        Categorías
      </div>
      {[["Música", "Arte"], ["Deportes", "Nightlife"], ["Gastronomía"]].map((row, ri) => (
        <div key={ri} className={cn("flex gap-2", ri % 2 === 1 ? "self-end" : "self-start")}>
          {row.map((cat) => (
            <span key={cat} className="rounded-full bg-purple/10 px-3 py-1 text-xs font-medium text-purple border border-purple/20">
              {cat}
            </span>
          ))}
        </div>
      ))}
    </BentoCard>
  );
}

function FeatureEight() {
  return (
    <BentoCard className="relative flex flex-col bg-bg-secondary sm:col-span-2">
      <div className="flex items-center gap-2 text-sm font-medium text-fg-muted mb-3">
        <Bell className="size-4 text-purple" />
        Alertas en tiempo real
      </div>
      <div className="space-y-2">
        {[
          { text: "🎵 Entradas disponibles: Festival Primavera", time: "hace 2 min" },
          { text: "👥 Carlos y Ana publicaron un plan", time: "hace 5 min" },
          { text: "📍 Nuevo evento cerca: Mercado artesanal", time: "hace 12 min" },
        ].map((notif, i) => (
          <div key={i} className="flex items-start justify-between rounded-xl bg-bg p-2.5 border border-border">
            <span className="text-xs text-fg leading-relaxed">{notif.text}</span>
            <span className="ml-2 shrink-0 text-[10px] text-fg-muted">{notif.time}</span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

export default function Eight() {
  return (
    <div className="w-full min-w-0">
      <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-3">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />
        <FeatureSix />
        <FeatureSeven />
        <FeatureEight />
      </div>
    </div>
  );
}
