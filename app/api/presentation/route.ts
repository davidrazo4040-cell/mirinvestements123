import { NextResponse } from "next/server"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { createHash, timingSafeEqual } from "node:crypto"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// The PDF lives outside /public so it can only be served through this route.
const PDF_PATH = path.join(process.cwd(), "private", "mir-investments-portfolio-2026.pdf")
const DOWNLOAD_NAME = "MIR-Investments-Portfolio-2026.pdf"

// Invitation codes, comma-separated, set in Railway as VIP_ACCESS_CODES.
// With no codes configured, nobody can download (deny by default).
function validCodes(): string[] {
  return (process.env.VIP_ACCESS_CODES ?? "")
    .split(",")
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean)
}

const digest = (s: string) => createHash("sha256").update(s).digest()

function codeMatches(input: string): string | null {
  const given = digest(input)
  for (const code of validCodes()) {
    if (timingSafeEqual(given, digest(code))) return code
  }
  return null
}

// Basic brute-force protection: 8 failed attempts per IP per 15 minutes.
const WINDOW_MS = 15 * 60 * 1000
const MAX_FAILS = 8
const failures = new Map<string, { count: number; first: number }>()

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

function isBlocked(ip: string): boolean {
  const entry = failures.get(ip)
  if (!entry) return false
  if (Date.now() - entry.first > WINDOW_MS) {
    failures.delete(ip)
    return false
  }
  return entry.count >= MAX_FAILS
}

function recordFailure(ip: string) {
  const entry = failures.get(ip)
  if (!entry || Date.now() - entry.first > WINDOW_MS) {
    failures.set(ip, { count: 1, first: Date.now() })
  } else {
    entry.count += 1
  }
}

export async function POST(request: Request) {
  const ip = clientIp(request)
  if (isBlocked(ip)) {
    return NextResponse.json({ error: "too_many_attempts" }, { status: 429 })
  }

  let code = ""
  try {
    const body = await request.json()
    code = typeof body?.code === "string" ? body.code.trim().toUpperCase().slice(0, 64) : ""
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 })
  }

  if (validCodes().length === 0) {
    console.error("VIP_ACCESS_CODES not set — presentation download disabled")
    return NextResponse.json({ error: "not_configured" }, { status: 503 })
  }

  const matched = code ? codeMatches(code) : null
  if (!matched) {
    recordFailure(ip)
    return NextResponse.json({ error: "invalid_code" }, { status: 401 })
  }

  failures.delete(ip)
  // Log which code was used (not who) so access can be audited and codes rotated.
  console.log(`VIP presentation downloaded with code ${matched.slice(0, 3)}*** from ${ip}`)

  const file = await readFile(PDF_PATH)
  return new NextResponse(new Uint8Array(file), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${DOWNLOAD_NAME}"`,
      "Content-Length": String(file.byteLength),
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  })
}
