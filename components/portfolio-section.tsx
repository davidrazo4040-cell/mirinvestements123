"use client"

import { useState, useMemo } from "react"
import { PropertyCard } from "./property-card"
import { PortfolioFilters } from "./portfolio-filters"
import { PortfolioMap } from "./portfolio-map"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutGrid, Map } from "lucide-react"
import type { Property, FilterState } from "@/lib/types"
import propertiesData from "@/data/properties.json"

const initialFilters: FilterState = {
  type: [],
  state: [],
  minCapRate: 0,
  maxCapRate: 15,
  minInvestment: 200000,
  maxInvestment: 1000000,
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

    // Sort
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="portafolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portafolio de Propiedades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Propiedades comerciales AAA cuidadosamente seleccionadas en mercados estratégicos de Estados Unidos
          </p>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="grid" className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                Lista
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                Mapa
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Ordenar por:</span>
              <Button
                variant={sortBy === "capRate" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("capRate")}
              >
                Cap Rate
              </Button>
              <Button
                variant={sortBy === "irrNet" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("irrNet")}
              >
                IRR Neto
              </Button>
              <Button
                variant={sortBy === "occupancy" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("occupancy")}
              >
                Ocupación
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
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
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No se encontraron propiedades con los filtros seleccionados.
                    </p>
                    <Button onClick={() => setFilters(initialFilters)} variant="outline" className="mt-4">
                      Limpiar Filtros
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-sm text-muted-foreground mb-4">
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
                    <div className="text-center py-8 text-muted-foreground">
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
