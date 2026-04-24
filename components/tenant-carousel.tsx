export function TenantCarousel() {
  const tenants = [
    { name: "Walgreens", logo: "/logos/Walgreens_2020_primary_logo.svg", color: "#E31837" },
    { name: "Teleperformance", logo: "/logos/Teleperformance_logo.svg", color: "#0057A8" },
    { name: "Dollar Tree", logo: "/logos/Dollar_Tree_logo.svg", color: "#00A550" },
    { name: "O'Reilly Auto Parts", logo: "/logos/O_Reilly_Auto_Parts_Logo.svg", color: "#C8102E" },
    { name: "Office Depot", logo: "/logos/Office-Depot-Logo.svg", color: "#CC0000" },
    { name: "Ace Hardware", logo: "/logos/Ace_Hardware_Logo.svg", color: "#CC0000" },
    { name: "Aaron's Inc.", logo: "/logos/Aaron_s,_Inc._logo.svg", color: "#004990" },
    { name: "DaVita", logo: "/logos/davita-logo-svg-vector.svg", color: "#E32226" },
    { name: "Banco Santander", logo: "/logos/Banco_Santander_Logotipo_(2007-2018).svg", color: "#EC0000" },
    { name: "Charter Fitness", logo: null, color: "#1e40af" },
    { name: "Chipotle", logo: null, color: "#A52A1A" },
    { name: "Lowe's", logo: null, color: "#004990" },
  ]

  return (
    <section className="py-16 bg-muted/30 border-y border-border/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 font-medium">
            Inquilinos Reconocidos
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Tenants AAA en nuestras propiedades
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Contratos NNN de largo plazo con corporaciones financieramente sólidas
          </p>
        </div>
      </div>

      <div className="animate-marquee-pause overflow-hidden">
        <div className="flex gap-4 animate-marquee w-max">
          {[...tenants, ...tenants].map((tenant, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl border border-border/60 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-[160px]"
            >
              {tenant.logo ? (
                <div className="w-24 h-8 flex items-center justify-center flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tenant.logo}
                    alt={tenant.name}
                    className="max-h-8 max-w-[96px] object-contain"
                  />
                </div>
              ) : (
                <>
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: tenant.color }}
                  />
                  <span className="text-sm font-semibold text-foreground">{tenant.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
