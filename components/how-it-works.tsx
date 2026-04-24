"use client"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico y KYC",
      description:
        "Completamos un perfil de inversionista simplificado para entender tus objetivos, horizonte de inversión y tolerancia al riesgo. Proceso KYC digital en minutos.",
      cta: "Iniciar Diagnóstico",
      action: () => {
        const element = document.getElementById("contacto")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      number: "02",
      title: "Selección de Propiedad",
      description:
        "Te presentamos propiedades que coinciden con tu perfil. Recibes fichas técnicas completas con due diligence externo, análisis de mercado y proyecciones financieras.",
      cta: "Ver Portafolio",
      action: () => {
        const element = document.getElementById("portafolio")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      number: "03",
      title: "Distribuciones y Reportes",
      description:
        "Recibe distribuciones trimestrales directas a tu cuenta. Acceso 24/7 a tu portal de inversionista con reportes detallados, estados financieros y actualizaciones de propiedades.",
      cta: "Conocer Más",
      action: () => {
        const element = document.getElementById("por-que-mir")
        if (element) element.scrollIntoView({ behavior: "smooth" })
      },
    },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-muted/30 border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Proceso</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Cómo <em className="italic">funciona</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Proceso simple y transparente en 3 pasos para comenzar a invertir en bienes raíces comerciales en EE.UU.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-foreground/10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-b border-r border-foreground/10 p-10 md:p-12 group hover:bg-background transition-colors duration-300"
            >
              <div className="font-serif text-7xl font-light text-foreground/8 leading-none mb-8 group-hover:text-accent/15 transition-colors duration-300">
                {step.number}
              </div>

              <h3 className="text-lg font-semibold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{step.description}</p>

              <button
                onClick={step.action}
                className="text-xs tracking-[0.2em] uppercase border-b border-foreground/30 pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
              >
                {step.cta} →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            Agenda una Llamada
          </button>
        </div>
      </div>
    </section>
  )
}
