"use client"

import { useEffect, useRef } from "react"
import type { Property } from "@/lib/types"

interface PortfolioMapProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertySelect: (property: Property) => void
}

export function PortfolioMap({ properties, selectedProperty, onPropertySelect }: PortfolioMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple map visualization using CSS
    // In production, integrate with Google Maps or Mapbox
  }, [properties, selectedProperty])

  return (
    <div ref={mapRef} className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden border border-border">
      {/* Simplified US Map Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl mx-auto p-8">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

          {/* Property Markers */}
          {properties.map((property) => {
            // Simplified positioning based on state
            const positions: Record<string, { top: string; left: string }> = {
              TX: { top: "60%", left: "40%" },
              FL: { top: "70%", left: "75%" },
              AZ: { top: "55%", left: "20%" },
              GA: { top: "60%", left: "70%" },
              CA: { top: "40%", left: "10%" },
            }

            const position = positions[property.state] || { top: "50%", left: "50%" }
            const isSelected = selectedProperty?.id === property.id

            return (
              <button
                key={property.id}
                onClick={() => onPropertySelect(property)}
                className={`absolute w-8 h-8 rounded-full transition-all transform hover:scale-125 ${
                  isSelected ? "bg-accent ring-4 ring-accent/30 scale-125" : "bg-primary hover:bg-primary/80"
                }`}
                style={{
                  top: position.top,
                  left: position.left,
                  transform: "translate(-50%, -50%)",
                }}
                title={property.name}
              >
                <span className="sr-only">{property.name}</span>
              </button>
            )
          })}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="text-xs font-semibold mb-2">Ubicaciones</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span>{properties.length} propiedades</span>
            </div>
          </div>

          {/* Selected Property Info */}
          {selectedProperty && (
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
              <div className="font-semibold text-sm mb-1">{selectedProperty.name}</div>
              <div className="text-xs text-muted-foreground mb-2">
                {selectedProperty.city}, {selectedProperty.state}
              </div>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cap Rate:</span>
                  <span className="font-semibold">{selectedProperty.capRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ocupación:</span>
                  <span className="font-semibold">{selectedProperty.occupancy}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
