"use client"

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
    <section id="por-que-mir" className="py-24 bg-background border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Diferenciadores</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Por qué <em className="italic">MIR</em> Investments
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Acceso institucional a bienes raíces comerciales con el respaldo de un equipo experimentado y procesos rigurosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-foreground/10 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="border-b border-r border-foreground/10 p-8 md:p-10 group hover:bg-muted/30 transition-colors duration-300"
              >
                <Icon className="h-4 w-4 text-accent mb-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-base font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Data Room */}
        <div className="border border-foreground/15 p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Centro de Recursos</p>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
                Data Room para<br /><em className="italic">Inversionistas</em>
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed text-sm">
                Accede a documentación completa: fichas técnicas de propiedades, reportes de due
                diligence, estados financieros históricos, estructura legal y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <button
                  onClick={scrollToContact}
                  className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 w-fit hover:text-accent hover:border-accent transition-colors duration-200"
                >
                  Solicitar Acceso al Data Room
                </button>
                <button
                  onClick={scrollToContact}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground border-b border-muted-foreground/40 pb-0.5 w-fit hover:text-foreground hover:border-foreground transition-colors duration-200"
                >
                  Descargar Presentación
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {resources.map((item) => (
                <div key={item} className="flex items-center gap-4 text-sm border-b border-foreground/8 pb-4 last:border-0 last:pb-0">
                  <div className="w-1 h-1 bg-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
