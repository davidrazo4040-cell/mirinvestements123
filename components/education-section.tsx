"use client"

import { TrendingUp, FileText, BookOpen } from "lucide-react"

export function EducationSection() {
  const articles = [
    {
      icon: TrendingUp,
      title: "Entendiendo el Cap Rate y el IRR",
      description: "Guía completa sobre las métricas clave para evaluar inversiones inmobiliarias comerciales.",
      readTime: "5 min",
    },
    {
      icon: FileText,
      title: "Contratos NNN: Ventajas y Consideraciones",
      description: "Todo lo que necesitas saber sobre los contratos triple neto y por qué son atractivos.",
      readTime: "4 min",
    },
    {
      icon: BookOpen,
      title: "Implicaciones Fiscales para Inversionistas Mexicanos",
      description: "Panorama general de la tributación en México y EE.UU. para inversiones inmobiliarias.",
      readTime: "7 min",
    },
  ]

  const glossary = [
    { term: "Cap Rate", definition: "Rendimiento anual neto de una propiedad dividido por su valor de compra." },
    { term: "IRR", definition: "Tasa Interna de Retorno. Rendimiento anualizado considerando flujos de efectivo y apreciación del activo." },
    { term: "WALE", definition: "Weighted Average Lease Expiry. Promedio ponderado de años restantes en los contratos de arrendamiento." },
    { term: "DSCR", definition: "Debt Service Coverage Ratio. Relación entre ingreso neto operativo y servicio de deuda. Mayor a 1.25x es saludable." },
    { term: "LTV", definition: "Loan-to-Value. Porcentaje del valor de la propiedad financiado con deuda. Menor LTV, menor riesgo." },
    { term: "NNN", definition: "Triple Net Lease. Contrato donde el inquilino paga impuestos, seguros y mantenimiento además de la renta." },
  ]

  return (
    <section className="py-24 bg-background border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Educación</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Centro de <em className="italic">recursos</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Recursos para ayudarte a tomar decisiones informadas sobre inversiones inmobiliarias
          </p>
        </div>

        {/* Articles */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">Artículos Destacados</p>
          <div className="grid md:grid-cols-3 border-t border-l border-foreground/10">
            {articles.map((article, index) => {
              const Icon = article.icon
              return (
                <div
                  key={index}
                  className="border-b border-r border-foreground/10 p-8 md:p-10 group hover:bg-muted/30 transition-colors duration-300 cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-accent mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="font-medium text-foreground mb-3 leading-snug">{article.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.readTime} lectura</span>
                    <span className="text-xs tracking-wide text-foreground/40 group-hover:text-accent transition-colors duration-200">
                      Leer más →
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Glossary */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">Glosario de Términos</p>
          <div className="grid md:grid-cols-2 gap-0 border-t border-l border-foreground/10">
            {glossary.map((item, index) => (
              <div key={index} className="border-b border-r border-foreground/10 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-px h-8 bg-accent opacity-50 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-foreground mb-2">{item.term}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
