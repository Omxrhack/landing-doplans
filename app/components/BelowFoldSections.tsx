"use client";

import dynamic from "next/dynamic";

const Caracteristicas = dynamic(() => import("./Caracteristicas"), { ssr: false });
const Problematica = dynamic(() => import("./Problematica"), { ssr: false });
const ParallaxBand = dynamic(() => import("./ParallaxBand"), { ssr: false });

export default function BelowFoldSections() {
  return (
    <>
      <Caracteristicas />
      <Problematica />
      <ParallaxBand />
    </>
  );
}
