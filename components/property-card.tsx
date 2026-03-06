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
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm">{property.type}</Badge>
        <Badge
          className={`absolute top-3 left-3 ${getRiskColor(property.riskProfile)} bg-background/90 backdrop-blur-sm`}
        >
          {property.riskProfile}
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-foreground mb-2">{property.name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>
            {property.city}, {property.state}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">Cap Rate</div>
            <div className="text-lg font-bold text-primary">{formatPercent(property.capRate)}</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">IRR Neto</div>
            <div className="text-lg font-bold text-accent">{formatPercent(property.irrNet)}</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">Ocupación</div>
            <div className="text-lg font-bold text-green-600">{formatPercent(property.occupancy, 0)}</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">WALE</div>
            <div className="text-lg font-bold text-foreground">{property.wale} años</div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Tipo de Contrato
            </span>
            <span className="font-semibold">{property.leaseType}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Duración
            </span>
            <span className="font-semibold">{property.leaseDuration} años</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-2">
              <Shield className="h-4 w-4" />
              DSCR
            </span>
            <span className="font-semibold">{property.dscr.toFixed(2)}x</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              LTV
            </span>
            <span className="font-semibold">{formatPercent(property.ltv, 0)}</span>
          </div>
        </div>

        {/* Investment Amount */}
        <div className="pt-3 border-t border-border space-y-2">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Inversión Mínima</div>
            <div className="text-2xl font-bold text-primary">{formatCurrency(property.minInvestment)}</div>
          </div>
          {property.noi && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">NOI Anual:</span>
              <span className="font-semibold">{formatCurrency(property.noi)}</span>
            </div>
          )}
          {property.allocationLimit && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Límite de Inversión:</span>
              <span className="font-semibold">{formatCurrency(property.allocationLimit)} ({property.allocationPercent}%)</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button onClick={() => onRequestInfo(property)} className="w-full" size="lg">
          Solicitar Ficha Técnica
        </Button>
      </CardFooter>
    </Card>
  )
}
