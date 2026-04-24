"use client"

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
        "Te presentamos propiedades que coinciden con tu perfil. Recibes fichas técnicas completas con due diligence externo, análisis de mercado y proyecciones financieras.",
      cta: "Ver Portafolio",
      action: () => {
        const element = document.getElementById("portafolio")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Distribuciones y Reportes",
      description:
        "Recibe distribuciones trimestrales directas a tu cuenta. Acceso 24/7 a tu portal de inversionista con reportes detallados, estados financieros y actualizaciones de propiedades.",
      cta: "Conocer Más",
      action: () => {
        const element = document.getElementById("por-que-mir")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y transparente en 3 pasos para comenzar a invertir en bienes raíces comerciales en EE.UU.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative z-10 flex flex-col">
                {/* Step card */}
                <div className="bg-background border border-border/70 rounded-2xl p-8 h-full flex flex-col hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                  {/* Step number + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl font-bold text-accent/15 leading-none group-hover:text-accent/25 transition-colors duration-300">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-1">{step.description}</p>

                  {/* CTA */}
                  <Button onClick={step.action} variant="outline" className="w-full group/btn bg-transparent mt-auto">
                    {step.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Agenda una Llamada
          </Button>
        </div>
      </div>
    </section>
  )
}
