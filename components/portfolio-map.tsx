"use client"

import { useEffect, useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { MapPin, X } from "lucide-react"
import type { Property } from "@/lib/types"
import { formatCurrency } from "@/utils/performance-math"

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

// FIPS codes for all states with MIR properties (active + past)
const ACTIVE_STATES = ["08", "48", "12", "17"]
const SOLD_STATES = ["02", "04", "18", "26", "25", "09", "47", "28"]

// Map palette — tuned for a navy surface so states, borders and markers stay legible
const COLORS = {
  stateBase: "hsl(222, 32%, 19%)",
  stateBaseHover: "hsl(222, 32%, 23%)",
  stateBaseStroke: "hsl(222, 28%, 30%)",
  stateSold: "hsl(220, 30%, 27%)",
  stateSoldHover: "hsl(220, 30%, 31%)",
  stateSoldStroke: "hsl(220, 25%, 40%)",
  stateActive: "hsl(38, 32%, 25%)",
  stateActiveHover: "hsl(38, 36%, 30%)",
  stateActiveStroke: "hsl(41, 58%, 62%)",
  gold: "hsl(41, 58%, 62%)",
  soldMarker: "hsl(215, 30%, 72%)",
  navy: "hsl(224, 50%, 9%)",
}

interface PortfolioMapProps {
  properties: Property[]
  selectedProperty: Property | null
  onPropertySelect: (property: Property) => void
}

export function PortfolioMap({ properties, selectedProperty, onPropertySelect }: PortfolioMapProps) {
  const [tooltipContent, setTooltipContent] = useState<Property | null>(null)
  // The projection math produces slightly different floats on server vs. browser,
  // which causes a hydration mismatch. Render markers only after mount.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const activeProperties = properties.filter((p) => p.status !== "sold")
  const soldProperties = properties.filter((p) => p.status === "sold")

  const handleMarkerClick = (property: Property) => {
    if (property.status === "sold") return
    onPropertySelect(property)
  }

  return (
    <div className="surface-dark relative w-full rounded-2xl overflow-hidden border border-primary/20 bg-primary shadow-xl">
      {/* Subtle radial glow for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(222 40% 22% / 0.9) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative aspect-[980/560] w-full min-h-[280px]">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1050 }}
          width={980}
          height={560}
          style={{ width: "100%", height: "100%" }}
          aria-label="Mapa del portafolio MIR en Estados Unidos"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; id: string }> }) =>
              geographies.map((geo) => {
                const isActive = ACTIVE_STATES.includes(geo.id)
                const isSold = SOLD_STATES.includes(geo.id)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isActive ? COLORS.stateActive : isSold ? COLORS.stateSold : COLORS.stateBase}
                    stroke={
                      isActive
                        ? COLORS.stateActiveStroke
                        : isSold
                          ? COLORS.stateSoldStroke
                          : COLORS.stateBaseStroke
                    }
                    strokeWidth={isActive ? 1 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isActive
                          ? COLORS.stateActiveHover
                          : isSold
                            ? COLORS.stateSoldHover
                            : COLORS.stateBaseHover,
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Sold / past properties — muted markers */}
          {mounted &&
            soldProperties.map((property) => (
              <Marker
                key={property.id}
                coordinates={[property.lng, property.lat]}
                onMouseEnter={() => setTooltipContent(property)}
                onMouseLeave={() => setTooltipContent(null)}
              >
                <circle r={5} fill={COLORS.soldMarker} stroke={COLORS.navy} strokeWidth={1.5} />
              </Marker>
            ))}

          {/* Active properties — gold pulsing markers */}
          {mounted &&
            activeProperties.map((property) => {
              const isSelected = selectedProperty?.id === property.id
              return (
                <Marker
                  key={property.id}
                  coordinates={[property.lng, property.lat]}
                  onClick={() => handleMarkerClick(property)}
                  onMouseEnter={() => setTooltipContent(property)}
                  onMouseLeave={() => setTooltipContent(null)}
                >
                  <circle
                    r={isSelected ? 12 : 8}
                    fill={COLORS.gold}
                    fillOpacity={0.35}
                    style={{
                      animation: "pulse-ring 2s ease-out infinite",
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                  />
                  <circle
                    r={isSelected ? 10 : 7}
                    fill={COLORS.gold}
                    stroke={COLORS.navy}
                    strokeWidth={2}
                    style={{ cursor: "pointer", transition: "r 0.2s ease" }}
                  />
                  {isSelected && <circle r={3.5} fill={COLORS.navy} />}
                </Marker>
              )
            })}
        </ComposableMap>

        {/* Hover tooltip */}
        {tooltipContent && !selectedProperty && (
          <div className="absolute top-4 right-4 bg-background rounded-xl px-4 py-3 shadow-2xl border border-border max-w-[260px] pointer-events-none">
            <div className="flex items-center gap-2 mb-1">
              <div className="font-semibold text-sm text-foreground">{tooltipContent.name}</div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <span>
                {tooltipContent.city}, {tooltipContent.state}
              </span>
              {tooltipContent.status === "sold" && (
                <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-muted text-foreground/70 uppercase">
                  Cerrada
                </span>
              )}
            </div>
            {tooltipContent.status === "sold" ? (
              <div className="text-xs text-foreground/70 border-t border-border pt-2 leading-relaxed">
                Propiedad cerrada. Si eres socio y te interesa vender tu participación, contáctanos.
              </div>
            ) : (
              <div className="space-y-1 text-xs border-t border-border pt-2">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Cap Rate</span>
                  <span className="font-bold text-accent-ink">{tooltipContent.capRate}%</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Ocupación</span>
                  <span className="font-bold text-green-700">{tooltipContent.occupancy}%</span>
                </div>
                <div className="pt-1 text-[11px] text-muted-foreground">Clic para ver detalle</div>
              </div>
            )}
          </div>
        )}

        {/* Selected property panel */}
        {selectedProperty && (
          <div className="absolute top-4 right-4 bg-background rounded-xl p-5 shadow-2xl border border-accent/40 w-[260px] max-w-[calc(100%-2rem)]">
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
                { label: "Cap Rate", value: `${selectedProperty.capRate}%`, color: "text-accent-ink" },
                { label: "IRR Proyectado", value: `${selectedProperty.irrNet}%`, color: "text-primary" },
                {
                  label: selectedProperty.riskProfile === "Desarrollo" ? "Estado" : "Ocupación",
                  value:
                    selectedProperty.riskProfile === "Desarrollo"
                      ? "En desarrollo"
                      : `${selectedProperty.occupancy}%`,
                  color:
                    selectedProperty.riskProfile === "Desarrollo" ? "text-amber-700" : "text-green-700",
                },
                {
                  label: "Inversión Mínima",
                  value: formatCurrency(selectedProperty.minInvestment),
                  color: "text-foreground",
                },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-1 border-b border-border/60 last:border-0"
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className={`font-bold ${color}`}>{value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full mt-4 py-2 text-xs font-semibold tracking-wide uppercase btn-gold text-accent-foreground rounded-lg transition-colors duration-200"
            >
              Solicitar Info →
            </button>
          </div>
        )}
      </div>

      {/* Legend — sits below the map so it never covers states */}
      <div className="relative flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 px-5 py-4 text-sm">
        <span className="font-semibold text-white">Portafolio MIR</span>
        <span className="flex items-center gap-2 text-white/85">
          <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: COLORS.gold }} />
          {activeProperties.length} propiedades activas
        </span>
        <span className="flex items-center gap-2 text-white/85">
          <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: COLORS.soldMarker }} />
          {soldProperties.length} propiedades cerradas
        </span>
        <span className="text-xs text-white/60 sm:ml-auto">
          Cerradas: sold out. ¿Eres socio y quieres vender? Contáctanos.
        </span>
      </div>
    </div>
  )
}
