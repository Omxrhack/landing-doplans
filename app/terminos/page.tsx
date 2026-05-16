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

export default function TerminosPage() {
  return (
    <PointerDotBackground className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-32">

        <h1 className="font-display font-black text-4xl lg:text-5xl text-fg mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-fg-muted mb-12">Última actualización: 15 de mayo de 2026</p>

        <Section title="1. Aceptación de los términos">
          <P>
            Al acceder o utilizar la aplicación y sitio web de <strong className="text-fg">Doplans</strong> (en
            adelante, "el Servicio"), usted acepta quedar vinculado por los presentes Términos y
            Condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no
            utilice el Servicio.
          </P>
          <P>
            Doplans es operado por <strong className="text-fg">Doplans S.A. de C.V.</strong>, con domicilio en
            Ciudad de México, México. El uso del Servicio implica la aceptación plena y sin reservas
            de todas y cada una de las disposiciones incluidas en este documento.
          </P>
        </Section>

        <Section title="2. Descripción del servicio">
          <P>
            Doplans es una plataforma digital que permite a los usuarios descubrir eventos, planes y
            actividades en su ciudad; conectar con comunidades de intereses afines; y compartir
            experiencias locales.
          </P>
          <P>
            Doplans actúa como intermediario entre organizadores de eventos y usuarios finales. No
            garantizamos la disponibilidad, calidad ni veracidad de los eventos publicados por
            terceros.
          </P>
        </Section>

        <Section title="3. Registro y cuenta de usuario">
          <P>Para acceder a ciertas funcionalidades del Servicio deberá crear una cuenta. Al hacerlo, usted se compromete a:</P>
          <ul className="list-disc pl-5 space-y-1">
            <Li>Proporcionar información veraz, actual y completa.</Li>
            <Li>Mantener la confidencialidad de su contraseña y no compartirla con terceros.</Li>
            <Li>Notificarnos de inmediato ante cualquier uso no autorizado de su cuenta.</Li>
            <Li>Ser responsable de todas las actividades realizadas bajo su cuenta.</Li>
          </ul>
          <P>
            Doplans se reserva el derecho de suspender o cancelar cuentas que incumplan estos
            términos, a su entera discreción.
          </P>
        </Section>

        <Section title="4. Uso permitido y conductas prohibidas">
          <P>Usted puede utilizar el Servicio únicamente para fines lícitos y de conformidad con estos Términos. Queda expresamente prohibido:</P>
          <ul className="list-disc pl-5 space-y-1">
            <Li>Publicar contenido falso, engañoso, difamatorio, obsceno o que infrinja derechos de terceros.</Li>
            <Li>Usar el Servicio para fines comerciales no autorizados o para envío de spam.</Li>
            <Li>Intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.</Li>
            <Li>Interferir con el funcionamiento normal del Servicio o sus servidores.</Li>
            <Li>Hacer scraping, minería de datos o extracción automatizada de contenido.</Li>
            <Li>Suplantar la identidad de otras personas o entidades.</Li>
          </ul>
        </Section>

        <Section title="5. Contenido del usuario">
          <P>
            Al publicar contenido en Doplans (comentarios, fotos, reseñas, etc.), usted otorga a
            Doplans una licencia no exclusiva, gratuita, mundial y sublicenciable para usar,
            reproducir, modificar y distribuir dicho contenido con fines de operación y promoción del
            Servicio.
          </P>
          <P>
            Usted declara y garantiza que es titular o tiene los derechos necesarios sobre el
            contenido que publica, y que dicho contenido no infringe derechos de propiedad
            intelectual, privacidad u otros derechos de terceros.
          </P>
        </Section>

        <Section title="6. Propiedad intelectual">
          <P>
            Todos los derechos de propiedad intelectual sobre el Servicio, incluyendo pero no
            limitado a diseño, logotipos, código fuente, textos y funcionalidades, son propiedad
            exclusiva de Doplans S.A. de C.V. o de sus licenciantes. Queda prohibida su
            reproducción, distribución o uso sin autorización expresa.
          </P>
        </Section>

        <Section title="7. Limitación de responsabilidad">
          <P>
            El Servicio se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún
            tipo. Doplans no será responsable por daños directos, indirectos, incidentales, especiales
            o consecuentes derivados del uso o la imposibilidad de uso del Servicio.
          </P>
          <P>
            Doplans no se hace responsable por el contenido publicado por usuarios o terceros, ni
            por la calidad, seguridad o legalidad de los eventos listados en la plataforma.
          </P>
        </Section>

        <Section title="8. Modificaciones">
          <P>
            Doplans se reserva el derecho de modificar estos Términos en cualquier momento. Le
            notificaremos cambios materiales mediante aviso en la aplicación o por correo electrónico.
            El uso continuado del Servicio después de la notificación constituye su aceptación de los
            nuevos Términos.
          </P>
        </Section>

        <Section title="9. Ley aplicable y jurisdicción">
          <P>
            Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para la resolución
            de cualquier controversia derivada de estos Términos, las partes se someten a la
            jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier
            otro fuero que pudiera corresponderles.
          </P>
        </Section>

        <Section title="10. Contacto">
          <P>
            Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:{" "}
            <a href="mailto:legal@doplans.mx" className="text-purple hover:underline">
              legal@doplans.mx
            </a>
          </P>
        </Section>

      </main>
      <Footer />
    </PointerDotBackground>
  );
}
