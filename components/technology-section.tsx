"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  BarChart3,
  Building2,
  FileCheck,
  Settings,
  Users,
  LineChart,
  Shield,
  Smartphone,
} from "lucide-react"

export function TechnologySection() {
  return (
    <section className="py-20 bg-muted/30" id="tecnologia">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Tecnología e Innovación
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnología de Vanguardia en Cada Paso
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Utilizamos las mejores herramientas tecnológicas para identificar oportunidades,
            gestionar propiedades y mantener a nuestros inversionistas informados en tiempo real
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Property Selection Technology */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Selección de Propiedades</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Nuestro proceso de selección combina análisis de datos avanzado con experiencia
                de mercado para identificar las mejores oportunidades de inversión.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BarChart3 className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Análisis de Mercado</div>
                    <div className="text-sm text-muted-foreground">
                      Evaluación de tendencias demográficas, económicas y de desarrollo en cada mercado objetivo
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Due Diligence Exhaustivo</div>
                    <div className="text-sm text-muted-foreground">
                      Inspecciones físicas, análisis financiero, evaluación de tenants y revisión legal completa
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Estructura Legal y Financiera</div>
                    <div className="text-sm text-muted-foreground">
                      Diseño óptimo de LLCs, financiamiento competitivo y protección legal para inversionistas
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <LineChart className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Proyecciones Financieras</div>
                    <div className="text-sm text-muted-foreground">
                      Modelos detallados de IRR, cash-on-cash, y escenarios de salida
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Property Management Technology */}
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Gestión de Propiedades</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Utilizamos AppFolio, la plataforma líder en gestión de propiedades comerciales,
                para administrar todas nuestras inversiones de manera eficiente y transparente.
              </p>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <span className="text-lg font-bold text-primary">A</span>
                  </div>
                  <div>
                    <div className="font-bold text-primary">AppFolio</div>
                    <div className="text-xs text-muted-foreground">Property Management Software</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Software de clase mundial para gestión de propiedades comerciales con acceso 24/7 para inversionistas
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Portal de Inversionista</div>
                    <div className="text-sm text-muted-foreground">
                      Acceso en tiempo real a estados financieros, reportes de propiedades y distribuciones
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Juntas de Inversionistas</div>
                    <div className="text-sm text-muted-foreground">
                      Participación activa en decisiones clave sobre las propiedades en juntas periódicas
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Reportes Automatizados</div>
                    <div className="text-sm text-muted-foreground">
                      Reportes mensuales de desempeño, ocupación, cobros y mantenimiento
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="bg-background rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold text-center mb-8">Beneficios de Nuestra Tecnología</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-primary">24/7</span>
              </div>
              <div className="font-semibold mb-1">Acceso Continuo</div>
              <div className="text-sm text-muted-foreground">
                Portal disponible las 24 horas, los 7 días de la semana
              </div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-accent">100%</span>
              </div>
              <div className="font-semibold mb-1">Transparencia</div>
              <div className="text-sm text-muted-foreground">
                Visibilidad total de todas las operaciones
              </div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">Real</span>
              </div>
              <div className="font-semibold mb-1">Tiempo Real</div>
              <div className="text-sm text-muted-foreground">
                Información actualizada al momento
              </div>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">Pro</span>
              </div>
              <div className="font-semibold mb-1">Profesional</div>
              <div className="text-sm text-muted-foreground">
                Estándares institucionales de gestión
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
