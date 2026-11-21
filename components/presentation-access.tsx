"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Lock, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const MESSAGES: Record<string, string> = {
  invalid_code: "El código no es válido. Verifícalo con tu asesor de MIR Investments.",
  too_many_attempts: "Demasiados intentos. Intenta de nuevo en unos minutos.",
  not_configured: "La descarga no está disponible en este momento. Contáctanos.",
  default: "No pudimos completar la descarga. Intenta de nuevo.",
}

export function PresentationAccess({ onRequestAccess }: { onRequestAccess: () => void }) {
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const close = () => {
    setOpen(false)
    setError(null)
    setDone(false)
    setCode("")
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/presentation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(MESSAGES[data?.error] ?? MESSAGES.default)
        return
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "MIR-Investments-Portfolio-2026.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 10_000)
      setDone(true)
    } catch {
      setError(MESSAGES.default)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-accent/70"
      >
        <Lock className="h-3.5 w-3.5" />
        Descargar Presentación
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vip-access-title"
        >
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" onClick={close} />
          <div className="surface-dark grain relative w-full max-w-md overflow-hidden rounded-md border border-accent/30 bg-primary p-8 text-primary-foreground shadow-2xl md:p-10">
            <button
              onClick={close}
              className="absolute right-4 top-4 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50">
              <Lock className="h-5 w-5 text-accent-ink" />
            </div>
            <p className="eyebrow mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent-ink">
              By Invitation Only
            </p>
            <h3 id="vip-access-title" className="font-serif text-3xl font-light leading-tight">
              Presentación <em className="italic text-gold-metallic pr-1">Portafolio 2026</em>
            </h3>

            {done ? (
              <div className="mt-6 space-y-6">
                <p className="text-sm leading-relaxed text-primary-foreground/75">
                  Tu descarga ha comenzado. Este documento es confidencial y para uso exclusivo de la
                  persona invitada.
                </p>
                <Button onClick={close} className="btn-gold w-full text-accent-foreground">
                  Cerrar
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-5">
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  Ingresa el código de invitación que te proporcionó tu asesor de MIR Investments.
                </p>
                <div>
                  <label htmlFor="vip-code" className="sr-only">
                    Código de invitación
                  </label>
                  <input
                    ref={inputRef}
                    id="vip-code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    autoComplete="off"
                    autoCapitalize="characters"
                    spellCheck={false}
                    placeholder="CÓDIGO DE INVITACIÓN"
                    className="w-full rounded-sm border border-primary-foreground/20 bg-white/5 px-4 py-3 text-center font-mono text-sm uppercase tracking-[0.3em] text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
                  />
                  {error && (
                    <p role="alert" className="mt-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={loading || !code.trim()}
                  className="btn-gold w-full text-accent-foreground"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Descargar"}
                </Button>
                <p className="text-center text-xs text-primary-foreground/55">
                  ¿No tienes código?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      close()
                      onRequestAccess()
                    }}
                    className="text-accent-ink underline underline-offset-4 hover:text-primary-foreground"
                  >
                    Solicita acceso
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
