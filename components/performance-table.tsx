"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { formatPercent, formatCurrency } from "@/utils/performance-math"

const performanceData = [
  {
    property: "Corporate Plaza Austin",
    period: "2023 Q4",
    irrGross: 12.5,
    irrNet: 10.8,
    distributions: 45000,
    appreciation: 8.2,
    notes: "Incluye refinanciamiento",
  },
  {
    property: "Retail Center Miami",
    period: "2023 Q4",
    irrGross: 11.2,
    irrNet: 9.5,
    distributions: 38000,
    appreciation: 6.5,
    notes: "",
  },
  {
    property: "Industrial Park Dallas",
    period: "2023 Q4",
    irrGross: 13.5,
    irrNet: 11.2,
    distributions: 52000,
    appreciation: 9.8,
    notes: "",
  },
  {
    property: "Medical Office Phoenix",
    period: "2023 Q4",
    irrGross: 10.8,
    irrNet: 9.2,
    distributions: 35000,
    appreciation: 5.5,
    notes: "",
  },
  {
    property: "Distribution Center Atlanta",
    period: "2023 Q4",
    irrGross: 14.0,
    irrNet: 11.8,
    distributions: 58000,
    appreciation: 10.5,
    notes: "",
  },
]

export function PerformanceTable() {
  const [showMethodology, setShowMethodology] = useState(false)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Desempeño Histórico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparencia total en el rendimiento de nuestras propiedades
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
              <CardTitle>Rendimientos por Propiedad - Q4 2023</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowMethodology(!showMethodology)}>
                <Info className="h-4 w-4 mr-2" />
                Metodología de Cálculo
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {showMethodology && (
              <Alert className="mb-6">
                <AlertDescription className="text-sm space-y-2">
                  <p>
                    <strong>IRR Bruto:</strong> Tasa interna de retorno antes de comisiones y gastos, calculada con base
                    en flujos de efectivo operativos y apreciación del activo.
                  </p>
                  <p>
                    <strong>IRR Neto:</strong> Tasa interna de retorno después de comisiones de administración (2%
                    anual) y gastos operativos. Este es el rendimiento real para el inversionista.
                  </p>
                  <p>
                    <strong>Distribuciones:</strong> Pagos trimestrales en efectivo derivados del ingreso neto operativo
                    de la propiedad.
                  </p>
                  <p>
                    <strong>Apreciación:</strong> Incremento en el valor de la propiedad basado en valuaciones
                    independientes anuales.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Nota: Algunas propiedades utilizan líneas de crédito o subscription facilities para optimizar
                    distribuciones. Esto se indica en las notas correspondientes.
                  </p>
                </AlertDescription>
              </Alert>
            )}

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Propiedad</TableHead>
                    <TableHead>Periodo</TableHead>
                    <TableHead className="text-right">
                      <div className="flex flex-col items-end">
                        <span>IRR Bruto</span>
                        <span className="text-xs font-normal text-muted-foreground">(antes de comisiones)</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-right">
                      <div className="flex flex-col items-end">
                        <span>IRR Neto</span>
                        <span className="text-xs font-normal text-muted-foreground">(después de comisiones)</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Distribuciones</TableHead>
                    <TableHead className="text-right">Apreciación</TableHead>
                    <TableHead>Notas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {performanceData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.property}</TableCell>
                      <TableCell>{row.period}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary" className="font-mono">
                          {formatPercent(row.irrGross)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="default" className="font-mono bg-accent text-accent-foreground">
                          {formatPercent(row.irrNet)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono">{formatCurrency(row.distributions)}</TableCell>
                      <TableCell className="text-right font-mono">{formatPercent(row.appreciation)}</TableCell>
                      <TableCell>
                        {row.notes && <span className="text-xs text-muted-foreground italic">{row.notes}</span>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12.0%</div>
                <div className="text-sm text-muted-foreground">IRR Bruto Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10.5%</div>
                <div className="text-sm text-muted-foreground">IRR Neto Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{formatCurrency(45600)}</div>
                <div className="text-sm text-muted-foreground">Distribución Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8.1%</div>
                <div className="text-sm text-muted-foreground">Apreciación Promedio</div>
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
