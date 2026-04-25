export function TenantCarousel() {
  const tenants = [
    { name: "Walgreens", logo: "/logos/Walgreens_2020_primary_logo.svg" },
    { name: "Teleperformance", logo: "/logos/Teleperformance_logo.svg" },
    { name: "Dollar Tree", logo: "/logos/Dollar_Tree_logo.svg" },
    { name: "O'Reilly Auto Parts", logo: "/logos/O_Reilly_Auto_Parts_Logo.svg" },
    { name: "Office Depot", logo: "/logos/Office-Depot-Logo.svg" },
    { name: "Ace Hardware", logo: "/logos/Ace_Hardware_Logo.svg" },
    { name: "Aaron's Inc.", logo: "/logos/Aaron_s,_Inc._logo.svg" },
    { name: "DaVita", logo: "/logos/davita-logo-svg-vector.svg" },
    { name: "Banco Santander", logo: "/logos/Banco_Santander_Logotipo_(2007-2018).svg" },
    { name: "Charter Fitness", logo: null },
    { name: "Chipotle", logo: null },
    { name: "Lowe's", logo: null },
  ]

  return (
    <section className="py-14 bg-background border-y border-border/40 overflow-hidden">
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
        <div className="flex items-center animate-marquee w-max">
          {[...tenants, ...tenants].map((tenant, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-10 py-2 flex-shrink-0"
              style={{ minWidth: "160px" }}
            >
              {tenant.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={tenant.logo}
                  alt={tenant.name}
                  className="max-h-10 max-w-[130px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors whitespace-nowrap">
                  {tenant.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
