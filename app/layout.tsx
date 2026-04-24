import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MIR Investments | Inmuebles Comerciales AAA en Estados Unidos",
  description:
    "Invierte en inmuebles comerciales AAA en Estados Unidos. Acceso institucional, rendimientos históricos, transparencia total. Inversión dolarizada desde USD 120,000.",
  keywords: "inversión inmobiliaria, bienes raíces comerciales, Estados Unidos, México, cap rate, IRR, NNN",
  openGraph: {
    title: "MIR Investments | Inmuebles Comerciales AAA en Estados Unidos",
    description: "Acceso institucional a propiedades comerciales AAA en EE.UU. con transparencia total.",
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIR Investments | Inmuebles Comerciales AAA en Estados Unidos",
    description: "Acceso institucional a propiedades comerciales AAA en EE.UU. con transparencia total.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
