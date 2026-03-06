import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Google Sheets API integration
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (GOOGLE_SHEETS_URL) {
      // Send to Google Sheets via webhook/Apps Script
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          investmentRange: data.investmentRange,
          message: data.message || "",
          timestamp: data.timestamp,
          source: "MIR Investments Website",
        }),
      })
    }

    // Also log to console for debugging
    console.log("[v0] Lead submitted:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      investmentRange: data.investmentRange,
      timestamp: data.timestamp,
    })

    return NextResponse.json({ success: true, message: "Lead submitted successfully" })
  } catch (error) {
    console.error("[v0] Error submitting lead:", error)
    return NextResponse.json({ success: false, message: "Error submitting lead" }, { status: 500 })
  }
}
