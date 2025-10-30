"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Ciudad de México, MX",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "CM",
    rating: 5,
    text: "La transparencia de MIR es excepcional. Recibo reportes trimestrales detallados y las distribuciones han sido consistentes. Mi portafolio está diversificado en dólares.",
  },
  {
    name: "Ana Rodríguez",
    location: "Monterrey, MX",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "AR",
    rating: 5,
    text: "Invertir en bienes raíces comerciales en EE.UU. parecía complicado, pero MIR simplificó todo el proceso. El equipo es profesional y siempre disponible.",
  },
  {
    name: "Roberto Silva",
    location: "Guadalajara, MX",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "RS",
    rating: 5,
    text: "Los rendimientos han superado mis expectativas. La curaduría de propiedades es institucional y el due diligence externo me da mucha confianza.",
  },
  {
    name: "María González",
    location: "Querétaro, MX",
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "MG",
    rating: 5,
    text: "Como inversionista conservadora, aprecio el enfoque en propiedades Core con inquilinos de alta calidad. Las distribuciones son puntuales.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros inversionistas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios verificados de inversionistas que confían en MIR
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-16 w-16 flex-shrink-0">
                  <AvatarImage
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {testimonials[currentIndex].initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-lg text-foreground mb-4 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
