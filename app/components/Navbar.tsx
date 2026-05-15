"use client";

import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const links = [
  { label: "Inicio",          href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Problemática",    href: "#problematica" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-fit">

        {/* Pill principal */}
        <header
          className={`flex items-center gap-2 px-3 py-2 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? "bg-bg/85 border-border shadow-lg shadow-purple/10"
              : "bg-bg/60 border-border/50"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="tracking-tight select-none px-1 mr-2" style={{ fontFamily: "var(--font-poppins)", fontWeight: 900, fontSize: "1.1rem", fontStyle: "italic" }}>
            <span className="text-fg">d</span>
            <span className="text-purple">p</span>
          </a>

          {/* Links — desktop */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm font-medium text-fg-muted hover:text-fg hover:bg-fg/5 px-3 py-1.5 rounded-xl transition-all duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Separador */}
          <div className="hidden md:block h-4 w-px bg-border mx-1" />

          {/* CTAs desktop */}
          <div className="hidden md:flex items-center gap-1.5">
            <AnimatedThemeToggler
              variant="circle"
              className="flex items-center justify-center w-8 h-8 rounded-xl text-fg-muted hover:text-fg hover:bg-fg/5 transition-all cursor-pointer"
            />
            <a
              href="#unirse"
              className="font-sans text-sm font-semibold bg-purple hover:bg-purple-light text-white px-4 py-1.5 rounded-xl transition-colors"
            >
              Unirse
            </a>
          </div>

          {/* Mobile: toggler + hamburger */}
          <div className="flex md:hidden items-center gap-1 ml-2">
            <AnimatedThemeToggler
              variant="circle"
              className="flex items-center justify-center w-8 h-8 rounded-xl text-fg-muted hover:text-fg hover:bg-fg/5 transition-all cursor-pointer"
            />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded-xl hover:bg-fg/5 transition-colors cursor-pointer"
            >
              <span className={`block h-0.5 w-4 bg-fg transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-4 bg-fg transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-4 bg-fg transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </header>

        {/* Mobile menu — expande debajo de la pill */}
        {menuOpen && (
          <div className={`md:hidden mt-1.5 px-3 py-3 rounded-2xl border backdrop-blur-md flex flex-col gap-1 transition-all duration-300 ${
            scrolled ? "bg-bg/85 border-border" : "bg-bg/60 border-border/50"
          }`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm font-medium text-fg-muted hover:text-fg hover:bg-fg/5 px-3 py-2 rounded-xl transition-all"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-border my-1" />
            <a
              href="#unirse"
              className="font-sans text-sm font-semibold bg-purple hover:bg-purple-light text-white px-4 py-2 rounded-xl text-center transition-colors"
            >
              Unirse
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
