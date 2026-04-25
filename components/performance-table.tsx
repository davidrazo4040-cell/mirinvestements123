"use client"

import { useState } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  Bar,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Info, TrendingUp, Download, BarChart2, FileText, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const chartData = [
  { year: "2015", cumReturn: 6.1, annualReturn: 6.1 },
  { year: "2018", cumReturn: 12.1, annualReturn: null },
  { year: "2019", cumReturn: 24.6, annualReturn: 12.5 },
  { year: "2020", cumReturn: 35.6, annualReturn: 11.0 },
  { year: "2021", cumReturn: 54.4, annualReturn: 18.8 },
  { year: "2022", cumReturn: 65.7, annualReturn: 11.3 },
  { year: "2023", cumReturn: 93.1, annualReturn: 27.4 },
  { year: "2024", cumReturn: 110.1, annualReturn: 17.0 },
  { year: "2025", cumReturn: 129.5, annualReturn: 19.4 },
]

const quarterlyReports = [
  {
    quarter: "Q1 2025",
    period: "Enero – Marzo 2025",
    ocupacion: "98.2%",
    noi: "$2.33M",
    distribucion: "$0.071 / unidad",
    propiedades: 5,
    highlights: ["Renovación de contrato Walgreens Denver", "Inicio de obra Valle del Colibrí", "Distribuciones pagadas puntualmente"],
    quarterlyDist: [
      { q: "Q2 2024", val: 0.068 },
      { q: "Q3 2024", val: 0.069 },
      { q: "Q4 2024", val: 0.070 },
      { q: "Q1 2025", val: 0.071 },
    ],
  },
  {
    quarter: "Q4 2024",
    period: "Octubre – Diciembre 2024",
    ocupacion: "97.8%",
    noi: "$2.28M",
    distribucion: "$0.070 / unidad",
    propiedades: 5,
    highlights: ["100% cobro de rentas en período", "Incremento de NOI vs Q3", "Actualización de valúo independiente"],
    quarterlyDist: [
      { q: "Q1 2024", val: 0.066 },
      { q: "Q2 2024", val: 0.068 },
      { q: "Q3 2024", val: 0.069 },
      { q: "Q4 2024", val: 0.070 },
    ],
  },
  {
    quarter: "Q3 2024",
    period: "Julio – Septiembre 2024",
    ocupacion: "97.5%",
    noi: "$2.21M",
    distribucion: "$0.069 / unidad",
    propiedades: 5,
    highlights: ["Firma de nuevo contrato NNN 15 años", "Portafolio supera $166M en activos", "Distribución trimestral #38 consecutiva"],
    quarterlyDist: [
      { q: "Q4 2023", val: 0.064 },
      { q: "Q1 2024", val: 0.066 },
      { q: "Q2 2024", val: 0.068 },
      { q: "Q3 2024", val: 0.069 },
    ],
  },
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

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border/60 rounded-xl px-4 py-3 shadow-2xl">
        <p className="text-xs font-semibold text-muted-foreground mb-1">{label}</p>
        <p className="text-2xl font-bold text-accent">+{payload[0].value}%</p>
        <p className="text-xs text-muted-foreground">Retorno Acumulado</p>
      </div>
    )
  }
  return null
}

function QuarterlyModal({ report, onClose }: { report: typeof quarterlyReports[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background rounded-2xl border border-border/60 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/60 px-6 py-5 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-accent font-medium mb-1">Reporte Trimestral</p>
            <h3 className="text-xl font-bold text-foreground">{report.quarter}</h3>
            <p className="text-sm text-muted-foreground">{report.period}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Ocupación Total", value: report.ocupacion, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
              { label: "NOI Trimestral", value: report.noi, color: "text-accent", bg: "bg-accent/10 border-accent/20" },
              { label: "Distribución / Unidad", value: report.distribucion, color: "text-primary", bg: "bg-primary/5 border-primary/10" },
              { label: "Propiedades Activas", value: `${report.propiedades}`, color: "text-foreground", bg: "bg-muted border-border/60" },
            ].map(({ label, value, color, bg }) => (
              <div key={label} className={`rounded-xl border p-4 ${bg}`}>
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className={`text-lg font-bold ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Distribution chart */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-accent" />
              Distribución por Unidad — Últimos 4 Trimestres
            </p>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={report.quarterlyDist} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                  <XAxis
                    dataKey="q"
                    tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v.toFixed(3)}`}
                    domain={["auto", "auto"]}
                    width={52}
                  />
                  <Bar dataKey="val" fill="hsl(43,96%,56%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Puntos Destacados</p>
            <ul className="space-y-2">
              {report.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2 border-t border-border/60">
            <Button
              size="sm"
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar Reporte Completo →
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5" disabled>
              <Download className="h-4 w-4" />
              PDF
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            El reporte completo con estados financieros auditados se envía a inversionistas registrados.
          </p>
        </div>
      </div>
    </div>
  )
}

export function PerformanceTable() {
  const [tab, setTab] = useState<"historico" | "portafolio">("historico")
  const [selectedReport, setSelectedReport] = useState<typeof quarterlyReports[0] | null>(null)

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
            { label: "IRR Proyectado", value: "18%+", sub: "Valle del Colibrí", color: "text-emerald-600" },
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
        <div className="flex flex-wrap gap-2 mb-6">
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
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Reportes trimestrales:</span>
            {quarterlyReports.map((r) => (
              <Button
                key={r.quarter}
                variant="outline"
                size="sm"
                onClick={() => setSelectedReport(r)}
                className="text-xs h-8 px-3 border-accent/30 hover:border-accent hover:text-accent"
              >
                <FileText className="h-3.5 w-3.5 mr-1.5" />
                {r.quarter}
              </Button>
            ))}
          </div>
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
              <div>
                {/* Recharts Area Chart */}
                <div className="h-80 w-full mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(43,96%,56%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(43,96%,56%)" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.6} />
                      <XAxis
                        dataKey="year"
                        tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `${v}%`}
                        width={48}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <ReferenceLine y={100} stroke="hsl(var(--accent))" strokeDasharray="4 4" strokeOpacity={0.4} />
                      <Area
                        type="monotone"
                        dataKey="cumReturn"
                        stroke="hsl(43,96%,56%)"
                        strokeWidth={2.5}
                        fill="url(#goldGradient)"
                        dot={{ r: 5, fill: "hsl(43,96%,56%)", stroke: "hsl(var(--background))", strokeWidth: 2 }}
                        activeDot={{ r: 7, fill: "hsl(43,96%,56%)", stroke: "hsl(var(--background))", strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  La línea punteada horizontal marca el hito del 100% de retorno acumulado (alcanzado en 2024).
                </p>
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

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground max-w-2xl">
            Todos los datos de desempeño corresponden al track record real de MIR Investments 2015–2025.
            Los inversionistas tienen acceso completo a estados financieros, reportes de auditoría y
            documentación de soporte a través del portal de inversionista.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border-accent/30 hover:border-accent hover:text-accent flex-shrink-0"
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Download className="h-4 w-4" />
            Solicitar Presentación
          </Button>
        </div>
      </div>

      {selectedReport && (
        <QuarterlyModal report={selectedReport} onClose={() => setSelectedReport(null)} />
      )}
    </section>
  )
}
