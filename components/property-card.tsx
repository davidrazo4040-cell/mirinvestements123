"use client"

import { MapPin, Building2, Calendar, Shield, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/types"
import { formatCurrency, formatPercent } from "@/utils/performance-math"

interface PropertyCardProps {
  property: Property
  onRequestInfo: (property: Property) => void
}

export function PropertyCard({ property, onRequestInfo }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-border/60">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-muted flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Type & Risk badges */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-background/90 text-foreground backdrop-blur-sm">
            {property.type}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
              property.riskProfile === "Core"
                ? "bg-green-500/90 text-white"
                : property.riskProfile === "Core+"
                ? "bg-blue-500/90 text-white"
                : property.riskProfile === "Desarrollo"
                ? "bg-purple-500/90 text-white"
                : "bg-amber-500/90 text-white"
            }`}
          >
            {property.riskProfile}
          </span>
        </div>

        {/* Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-white/90" />
          <span className="text-xs text-white font-medium">
            {property.city}, {property.state}
          </span>
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-foreground leading-tight mb-5">{property.name}</h3>

        {/* Key Metrics Chips */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="rounded-lg bg-accent/10 border border-accent/20 px-3 py-2">
            <div className="text-xs text-muted-foreground mb-0.5">Cap Rate</div>
            <div className="text-lg font-bold text-accent">{formatPercent(property.capRate)}</div>
          </div>
          <div className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2">
            <div className="text-xs text-muted-foreground mb-0.5">IRR Proyectado</div>
            <div className="text-lg font-bold text-primary">{formatPercent(property.irrNet)}</div>
          </div>
          <div className="rounded-lg bg-green-50 border border-green-100 px-3 py-2">
            <div className="text-xs text-muted-foreground mb-0.5">
              {property.riskProfile === "Desarrollo" ? "Estado" : "Ocupación"}
            </div>
            <div className={`text-lg font-bold ${property.riskProfile === "Desarrollo" ? "text-amber-600 text-base" : "text-green-600"}`}>
              {property.riskProfile === "Desarrollo" ? "En desarrollo" : formatPercent(property.occupancy, 0)}
            </div>
          </div>
          <div className="rounded-lg bg-muted border border-border/60 px-3 py-2">
            <div className="text-xs text-muted-foreground mb-0.5">
              {property.riskProfile === "Desarrollo" ? "Entrega" : "WALE"}
            </div>
            <div className="text-base font-bold text-foreground">
              {property.riskProfile === "Desarrollo" ? "2028–29" : `${property.wale} años`}
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="space-y-2 text-xs mb-5 flex-1">
          {[
            { icon: Building2, label: "Contrato", value: property.leaseType },
            { icon: Calendar, label: "Duración", value: `${property.leaseDuration} años` },
            { icon: Shield, label: "DSCR", value: `${property.dscr.toFixed(2)}x` },
            { icon: TrendingUp, label: "LTV", value: formatPercent(property.ltv, 0) },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between py-1.5 border-b border-border/40 last:border-0"
            >
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Icon className="h-3 w-3" />
                {label}
              </span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>

        {/* Investment Amount + CTA */}
        <div className="border-t border-border/60 pt-5 flex items-end justify-between">
          <div>
            <div className="text-xs text-muted-foreground mb-0.5">Inversión Mínima</div>
            <div className="text-2xl font-bold text-foreground">
              {formatCurrency(property.minInvestment)}
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => onRequestInfo(property)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Ficha Técnica →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
