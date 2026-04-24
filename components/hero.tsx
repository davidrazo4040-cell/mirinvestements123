"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield, DollarSign, ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToPortfolio = () => {
    document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">
              Inversión Institucional Accesible
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-100 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Inmuebles comerciales{" "}
            <span className="text-accent italic">AAA</span>{" "}
            en EE.UU.
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            Acceso institucional, rendimientos históricos comprobados, transparencia total.
            Inversión dolarizada desde USD 200,000.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-base px-8 py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200 font-semibold"
            >
              Solicita Información
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver Portafolio
            </Button>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-in-up delay-400 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: CheckCircle2, text: "Propiedades existentes y rentadas NNN" },
              { icon: Shield, text: "Due diligence externo certificado" },
              { icon: DollarSign, text: "Inversión dolarizada desde USD 200K" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 text-sm text-white/70">
                <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-left">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
