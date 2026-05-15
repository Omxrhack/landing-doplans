"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Problemática", href: "#problematica" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="font-display font-bold text-xl tracking-tight select-none">
          <span className="text-fg">do</span>
          <span className="text-purple">plans</span>
        </a>

        {/* Nav links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm font-medium text-fg-muted hover:text-fg transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-purple transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#descargar"
            className="font-sans text-sm font-medium text-fg-muted hover:text-fg transition-colors"
          >
            Descargar
          </a>
          <a
            href="#unirse"
            className="font-sans text-sm font-semibold bg-purple hover:bg-purple-light text-white px-5 py-2 rounded-full transition-colors"
          >
            Unirse
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-full hover:bg-bg-secondary transition-colors cursor-pointer"
          >
            <span className={`block h-0.5 w-5 bg-fg transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-fg transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-fg transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm font-medium text-fg-muted hover:text-fg transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-border">
            <a
              href="#descargar"
              className="font-sans text-sm font-medium text-fg-muted hover:text-fg transition-colors py-1"
            >
              Descargar
            </a>
            <a
              href="#unirse"
              className="font-sans text-sm font-semibold bg-purple hover:bg-purple-light text-white px-5 py-2.5 rounded-full text-center transition-colors"
            >
              Unirse
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
