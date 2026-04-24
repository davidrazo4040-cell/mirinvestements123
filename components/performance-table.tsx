"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Info, TrendingUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const historicalData = [
  { year: "2015", cumReturn: 6.1, annualReturn: 6.1 },
  { year: "2016", cumReturn: null, annualReturn: null },
  { year: "2017", cumReturn: null, annualReturn: null },
  { year: "2018", cumReturn: 12.1, annualReturn: null },
  { year: "2019", cumReturn: 24.6, annualReturn: 12.5 },
  { year: "2020", cumReturn: 35.6, annualReturn: 11.0 },
  { year: "2021", cumReturn: 54.4, annualReturn: 18.8 },
  { year: "2022", cumReturn: 65.7, annualReturn: 11.3 },
  { year: "2023", cumReturn: 93.1, annualReturn: 27.4 },
  { year: "2024", cumReturn: 110.1, annualReturn: 17.0 },
  { year: "2025", cumReturn: 129.5, annualReturn: 19.4 },
]

const portfolioSummary = [
  { property: "Walgreens – Denver MSA", noi: 625000, value: 8950000, capRate: 6.98, leaseEnd: "2036", tenant: "Walgreens" },
  { property: "Walgreens – El Paso, TX", noi: 428000, value: 6120000, capRate: 6.99, leaseEnd: "2033", tenant: "Walgreens" },
  { property: "Teleperformance – Port St. Lucie, FL", noi: 1715335, value: 28588915, capRate: 6.0, leaseEnd: "2030", tenant: "Teleperformance" },
  { property: "Cicero Retail Center – Chicago MSA", noi: 554664, value: 9244400, capRate: 6.0, leaseEnd: "2030", tenant: "Multi-tenant" },
  { property: "Valle del Colibrí – El Paso, TX", noi: 6564776, value: 114170014, capRate: 5.75, leaseEnd: "2028–2029", tenant: "Desarrollo BTR" },
]

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

export function PerformanceTable() {
  const [tab, setTab] = useState<"historico" | "portafolio">("historico")

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Resultados</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Desempeño <span className="text-accent">histórico</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Track record comprobado desde 2015 con retornos acumulados del 129.5%
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Retorno Acumulado", value: "129.5%", sub: "2015 – 2025", color: "text-accent" },
            { label: "Cap Rate Promedio", value: "~6.5%", sub: "Portafolio NNN", color: "text-primary" },
            { label: "NOI Total Anual", value: "$9.3M", sub: "Propiedades estabilizadas", color: "text-foreground" },
            { label: "IRR Proyectado", value: "18%+", sub: "Valle del Colibrí", color: "text-green-600" },
          ].map(({ label, value, sub, color }) => (
            <Card key={label} className="border-border/60">
              <CardContent className="p-5 text-center">
                <div className={`text-2xl font-bold mb-1 ${color}`}>{value}</div>
                <div className="text-xs font-semibold text-foreground mb-0.5">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={tab === "historico" ? "default" : "outline"}
            size="sm"
            onClick={() => setTab("historico")}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Histórico 2015–2025
          </Button>
          <Button
            variant={tab === "portafolio" ? "default" : "outline"}
            size="sm"
            onClick={() => setTab("portafolio")}
          >
            Portafolio Actual
          </Button>
        </div>

        <Alert className="mb-6 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Aviso Importante:</strong> Los rendimientos pasados no garantizan rendimientos futuros. Los datos mostrados son históricos y no constituyen una promesa de rendimientos futuros.
          </AlertDescription>
        </Alert>

        <Card className="border-border/60 shadow-md">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-lg">
                {tab === "historico" ? "Retorno Acumulado MIR Investments 2015–2025" : "Métricas de Portafolio Actual"}
              </CardTitle>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Info className="h-3.5 w-3.5" />
                Datos auditados por firmas independientes
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {tab === "historico" ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Año</TableHead>
                      <TableHead className="text-right">Retorno Acumulado (%)</TableHead>
                      <TableHead className="text-right">Retorno Anual Est. (%)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {historicalData.filter(r => r.cumReturn !== null).map((row) => (
                      <TableRow key={row.year}>
                        <TableCell className="font-semibold">{row.year}</TableCell>
                        <TableCell className="text-right">
                          <span className="font-bold text-accent">+{row.cumReturn}%</span>
                        </TableCell>
                        <TableCell className="text-right">
                          {row.annualReturn !== null ? (
                            <span className="text-sm font-medium text-foreground">~{row.annualReturn}%</span>
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Propiedad</TableHead>
                      <TableHead>Inquilino Principal</TableHead>
                      <TableHead className="text-right">NOI Anual</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                      <TableHead className="text-right">Cap Rate</TableHead>
                      <TableHead className="text-right">Lease Hasta</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {portfolioSummary.map((row) => (
                      <TableRow key={row.property}>
                        <TableCell className="font-medium text-sm">{row.property}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.tenant}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{formatCurrency(row.noi)}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{formatCurrency(row.value)}</TableCell>
                        <TableCell className="text-right">
                          <span className="font-bold text-accent">{row.capRate}%</span>
                        </TableCell>
                        <TableCell className="text-right text-sm text-muted-foreground">{row.leaseEnd}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Todos los datos de desempeño corresponden al track record real de MIR Investments 2015–2025.
            Los inversionistas tienen acceso completo a estados financieros, reportes de auditoría y
            documentación de soporte a través del portal de inversionista.
          </p>
        </div>
      </div>
    </section>
  )
}
