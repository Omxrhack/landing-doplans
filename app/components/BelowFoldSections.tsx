"use client";

import dynamic from "next/dynamic";

const Caracteristicas = dynamic(() => import("./Caracteristicas"), { ssr: false });
const Problematica = dynamic(() => import("./Problematica"), { ssr: false });
const ParallaxBand = dynamic(() => import("./ParallaxBand"), { ssr: false });
const Testimonios = dynamic(() => import("./Testimonios"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function BelowFoldSections() {
  return (
    <>
      <Caracteristicas />
      <Problematica />
      <ParallaxBand />
      <Testimonios />
      <Footer />
    </>
  );
}
