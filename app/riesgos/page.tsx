import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Advertencias de Riesgo | MIR Investments",
  description: "Principales riesgos de invertir en inmuebles comerciales en Estados Unidos a través de MIR Investments.",
  alternates: { canonical: "/riesgos" },
}

export default function RiesgosPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Advertencias de Riesgo"
      current="/riesgos"
      intro={
        <p>
          Invertir en inmuebles comerciales implica riesgos significativos. Antes de tomar cualquier
          decisión, lee con atención estas advertencias y los documentos definitivos de la operación,
          y consulta a tus propios asesores financieros, legales y fiscales.
        </p>
      }
    >
      <div className="callout">
        <strong>Puedes perder la totalidad o parte del capital invertido.</strong> Los rendimientos
        pasados no garantizan rendimientos futuros. MIR Investments no promete ni garantiza
        rendimientos específicos, distribuciones ni la devolución del capital. Invierte únicamente
        recursos que no necesites en el corto plazo.
      </div>

      <h2>1. Riesgo de mercado</h2>
      <p>
        El valor de los inmuebles puede disminuir por condiciones económicas generales, cambios en la
        oferta y demanda de espacios comerciales en cada mercado, o por factores específicos de la
        zona donde se ubica cada propiedad.
      </p>

      <h2>2. Riesgo de inquilino</h2>
      <p>
        Los ingresos de cada propiedad dependen del pago puntual de sus inquilinos. La desocupación,
        el incumplimiento, la quiebra o la no renovación de un contrato de arrendamiento pueden
        reducir o suspender las distribuciones. La calidad crediticia de un inquilino puede deteriorarse
        durante la vida del contrato, y volver a arrendar un espacio puede tomar tiempo y requerir
        inversiones adicionales.
      </p>

      <h2>3. Riesgo de liquidez</h2>
      <p>
        Las inversiones en bienes raíces comerciales son inherentemente ilíquidas, con horizontes
        típicos de 5 a 10 años. No existe un mercado secundario activo para las participaciones, y su
        transmisión está sujeta a las restricciones y aprobaciones previstas en el acuerdo operativo.
        Cualquier apoyo de MIR Investments para facilitar una venta es excepcional y no está
        garantizado.
      </p>

      <h2>4. Riesgo de tasas de interés y financiamiento</h2>
      <p>
        Las variaciones en las tasas de interés pueden afectar la valuación de los inmuebles y, cuando
        exista apalancamiento, el costo y la disponibilidad de refinanciamiento. El uso de deuda
        amplifica tanto las ganancias como las pérdidas.
      </p>

      <h2>5. Riesgo cambiario</h2>
      <p>
        Las inversiones y distribuciones están denominadas en dólares estadounidenses. Para un
        inversionista cuya moneda de referencia sea el peso mexicano, las fluctuaciones del tipo de
        cambio USD/MXN pueden aumentar o disminuir el rendimiento obtenido.
      </p>

      <h2>6. Riesgo regulatorio y fiscal</h2>
      <p>
        Cambios en las leyes fiscales, inmobiliarias, financieras o de otra naturaleza, en México o en
        los Estados Unidos de América, incluido el tratado para evitar la doble tributación entre
        ambos países, podrían afectar adversamente el rendimiento de la inversión o su tratamiento
        fiscal. Los inversionistas mexicanos pueden estar sujetos a obligaciones fiscales en ambos
        países; te recomendamos asesorarte con un contador especializado en fiscalidad internacional.
      </p>

      <h2>7. Riesgo de proyectos en desarrollo</h2>
      <p>
        Las propiedades identificadas como “en desarrollo” o con perfil de valor agregado conllevan
        riesgos adicionales, como retrasos, sobrecostos, obtención de permisos y la incertidumbre de
        lograr la ocupación y las rentas proyectadas. Sus rendimientos proyectados son estimaciones y
        pueden no materializarse.
      </p>

      <h2>8. Concentración</h2>
      <p>
        Una inversión en una sola propiedad o en un número reducido de propiedades está expuesta a la
        concentración en un inquilino, una ubicación o un tipo de activo, por lo que un evento adverso
        puede tener un impacto significativo en el resultado.
      </p>

      <h2>9. Comisiones y gastos</h2>
      <p>
        Las comisiones de administración y de desempeño, así como los gastos de adquisición y
        operación, reducen el rendimiento neto del inversionista. Los términos aplicables a cada
        operación se establecen en su acuerdo operativo.
      </p>

      <h2>10. Proyecciones, estimaciones y valuaciones</h2>
      <p>
        Las tasas internas de retorno proyectadas, los <em>cap rates</em>, las valuaciones y demás
        cifras prospectivas se basan en supuestos que pueden no cumplirse. Las valuaciones son
        opiniones de valor y no garantizan el precio que pueda obtenerse en una venta.
      </p>

      <h2>11. Riesgos del vehículo de inversión</h2>
      <p>
        La participación del inversionista se realiza a través de entidades constituidas en los
        Estados Unidos de América. Los derechos del inversionista, incluida su participación en
        decisiones, están limitados a lo previsto en el acuerdo operativo, y la administración del
        vehículo y de los inmuebles corresponde a terceros, de cuya actuación depende el resultado de
        la inversión.
      </p>

      <h2>12. Sin asesoría</h2>
      <p>
        La información de MIR Investments, incluida la de este Sitio, no constituye asesoría de
        inversión, legal ni fiscal, ni toma en cuenta tu situación particular. La decisión de invertir
        es exclusivamente tuya.
      </p>
    </LegalPage>
  )
}
