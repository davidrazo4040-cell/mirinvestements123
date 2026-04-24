"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Ciudad de México, MX",
    initials: "CM",
    rating: 5,
    text: "La transparencia de MIR es excepcional. Recibo reportes trimestrales detallados y las distribuciones han sido consistentes. Mi portafolio está diversificado en dólares.",
  },
  {
    name: "Ana Rodríguez",
    location: "Monterrey, MX",
    initials: "AR",
    rating: 5,
    text: "Invertir en bienes raíces comerciales en EE.UU. parecía complicado, pero MIR simplificó todo el proceso. El equipo es profesional y siempre disponible.",
  },
  {
    name: "Roberto Silva",
    location: "Guadalajara, MX",
    initials: "RS",
    rating: 5,
    text: "Los rendimientos han superado mis expectativas. La curaduría de propiedades es institucional y el due diligence externo me da mucha confianza.",
  },
  {
    name: "María González",
    location: "Querétaro, MX",
    initials: "MG",
    rating: 5,
    text: "Como inversionista conservadora, aprecio el enfoque en propiedades Core con inquilinos de alta calidad. Las distribuciones son puntuales y la comunicación es excelente.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros inversionistas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios verificados de inversionistas que confían en MIR
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote icon */}
                <Quote className="h-7 w-7 text-accent/30 mb-4 group-hover:text-accent/50 transition-colors" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/85 mb-6 leading-relaxed text-sm md:text-base">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
