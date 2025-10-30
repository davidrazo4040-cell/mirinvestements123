import { Shield, Lock, FileCheck, Award } from "lucide-react"

export function SecurityBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Due Diligence Externo",
      description: "Auditoría independiente",
    },
    {
      icon: Lock,
      title: "Datos Protegidos",
      description: "Encriptación SSL/TLS",
    },
    {
      icon: FileCheck,
      title: "Transparencia Total",
      description: "Reportes trimestrales",
    },
    {
      icon: Award,
      title: "Cumplimiento Legal",
      description: "Regulación MX/US",
    },
  ]

  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <Icon className="h-8 w-8 text-accent" />
                <div className="text-sm font-semibold text-foreground">{badge.title}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong>Aviso importante:</strong> Los rendimientos pasados no garantizan rendimientos futuros. Toda
            inversión conlleva riesgos. MIR Investments no promete ni garantiza rendimientos específicos. Consulte con
            un asesor financiero antes de invertir.
          </p>
        </div>
      </div>
    </section>
  )
}
