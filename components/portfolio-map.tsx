"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { MapPin, X } from "lucide-react"
import type { Property } from "@/lib/types"
import { formatCurrency } from "@/utils/performance-math"

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

// FIPS codes for states with MIR properties: CO=08, TX=48, FL=12, IL=17
const ACTIVE_STATES = ["08", "48", "12", "17"]

interface PortfolioMapProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertySelect: (property: Property) => void
}

export function PortfolioMap({ properties, selectedProperty, onPropertySelect }: PortfolioMapProps) {
  const [tooltipContent, setTooltipContent] = useState<Property | null>(null)

  const handleMarkerClick = (property: Property) => {
    if (selectedProperty?.id === property.id) {
      // Deselect if clicking the already-selected property
      onPropertySelect(property)
    } else {
      onPropertySelect(property)
    }
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-border/60 bg-primary/5"
      style={{ height: "500px" }}
    >
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1100 }}
        width={980}
        height={500}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isActive = ACTIVE_STATES.includes(geo.id)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isActive ? "hsl(222, 47%, 18%)" : "hsl(222, 47%, 13%)"}
                  stroke="hsl(222, 47%, 25%)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: isActive ? "hsl(222, 47%, 22%)" : "hsl(222, 47%, 16%)",
                      outline: "none",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              )
            })
          }
        </Geographies>

        {properties.map((property) => {
          const isSelected = selectedProperty?.id === property.id
          return (
            <Marker
              key={property.id}
              coordinates={[property.lng, property.lat]}
              onClick={() => handleMarkerClick(property)}
              onMouseEnter={() => setTooltipContent(property)}
              onMouseLeave={() => setTooltipContent(null)}
            >
              {/* Pulse ring */}
              <circle
                r={isSelected ? 20 : 14}
                fill="hsl(43, 96%, 56%, 0.2)"
                style={{
                  animation: "pulse-ring 2s ease-out infinite",
                  transformOrigin: "center",
                }}
              />
              {/* Main dot */}
              <circle
                r={isSelected ? 10 : 7}
                fill="hsl(43, 96%, 56%)"
                stroke="white"
                strokeWidth={2}
                style={{
                  cursor: "pointer",
                  transition: "r 0.2s ease",
                }}
              />
              {isSelected && <circle r={4} fill="white" />}
            </Marker>
          )
        })}
      </ComposableMap>

      {/* Hover Tooltip — only when nothing is selected */}
      {tooltipContent && !selectedProperty && (
        <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-border/60 max-w-[220px] pointer-events-none">
          <div className="font-semibold text-sm mb-1 text-foreground">{tooltipContent.name}</div>
          <div className="text-xs text-muted-foreground mb-2">
            {tooltipContent.city}, {tooltipContent.state}
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Cap Rate</span>
              <span className="font-bold text-accent">{tooltipContent.capRate}%</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Ocupación</span>
              <span className="font-bold text-green-600">{tooltipContent.occupancy}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Selected property panel */}
      {selectedProperty && (
        <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-accent/30 max-w-[240px]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="font-bold text-sm text-foreground leading-tight">
                {selectedProperty.name}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <MapPin className="h-3 w-3" />
                {selectedProperty.city}, {selectedProperty.state}
              </div>
            </div>
            <button
              onClick={() => onPropertySelect(selectedProperty)}
              className="text-muted-foreground hover:text-foreground transition-colors ml-2"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {[
              { label: "Cap Rate", value: `${selectedProperty.capRate}%`, color: "text-accent" },
              { label: "IRR Proyectado", value: `${selectedProperty.irrNet}%`, color: "text-primary" },
              {
                label: selectedProperty.riskProfile === "Desarrollo" ? "Estado" : "Ocupación",
                value: selectedProperty.riskProfile === "Desarrollo" ? "En desarrollo" : `${selectedProperty.occupancy}%`,
                color: selectedProperty.riskProfile === "Desarrollo" ? "text-amber-600" : "text-green-600",
              },
              {
                label: "Inversión Mínima",
                value: formatCurrency(selectedProperty.minInvestment),
                color: "text-foreground",
              },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="flex justify-between items-center py-1 border-b border-border/40 last:border-0"
              >
                <span className="text-muted-foreground">{label}</span>
                <span className={`font-bold ${color}`}>{value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full mt-4 py-2 text-xs font-semibold tracking-wide uppercase bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors duration-200"
          >
            Solicitar Info →
          </button>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
        <div className="text-xs font-semibold text-foreground mb-1.5">Portafolio MIR</div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span>{properties.length} propiedades activas</span>
        </div>
      </div>
    </div>
  )
}
