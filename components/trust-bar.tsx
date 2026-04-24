export function TrustBar() {
  const stats = [
    { value: "15+", label: "Propiedades", sub: "Activos comerciales AAA" },
    { value: "200+", label: "Inversionistas", sub: "Confiando en MIR" },
    { value: "$85M+", label: "AUM", sub: "Activos bajo administración" },
    { value: "8+", label: "Años", sub: "De experiencia" },
  ]

  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center px-6 py-12 ${index > 0 ? "border-l border-foreground/10" : ""}`}
            >
              <div className="font-serif text-4xl md:text-5xl font-light text-accent mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
