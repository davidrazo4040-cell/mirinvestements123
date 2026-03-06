"use client"

import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("portafolio")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("como-funciona")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cómo Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("por-que-mir")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Por Qué MIR
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("faq")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacidad"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/riesgos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Advertencias de Riesgo
                </Link>
              </li>
              <li>
                <Link
                  href="/cumplimiento"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cumplimiento Regulatorio
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Recibe insights del mercado y oportunidades de inversión
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="secondary" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Suscribirse
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-2">
              Double opt-in. Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div>
              <p>© {currentYear} MIR Investments. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span>Ciudad de México, México</span>
              <span>•</span>
              <a href="mailto:drazo@mirinvestments.com" className="hover:text-primary-foreground transition-colors">
                drazo@mirinvestments.com
              </a>
              <span>•</span>
              <a href="tel:+525535650308" className="hover:text-primary-foreground transition-colors">
                +52 (55) 3565-0308
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
