"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Mail, Phone, MessageSquare, Clock } from "lucide-react"

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

  const contactItems = [
    {
      Icon: Mail,
      label: "Email",
      value: "info@mirinvestments.com",
      href: "mailto:info@mirinvestments.com",
    },
    {
      Icon: Phone,
      label: "Teléfono",
      value: "+52 (55) 5555-5555",
      href: "tel:+525555555555",
    },
    {
      Icon: MessageSquare,
      label: "WhatsApp",
      value: "+52 (55) 5555-5555",
      href: "https://wa.me/525555555555",
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-muted/20 border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-medium">
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solicita <span className="text-accent">información</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactItems.map(({ Icon, label, value, href }) => (
              <Card key={label} className="border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {label}
                    </div>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-accent transition-colors duration-200 font-medium"
                    >
                      {value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-border/60">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Horario de Atención
                  </div>
                  <p className="text-sm text-foreground font-medium">Lunes a Viernes</p>
                  <p className="text-sm text-muted-foreground">9:00 AM – 6:00 PM (CDMX)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/60 shadow-lg">
              <CardContent className="p-8">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Solicitud recibida</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Gracias por tu interés. Un asesor se pondrá en contacto contigo pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Juan Pérez"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="juan@ejemplo.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Teléfono *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+52 55 1234 5678"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-xs text-destructive">{errors.phone}</p>
                        )}
                      </div>

                      {/* Investment Range */}
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Rango de Inversión *
                        </Label>
                        <Select
                          value={formData.investmentRange}
                          onValueChange={(value) =>
                            setFormData({ ...formData, investmentRange: value })
                          }
                        >
                          <SelectTrigger
                            className={errors.investmentRange ? "border-destructive" : ""}
                          >
                            <SelectValue placeholder="Selecciona un rango" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="120k-250k">USD $120,000 – $250,000</SelectItem>
                            <SelectItem value="250k-500k">USD $250,000 – $500,000</SelectItem>
                            <SelectItem value="500k-1m">USD $500,000 – $1,000,000</SelectItem>
                            <SelectItem value="1m+">USD $1,000,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.investmentRange && (
                          <p className="text-xs text-destructive">{errors.investmentRange}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Mensaje (Opcional)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos sobre tus objetivos de inversión..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, consent: checked as boolean })
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="consent"
                        className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        Acepto la{" "}
                        <a
                          href="/privacidad"
                          className="text-foreground underline hover:text-accent transition-colors"
                        >
                          política de privacidad
                        </a>{" "}
                        y autorizo el uso de mis datos para contacto. *
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-xs text-destructive -mt-2">{errors.consent}</p>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-semibold"
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar Información →"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Un asesor de MIR Investments se pondrá en contacto para discutir oportunidades
                      de inversión.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
