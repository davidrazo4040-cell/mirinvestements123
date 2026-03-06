"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/be9379_b8d95d2742e24da59f06520fe51dc343~mv2.png/v1/fill/w_142,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Mir.png"
              alt="MIR Investments Logo"
              width={60}
              height={76}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection("tecnologia")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection("por-que-mir")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Por Qué MIR
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("contacto")} size="lg" className="ml-4">
              Solicita Información
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("portafolio")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Portafolio
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Cómo Funciona
              </button>
              <button
                onClick={() => scrollToSection("tecnologia")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Tecnología
              </button>
              <button
                onClick={() => scrollToSection("por-que-mir")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Por Qué MIR
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                FAQ
              </button>
              <Button onClick={() => scrollToSection("contacto")} size="lg" className="w-full">
                Solicita Información
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
