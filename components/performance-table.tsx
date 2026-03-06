"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, LabelList, Tooltip } from "recharts"

// MIR Investment Performance data from PDF (2015-2025) in millions
const performanceData = [
  { year: "2015", value: 6.1 },
  { year: "2018", value: 12.1 },
  { year: "2019", value: 24.6 },
  { year: "2020", value: 35.6 },
  { year: "2021", value: 54.4 },
  { year: "2022", value: 65.7 },
  { year: "2023", value: 93.1 },
  { year: "2024", value: 110.1 },
  { year: "2025", value: 129.5 },
]



export function PerformanceTable() {
  const [showMethodology, setShowMethodology] = useState(false)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Desempeño Histórico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crecimiento sostenido de activos bajo administración desde 2015
          </p>
        </div>

        {/* Disclaimer */}
        <Alert className="mb-8 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Aviso Importante:</strong> Los rendimientos pasados no garantizan rendimientos futuros. Toda
            inversión conlleva riesgos, incluyendo la posible pérdida del capital. Los datos mostrados son históricos y
            no constituyen una promesa o garantía de rendimientos futuros.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>MIR Investment Performance 2015 - 2025</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowMethodology(!showMethodology)}>
                <Info className="h-4 w-4 mr-2" />
                Metodología
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {showMethodology && (
              <Alert className="mb-6">
                <AlertDescription className="text-sm space-y-2">
                  <p>
                    <strong>AUM (Activos Bajo Administración):</strong> Valor total de las propiedades en el portafolio,
                    expresado en millones de dólares estadounidenses.
                  </p>
                  <p>
                    <strong>Crecimiento:</strong> El gráfico muestra el crecimiento acumulado del portafolio desde 2015,
                    reflejando tanto nuevas adquisiciones como la apreciación de propiedades existentes.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Nota: Los valores incluyen propiedades estabilizadas y proyectos en desarrollo.
                  </p>
                </AlertDescription>
              </Alert>
            )}

            {/* Performance Chart */}
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 30, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs fill-muted-foreground"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    className="text-xs fill-muted-foreground"
                    tickFormatter={(value) => `$${value}M`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-background border border-border rounded-lg shadow-lg p-3">
                            <p className="font-semibold">{label}</p>
                            <p className="text-primary font-bold">${payload[0].value}M</p>
                            <p className="text-xs text-muted-foreground">Activos Bajo Administración</p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(222.2 47.4% 11.2%)"
                    radius={[4, 4, 0, 0]}
                  >
                    <LabelList
                      dataKey="value"
                      position="top"
                      formatter={(value: number) => `$${value}M`}
                      className="fill-foreground text-xs"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$129.5M</div>
                <div className="text-sm text-muted-foreground">AUM Actual (2025)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">21x</div>
                <div className="text-sm text-muted-foreground">Crecimiento desde 2015</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">17</div>
                <div className="text-sm text-muted-foreground">Propiedades en Portafolio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Transparency Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Todos los datos de desempeño son auditados por firmas independientes. Los inversionistas tienen acceso
            completo a estados financieros, reportes de auditoría y documentación de soporte a través del portal de
            inversionista.
          </p>
        </div>
      </div>
    </section>
  )
}
