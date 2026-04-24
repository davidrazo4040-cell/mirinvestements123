import { NextResponse } from "next/server"

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

export async function POST(request: Request) {
  const body = await request.json()

  if (!WEBHOOK_URL) {
    console.warn("GOOGLE_SHEETS_WEBHOOK_URL not set — lead not saved to Sheets")
    return NextResponse.json({ success: true, warning: "sheets_not_configured" })
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        timestamp: new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
      }),
    })

    if (!res.ok) throw new Error(`Sheets webhook returned ${res.status}`)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error forwarding to Google Sheets:", err)
    return NextResponse.json({ success: false, error: "sheets_error" }, { status: 500 })
  }
}
