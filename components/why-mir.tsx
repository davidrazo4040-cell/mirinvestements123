"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileCheck, Settings, BarChart3, Shield, Globe } from "lucide-react"

export function WhyMIR() {
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

  return (
    <section id="por-que-mir" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué MIR Investments</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acceso institucional a bienes raíces comerciales con el respaldo de un equipo experimentado y procesos
            rigurosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Data Room / Resources */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Centro de Recursos para Inversionistas</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Accede a nuestro data room con documentación completa: fichas técnicas de propiedades, reportes de due
                  diligence, estados financieros históricos, estructura legal y más.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="default">
                    Acceder al Data Room
                  </Button>
                  <Button size="lg" variant="outline">
                    Descargar Presentación
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Fichas técnicas de propiedades</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Reportes de due diligence</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Estados financieros auditados</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Estructura legal y documentos</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Análisis de mercado</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Guías fiscales MX/US</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
