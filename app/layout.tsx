import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const SITE_URL = "https://www.mirinvestments.com"
const TITLE = "MIR Investments | Inmuebles Comerciales AAA en Estados Unidos"
const DESCRIPTION =
  "Invierte en inmuebles comerciales AAA en Estados Unidos. Acceso institucional, rendimientos históricos, transparencia total. Inversión dolarizada desde USD 200,000."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "MIR Investments",
  keywords: [
    "inversión inmobiliaria",
    "bienes raíces comerciales",
    "inmuebles comerciales Estados Unidos",
    "inversión dolarizada",
    "NNN",
    "cap rate",
    "IRR",
    "MIR Investments",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: "Acceso institucional a propiedades comerciales AAA en EE.UU. con transparencia total.",
    url: SITE_URL,
    siteName: "MIR Investments",
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Acceso institucional a propiedades comerciales AAA en EE.UU. con transparencia total.",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://static.wixstatic.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
