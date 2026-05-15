"use client";

import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";

const SmoothCursor = dynamic(
  () => import("@/components/ui/smooth-cursor").then((m) => ({ default: m.SmoothCursor })),
  { ssr: false }
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <SmoothCursor />
      {children}
    </ParallaxProvider>
  );
}
