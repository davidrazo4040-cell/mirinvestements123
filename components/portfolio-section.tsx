"use client"

import { useState, useMemo } from "react"
import { PropertyCard } from "./property-card"
import { PortfolioFilters } from "./portfolio-filters"
import { PortfolioMap } from "./portfolio-map"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { LayoutGrid, MapPin } from "lucide-react"
import type { Property, FilterState } from "@/lib/types"
import propertiesData from "@/data/properties.json"

const initialFilters: FilterState = {
  type: [],
  state: [],
  minCapRate: 0,
  maxCapRate: 15,
  minInvestment: 200000,
  maxInvestment: 10000000,
  riskProfile: [],
  leaseType: [],
  minOccupancy: 0,
}

export function PortfolioSection() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [sortBy, setSortBy] = useState<"capRate" | "irrNet" | "occupancy">("capRate")

  const properties = propertiesData as Property[]

  const filteredProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      if (filters.type.length > 0 && !filters.type.includes(property.type)) return false
      if (filters.state.length > 0 && !filters.state.includes(property.state)) return false
      if (property.capRate < filters.minCapRate || property.capRate > filters.maxCapRate) return false
      if (
        property.minInvestment < filters.minInvestment ||
        property.minInvestment > filters.maxInvestment
      )
        return false
      if (filters.riskProfile.length > 0 && !filters.riskProfile.includes(property.riskProfile))
        return false
      if (filters.leaseType.length > 0 && !filters.leaseType.includes(property.leaseType))
        return false
      if (property.occupancy < filters.minOccupancy) return false
      return true
    })

    filtered.sort((a, b) => {
      if (sortBy === "capRate") return b.capRate - a.capRate
      if (sortBy === "irrNet") return b.irrNet - a.irrNet
      if (sortBy === "occupancy") return b.occupancy - a.occupancy
      return 0
    })

    return filtered
  }, [properties, filters, sortBy])

  const handleRequestInfo = (property: Property) => {
    setSelectedProperty(property)
    const element = document.getElementById("contacto")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const handleMapPropertySelect = (property: Property) => {
    setSelectedProperty((prev) => (prev?.id === property.id ? null : property))
  }

  const sortOptions: { key: "capRate" | "irrNet" | "occupancy"; label: string }[] = [
    { key: "capRate", label: "Cap Rate" },
    { key: "irrNet", label: "IRR Neto" },
    { key: "occupancy", label: "Ocupación" },
  ]

  return (
    <section id="portafolio" className="py-24 bg-background border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">
            Portafolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestras <span className="text-accent">Propiedades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Propiedades comerciales AAA cuidadosamente seleccionadas en mercados estratégicos de
            Estados Unidos
          </p>
        </div>

        {/* Interactive Map — all properties, always visible */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            Distribución Geográfica
          </h3>
          <PortfolioMap
            properties={properties}
            selectedProperty={selectedProperty}
            onPropertySelect={handleMapPropertySelect}
          />
        </div>

        {/* Tabs + Filters */}
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-8 border-b border-border/60 pb-6">
            <TabsList className="bg-muted/50 border border-border/60 h-auto p-1 rounded-lg">
              <TabsTrigger
                value="grid"
                className="flex items-center gap-2 px-5 py-2 text-xs tracking-wide rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Lista
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground tracking-wide mr-2">Ordenar por</span>
              {sortOptions.map(({ key, label }) => (
                <Button
                  key={key}
                  variant={sortBy === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy(key)}
                  className="text-xs h-8 px-3"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-10">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <PortfolioFilters
                filters={filters}
                onFilterChange={setFilters}
                onReset={() => setFilters(initialFilters)}
              />
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <TabsContent value="grid" className="mt-0">
                {filteredProperties.length === 0 ? (
                  <div className="py-16 rounded-xl border border-dashed border-border text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                      No se encontraron propiedades con los filtros seleccionados.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFilters(initialFilters)}
                    >
                      Limpiar Filtros
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-xs text-muted-foreground mb-6 tracking-wide">
                      Mostrando {filteredProperties.length} de {properties.length} propiedades
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {filteredProperties.map((property) => (
                        <PropertyCard
                          key={property.id}
                          property={property}
                          onRequestInfo={handleRequestInfo}
                        />
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
