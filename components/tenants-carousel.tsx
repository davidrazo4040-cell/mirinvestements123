"use client"

const tenants = [
  { 
    name: "Walgreens", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-1dhO9BJAkbqtCkf2lkA6IaTWOvXk8y.png",
    wide: false
  },
  { 
    name: "Teleperformance", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teleperformance%20%281%29-AnVeQz8zKGyYfOZwTxX0pJwWQ6JLCO.png",
    wide: true
  },
  { 
    name: "Dollar Tree", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dollar_Tree_logo-FdwpUdVOlJj2sckevCrV4zauBULEpd.svg",
    wide: false
  },
  { 
    name: "DaVita", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/davita-logo-svg-vector-ZqKsJ92rm12O8lKhCNhn5dT0gf6W8D.svg",
    wide: false
  },
  { 
    name: "O'Reilly Auto Parts", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oreilly-auto-parts-logo-png_seeklogo-439328-ltzVAbQuvltAXvHJVAZ2NGrf35XF40.png",
    wide: false
  },
  { 
    name: "Office Depot", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-depot-logo%20%281%29-ZACDaB1PBq6BImQyHi18l9ejQ8A2Bz.png",
    wide: false
  },
  { 
    name: "Santander", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banco_Santander_Logotipo.svg%20%281%29-lAIh8jMoavgq3NSnGMQLbgnXHBhLIE.png",
    wide: true
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
          <div className="flex animate-scroll gap-16 py-8">
            {/* First set */}
            <div className="flex gap-20 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={tenant.name}
                  className={`flex items-center justify-center h-20 px-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ${tenant.wide ? 'w-72' : 'w-40'}`}
                >
                  <img
                    src={tenant.logo}
                    alt={tenant.name}
                    className={`object-contain ${tenant.wide ? 'h-14 w-auto' : 'max-h-14 max-w-full'}`}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-20 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={`${tenant.name}-dup`}
                  className={`flex items-center justify-center h-20 px-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ${tenant.wide ? 'w-72' : 'w-40'}`}
                >
                  <img
                    src={tenant.logo}
                    alt={tenant.name}
                    className={`object-contain ${tenant.wide ? 'h-14 w-auto' : 'max-h-14 max-w-full'}`}
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
