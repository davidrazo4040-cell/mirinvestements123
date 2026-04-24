"use client"

import { Search, FileCheck, Settings, BarChart3, Shield, Globe, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WhyMIR() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
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
    <section id="por-que-mir" className="py-24 bg-background border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">
            Diferenciadores
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por qué <span className="text-accent">MIR</span> Investments
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Acceso institucional a bienes raíces comerciales con el respaldo de un equipo
            experimentado y procesos rigurosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="group hover:border-accent/40 hover:shadow-xl transition-all duration-300 border-border/60"
              >
                <CardContent className="p-8">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Data Room */}
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-16 text-primary-foreground">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">
                Centro de Recursos
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Data Room para{" "}
                <span className="text-accent">Inversionistas</span>
              </h3>
              <p className="text-primary-foreground/75 mb-10 leading-relaxed text-sm">
                Accede a documentación completa: fichas técnicas de propiedades, reportes de due
                diligence, estados financieros históricos, estructura legal y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToContact}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  Solicitar Acceso al Data Room
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground/60"
                >
                  Descargar Presentación
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {resources.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-sm py-3 border-b border-primary-foreground/10 last:border-0"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
