"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileCheck, Settings, BarChart3, Shield, Globe, CheckCircle } from "lucide-react"

export function WhyMIR() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    {
      icon: Search,
      title: "Curaduría Institucional",
      description:
        "Seleccionamos menos del 5% de las oportunidades que evaluamos. Enfoque en propiedades Core y Core+ con inquilinos de alta calidad y contratos de largo plazo.",
    },
    {
      icon: FileCheck,
      title: "Due Diligence Externo",
      description:
        "Auditorías independientes por firmas especializadas. Revisión legal, financiera, ambiental y estructural de cada activo antes de la adquisición.",
    },
    {
      icon: Settings,
      title: "Administración Activa",
      description:
        "Gestión profesional de propiedades con property managers locales. Monitoreo continuo de ocupación, mantenimiento y relaciones con inquilinos.",
    },
    {
      icon: BarChart3,
      title: "Reportes Trimestrales",
      description:
        "Transparencia total con estados financieros auditados, análisis de desempeño, actualizaciones de mercado y proyecciones. Portal de inversionista 24/7.",
    },
    {
      icon: Shield,
      title: "Estructura Legal Robusta",
      description:
        "Vehículos de inversión estructurados en EE.UU. con protección legal para inversionistas. Derechos claros, gobernanza transparente y cumplimiento regulatorio.",
    },
    {
      icon: Globe,
      title: "Diversificación Dolarizada",
      description:
        "Protege tu patrimonio con activos en dólares en mercados estables. Diversificación geográfica y por tipo de activo para mitigar riesgos.",
    },
  ]

  const resources = [
    "Fichas técnicas de propiedades",
    "Reportes de due diligence",
    "Estados financieros auditados",
    "Estructura legal y documentos",
    "Análisis de mercado",
    "Guías fiscales MX/US",
  ]

  return (
    <section id="por-que-mir" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué MIR Investments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acceso institucional a bienes raíces comerciales con el respaldo de un equipo experimentado y procesos
            rigurosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="border-border/60 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Data Room */}
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-border/70 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Centro de Recursos para Inversionistas</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Accede a nuestro data room con documentación completa: fichas técnicas de propiedades, reportes de due
                diligence, estados financieros históricos, estructura legal y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Solicitar Acceso al Data Room
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="bg-transparent hover:-translate-y-0.5 transition-all duration-200"
                >
                  Descargar Presentación
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {resources.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
