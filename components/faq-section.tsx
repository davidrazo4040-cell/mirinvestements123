"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cuál es la estructura legal del vehículo de inversión?",
      answer:
        "Las inversiones se estructuran a través de entidades LLC (Limited Liability Company) constituidas en Estados Unidos. Los inversionistas mexicanos participan como socios limitados (Limited Partners) con derechos de propiedad proporcionales a su inversión. Esta estructura ofrece protección de responsabilidad limitada y tratamiento fiscal favorable bajo el tratado fiscal México-EE.UU.",
    },
    {
      question: "¿Qué derechos tengo como socio inversionista?",
      answer:
        "Como socio limitado, tienes derecho a: (1) Distribuciones proporcionales de ingresos netos, (2) Acceso completo a información financiera y reportes, (3) Participación en decisiones mayores según el acuerdo operativo, (4) Derecho de venta de tu participación (sujeto a aprobación), (5) Protección de responsabilidad limitada. Los derechos específicos están detallados en el Operating Agreement que recibes al invertir.",
    },
    {
      question: "¿Qué tan líquida es mi inversión?",
      answer:
        "Las inversiones en bienes raíces comerciales son inherentemente ilíquidas con horizontes típicos de 5-10 años. No existe un mercado secundario activo para vender participaciones. Sin embargo, MIR puede facilitar la venta a otros inversionistas calificados en casos excepcionales. Recomendamos invertir solo capital que no necesites en el corto plazo.",
    },
    {
      question: "¿Cuáles son los principales riesgos?",
      answer:
        "Los riesgos incluyen: (1) Riesgo de mercado - fluctuaciones en valores de propiedades, (2) Riesgo de inquilino - vacancia o incumplimiento, (3) Riesgo de tasas de interés - impacto en valuaciones y refinanciamiento, (4) Riesgo de liquidez - dificultad para vender participaciones, (5) Riesgo cambiario - fluctuaciones USD/MXN, (6) Riesgo regulatorio - cambios en leyes fiscales o inmobiliarias. Mitigamos estos riesgos mediante diversificación, due diligence riguroso y administración activa.",
    },
    {
      question: "¿Cómo funcionan los impuestos para inversionistas mexicanos?",
      answer:
        "Los inversionistas mexicanos están sujetos a tributación en ambos países, pero el tratado fiscal México-EE.UU. evita la doble tributación. En EE.UU., pagas impuestos sobre ingresos de renta y ganancias de capital. En México, debes declarar ingresos del extranjero y puedes acreditar impuestos pagados en EE.UU. Recomendamos trabajar con un contador especializado en fiscalidad internacional. MIR proporciona toda la documentación necesaria (K-1, 1099, etc.).",
    },
    {
      question: "¿Qué comisiones y gastos debo pagar?",
      answer:
        "Estructura de comisiones: (1) Comisión de administración: 2% anual sobre el capital invertido, (2) Comisión de desempeño: 20% sobre rendimientos que excedan un hurdle rate del 8%, (3) Gastos operativos: incluidos en el NOI de la propiedad (property management, seguros, impuestos), (4) Gastos de adquisición: 1-2% del precio de compra (legal, due diligence, cierre). Todas las comisiones están claramente detalladas en el Operating Agreement.",
    },
    {
      question: "¿Cuándo y cómo recibo las distribuciones?",
      answer:
        "Las distribuciones se realizan trimestralmente, típicamente 30-45 días después del cierre del trimestre. Los pagos se transfieren directamente a tu cuenta bancaria en México o EE.UU. vía transferencia internacional. El monto de distribución depende del ingreso neto operativo de la propiedad después de gastos y reservas. Recibes un reporte detallado con cada distribución explicando el cálculo.",
    },
    {
      question: "¿Qué pasa si un inquilino desocupa la propiedad?",
      answer:
        "Mantenemos reservas de capital para cubrir periodos de vacancia y costos de re-arrendamiento. El property manager local inicia inmediatamente el proceso de comercialización. Nuestro enfoque en propiedades AAA en ubicaciones prime reduce significativamente el tiempo de vacancia. Históricamente, hemos re-arrendado espacios en 3-6 meses. Durante vacancia, las distribuciones pueden reducirse temporalmente.",
    },
    {
      question: "¿Puedo visitar las propiedades?",
      answer:
        "Sí, organizamos tours de propiedades para inversionistas actuales y potenciales. Coordinamos visitas grupales trimestrales y también podemos facilitar visitas individuales con previo aviso. Adicionalmente, proporcionamos tours virtuales, fotos actualizadas y reportes de inspección en el portal de inversionista.",
    },
    {
      question: "¿Cómo se determina el valor de las propiedades?",
      answer:
        "Obtenemos valuaciones independientes (appraisals) de firmas certificadas MAI al momento de adquisición y anualmente. Las valuaciones utilizan tres métodos: (1) Comparables de mercado, (2) Capitalización de ingresos (NOI / Cap Rate), (3) Flujos de efectivo descontados. Para reportes trimestrales, ajustamos valores basados en transacciones comparables recientes y cambios en fundamentales de mercado.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre inversión en bienes raíces comerciales con MIR
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">¿No encuentras la respuesta que buscas?</p>
          <button
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-primary hover:underline font-medium"
          >
            Contáctanos directamente
          </button>
        </div>
      </div>
    </section>
  )
}
