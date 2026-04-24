"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Mail, CheckCircle2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return
    setSubscribing(true)
    await new Promise((r) => setTimeout(r, 600))
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image
              src="https://static.wixstatic.com/media/be9379_b8d95d2742e24da59f06520fe51dc343~mv2.png/v1/fill/w_142,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Mir.png"
              alt="MIR Investments Logo"
              width={60}
              height={76}
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              Acceso institucional a bienes raíces comerciales AAA en Estados Unidos para inversionistas mexicanos.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
                { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
                { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
                { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
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
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Aviso de Privacidad", href: "/privacidad" },
                { label: "Términos y Condiciones", href: "/terminos" },
                { label: "Advertencias de Riesgo", href: "/riesgos" },
                { label: "Cumplimiento Regulatorio", href: "/cumplimiento" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Recibe insights del mercado y oportunidades de inversión
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-accent py-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>¡Suscrito con éxito!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                />
                <Button type="submit" variant="secondary" className="w-full" disabled={subscribing}>
                  <Mail className="h-4 w-4 mr-2" />
                  {subscribing ? "Suscribiendo..." : "Suscribirse"}
                </Button>
              </form>
            )}
            <p className="text-xs text-primary-foreground/60 mt-2">
              Double opt-in. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© {currentYear} MIR Investments. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span>Ciudad de México, México</span>
              <span>•</span>
              <a href="mailto:info@mirinvestments.com" className="hover:text-primary-foreground transition-colors">
                info@mirinvestments.com
              </a>
              <span>•</span>
              <a href="tel:+525555555555" className="hover:text-primary-foreground transition-colors">
                +52 (55) 5555-5555
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-primary-foreground/60 text-center max-w-4xl mx-auto">
            <p>
              <strong>Advertencia de Riesgo:</strong> Las inversiones en bienes raíces comerciales conllevan riesgos
              significativos, incluyendo la posible pérdida total o parcial del capital invertido. Los rendimientos
              pasados no garantizan rendimientos futuros. MIR Investments no promete ni garantiza rendimientos
              específicos. Esta información no constituye una oferta de venta ni una solicitud de compra de valores.
              Consulte con un asesor financiero, legal y fiscal antes de invertir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
