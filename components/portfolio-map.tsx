"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import type { Property } from "@/lib/types"
import { formatCurrency } from "@/utils/performance-math"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

interface PortfolioMapProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertySelect: (property: Property) => void
}

export function PortfolioMap({ properties, selectedProperty, onPropertySelect }: PortfolioMapProps) {
  return (
    <div className="relative w-full h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000,
        }}
        className="w-full h-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(var(--muted))"
                stroke="hsl(var(--border))"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "hsl(var(--muted-foreground)/0.2)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Property Markers */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            coordinates={[property.lng, property.lat]}
            onClick={() => onPropertySelect(property)}
          >
            <circle
              r={selectedProperty?.id === property.id ? 12 : 8}
              fill={selectedProperty?.id === property.id ? "hsl(var(--accent))" : "hsl(var(--primary))"}
              stroke="white"
              strokeWidth={2}
              className="cursor-pointer transition-all hover:r-12"
              style={{
                filter: selectedProperty?.id === property.id ? "drop-shadow(0 0 8px hsl(var(--accent)))" : "none",
              }}
            />
            {selectedProperty?.id === property.id && (
              <text
                textAnchor="middle"
                y={-20}
                className="text-xs font-semibold fill-foreground"
              >
                {property.city}
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>

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
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Cap Rate:</span>
              <span className="font-semibold">{selectedProperty.capRate}%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Ocupación:</span>
              <span className="font-semibold">{selectedProperty.occupancy}%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Valor:</span>
              <span className="font-semibold">{formatCurrency(selectedProperty.totalValue)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Inv. Mín:</span>
              <span className="font-semibold">{formatCurrency(selectedProperty.minInvestment)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
