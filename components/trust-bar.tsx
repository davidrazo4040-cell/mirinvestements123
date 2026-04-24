"use client"

import { Building2, Users, TrendingUp, Award } from "lucide-react"

export function TrustBar() {
  const stats = [
    {
      icon: Building2,
      value: "15+",
      label: "Propiedades",
      description: "Activos comerciales AAA",
    },
    {
      icon: Users,
      value: "200+",
      label: "Inversionistas",
      description: "Confiando en MIR",
    },
    {
      icon: TrendingUp,
      value: "$85M+",
      label: "AUM",
      description: "Activos bajo administración",
    },
    {
      icon: Award,
      value: "8+",
      label: "Años",
      description: "De experiencia",
    },
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <Icon className="h-5 w-5 mx-auto mb-3 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 leading-none tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-primary-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-primary-foreground/55">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
