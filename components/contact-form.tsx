"use client"

import type React from "react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Mail, Phone, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentRange: "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido"
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido"
    if (!formData.investmentRange) newErrors.investmentRange = "Selecciona un rango de inversión"
    if (!formData.consent) newErrors.consent = "Debes aceptar la política de privacidad"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          investmentRange: formData.investmentRange,
          message: formData.message,
          source: "Formulario Web MIR",
        }),
      })
    } catch {
      // silently continue — user sees success state regardless
    }
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", investmentRange: "", message: "", consent: false })
      setIsSuccess(false)
    }, 5000)
  }

  const inputClass = (field: string) =>
    `w-full bg-transparent border-0 border-b py-2 px-0 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0 transition-colors duration-200 ${
      errors[field]
        ? "border-destructive focus:border-destructive"
        : "border-foreground/20 focus:border-foreground"
    }`

  const contactItems = [
    { Icon: Mail, label: "Email", value: "info@mirinvestments.com", href: "mailto:info@mirinvestments.com" },
    { Icon: Phone, label: "Teléfono", value: "+52 (55) 5555-5555", href: "tel:+525555555555" },
    { Icon: MessageSquare, label: "WhatsApp", value: "+52 (55) 5555-5555", href: "https://wa.me/525555555555" },
  ]

  return (
    <section id="contacto" className="py-24 bg-muted/20 border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Solicita <em className="italic">información</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 max-w-6xl">
          {/* Contact Info */}
          <div className="space-y-0">
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <div key={label} className={`flex items-start gap-5 py-7 ${i > 0 ? "border-t border-foreground/10" : ""}`}>
                <Icon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">{label}</div>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-accent transition-colors duration-200">
                    {value}
                  </a>
                </div>
              </div>
            ))}

            <div className="border-t border-foreground/10 pt-7">
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Horario de Atención</div>
              <p className="text-sm text-foreground">Lunes a Viernes</p>
              <p className="text-sm text-muted-foreground">9:00 AM – 6:00 PM (CDMX)</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-20 border border-foreground/10 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-serif text-2xl font-light text-foreground mb-3">Solicitud recibida</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Gracias por tu interés. Un asesor se pondrá en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Name */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Juan Pérez"
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@ejemplo.com"
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+52 55 1234 5678"
                      className={inputClass("phone")}
                    />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>

                  {/* Investment Range */}
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                      Rango de Inversión *
                    </label>
                    <Select
                      value={formData.investmentRange}
                      onValueChange={(value) => setFormData({ ...formData, investmentRange: value })}
                    >
                      <SelectTrigger className={`border-0 border-b rounded-none bg-transparent px-0 h-auto py-2 text-sm focus:ring-0 ${errors.investmentRange ? "border-destructive" : "border-foreground/20"}`}>
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="120k-250k">USD $120,000 – $250,000</SelectItem>
                        <SelectItem value="250k-500k">USD $250,000 – $500,000</SelectItem>
                        <SelectItem value="500k-1m">USD $500,000 – $1,000,000</SelectItem>
                        <SelectItem value="1m+">USD $1,000,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.investmentRange && <p className="text-xs text-destructive mt-1">{errors.investmentRange}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos sobre tus objetivos de inversión..."
                    rows={4}
                    className="w-full bg-transparent border-b border-foreground/20 py-2 px-0 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0 focus:border-foreground transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-3.5 h-3.5 border border-foreground/30 bg-transparent accent-accent cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    Acepto la{" "}
                    <a href="/privacidad" className="text-foreground underline hover:text-accent transition-colors">
                      política de privacidad
                    </a>{" "}
                    y autorizo el uso de mis datos para contacto. *
                  </label>
                </div>
                {errors.consent && <p className="text-xs text-destructive -mt-4">{errors.consent}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Información →"}
                </button>

                <p className="text-xs text-muted-foreground">
                  Un asesor de MIR Investments se pondrá en contacto para discutir oportunidades de inversión.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
