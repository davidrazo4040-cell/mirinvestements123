"use client"

import { useEffect, useState } from "react"

const tenants = [
  { name: "Walgreens", color: "#E62324" },
  { name: "Teleperformance", color: "#742b8e" },
  { name: "Dollar Tree", color: "#00954C" },
  { name: "DaVita", color: "#00954C" },
  { name: "O'Reilly Auto Parts", color: "#00954C" },
  { name: "Ace Hardware", color: "#E73137" },
  { name: "Office Depot", color: "#CC0000" },
  { name: "Aaron's", color: "#264392" },
  { name: "Santander", color: "#FE0000" },
]

export function TenantsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tenants.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
              {/* Walgreens */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <svg viewBox="0 0 960 198.74667" className="h-12 w-auto">
                  <g transform="matrix(1.3333333,0,0,-1.3333333,0,198.74667)">
                    <g transform="scale(0.1)">
                      <path d="m 5013.88,706.465 c 0,109.39 166.25,278.402 249.42,278.402 22.82,0 37.65,-9.793 37.65,-33.012 0,-60.589 -128.09,-168.66 -287.07,-245.39 m -410.04,278.082 c 22.81,0 37.65,-9.789 37.65,-33.02 0,-60.589 -128.1,-168.64 -287.08,-245.39 0,109.398 166.25,278.41 249.43,278.41" fill="#e62324"/>
                      <path d="m 793.191,768.906 c 3.25,202.36 146.079,415.024 218.589,415.024 21.42,0 25.97,-13.91 25.97,-28.7 0,-69.25 -102.801,-254.304 -244.559,-386.324" fill="#e62324"/>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Teleperformance */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Teleperformance
                </div>
              </div>

              {/* Dollar Tree */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <svg viewBox="0.43 8.18 277.25 28.63" className="h-10 w-auto">
                  <path d="M13.1343 25.952V33.4624C13.1343 35.3147 13.067 35.3484 13.0333 35.4157L12.8312 35.6515C12.7639 35.7188 12.6291 35.8535 12.4944 35.8872L12.2587 36.0219L12.1576 36.0556L12.0903 36.0893V36.1567H17.782V36.0893H17.6809L17.4452 35.9209L17.1084 35.6515L16.94 35.3147C16.9063 35.3147 16.839 35.281 16.839 32.4183V18.0039L11.9556 22.8873C12.2924 22.7526 12.7302 22.8199 12.9659 23.0894C13.168 23.3588 13.168 23.864 13.168 25.9857" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.437988 22.3477L0.505345 20.8995L13.1348 8.27008C14.2896 8.15278 15.4543 8.1754 16.6037 8.33744L0.572703 24.3684C0.505345 23.6949 0.437988 23.0213 0.437988 22.3477Z" fill="#6FBE4A"/>
                </svg>
              </div>

              {/* DaVita */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <svg viewBox="0 0 797 296.9" className="h-12 w-auto">
                  <path fill="#fcb712" d="M396.2 142.3c7.7-12.1 13.6-22.6 18.8-33.6 4.8-10.2 11-27 11-29.8 0-.8-5.3-3.9-11.8-6.9-11.5-5.4-29.2-16.3-29.2-18 0-.5 1.9-.2 4.3.6 10.9 4 27 2.6 38.1-3.4l5.1-2.7"/>
                  <path fill="#0076b6" d="M205.6 295.9c-13.1-1.9-26-11-31.5-22.1-3.9-7.8-5.4-18-3.9-27.3"/>
                </svg>
              </div>

              {/* O'Reilly */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-xl font-bold text-green-700">O'REILLY AUTO PARTS</div>
              </div>

              {/* Ace Hardware */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-red-600">ACE</div>
              </div>

              {/* Office Depot */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-xl font-bold text-red-600">Office Depot</div>
              </div>

              {/* Aaron's */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-800">Aaron's</div>
              </div>

              {/* Santander */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-red-600">Santander</div>
              </div>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex gap-16 items-center min-w-max">
              {/* Walgreens */}
              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <svg viewBox="0 0 960 198.74667" className="h-12 w-auto">
                  <g transform="matrix(1.3333333,0,0,-1.3333333,0,198.74667)">
                    <g transform="scale(0.1)">
                      <path d="m 5013.88,706.465 c 0,109.39 166.25,278.402 249.42,278.402 22.82,0 37.65,-9.793 37.65,-33.012 0,-60.589 -128.09,-168.66 -287.07,-245.39 m -410.04,278.082 c 22.81,0 37.65,-9.789 37.65,-33.02 0,-60.589 -128.1,-168.64 -287.08,-245.39 0,109.398 166.25,278.41 249.43,278.41" fill="#e62324"/>
                    </g>
                  </g>
                </svg>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Teleperformance
                </div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-xl font-bold text-green-600">Dollar Tree</div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-xl font-bold text-blue-600">DaVita</div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-xl font-bold text-green-700">O'REILLY</div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-red-600">ACE</div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-xl font-bold text-red-600">Office Depot</div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-800">Aaron's</div>
              </div>

              <div className="flex items-center justify-center h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="text-2xl font-bold text-red-600">Santander</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Ocupación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Años de Contratos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">NNN</div>
            <div className="text-sm text-muted-foreground">Tipo de Arrendamiento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">AAA</div>
            <div className="text-sm text-muted-foreground">Calidad de Tenants</div>
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
