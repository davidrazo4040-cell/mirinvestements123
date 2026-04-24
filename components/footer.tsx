"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return
    setSubscribing(true)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: newsletterEmail, source: "Newsletter Footer" }),
      })
    } catch {
      // silently continue
    }
    setSubscribing(false)
    setSubscribed(true)
    setNewsletterEmail("")
    setTimeout(() => setSubscribed(false), 5000)
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Image
              src="https://static.wixstatic.com/media/be9379_b8d95d2742e24da59f06520fe51dc343~mv2.png/v1/fill/w_142,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Mir.png"
              alt="MIR Investments"
              width={60}
              height={76}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-[220px]">
              Acceso institucional a bienes raíces comerciales AAA en Estados Unidos para inversionistas mexicanos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6">Navegación</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Portafolio", id: "portafolio" },
                { label: "Cómo Funciona", id: "como-funciona" },
                { label: "Por Qué MIR", id: "por-que-mir" },
                { label: "FAQ", id: "faq" },
                { label: "Contacto", id: "contacto" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 text-xs tracking-wide"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6">Legal</h3>
            <ul className="space-y-3">
              {[
                { label: "Aviso de Privacidad", href: "/privacidad" },
                { label: "Términos y Condiciones", href: "/terminos" },
                { label: "Advertencias de Riesgo", href: "/riesgos" },
                { label: "Cumplimiento Regulatorio", href: "/cumplimiento" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 text-xs tracking-wide">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6">Newsletter</h3>
            <p className="text-xs text-primary-foreground/60 mb-5 leading-relaxed">
              Recibe insights del mercado y oportunidades de inversión
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>¡Suscrito con éxito!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-0 focus:border-primary-foreground/50 transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="text-xs tracking-[0.2em] uppercase border-b border-primary-foreground/40 pb-0.5 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground transition-colors duration-200 disabled:opacity-50"
                >
                  {subscribing ? "Suscribiendo..." : "Suscribirse →"}
                </button>
              </form>
            )}
            <p className="text-xs text-primary-foreground/35 mt-4">
              Double opt-in. Cancela en cualquier momento.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-primary-foreground/40 mb-6">
            <p>© {currentYear} MIR Investments. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-6">
              <span>Ciudad de México, México</span>
              <a href="mailto:info@mirinvestments.com" className="hover:text-primary-foreground/70 transition-colors">
                info@mirinvestments.com
              </a>
              <a href="tel:+525555555555" className="hover:text-primary-foreground/70 transition-colors">
                +52 (55) 5555-5555
              </a>
            </div>
          </div>

          <p className="text-xs text-primary-foreground/30 leading-relaxed max-w-4xl">
            <strong className="text-primary-foreground/45">Advertencia de Riesgo:</strong>{" "}
            Las inversiones en bienes raíces comerciales conllevan riesgos significativos, incluyendo la posible pérdida total o parcial del capital invertido. Los rendimientos pasados no garantizan rendimientos futuros. MIR Investments no promete ni garantiza rendimientos específicos. Esta información no constituye una oferta de venta ni una solicitud de compra de valores. Consulte con un asesor financiero, legal y fiscal antes de invertir.
          </p>
        </div>
      </div>
    </footer>
  )
}
