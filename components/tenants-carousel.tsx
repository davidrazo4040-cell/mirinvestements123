"use client"

const tenants = [
  { 
    name: "Walgreens", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Walgreens_Logo.svg/200px-Walgreens_Logo.svg.png"
  },
  { 
    name: "Teleperformance", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Teleperformance_logo.svg/200px-Teleperformance_logo.svg.png"
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/O%27Reilly_Auto_Parts_Logo.svg/200px-O%27Reilly_Auto_Parts_Logo.svg.png"
  },
  { 
    name: "Ace Hardware", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ace_Hardware_Logo.svg/200px-Ace_Hardware_Logo.svg.png"
  },
  { 
    name: "Office Depot", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Office_Depot_logo.svg/200px-Office_Depot_logo.svg.png"
  },
  { 
    name: "Aaron's", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Aaron%27s%2C_Inc._logo.svg/200px-Aaron%27s%2C_Inc._logo.svg.png"
  },
  { 
    name: "Santander", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/200px-Banco_Santander_Logotipo.svg.png"
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
