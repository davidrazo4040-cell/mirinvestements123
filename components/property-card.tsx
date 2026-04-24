"use client"

import Image from "next/image"
import { MapPin, Building2, Calendar, Shield, TrendingUp } from "lucide-react"
import type { Property } from "@/lib/types"
import { formatCurrency, formatPercent } from "@/utils/performance-math"

interface PropertyCardProps {
  property: Property
  onRequestInfo: (property: Property) => void
}

export function PropertyCard({ property, onRequestInfo }: PropertyCardProps) {
  return (
    <div className="border border-foreground/12 hover:border-foreground/25 transition-colors duration-300 h-full flex flex-col group bg-background">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-3 right-3 bg-background/90 px-2 py-0.5">
          <span className="text-xs font-medium text-foreground">{property.type}</span>
        </div>
        <div className="absolute top-3 left-3 bg-background/90 px-2 py-0.5">
          <span className="text-xs font-medium text-foreground">{property.riskProfile}</span>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-white/80" />
          <span className="text-xs text-white font-medium">{property.city}, {property.state}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-light text-foreground leading-tight mb-5">{property.name}</h3>

        {/* Key Metrics — hairline separated */}
        <div className="grid grid-cols-2 border-t border-l border-foreground/10 mb-5">
          {[
            { label: "Cap Rate", value: formatPercent(property.capRate), highlight: true },
            { label: "IRR Neto", value: formatPercent(property.irrNet), highlight: false },
            { label: "Ocupación", value: formatPercent(property.occupancy, 0), highlight: false },
            { label: "WALE", value: `${property.wale} años`, highlight: false },
          ].map(({ label, value, highlight }) => (
            <div key={label} className="border-b border-r border-foreground/10 p-3">
              <div className="text-xs text-muted-foreground mb-1">{label}</div>
              <div className={`text-lg font-light ${highlight ? "text-accent" : "text-foreground"}`}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Details */}
        <div className="space-y-2 text-xs mb-5 flex-1">
          {[
            { icon: Building2, label: "Contrato", value: property.leaseType },
            { icon: Calendar, label: "Duración", value: `${property.leaseDuration} años` },
            { icon: Shield, label: "DSCR", value: `${property.dscr.toFixed(2)}x` },
            { icon: TrendingUp, label: "LTV", value: formatPercent(property.ltv, 0) },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between py-1 border-b border-foreground/6 last:border-0">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Icon className="h-3 w-3" />
                {label}
              </span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>

        {/* Investment Amount + CTA */}
        <div className="border-t border-foreground/10 pt-5 flex items-end justify-between">
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">Inversión Mínima</div>
            <div className="font-serif text-2xl font-light text-foreground">{formatCurrency(property.minInvestment)}</div>
          </div>
          <button
            onClick={() => onRequestInfo(property)}
            className="text-xs tracking-[0.15em] uppercase border-b border-foreground/40 pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            Ficha Técnica →
          </button>
        </div>
      </div>
    </div>
  )
}
