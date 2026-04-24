"use client"

import { Slider } from "@/components/ui/slider"
import type { FilterState } from "@/lib/types"
import { formatCurrency } from "@/utils/performance-math"

interface PortfolioFiltersProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onReset: () => void
}

export function PortfolioFilters({ filters, onFilterChange, onReset }: PortfolioFiltersProps) {
  const propertyTypes = ["Retail", "Oficinas", "Multifamily", "Industrial"]
  const states = ["CO", "TX", "FL", "IL"]
  const riskProfiles = ["Core", "Core+", "Desarrollo"]
  const leaseTypes = ["NNN", "BTR"]

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

  const CheckGroup = ({
    label,
    items,
    activeItems,
    onChange,
  }: {
    label: string
    items: string[]
    activeItems: string[]
    onChange: (item: string, checked: boolean) => void
  }) => (
    <div className="py-5 border-b border-foreground/10">
      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">{label}</p>
      <div className="space-y-2.5">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={activeItems.includes(item)}
              onChange={(e) => onChange(item, e.target.checked)}
              className="w-3 h-3 border border-foreground/30 bg-transparent accent-accent cursor-pointer"
            />
            <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-200">
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <div className="sticky top-24 border border-foreground/12 p-6">
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-foreground/10">
        <p className="text-xs tracking-[0.25em] uppercase font-medium text-foreground">Filtros</p>
        <button
          onClick={onReset}
          className="text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
        >
          Limpiar
        </button>
      </div>

      <CheckGroup
        label="Tipo de Propiedad"
        items={propertyTypes}
        activeItems={filters.type}
        onChange={handleTypeChange}
      />

      <CheckGroup
        label="Estado"
        items={states}
        activeItems={filters.state}
        onChange={handleStateChange}
      />

      {/* Cap Rate Range */}
      <div className="py-5 border-b border-foreground/10">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Cap Rate</p>
        <p className="text-xs text-foreground mb-4">{filters.minCapRate}% – {filters.maxCapRate}%</p>
        <Slider
          min={0}
          max={15}
          step={0.5}
          value={[filters.minCapRate, filters.maxCapRate]}
          onValueChange={([min, max]) => onFilterChange({ ...filters, minCapRate: min, maxCapRate: max })}
        />
      </div>

      {/* Investment Range */}
      <div className="py-5 border-b border-foreground/10">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Inversión Mínima</p>
        <p className="text-xs text-foreground mb-4">
          {formatCurrency(filters.minInvestment)} – {formatCurrency(filters.maxInvestment)}
        </p>
        <Slider
          min={200000}
          max={10000000}
          step={100000}
          value={[filters.minInvestment, filters.maxInvestment]}
          onValueChange={([min, max]) => onFilterChange({ ...filters, minInvestment: min, maxInvestment: max })}
        />
      </div>

      <CheckGroup
        label="Perfil de Riesgo"
        items={riskProfiles}
        activeItems={filters.riskProfile}
        onChange={handleRiskChange}
      />

      <CheckGroup
        label="Tipo de Contrato"
        items={leaseTypes}
        activeItems={filters.leaseType}
        onChange={handleLeaseTypeChange}
      />

      {/* Occupancy */}
      <div className="py-5">
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Ocupación Mínima</p>
        <p className="text-xs text-foreground mb-4">{filters.minOccupancy}%</p>
        <Slider
          min={0}
          max={100}
          step={5}
          value={[filters.minOccupancy]}
          onValueChange={([value]) => onFilterChange({ ...filters, minOccupancy: value })}
        />
      </div>
    </div>
  )
}
