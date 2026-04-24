"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Shield, DollarSign } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById("portafolio")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(222 47% 11%) 1px, transparent 1px), linear-gradient(90deg, hsl(222 47% 11%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium border border-accent/30 bg-accent/10 text-accent-foreground"
            >
              Inversión Institucional Accesible
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            Invierte en inmuebles comerciales{" "}
            <span className="text-accent">AAA</span>{" "}
            en Estados Unidos
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance mb-10 max-w-3xl mx-auto leading-relaxed">
            Acceso institucional, rendimientos históricos, transparencia total.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-base px-8 py-6 h-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Solicita Información
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-transparent hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver Portafolio
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="animate-fade-in-up delay-400 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: CheckCircle2, text: "Propiedades existentes y rentadas" },
              { icon: Shield, text: "Due diligence externo" },
              { icon: DollarSign, text: "Inversión dolarizada desde USD 120,000" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-left">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
