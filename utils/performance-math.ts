export function formatCurrency(value: number, locale = "es-MX"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function formatNumber(value: number, locale = "es-MX"): string {
  return new Intl.NumberFormat(locale).format(value)
}

export function calculateNetIRR(grossIRR: number, fees = 2.0): number {
  // Simplified net IRR calculation (gross - fees)
  return grossIRR - fees
}

export function calculateCapRate(noi: number, propertyValue: number): number {
  return (noi / propertyValue) * 100
}

export function calculateDSCR(noi: number, debtService: number): number {
  return noi / debtService
}

export function calculateLTV(loanAmount: number, propertyValue: number): number {
  return (loanAmount / propertyValue) * 100
}

export function getRiskColor(riskProfile: string): string {
  switch (riskProfile) {
    case "Core":
      return "text-green-600"
    case "Core+":
      return "text-blue-600"
    case "Value-Add":
      return "text-amber-600"
    default:
      return "text-gray-600"
  }
}

export function getOccupancyColor(occupancy: number): string {
  if (occupancy >= 95) return "text-green-600"
  if (occupancy >= 85) return "text-blue-600"
  if (occupancy >= 75) return "text-amber-600"
  return "text-red-600"
}
