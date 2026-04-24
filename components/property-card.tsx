"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, TrendingUp, Calendar, Shield } from "lucide-react"
import type { Property } from "@/lib/types"
import { formatCurrency, formatPercent, getRiskColor } from "@/utils/performance-math"

interface PropertyCardProps {
  property: Property
  onRequestInfo: (property: Property) => void
}

export function PropertyCard({ property, onRequestInfo }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group border-border/70 hover:border-accent/30">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <Badge className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-xs">
          {property.type}
        </Badge>
        <Badge
          className={`absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs font-semibold ${getRiskColor(property.riskProfile)}`}
        >
          {property.riskProfile}
        </Badge>

        {/* Location pill on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
          <MapPin className="h-3 w-3 text-white/80" />
          <span className="text-xs text-white font-medium">
            {property.city}, {property.state}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3 pt-4">
        <h3 className="text-lg font-bold text-foreground leading-tight">{property.name}</h3>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-lg p-3 bg-accent/8 border border-accent/15">
            <div className="text-xs text-muted-foreground mb-1">Cap Rate</div>
            <div className="text-xl font-bold text-accent">{formatPercent(property.capRate)}</div>
          </div>
          <div className="rounded-lg p-3 bg-primary/5 border border-primary/10">
            <div className="text-xs text-muted-foreground mb-1">IRR Neto</div>
            <div className="text-xl font-bold text-primary">{formatPercent(property.irrNet)}</div>
          </div>
          <div className="rounded-lg p-3 bg-green-50 border border-green-100">
            <div className="text-xs text-muted-foreground mb-1">Ocupación</div>
            <div className="text-xl font-bold text-green-700">{formatPercent(property.occupancy, 0)}</div>
          </div>
          <div className="rounded-lg p-3 bg-muted/60 border border-border/60">
            <div className="text-xs text-muted-foreground mb-1">WALE</div>
            <div className="text-xl font-bold text-foreground">{property.wale} años</div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="space-y-2 text-sm pt-1">
          {[
            { icon: Building2, label: "Contrato", value: property.leaseType },
            { icon: Calendar, label: "Duración", value: `${property.leaseDuration} años` },
            { icon: Shield, label: "DSCR", value: `${property.dscr.toFixed(2)}x` },
            { icon: TrendingUp, label: "LTV", value: formatPercent(property.ltv, 0) },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
              <span className="font-semibold text-xs">{value}</span>
            </div>
          ))}
        </div>

        {/* Investment Amount */}
        <div className="pt-3 border-t border-border/50">
          <div className="text-xs text-muted-foreground mb-0.5">Inversión Mínima</div>
          <div className="text-2xl font-bold text-primary">{formatCurrency(property.minInvestment)}</div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={() => onRequestInfo(property)}
          className="w-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          size="lg"
        >
          Solicitar Ficha Técnica
        </Button>
      </CardFooter>
    </Card>
  )
}
