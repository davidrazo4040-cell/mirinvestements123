import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, CONTACT_EMAIL } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Cumplimiento Regulatorio | MIR Investments",
  description: "Marco de cumplimiento y naturaleza de las oportunidades de inversión de MIR Investments.",
  alternates: { canonical: "/cumplimiento" },
}

export default function CumplimientoPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cumplimiento Regulatorio"
      current="/cumplimiento"
      intro={
        <p>
          MIR Investments estructura sus oportunidades de inversión con apego a la normatividad
          aplicable en México y en los Estados Unidos de América. Esta sección resume la naturaleza de
          nuestras operaciones y los principios de cumplimiento que observamos.
        </p>
      }
    >
      <h2>1. Naturaleza de las oportunidades</h2>
      <p>
        Las oportunidades de inversión de MIR Investments son <strong>privadas</strong> y se dirigen
        a inversionistas calificados con quienes MIR Investments mantiene una relación directa. No se
        realizan mediante oferta pública ni a través de medios masivos de comunicación.
      </p>
      <p>
        El contenido de este Sitio es informativo y no constituye una oferta de venta ni una
        solicitud de compra de valores o participaciones en ninguna jurisdicción. Cualquier inversión
        se formaliza exclusivamente mediante los documentos definitivos de cada operación.
      </p>

      <h2>2. Vehículo de inversión</h2>
      <p>
        Las inversiones se estructuran a través de sociedades de responsabilidad limitada (
        <em>Limited Liability Companies</em>, LLC) constituidas en los Estados Unidos de América. Los
        inversionistas participan como socios con derechos proporcionales a su aportación, conforme a
        lo previsto en el acuerdo operativo (<em>Operating Agreement</em>) de cada entidad, que
        establece sus derechos, obligaciones, comisiones y restricciones de transmisión.
      </p>

      <h2>3. Registros y autorizaciones</h2>
      <p>
        La información de este Sitio no implica que MIR Investments, sus vehículos de inversión o las
        participaciones que éstos emitan cuenten con autorización, registro o supervisión de alguna
        autoridad financiera o bursátil, en México o en los Estados Unidos de América, salvo que así
        se indique expresamente en los documentos de la operación. Ninguna autoridad ha evaluado ni
        aprobado las oportunidades de inversión descritas en este Sitio.
      </p>

      <h2>4. Conocimiento del inversionista</h2>
      <p>
        Como parte del proceso de inversión, MIR Investments lleva a cabo un diagnóstico del perfil
        del inversionista y solicita la información y documentación necesarias para su
        identificación. Ello nos permite verificar la idoneidad de la inversión y cumplir, en la
        medida en que resulten aplicables, las disposiciones en materia de prevención e identificación
        de operaciones con recursos de procedencia ilícita, tanto en México como en los Estados Unidos
        de América.
      </p>
      <p>
        MIR Investments se reserva el derecho de no aceptar una inversión cuando no se cuente con la
        información requerida o cuando ésta no resulte satisfactoria.
      </p>

      <h2>5. Diligencia sobre los activos</h2>
      <p>
        Previo a cada adquisición, MIR Investments encarga revisiones de due diligence a firmas
        independientes especializadas, que comprenden aspectos legales, financieros, ambientales y
        estructurales del inmueble. Las valuaciones se obtienen de firmas independientes al momento de
        la adquisición y de forma periódica.
      </p>

      <h2>6. Transparencia e información al inversionista</h2>
      <ul>
        <li>Reportes trimestrales de desempeño a los inversionistas.</li>
        <li>
          Documentación fiscal necesaria para el cumplimiento de las obligaciones del inversionista en
          ambos países (por ejemplo, formatos K-1 y 1099, según corresponda).
        </li>
        <li>
          Divulgación de comisiones y gastos aplicables en el acuerdo operativo de cada operación.
        </li>
      </ul>

      <h2>7. Fiscalidad</h2>
      <p>
        Los inversionistas mexicanos pueden estar sujetos a tributación tanto en los Estados Unidos de
        América como en México. El tratado para evitar la doble tributación entre ambos países puede
        permitir acreditar en México impuestos pagados en los Estados Unidos, conforme a las
        disposiciones aplicables. MIR Investments no presta asesoría fiscal; cada inversionista es
        responsable de su propio cumplimiento y debe asesorarse con un especialista.
      </p>

      <h2>8. Protección de datos personales</h2>
      <p>
        El tratamiento de datos personales se realiza conforme a la legislación mexicana en la
        materia y a nuestro <Link href="/privacidad">Aviso de Privacidad</Link>.
      </p>

      <h2>9. Materiales confidenciales</h2>
      <p>
        La presentación del portafolio y la documentación del Data Room se comparten únicamente con
        personas invitadas por MIR Investments, mediante acceso personal y restringido, y están
        sujetas a confidencialidad conforme a nuestros{" "}
        <Link href="/terminos">Términos y Condiciones</Link>.
      </p>

      <h2>10. Contacto de cumplimiento</h2>
      <p>
        Para consultas en materia de cumplimiento, escríbenos a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  )
}
