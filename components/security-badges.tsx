import { ShieldCheck, Lock, FileText, Scale } from "lucide-react"

export function SecurityBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Due Diligence Externo",
      description: "Auditoría independiente",
    },
    {
      icon: Lock,
      title: "Datos Protegidos",
      description: "Encriptación SSL/TLS",
    },
    {
      icon: FileText,
      title: "Transparencia Total",
      description: "Reportes trimestrales",
    },
    {
      icon: Scale,
      title: "Cumplimiento Legal",
      description: "Regulación MX/US",
    },
  ]

  return (
    <section className="py-12 border-b border-border/60 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground tracking-wide">
                    {badge.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{badge.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Los rendimientos pasados no garantizan rendimientos futuros. Toda inversión conlleva
            riesgos. MIR Investments no promete ni garantiza rendimientos específicos. Consulte con
            un asesor financiero antes de invertir.
          </p>
        </div>
      </div>
    </section>
  )
}
