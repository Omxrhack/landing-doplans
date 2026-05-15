import type { Metadata } from "next";
import { Poppins, Urbanist, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./components/Providers";

const loaderScript = `(function(){
  var dark=document.documentElement.classList.contains('dark');
  var bg=dark?'#09090b':'#ffffff';
  var purple='#5A189A';
  var s=document.createElement('style');
  s.textContent='@keyframes _dpl_sh{0%{mask-position:-150% center}50%{mask-position:310% center}100%{mask-position:310% center}}._dpl_ov{position:absolute;inset:0;color:'+purple+';font:inherit;mask-image:linear-gradient(60deg,transparent 20%,rgba(255,255,255,0.7) 44%,rgba(255,255,255,0.7) 56%,transparent 80%);mask-size:70% 100%;mask-repeat:no-repeat;animation:_dpl_sh 1.4s linear infinite}';
  document.head.appendChild(s);
  var o=document.createElement('div');
  o.id='_dpl_loader';
  o.style.cssText='position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:'+bg+';transition:opacity 0.4s ease-out';
  var w=document.createElement('div');
  w.style.cssText='position:relative;display:inline-block;user-select:none';
  var f='font-family:Poppins,sans-serif;font-size:56px;font-weight:900;letter-spacing:-0.04em';
  w.innerHTML='<span style="'+f+';color:rgba(90,24,154,0.3)">doplans</span><span class="_dpl_ov" aria-hidden="true" style="'+f+'">doplans</span>';
  o.appendChild(w);
  document.body.appendChild(o);
  var MIN=1500,start=Date.now(),gone=false;
  function dismiss(){if(gone)return;gone=true;o.style.opacity='0';setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o);s.parentNode&&s.parentNode.removeChild(s)},400)}
  function trigger(){var e=Date.now()-start;setTimeout(dismiss,Math.max(0,MIN-e))}
  var cap=setTimeout(dismiss,5000);
  if(document.readyState==='complete'){clearTimeout(cap);trigger()}
  else{window.addEventListener('load',function(){clearTimeout(cap);trigger()},{once:true})}
})()`;

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
        <script dangerouslySetInnerHTML={{ __html: loaderScript }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
