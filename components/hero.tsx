"use client"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById("portafolio")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    { value: "$85M+", label: "Activos bajo administración", sub: "AUM en propiedades comerciales" },
    { value: "15+", label: "Propiedades activas", sub: "Activos comerciales AAA en EE.UU." },
    { value: "200+", label: "Inversionistas", sub: "Confiando en MIR Investments" },
    { value: "8+", label: "Años de experiencia", sub: "Operando en mercados de EE.UU." },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-background border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">

          {/* Left — Typography */}
          <div>
            <p className="animate-fade-in text-xs tracking-[0.35em] uppercase text-accent mb-8 font-medium">
              Inversión Institucional Accesible
            </p>

            <h1 className="animate-fade-in-up delay-100 font-serif text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] font-light leading-[1.05] text-foreground mb-8">
              Inmuebles<br />
              Comerciales{" "}
              <em className="italic text-accent">AAA</em>
              <br />en Estados<br />
              Unidos
            </h1>

            <p className="animate-fade-in-up delay-200 text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-sm">
              Acceso institucional a bienes raíces comerciales con rendimientos históricos, transparencia total e inversión dolarizada desde USD 120,000.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-8">
              <button
                onClick={scrollToContact}
                className="text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
              >
                Solicitar Información
              </button>
              <button
                onClick={scrollToPortfolio}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground border-b border-muted-foreground/40 pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
              >
                Ver Portafolio
              </button>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="border-l border-foreground/12 pl-10 md:pl-14 animate-fade-in-up delay-200">
            {stats.map((stat, i) => (
              <div key={i} className={`py-7 ${i > 0 ? "border-t border-foreground/10" : ""}`}>
                <div className="font-serif text-4xl md:text-5xl font-light text-foreground mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground/80 mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground tracking-wide">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
