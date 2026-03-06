"use client"

import { Card } from "@/components/ui/card"
import { Building2, Users, TrendingUp, Award } from "lucide-react"

export function TrustBar() {
  const stats = [
    {
      icon: Building2,
      value: "17",
      label: "Propiedades",
      description: "Activos comerciales AAA",
    },
    {
      icon: Users,
      value: "~100",
      label: "Inversionistas",
      description: "Confiando en MIR",
    },
    {
      icon: TrendingUp,
      value: "$100M+",
      label: "AUM",
      description: "Activos bajo administración",
    },
    {
      icon: Award,
      value: "10+",
      label: "Años",
      description: "De experiencia",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
