"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, Search, BarChart3 } from "lucide-react"

export function HowItWorks() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Diagnóstico y KYC",
      description:
        "Completamos un perfil de inversionista simplificado para entender tus objetivos, horizonte de inversión y tolerancia al riesgo. Proceso KYC digital en minutos.",
      cta: "Iniciar Diagnóstico",
      action: () => scrollToSection("contacto"),
    },
    {
      number: "02",
      icon: Search,
      title: "Selección de Propiedad",
      description:
        "Te presentamos propiedades que coinciden con tu perfil. Recibes fichas técnicas completas con due diligence externo, análisis de mercado y proyecciones financieras.",
      cta: "Ver Portafolio",
      action: () => scrollToSection("portafolio"),
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Distribuciones y Reportes",
      description:
        "Recibe distribuciones trimestrales directas a tu cuenta. Acceso 24/7 a tu portal de inversionista con reportes detallados, estados financieros y actualizaciones de propiedades.",
      cta: "Conocer Más",
      action: () => scrollToSection("por-que-mir"),
    },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-muted/30 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Proceso</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cómo <span className="text-accent">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Proceso simple y transparente en 3 pasos para comenzar a invertir en bienes raíces
            comerciales en EE.UU.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20 pointer-events-none" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/60 relative"
              >
                <CardContent className="p-8 md:p-10">
                  {/* Step number — large translucent background */}
                  <div className="absolute top-6 right-6 font-bold text-6xl text-foreground/[0.04] select-none leading-none group-hover:text-accent/10 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Icon in rounded square */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <button
                    onClick={step.action}
                    className="text-xs font-semibold tracking-[0.15em] uppercase text-accent hover:text-accent/80 transition-colors duration-200 flex items-center gap-1"
                  >
                    {step.cta} →
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("contacto")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 px-8"
          >
            Agenda una Llamada
          </Button>
        </div>
      </div>
    </section>
  )
}
