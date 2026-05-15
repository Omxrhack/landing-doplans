import type { Metadata } from "next";
import { Poppins, Urbanist, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Providers from "./components/Providers";
const SmoothCursor = dynamic(
  () => import("@/components/ui/smooth-cursor").then((m) => ({ default: m.SmoothCursor })),
  { ssr: false }
);

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Doplans",
  description: "Descubre planes y eventos en tu ciudad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", poppins.variable, urbanist.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <SmoothCursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
