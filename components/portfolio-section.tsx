"use client"

import { useState, useMemo } from "react"
import { PropertyCard } from "./property-card"
import { PortfolioFilters } from "./portfolio-filters"
import { PortfolioMap } from "./portfolio-map"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutGrid, Map } from "lucide-react"
import type { Property, FilterState } from "@/lib/types"
import propertiesData from "@/data/properties.json"

const initialFilters: FilterState = {
  type: [],
  state: [],
  minCapRate: 0,
  maxCapRate: 15,
  minInvestment: 100000,
  maxInvestment: 500000,
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
      if (property.minInvestment < filters.minInvestment || property.minInvestment > filters.maxInvestment) return false
      if (filters.riskProfile.length > 0 && !filters.riskProfile.includes(property.riskProfile)) return false
      if (filters.leaseType.length > 0 && !filters.leaseType.includes(property.leaseType)) return false
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

  const sortOptions: { key: "capRate" | "irrNet" | "occupancy"; label: string }[] = [
    { key: "capRate", label: "Cap Rate" },
    { key: "irrNet", label: "IRR Neto" },
    { key: "occupancy", label: "Ocupación" },
  ]

  return (
    <section id="portafolio" className="py-24 bg-background border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Portafolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Propiedades <em className="italic">disponibles</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Propiedades comerciales AAA cuidadosamente seleccionadas en mercados estratégicos de Estados Unidos
          </p>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-8 border-b border-foreground/10 pb-6">
            <TabsList className="bg-transparent border border-foreground/15 h-auto p-0">
              <TabsTrigger
                value="grid"
                className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-wide rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Lista
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-wide rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                <Map className="h-3.5 w-3.5" />
                Mapa
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground tracking-wide">Ordenar por</span>
              {sortOptions.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setSortBy(key)}
                  className={`text-xs tracking-wide pb-0.5 transition-colors duration-200 ${
                    sortBy === key
                      ? "border-b border-foreground text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
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
                  <div className="py-16 border border-foreground/10 text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                      No se encontraron propiedades con los filtros seleccionados.
                    </p>
                    <button
                      onClick={() => setFilters(initialFilters)}
                      className="text-xs tracking-[0.2em] uppercase border-b border-foreground/40 pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
                    >
                      Limpiar Filtros
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-xs text-muted-foreground mb-6 tracking-wide">
                      Mostrando {filteredProperties.length} de {properties.length} propiedades
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} onRequestInfo={handleRequestInfo} />
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="map" className="mt-0">
                <PortfolioMap
                  properties={filteredProperties}
                  selectedProperty={selectedProperty}
                  onPropertySelect={setSelectedProperty}
                />
                <div className="mt-6">
                  {selectedProperty ? (
                    <PropertyCard property={selectedProperty} onRequestInfo={handleRequestInfo} />
                  ) : (
                    <div className="py-8 text-center text-sm text-muted-foreground">
                      Selecciona una propiedad en el mapa para ver sus detalles
                    </div>
                  )}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
