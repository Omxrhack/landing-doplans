"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { PointerDotBackground } from "@/app/components/PointerDotBackground";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-xl text-fg mt-10 mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-sans text-fg-muted leading-relaxed">{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="font-sans text-fg-muted leading-relaxed">{children}</li>;
}

export default function PrivacidadPage() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-32">

        <h1 className="font-display font-black text-4xl lg:text-5xl text-fg mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-fg-muted mb-12">Última actualización: 15 de mayo de 2026</p>

        <P>
          En <strong className="text-fg">Doplans S.A. de C.V.</strong> ("Doplans", "nosotros") nos
          comprometemos a proteger la privacidad de nuestros usuarios. El presente Aviso de
          Privacidad se emite en cumplimiento de la{" "}
          <strong className="text-fg">
            Ley Federal de Protección de Datos Personales en Posesión de los Particulares
          </strong>{" "}
          (LFPDPPP) y su Reglamento.
        </P>

        <Section title="1. Responsable del tratamiento">
          <P>
            <strong className="text-fg">Doplans S.A. de C.V.</strong>
            <br />
            Domicilio: Ciudad de México, México
            <br />
            Correo electrónico:{" "}
            <a href="mailto:privacidad@doplans.mx" className="text-purple hover:underline">
              privacidad@doplans.mx
            </a>
          </P>
        </Section>

        <Section title="2. Datos personales que recabamos">
          <P>Recabamos los siguientes datos personales:</P>
          <ul className="list-disc pl-5 space-y-1">
            <Li><strong className="text-fg">Identificación:</strong> nombre, correo electrónico, nombre de usuario y foto de perfil.</Li>
            <Li><strong className="text-fg">Ubicación:</strong> ciudad o región (con su consentimiento), para mostrar eventos relevantes cercanos a usted.</Li>
            <Li><strong className="text-fg">Preferencias:</strong> categorías de interés, historial de eventos visitados y comunidades a las que pertenece.</Li>
            <Li><strong className="text-fg">Técnicos:</strong> dirección IP, tipo de dispositivo, sistema operativo y datos de uso de la aplicación.</Li>
          </ul>
          <P>No recabamos datos personales sensibles (como datos biométricos, de salud o de origen racial).</P>
        </Section>

        <Section title="3. Finalidades del tratamiento">
          <P>Sus datos son utilizados para:</P>
          <ul className="list-disc pl-5 space-y-1">
            <Li>Crear y gestionar su cuenta de usuario.</Li>
            <Li>Mostrar eventos, planes y comunidades relevantes según su ubicación e intereses.</Li>
            <Li>Enviar notificaciones sobre actividades de su interés (puede desactivarlas en cualquier momento).</Li>
            <Li>Mejorar la experiencia y funcionalidades del Servicio.</Li>
            <Li>Cumplir con obligaciones legales aplicables.</Li>
          </ul>
          <P>
            <strong className="text-fg">Finalidades secundarias:</strong> podemos usar sus datos de forma
            agregada y anonimizada para análisis estadísticos y mejora de producto.
          </P>
        </Section>

        <Section title="4. Transferencia de datos">
          <P>
            Doplans no vende ni renta sus datos personales a terceros. Podemos compartirlos
            únicamente con:
          </P>
          <ul className="list-disc pl-5 space-y-1">
            <Li>Proveedores de servicios tecnológicos (alojamiento, análisis, notificaciones) que actúan como encargados del tratamiento bajo confidencialidad.</Li>
            <Li>Autoridades competentes cuando así lo exija la ley.</Li>
          </ul>
        </Section>

        <Section title="5. Derechos ARCO">
          <P>
            Usted tiene derecho a <strong className="text-fg">Acceder, Rectificar, Cancelar u Oponerse</strong>{" "}
            (derechos ARCO) al tratamiento de sus datos personales. Para ejercerlos, envíe su
            solicitud a{" "}
            <a href="mailto:privacidad@doplans.mx" className="text-purple hover:underline">
              privacidad@doplans.mx
            </a>{" "}
            indicando su nombre completo, correo registrado y el derecho que desea ejercer.
          </P>
          <P>
            Daremos respuesta a su solicitud en un plazo máximo de 20 días hábiles conforme a lo
            establecido por la LFPDPPP.
          </P>
        </Section>

        <Section title="6. Uso de cookies y tecnologías similares">
          <P>
            Utilizamos cookies y tecnologías similares para mejorar su experiencia, recordar sus
            preferencias y analizar el uso del Servicio. Puede configurar su navegador para rechazar
            cookies, aunque esto puede afectar algunas funcionalidades.
          </P>
          <P>
            Utilizamos servicios de análisis de terceros (como Google Analytics) que pueden recabar
            información de uso de forma anonimizada.
          </P>
        </Section>

        <Section title="7. Seguridad">
          <P>
            Implementamos medidas técnicas y organizativas razonables para proteger sus datos
            personales contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún
            sistema de transmisión por internet es 100% seguro.
          </P>
        </Section>

        <Section title="8. Cambios a este aviso">
          <P>
            Podemos actualizar este Aviso de Privacidad periódicamente. Le notificaremos cambios
            materiales a través de la aplicación o por correo electrónico. Le recomendamos revisarlo
            periódicamente.
          </P>
        </Section>

        <Section title="9. Contacto">
          <P>
            Para cualquier consulta relacionada con el tratamiento de sus datos personales,
            contáctenos en:{" "}
            <a href="mailto:privacidad@doplans.mx" className="text-purple hover:underline">
              privacidad@doplans.mx
            </a>
          </P>
        </Section>

      </main>
      <Footer />
    </PointerDotBackground>
  );
}
