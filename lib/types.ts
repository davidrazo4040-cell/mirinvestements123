export interface Property {
  id: string
  name: string
  type: "Oficinas" | "Retail" | "Industrial" | "Multifamiliar" | "Data Center"
  city: string
  state: string
  country: string
  lat: number
  lng: number
  image: string
  capRate: number
  irrGross: number
  irrNet: number
  occupancy: number
  wale: number
  dscr: number
  ltv: number
  leaseType: string
  leaseDuration: number
  minInvestment: number
  totalValue: number
  riskProfile: "Core" | "Core+" | "Value-Add"
  yearBuilt: number
  sqft: number
  tenants: string[]
  noi?: number
  allocationLimit?: number
  allocationPercent?: number
  units?: number
  buildings?: number
  delivery?: string
  capacity?: string
  exclusiveInvestment?: boolean
}

export interface FilterState {
  type: string[]
  state: string[]
  minCapRate: number
  maxCapRate: number
  minInvestment: number
  maxInvestment: number
  riskProfile: string[]
  leaseType: string[]
  minOccupancy: number
}

export interface PerformanceData {
  period: string
  property: string
  irrGross: number
  irrNet: number
  distributions: number
  appreciation: number
}
