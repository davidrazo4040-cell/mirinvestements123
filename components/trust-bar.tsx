"use client"

import { useEffect, useState, useRef } from "react"
import { Building2, Users, TrendingUp, Award } from "lucide-react"

function useCountUp(target: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, isVisible])
  return count
}

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Building2, value: 15, suffix: "+", label: "Propiedades", description: "Activos comerciales AAA" },
    { icon: Users, value: 200, suffix: "+", label: "Inversionistas", description: "Confiando en MIR" },
    { icon: TrendingUp, value: 85, suffix: "M+", label: "AUM USD", description: "Activos bajo administración" },
    { icon: Award, value: 8, suffix: "+", label: "Años", description: "De experiencia" },
  ]

  const count0 = useCountUp(15, 1500, isVisible)
  const count1 = useCountUp(200, 2000, isVisible)
  const count2 = useCountUp(85, 1800, isVisible)
  const count3 = useCountUp(8, 1200, isVisible)
  const counts = [count0, count1, count2, count3]

  return (
    <section ref={ref} className="py-16 bg-primary relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <Icon className="h-5 w-5 mx-auto mb-3 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                <div className="text-4xl md:text-5xl font-bold text-accent mb-1 leading-none tabular-nums">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm font-semibold text-primary-foreground mb-0.5">{stat.label}</div>
                <div className="text-xs text-primary-foreground/50">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
