"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
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
      // silently continue — user still sees success
    }

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", investmentRange: "", message: "", consent: false })
      setIsSuccess(false)
    }, 4000)
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicita Información</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:info@mirinvestments.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      info@mirinvestments.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Teléfono</div>
                    <a href="tel:+525555555555" className="text-sm text-muted-foreground hover:text-primary">
                      +52 (55) 5555-5555
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/525555555555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +52 (55) 5555-5555
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6">
                <div className="text-sm space-y-2">
                  <p className="font-semibold">Horario de Atención</p>
                  <p className="text-muted-foreground">Lunes a Viernes</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM (CDMX)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulario de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-green-900 dark:text-green-100">
                      ¡Gracias por tu interés! Hemos recibido tu solicitud y un asesor se pondrá en contacto contigo
                      pronto.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nombre Completo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Juan Pérez"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@ejemplo.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Teléfono <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+52 55 1234 5678"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                    </div>

                    {/* Investment Range */}
                    <div className="space-y-2">
                      <Label htmlFor="investmentRange">
                        Rango de Inversión <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.investmentRange}
                        onValueChange={(value) => setFormData({ ...formData, investmentRange: value })}
                      >
                        <SelectTrigger className={errors.investmentRange ? "border-destructive" : ""}>
                          <SelectValue placeholder="Selecciona un rango" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="120k-250k">USD $120,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">USD $250,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">USD $500,000 - $1,000,000</SelectItem>
                          <SelectItem value="1m+">USD $1,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.investmentRange && <p className="text-sm text-destructive">{errors.investmentRange}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje (Opcional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos sobre tus objetivos de inversión..."
                        rows={4}
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                        className={errors.consent ? "border-destructive" : ""}
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground leading-relaxed cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acepto la{" "}
                        <a href="/privacidad" className="text-primary hover:underline">
                          política de privacidad
                        </a>{" "}
                        y autorizo el uso de mis datos para contacto. <span className="text-destructive">*</span>
                      </label>
                    </div>
                    {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Solicitar Información"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar este formulario, un asesor de MIR Investments se pondrá en contacto contigo para
                      discutir oportunidades de inversión.
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
