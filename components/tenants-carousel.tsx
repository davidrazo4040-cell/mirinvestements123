"use client"

const tenants = [
  { name: "Walgreens", color: "#E62324" },
  { name: "Teleperformance", color: "#742b8e" },
  { name: "Dollar Tree", color: "#00954C" },
  { name: "DaVita", color: "#0076b6" },
  { name: "O'Reilly Auto Parts", color: "#00954C" },
  { name: "Ace Hardware", color: "#E73137" },
  { name: "Office Depot", color: "#CC0000" },
  { name: "Aaron's", color: "#264392" },
  { name: "Santander", color: "#EC0000" },
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
                  className="flex items-center justify-center h-16 px-6 rounded-lg border border-border bg-background hover:shadow-lg transition-all duration-300"
                >
                  <span
                    className="text-xl md:text-2xl font-bold whitespace-nowrap"
                    style={{ color: tenant.color }}
                  >
                    {tenant.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-12 items-center min-w-max">
              {tenants.map((tenant) => (
                <div
                  key={`${tenant.name}-dup`}
                  className="flex items-center justify-center h-16 px-6 rounded-lg border border-border bg-background hover:shadow-lg transition-all duration-300"
                >
                  <span
                    className="text-xl md:text-2xl font-bold whitespace-nowrap"
                    style={{ color: tenant.color }}
                  >
                    {tenant.name}
                  </span>
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
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
