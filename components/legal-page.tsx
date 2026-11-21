import Link from "next/link"
import type React from "react"

export const LEGAL_UPDATED = "21 de noviembre de 2026"
export const CONTACT_EMAIL = "drazo@mirinvestments.com"
export const CONTACT_PHONE = "+52 55 3565 0308"

/**
 * Marks data the company must supply before publication (e.g. legal name, address).
 * Rendered highlighted so it can't go unnoticed.
 */
export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded-sm bg-amber-100 px-1 py-0.5 font-medium text-amber-900">
      {children}
    </mark>
  )
}

const LEGAL_LINKS = [
  { href: "/privacidad", label: "Aviso de Privacidad" },
  { href: "/terminos", label: "Términos y Condiciones" },
  { href: "/riesgos", label: "Advertencias de Riesgo" },
  { href: "/cumplimiento", label: "Cumplimiento Regulatorio" },
]

export function LegalPage({
  eyebrow,
  title,
  intro,
  current,
  children,
}: {
  eyebrow: string
  title: string
  intro?: React.ReactNode
  current: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="surface-dark grain relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="font-serif text-2xl tracking-wide text-primary-foreground hover:text-accent-ink transition-colors"
            >
              MIR <span className="text-accent-ink">Investments</span>
            </Link>
            <Link
              href="/"
              className="text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              ← Volver al sitio
            </Link>
          </div>
          <div className="pb-16 pt-10 md:pb-20 md:pt-14 max-w-3xl">
            <p className="eyebrow text-xs tracking-[0.3em] uppercase text-accent-ink mb-5 font-medium">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
              {title}
            </h1>
            <p className="mt-6 text-sm text-primary-foreground/60">
              Última actualización: {LEGAL_UPDATED}
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Documentos legales" className="lg:sticky lg:top-8 self-start">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Documentos legales
            </p>
            <ul className="space-y-1 border-l border-border">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={l.href === current ? "page" : undefined}
                    className={`-ml-px block border-l py-2 pl-4 text-sm transition-colors ${
                      l.href === current
                        ? "border-accent text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <article className="legal-prose max-w-3xl">
            {intro && <div className="legal-intro">{intro}</div>}
            {children}
            <hr />
            <p className="text-sm text-muted-foreground">
              Para cualquier duda sobre este documento, escríbenos a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o llámanos al {CONTACT_PHONE}.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
