"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  { name: "Sofía Ramírez",   city: "CDMX",        quote: "Encontré un concierto increíble a 10 min de mi casa que ni sabía que existía." },
  { name: "Diego Herrera",   city: "Guadalajara",  quote: "Doplans me ayudó a conocer a gente con mis mismos gustos. Ahora salimos cada fin de semana." },
  { name: "Mariana López",   city: "Monterrey",    quote: "Antes me quedaba en casa sin saber qué hacer. Ahora tengo agenda llena." },
  { name: "Carlos Mendoza",  city: "Puebla",       quote: "La sección de gastronomía es lo mejor. Descubrí restaurantes que no están en Google Maps." },
  { name: "Valeria Torres",  city: "Querétaro",    quote: "La app es hermosa y facilísima. En 2 minutos ya tenía plan para el sábado." },
  { name: "Andrés Castillo", city: "CDMX",         quote: "Fui a un evento de fotografía que cambió mi perspectiva. Jamás lo hubiera encontrado solo." },
  { name: "Isabela Cruz",    city: "León",         quote: "Me parece increíble que sea gratis. La calidad de los planes es altísima." },
  { name: "Rodrigo Vega",    city: "Monterrey",    quote: "Llevo 3 meses usándola y cada semana encuentro algo nuevo cerca de mí." },
  { name: "Camila Ortiz",    city: "Guadalajara",  quote: "La función de comunidades me encanta. Hay grupos para todo tipo de hobbies." },
  { name: "Javier Flores",   city: "CDMX",         quote: "Invité a unos amigos y quedaron impresionados. Ya todos la tienen descargada." },
];

function TestimonialCard({ name, city, quote }: { name: string; city: string; quote: string }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div className="mx-2 w-72 shrink-0 rounded-2xl border border-border bg-bg-secondary p-5 flex flex-col gap-3">
      <div className="flex gap-0.5 text-purple text-sm select-none">★★★★★</div>
      <p className="font-sans text-sm text-fg-muted leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 rounded-full bg-purple/15 flex items-center justify-center text-purple font-display font-bold text-sm shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-display font-bold text-sm text-fg">{name}</p>
          <p className="text-xs text-fg-muted">{city}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,_#2a0a5418_0%,_transparent_100%)]" />

      <div className="relative max-w-5xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="text-xs font-semibold uppercase text-purple mb-4 block">Testimonios</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-tight mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="font-sans text-lg text-fg-muted leading-relaxed max-w-xl">
            Personas reales que ya descubren su ciudad con Doplans.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <Marquee pauseOnHover className="[--duration:35s]">
          {testimonials.slice(0, 5).map(t => <TestimonialCard key={t.name} {...t} />)}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:45s]">
          {testimonials.slice(5).map(t => <TestimonialCard key={t.name} {...t} />)}
        </Marquee>
      </div>
    </section>
  );
}
