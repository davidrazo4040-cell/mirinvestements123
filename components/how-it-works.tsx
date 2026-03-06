"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, Building2, TrendingUp, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Diagnóstico y KYC",
      description:
        "Completamos un perfil de inversionista simplificado para entender tus objetivos, horizonte de inversión y tolerancia al riesgo. Proceso KYC digital en minutos.",
      cta: "Iniciar Diagnóstico",
      action: () => {
        const element = document.getElementById("contacto")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      number: "02",
      icon: Building2,
      title: "Selección de Propiedad",
      description:
        "Identificación estratégica de propiedades estabilizadas o en desarrollo. Análisis de mercado exhaustivo, due diligence completo, estructura legal y financiera óptima, y negociación con arrendadores, desarrolladores y arrendatarios.",
      cta: "Ver Portafolio",
      action: () => {
        const element = document.getElementById("portafolio")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Distribuciones y Participación",
      description:
        "Distribuciones trimestrales directas. Juntas periódicas donde los inversionistas participan en decisiones clave. Gestión profesional a través de AppFolio con acceso 24/7 a reportes, estados financieros y actualizaciones.",
      cta: "Conocer Más",
      action: () => {
        const element = document.getElementById("por-que-mir")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
  ]

  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y transparente en 3 pasos para comenzar a invertir en bienes raíces comerciales en EE.UU.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    {/* CTA */}
                    <Button onClick={step.action} variant="outline" className="w-full group bg-transparent">
                      {step.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Arrow Connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-accent" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8"
          >
            Agenda una Llamada
          </Button>
        </div>
      </div>
    </section>
  )
}
