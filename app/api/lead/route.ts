import { NextResponse } from "next/server"

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ALLOWED_FIELDS = ["type", "name", "email", "phone", "investmentRange", "message", "source"] as const

function clean(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function POST(request: Request) {
  let raw: Record<string, unknown>
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 })
  }

  // Only forward known fields, trimmed and length-capped
  const lead: Record<string, string> = {}
  for (const key of ALLOWED_FIELDS) {
    lead[key] = clean(raw[key], key === "message" ? 2000 : 200)
  }

  if (!EMAIL_RE.test(lead.email)) {
    return NextResponse.json({ success: false, error: "invalid_email" }, { status: 400 })
  }
  if (lead.type === "contact" && (!lead.name || !lead.phone)) {
    return NextResponse.json({ success: false, error: "missing_fields" }, { status: 400 })
  }

  if (!WEBHOOK_URL) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL not set — lead NOT saved:", lead.email)
    return NextResponse.json({ success: false, error: "sheets_not_configured" }, { status: 503 })
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        timestamp: new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
      }),
    })

    if (!res.ok) throw new Error(`Sheets webhook returned ${res.status}`)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error forwarding to Google Sheets:", err)
    return NextResponse.json({ success: false, error: "sheets_error" }, { status: 502 })
  }
}
