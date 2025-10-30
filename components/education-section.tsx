"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, FileText } from "lucide-react"

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
    {
      term: "Cap Rate",
      definition: "Tasa de capitalización. Rendimiento anual neto de una propiedad dividido por su valor de compra.",
    },
    {
      term: "IRR",
      definition:
        "Tasa Interna de Retorno. Rendimiento anualizado considerando flujos de efectivo y apreciación del activo.",
    },
    {
      term: "WALE",
      definition:
        "Weighted Average Lease Expiry. Promedio ponderado de años restantes en los contratos de arrendamiento.",
    },
    {
      term: "DSCR",
      definition:
        "Debt Service Coverage Ratio. Relación entre el ingreso neto operativo y el servicio de deuda. Mayor a 1.25x es saludable.",
    },
    {
      term: "LTV",
      definition: "Loan-to-Value. Porcentaje del valor de la propiedad financiado con deuda. Menor LTV = menor riesgo.",
    },
    {
      term: "NNN",
      definition:
        "Triple Net Lease. Contrato donde el inquilino paga impuestos, seguros y mantenimiento además de la renta.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Centro de Educación</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recursos para ayudarte a tomar decisiones informadas sobre inversiones inmobiliarias
          </p>
        </div>

        {/* Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Artículos Destacados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => {
              const Icon = article.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-bold mb-2">{article.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.readTime} lectura</span>
                      <Button variant="ghost" size="sm">
                        Leer más
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Glossary */}
        <Card>
          <CardHeader>
            <CardTitle>Glosario de Términos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {glossary.map((item, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <div className="font-bold text-primary mb-1">{item.term}</div>
                  <p className="text-sm text-muted-foreground">{item.definition}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
