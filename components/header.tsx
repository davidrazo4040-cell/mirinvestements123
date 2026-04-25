"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex-shrink-0"
          >
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
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white hover:text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]"
                }`}
              >
                {label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contacto")}
              size="sm"
              className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-semibold"
            >
              Solicita Información
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/60 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="px-4 pt-3 pb-2">
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Solicita Información
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
