"use client"

const tenants = [
  { 
    name: "Walgreens", 
    logo: "/logos/walgreens.jpg"
  },
  { 
    name: "Teleperformance", 
    logo: "/logos/teleperformance.jpg"
  },
  { 
    name: "Dollar Tree", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dollar_Tree_logo-FdwpUdVOlJj2sckevCrV4zauBULEpd.svg"
  },
  { 
    name: "DaVita", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davita-logo-svg-vector-ZqKsJ92rm12O8lKhCNhn5dT0gf6W8D.svg"
  },
  { 
    name: "O'Reilly Auto Parts", 
    logo: "/logos/oreilly.jpg"
  },
  { 
    name: "Ace Hardware", 
    logo: "/logos/acehardware.jpg"
  },
  { 
    name: "Office Depot", 
    logo: "/logos/officedepot.jpg"
  },
  { 
    name: "Aaron's", 
    logo: "/logos/aarons.jpg"
  },
  { 
    name: "Santander", 
    logo: "/logos/santander.jpg"
  },
]

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
                  className="flex items-center justify-center h-20 w-44 px-4 rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={tenant.logo}
                    alt={tenant.name}
                    className="max-h-14 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-12 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={`${tenant.name}-dup`}
                  className="flex items-center justify-center h-20 w-44 px-4 rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={tenant.logo}
                    alt={tenant.name}
                    className="max-h-14 max-w-full object-contain"
                  />
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
