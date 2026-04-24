export function SecurityBadges() {
  const badges = [
    { title: "Due Diligence Externo", description: "Auditoría independiente" },
    { title: "Datos Protegidos", description: "Encriptación SSL/TLS" },
    { title: "Transparencia Total", description: "Reportes trimestrales" },
    { title: "Cumplimiento Legal", description: "Regulación MX/US" },
  ]

  return (
    <section className="py-10 border-b border-foreground/10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 md:gap-x-20">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-px h-4 bg-accent opacity-60" />
              <div>
                <div className="text-xs font-semibold text-foreground tracking-wide">{badge.title}</div>
                <div className="text-xs text-muted-foreground">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Los rendimientos pasados no garantizan rendimientos futuros. Toda inversión conlleva riesgos.
            MIR Investments no promete ni garantiza rendimientos específicos. Consulte con un asesor financiero antes de invertir.
          </p>
        </div>
      </div>
    </section>
  )
}
