export function TenantCarousel() {
  const tenants = [
    { name: "CVS Health", color: "#CC0000" },
    { name: "Walgreens", color: "#ED1C24" },
    { name: "Dollar General", color: "#007DC6" },
    { name: "Dollar Tree", color: "#00A550" },
    { name: "Starbucks", color: "#00704A" },
    { name: "McDonald's", color: "#FFC72C" },
    { name: "Home Depot", color: "#F96302" },
    { name: "Lowe's", color: "#004990" },
    { name: "7-Eleven", color: "#008743" },
    { name: "Bank of America", color: "#E31837" },
    { name: "Chase Bank", color: "#117ACA" },
    { name: "AutoZone", color: "#FF6A13" },
    { name: "Walmart", color: "#0071CE" },
    { name: "Target", color: "#CC0000" },
    { name: "Chick-fil-A", color: "#E51636" },
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
            Contratos NNN de largo plazo con las marcas más reconocidas de EE.UU.
          </p>
        </div>
      </div>

      <div className="animate-marquee-pause overflow-hidden">
        <div className="flex gap-4 animate-marquee w-max">
          {[...tenants, ...tenants].map((tenant, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl border border-border/60 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 whitespace-nowrap flex-shrink-0"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: tenant.color }}
              />
              <span className="text-sm font-semibold text-foreground">{tenant.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
