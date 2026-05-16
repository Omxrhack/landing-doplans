"use client";

const NAV_LINKS = [
  { label: "Inicio",          href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Problemática",    href: "#problematica" },
  { label: "Testimonios",     href: "#testimonios" },
];

const LEGAL_LINKS = [
  { label: "Privacidad",      href: "/privacidad" },
  { label: "Términos de uso", href: "/terminos" },
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


export default function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-16">
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
                { href: "https://www.instagram.com/doplanss/", label: "Instagram", Icon: IconInstagram },
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
        
        </div>
      </div>
    </footer>
  );
}
