import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, Pending, CONTACT_EMAIL } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Términos y Condiciones | MIR Investments",
  description: "Términos y condiciones de uso del sitio web de MIR Investments.",
  alternates: { canonical: "/terminos" },
}

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos y Condiciones de Uso"
      current="/terminos"
      intro={
        <p>
          Estos Términos regulan el acceso y uso del sitio web de MIR Investments. Al navegar en el
          Sitio aceptas sujetarte a ellos; si no estás de acuerdo, te pedimos abstenerte de utilizarlo.
        </p>
      }
    >
      <h2>1. Partes</h2>
      <p>
        El Sitio es operado por <Pending>[RAZÓN SOCIAL]</Pending>, bajo el nombre comercial{" "}
        <strong>MIR Investments</strong> (“MIR Investments”), con domicilio en{" "}
        <Pending>[DOMICILIO COMPLETO]</Pending>, Ciudad de México, México. Se entiende por “Usuario”
        a toda persona que acceda al Sitio.
      </p>

      <h2>2. Naturaleza informativa del Sitio</h2>
      <p>
        El contenido del Sitio tiene fines <strong>exclusivamente informativos</strong> sobre MIR
        Investments, su enfoque de inversión en inmuebles comerciales en los Estados Unidos de América
        y su portafolio.
      </p>
      <div className="callout">
        Nada de lo publicado en el Sitio constituye una oferta de venta, una solicitud de compra de
        valores o participaciones, ni una recomendación o asesoría de inversión, legal, fiscal o
        financiera. Cualquier inversión se rige exclusivamente por los documentos definitivos de cada
        operación, incluido el acuerdo operativo (<em>Operating Agreement</em>) de la entidad
        correspondiente, que prevalecerán sobre cualquier información del Sitio.
      </div>

      <h2>3. Información sobre propiedades y desempeño</h2>
      <p>
        Las cifras mostradas en el Sitio (incluidos <em>cap rates</em>, tasas internas de retorno,
        ocupación, retornos acumulados, ingreso operativo neto, valuaciones y montos mínimos de
        inversión) son ilustrativas, pueden ser estimaciones o proyecciones, se refieren a fechas
        determinadas y pueden cambiar sin previo aviso. Las propiedades identificadas como cerradas o
        vendidas se muestran únicamente como referencia histórica y no están disponibles para
        inversión.
      </p>
      <p>
        Los rendimientos pasados no garantizan rendimientos futuros. Te recomendamos consultar nuestras{" "}
        <Link href="/riesgos">Advertencias de Riesgo</Link>.
      </p>

      <h2>4. Uso permitido</h2>
      <p>El Usuario se obliga a utilizar el Sitio de forma lícita y, en particular, a no:</p>
      <ol>
        <li>Proporcionar información falsa, inexacta o de terceros sin su autorización.</li>
        <li>
          Intentar acceder a áreas restringidas del Sitio, incluido el Data Room y los materiales
          reservados, sin la autorización correspondiente.
        </li>
        <li>
          Compartir con terceros los códigos de acceso o materiales confidenciales que MIR Investments
          le haya proporcionado.
        </li>
        <li>
          Realizar acciones que dañen, sobrecarguen o interfieran con el funcionamiento del Sitio.
        </li>
      </ol>

      <h2>5. Materiales confidenciales y acceso restringido</h2>
      <p>
        Ciertos materiales, como la presentación del portafolio y la documentación del Data Room,
        están reservados para personas invitadas por MIR Investments. El acceso se otorga de manera
        personal, discrecional y revocable. Dichos materiales son confidenciales y no podrán
        reproducirse, distribuirse ni divulgarse sin autorización previa y por escrito de MIR
        Investments.
      </p>

      <h2>6. Propiedad intelectual</h2>
      <p>
        Los textos, diseños, logotipos, gráficos, documentos y demás contenidos del Sitio son
        propiedad de MIR Investments o se utilizan con autorización de sus titulares. Las marcas y
        logotipos de terceros, incluidos los de inquilinos de las propiedades, pertenecen a sus
        respectivos titulares y se muestran únicamente con fines de identificación, sin que ello
        implique patrocinio o afiliación. Queda prohibida su reproducción sin autorización.
      </p>

      <h2>7. Datos personales</h2>
      <p>
        El tratamiento de los datos que nos proporciones se rige por nuestro{" "}
        <Link href="/privacidad">Aviso de Privacidad</Link>.
      </p>

      <h2>8. Enlaces y servicios de terceros</h2>
      <p>
        El Sitio puede contener enlaces o integrar servicios de terceros (por ejemplo, WhatsApp o
        servicios de mapas). MIR Investments no es responsable del contenido ni de las prácticas de
        dichos terceros.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        MIR Investments procura que la información del Sitio sea precisa y esté actualizada, pero no
        garantiza que esté libre de errores u omisiones ni que el Sitio funcione de forma
        ininterrumpida. En la medida permitida por la ley, MIR Investments no será responsable por
        decisiones tomadas con base exclusivamente en la información del Sitio.
      </p>

      <h2>10. Modificaciones</h2>
      <p>
        MIR Investments podrá modificar estos Términos en cualquier momento. La versión vigente será
        la publicada en esta página.
      </p>

      <h2>11. Legislación aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes federales de los Estados Unidos Mexicanos. Para su
        interpretación y cumplimiento, las partes se someten a los tribunales competentes de la Ciudad
        de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su
        domicilio presente o futuro.
      </p>
      <p>
        Contacto: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  )
}
