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

const riskColors: Record<string, { bg: string; text: string; border: string }> = {
  Core: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Core+": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Desarrollo: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  default: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
}

export function PropertyCard({ property, onRequestInfo }: PropertyCardProps) {
  const risk = riskColors[property.riskProfile] ?? riskColors.default

  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-border/60">
      {/* Premium header strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent/80 via-accent to-accent/60" />

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Badges row */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${risk.bg} ${risk.text} ${risk.border}`}
          >
            {property.riskProfile}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold border bg-muted text-muted-foreground border-border/60">
            {property.type}
          </span>
          <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 text-accent" />
            {property.city}, {property.state}
          </span>
        </div>

        <h3 className="font-bold text-lg text-foreground leading-tight mb-5">{property.name}</h3>

        {/* Key Metrics Chips */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="rounded-lg bg-accent/10 border border-accent/20 px-3 py-2.5">
            <div className="text-xs text-muted-foreground mb-0.5">Cap Rate</div>
            <div className="text-xl font-bold text-accent">{formatPercent(property.capRate)}</div>
          </div>
          <div className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2.5">
            <div className="text-xs text-muted-foreground mb-0.5">IRR Proyectado</div>
            <div className="text-xl font-bold text-primary">{formatPercent(property.irrNet)}</div>
          </div>
          <div className="rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2.5">
            <div className="text-xs text-muted-foreground mb-0.5">
              {property.riskProfile === "Desarrollo" ? "Estado" : "Ocupación"}
            </div>
            <div
              className={`text-xl font-bold ${
                property.riskProfile === "Desarrollo" ? "text-amber-600 text-base" : "text-emerald-600"
              }`}
            >
              {property.riskProfile === "Desarrollo"
                ? "En desarrollo"
                : formatPercent(property.occupancy, 0)}
            </div>
          </div>
          <div className="rounded-lg bg-muted border border-border/60 px-3 py-2.5">
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
