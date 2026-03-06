"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FilterState } from "@/lib/types"
import { formatCurrency } from "@/utils/performance-math"

interface PortfolioFiltersProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onReset: () => void
}

export function PortfolioFilters({ filters, onFilterChange, onReset }: PortfolioFiltersProps) {
  const propertyTypes = ["Oficinas", "Retail", "Multifamiliar", "Data Center"]
  const states = ["TX", "FL", "CO", "IL"]
  const riskProfiles = ["Core", "Core+", "Value-Add"]
  const leaseTypes = ["NNN", "Build-to-Rent"]

  const handleTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked ? [...filters.type, type] : filters.type.filter((t) => t !== type)
    onFilterChange({ ...filters, type: newTypes })
  }

  const handleStateChange = (state: string, checked: boolean) => {
    const newStates = checked ? [...filters.state, state] : filters.state.filter((s) => s !== state)
    onFilterChange({ ...filters, state: newStates })
  }

  const handleRiskChange = (risk: string, checked: boolean) => {
    const newRisks = checked ? [...filters.riskProfile, risk] : filters.riskProfile.filter((r) => r !== risk)
    onFilterChange({ ...filters, riskProfile: newRisks })
  }

  const handleLeaseTypeChange = (lease: string, checked: boolean) => {
    const newLeases = checked ? [...filters.leaseType, lease] : filters.leaseType.filter((l) => l !== lease)
    onFilterChange({ ...filters, leaseType: newLeases })
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filtros</CardTitle>
          <Button variant="ghost" size="sm" onClick={onReset}>
            Limpiar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Property Type */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Tipo de Propiedad</Label>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={filters.type.includes(type)}
                  onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
                />
                <label
                  htmlFor={`type-${type}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* State */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Estado</Label>
          <div className="space-y-2">
            {states.map((state) => (
              <div key={state} className="flex items-center space-x-2">
                <Checkbox
                  id={`state-${state}`}
                  checked={filters.state.includes(state)}
                  onCheckedChange={(checked) => handleStateChange(state, checked as boolean)}
                />
                <label
                  htmlFor={`state-${state}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {state}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Cap Rate Range */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Cap Rate: {filters.minCapRate}% - {filters.maxCapRate}%
          </Label>
          <Slider
            min={0}
            max={15}
            step={0.5}
            value={[filters.minCapRate, filters.maxCapRate]}
            onValueChange={([min, max]) => onFilterChange({ ...filters, minCapRate: min, maxCapRate: max })}
            className="mt-2"
          />
        </div>

        {/* Investment Range */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Inversión: {formatCurrency(filters.minInvestment)} - {formatCurrency(filters.maxInvestment)}
          </Label>
          <Slider
            min={200000}
            max={1000000}
            step={50000}
            value={[filters.minInvestment, filters.maxInvestment]}
            onValueChange={([min, max]) => onFilterChange({ ...filters, minInvestment: min, maxInvestment: max })}
            className="mt-2"
          />
        </div>

        {/* Risk Profile */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Perfil de Riesgo</Label>
          <div className="space-y-2">
            {riskProfiles.map((risk) => (
              <div key={risk} className="flex items-center space-x-2">
                <Checkbox
                  id={`risk-${risk}`}
                  checked={filters.riskProfile.includes(risk)}
                  onCheckedChange={(checked) => handleRiskChange(risk, checked as boolean)}
                />
                <label
                  htmlFor={`risk-${risk}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {risk}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Lease Type */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Tipo de Contrato</Label>
          <div className="space-y-2">
            {leaseTypes.map((lease) => (
              <div key={lease} className="flex items-center space-x-2">
                <Checkbox
                  id={`lease-${lease}`}
                  checked={filters.leaseType.includes(lease)}
                  onCheckedChange={(checked) => handleLeaseTypeChange(lease, checked as boolean)}
                />
                <label
                  htmlFor={`lease-${lease}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {lease}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Occupancy */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Ocupación Mínima: {filters.minOccupancy}%</Label>
          <Slider
            min={0}
            max={100}
            step={5}
            value={[filters.minOccupancy]}
            onValueChange={([value]) => onFilterChange({ ...filters, minOccupancy: value })}
            className="mt-2"
          />
        </div>
      </CardContent>
    </Card>
  )
}
