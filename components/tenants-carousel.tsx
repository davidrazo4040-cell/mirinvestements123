"use client"

import Image from "next/image"

const tenants = [
  { 
    name: "Walgreens", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Walgreens_2020_primary_logo.svg-HFQSPe5Yy45gTltPU3Oi9lPqlhUQDm.xml"
  },
  { 
    name: "Teleperformance", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teleperformance_logo.svg-UuuDGNNj9ldUXgvHF7VFDbvw8Cn7cP.xml"
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
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/O%27Reilly_Auto_Parts_Logo.svg-5sZI3YGVaz6jZ1UJAbU2NwAvlShMAZ.xml"
  },
  { 
    name: "Ace Hardware", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ace_Hardware_Logo.svg-yubItGxGxAXA13B3gmplw9ppHEWkDX.xml"
  },
  { 
    name: "Office Depot", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-Depot-Logo.svg-HDELQs9ua9o1rw8pUXlHWNda3agZKc.xml"
  },
  { 
    name: "Aaron's", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aaron%27s%2C_Inc._logo.svg-oogRdvczGACB3bibQPz6d3CUFJQR2S.xml"
  },
  { 
    name: "Santander", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banco_Santander_Logotipo_%282007-2018%29.svg-Qa0Qb0TWNjFCOQYhG2OijtQqtXpaEB.xml"
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
            <div className="flex gap-16 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={tenant.name}
                  className="flex items-center justify-center h-20 w-40 px-4 rounded-lg bg-white hover:shadow-lg transition-all duration-300"
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
            <div className="flex gap-16 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={`${tenant.name}-dup`}
                  className="flex items-center justify-center h-20 w-40 px-4 rounded-lg bg-white hover:shadow-lg transition-all duration-300"
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
