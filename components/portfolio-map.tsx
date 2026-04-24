"use client"

import { useEffect, useRef } from "react"
import type { Property } from "@/lib/types"

interface PortfolioMapProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertySelect: (property: Property) => void
}

const PROPERTY_POSITIONS: Record<string, { top: string; left: string }> = {
  "prop-001": { top: "67%", left: "36%" },  // Austin, TX
  "prop-002": { top: "77%", left: "74%" },  // Miami, FL
  "prop-003": { top: "61%", left: "43%" },  // Dallas, TX
  "prop-004": { top: "57%", left: "17%" },  // Phoenix, AZ
  "prop-005": { top: "64%", left: "67%" },  // Atlanta, GA
  "prop-006": { top: "44%", left: "7%" },   // San Jose, CA
}

const STATE_LABELS = [
  { label: "CA", top: "44%", left: "9%" },
  { label: "AZ", top: "57%", left: "19%" },
  { label: "TX", top: "65%", left: "42%" },
  { label: "GA", top: "63%", left: "70%" },
  { label: "FL", top: "76%", left: "76%" },
]

export function PortfolioMap({ properties, selectedProperty, onPropertySelect }: PortfolioMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {}, [properties, selectedProperty])

  return (
    <div ref={mapRef} className="relative w-full h-[420px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl overflow-hidden border border-border/60">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(222 47% 11%) 1px, transparent 1px), linear-gradient(90deg, hsl(222 47% 11%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 p-6">
        {/* State labels */}
        {STATE_LABELS.map((s) => (
          <div
            key={s.label}
            className="absolute text-xs font-bold text-muted-foreground/40 select-none"
            style={{ top: s.top, left: s.left }}
          >
            {s.label}
          </div>
        ))}

        {/* Property markers */}
        {properties.map((property) => {
          const position = PROPERTY_POSITIONS[property.id] ?? { top: "50%", left: "50%" }
          const isSelected = selectedProperty?.id === property.id

          return (
            <button
              key={property.id}
              onClick={() => onPropertySelect(property)}
              className={`absolute flex items-center justify-center transition-all duration-200 ${
                isSelected
                  ? "w-9 h-9 bg-accent ring-4 ring-accent/30 scale-125 shadow-lg shadow-accent/30"
                  : "w-7 h-7 bg-primary hover:bg-accent hover:scale-125 hover:shadow-md"
              } rounded-full`}
              style={{
                top: position.top,
                left: position.left,
                transform: `translate(-50%, -50%) ${isSelected ? "scale(1.25)" : ""}`,
              }}
              title={property.name}
              aria-label={property.name}
            >
              <span className="w-2 h-2 rounded-full bg-white/80" />
            </button>
          )
        })}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-border/50">
          <div className="text-xs font-semibold text-foreground mb-1.5">Propiedades</div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span>{properties.length} activos</span>
          </div>
        </div>

        {/* Selected info panel */}
        {selectedProperty && (
          <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-border/60 max-w-[200px]">
            <div className="font-semibold text-sm mb-0.5 leading-tight">{selectedProperty.name}</div>
            <div className="text-xs text-muted-foreground mb-2">
              {selectedProperty.city}, {selectedProperty.state}
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Cap Rate</span>
                <span className="font-bold text-accent">{selectedProperty.capRate}%</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">Ocupación</span>
                <span className="font-bold text-green-600">{selectedProperty.occupancy}%</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-muted-foreground">IRR Neto</span>
                <span className="font-bold text-primary">{selectedProperty.irrNet}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
