"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Portafolio", id: "portafolio" },
    { label: "Cómo Funciona", id: "como-funciona" },
    { label: "Por Qué MIR", id: "por-que-mir" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/97 backdrop-blur-sm border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image
              src="https://static.wixstatic.com/media/be9379_b8d95d2742e24da59f06520fe51dc343~mv2.png/v1/fill/w_142,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Mir.png"
              alt="MIR Investments"
              width={60}
              height={76}
              className="h-12 w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200 ml-2"
            >
              Solicitar Información
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-200 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-foreground/10">
            <div className="flex flex-col gap-5">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-xs tracking-[0.2em] uppercase border-b border-foreground pb-0.5 w-fit hover:text-accent hover:border-accent transition-colors"
              >
                Solicitar Información
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
