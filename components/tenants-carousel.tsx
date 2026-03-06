"use client"

const tenants = [
  { 
    name: "Walgreens", 
    logo: null,
    color: "#E31837"
  },
  { 
    name: "Teleperformance", 
    logo: null,
    color: "#6B2D7B"
  },
  { 
    name: "Dollar Tree", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dollar_Tree_logo-FdwpUdVOlJj2sckevCrV4zauBULEpd.svg",
    color: "#00954C"
  },
  { 
    name: "DaVita", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davita-logo-svg-vector-ZqKsJ92rm12O8lKhCNhn5dT0gf6W8D.svg",
    color: "#0076B6"
  },
  { 
    name: "O'Reilly Auto Parts", 
    logo: null,
    color: "#00703C"
  },
  { 
    name: "Ace Hardware", 
    logo: null,
    color: "#D40029"
  },
  { 
    name: "Office Depot", 
    logo: null,
    color: "#CC0000"
  },
  { 
    name: "Aaron's", 
    logo: null,
    color: "#003DA5"
  },
  { 
    name: "Santander", 
    logo: null,
    color: "#EC0000"
  },
]

function TenantLogo({ tenant }: { tenant: typeof tenants[0] }) {
  if (tenant.logo) {
    return (
      <img
        src={tenant.logo}
        alt={tenant.name}
        className="max-h-12 max-w-full object-contain"
      />
    )
  }
  return (
    <span 
      className="text-lg md:text-xl font-bold whitespace-nowrap"
      style={{ color: tenant.color }}
    >
      {tenant.name}
    </span>
  )
}

export function TenantsCarousel() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Tenants</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con marcas de clase mundial que garantizan flujos estables y contratos a largo plazo
          </p>
        </div>

        {/* Logos Grid - Infinite scroll effect */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 py-8">
            {/* First set */}
            <div className="flex gap-12 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={tenant.name}
                  className="flex items-center justify-center h-16 px-6 rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300"
                >
                  <TenantLogo tenant={tenant} />
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-12 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={`${tenant.name}-dup`}
                  className="flex items-center justify-center h-16 px-6 rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300"
                >
                  <TenantLogo tenant={tenant} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
