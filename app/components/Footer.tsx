"use client";

import { DotPattern } from "@/components/ui/dot-pattern";

const NAV_LINKS = [
  { label: "Inicio",          href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Problemática",    href: "#problematica" },
  { label: "Testimonios",     href: "#testimonios" },
];

const LEGAL_LINKS = [
  { label: "Privacidad",    href: "#" },
  { label: "Términos de uso", href: "#" },
];

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg overflow-hidden">
      <DotPattern width={24} height={24} cr={1.2} className="absolute inset-0 text-purple-600/15 dark:text-purple-400/20" />
      <div className="relative max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Logo + tagline + redes */}
          <div className="flex flex-col gap-5">
            <a
              href="#inicio"
              className="inline-flex items-baseline gap-0 select-none"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 900, fontSize: "1.4rem", fontStyle: "italic" }}
            >
              <span className="text-fg">do</span>
              <span className="text-purple">plans</span>
            </a>
            <p className="text-sm text-fg-muted leading-relaxed max-w-xs">
              Descubre planes, conecta con tu ciudad y vive cada momento.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com", label: "Instagram", Icon: IconInstagram },
                { href: "https://x.com",         label: "X",         Icon: IconX },
                { href: "https://tiktok.com",    label: "TikTok",    Icon: IconTikTok },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-fg-muted hover:text-purple hover:border-purple transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-display font-bold text-sm text-fg mb-5">Navegación</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-fg-muted hover:text-fg transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold text-sm text-fg mb-5">Legal</h3>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-fg-muted hover:text-fg transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-fg-muted">© 2026 Doplans. Todos los derechos reservados.</p>
          <p className="text-xs text-fg-muted">Hecho con amor en México</p>
        </div>
      </div>
    </footer>
  );
}
