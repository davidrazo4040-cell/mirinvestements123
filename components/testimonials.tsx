"use client"

const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Ciudad de México",
    initials: "CM",
    text: "La transparencia de MIR es excepcional. Recibo reportes trimestrales detallados y las distribuciones han sido consistentes. Mi portafolio está diversificado en dólares.",
  },
  {
    name: "Ana Rodríguez",
    location: "Monterrey",
    initials: "AR",
    text: "Invertir en bienes raíces comerciales en EE.UU. parecía complicado, pero MIR simplificó todo el proceso. El equipo es profesional y siempre disponible.",
  },
  {
    name: "Roberto Silva",
    location: "Guadalajara",
    initials: "RS",
    text: "Los rendimientos han superado mis expectativas. La curaduría de propiedades es institucional y el due diligence externo me da mucha confianza.",
  },
  {
    name: "María González",
    location: "Querétaro",
    initials: "MG",
    text: "Como inversionista conservadora, aprecio el enfoque en propiedades Core con inquilinos de alta calidad. Las distribuciones son puntuales y la comunicación es excelente.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-y border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Testimonios</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Lo que dicen nuestros<br />
            <em className="italic">inversionistas</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-t border-l border-foreground/10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border-b border-r border-foreground/10 p-10 md:p-12 group hover:bg-muted/40 transition-colors duration-300"
            >
              {/* Large opening quote */}
              <div className="font-serif text-6xl font-light text-accent/30 leading-none mb-4 group-hover:text-accent/50 transition-colors duration-300">
                "
              </div>

              <p className="text-foreground/80 leading-relaxed text-base md:text-lg font-serif font-light italic mb-8">
                {t.text}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-foreground/10">
                <div className="w-8 h-8 border border-foreground/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-foreground/60">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
