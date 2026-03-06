"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Shield, DollarSign } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById("portafolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/modern-office-exterior.png')] bg-cover bg-center opacity-5" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Inversión Institucional Accesible
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            Tu puerta a la inversión inteligente en <span className="text-primary">Estados Unidos</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-balance mb-10 max-w-3xl mx-auto leading-relaxed">
            Inmuebles premium, transparencia total, ganancias que te respaldan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={scrollToContact} size="lg" className="text-base px-8 py-6 h-auto">
              Solicita Información
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-transparent"
            >
              Ver Portafolio
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-left">Propiedades existentes y rentadas</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-left">Due diligence externo</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <DollarSign className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-left">Inversión dolarizada desde USD 200,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
