"use client"

import Image from "next/image"

const tenants = [
  { 
    name: "Walgreens", 
    logo: "https://logo.clearbit.com/walgreens.com"
  },
  { 
    name: "Teleperformance", 
    logo: "https://logo.clearbit.com/teleperformance.com"
  },
  { 
    name: "Dollar Tree", 
    logo: "https://logo.clearbit.com/dollartree.com"
  },
  { 
    name: "DaVita", 
    logo: "https://logo.clearbit.com/davita.com"
  },
  { 
    name: "O'Reilly Auto Parts", 
    logo: "https://logo.clearbit.com/oreillyauto.com"
  },
  { 
    name: "Ace Hardware", 
    logo: "https://logo.clearbit.com/acehardware.com"
  },
  { 
    name: "Office Depot", 
    logo: "https://logo.clearbit.com/officedepot.com"
  },
  { 
    name: "Aaron's", 
    logo: "https://logo.clearbit.com/aarons.com"
  },
  { 
    name: "Santander", 
    logo: "https://logo.clearbit.com/santander.com"
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
