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
    { icon: Building2, value: 5, suffix: "", label: "Propiedades Activas", description: "Portafolio actual en EE.UU." },
    { icon: Users, value: 200, suffix: "+", label: "Inversionistas", description: "Confiando en MIR" },
    { icon: TrendingUp, value: 129, suffix: "%", label: "Retorno Acumulado", description: "Track record 2015–2025" },
    { icon: Award, value: 10, suffix: "+", label: "Años", description: "De experiencia comprobada" },
  ]

  const count0 = useCountUp(5, 800, isVisible)
  const count1 = useCountUp(200, 2000, isVisible)
  const count2 = useCountUp(129, 2000, isVisible)
  const count3 = useCountUp(10, 1200, isVisible)
  const counts = [count0, count1, count2, count3]

  return (
    <section ref={ref} className="surface-dark grain py-20 bg-primary relative overflow-hidden border-y border-accent/15">
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
                <Icon className="h-5 w-5 mx-auto mb-3 text-accent-ink/60 group-hover:text-accent-ink transition-colors duration-300" />
                <div className="font-serif text-5xl md:text-6xl font-light text-gold-metallic mb-3 leading-none tabular-nums">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-primary-foreground/90 mb-1">{stat.label}</div>
                <div className="text-xs text-primary-foreground/50">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
