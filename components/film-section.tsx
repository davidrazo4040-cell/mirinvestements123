"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

// Scene changes in the film (seconds), detected from the cut points
const CHAPTERS = [
  { t: 0, label: "MIR" },
  { t: 4.5, label: "Inmuebles AAA" },
  { t: 9.5, label: "Inquilinos" },
  { t: 14.5, label: "Desempeño" },
  { t: 20, label: "Portafolio" },
  { t: 25.5, label: "Invierte" },
]

export function FilmSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [loaded, setLoaded] = useState(false) // sources attached (lazy)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(30)
  const [userPaused, setUserPaused] = useState(false)

  const reducedMotion = useRef(false)

  // Attach the video only when the section gets close to the viewport
  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          io.disconnect()
        }
      },
      { rootMargin: "600px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Play while on screen, pause when scrolled away (unless the user paused it)
  useEffect(() => {
    const v = videoRef.current
    const el = frameRef.current
    if (!loaded || !v || !el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.45) {
          if (!userPaused && !reducedMotion.current) v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: [0, 0.45, 1] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [loaded, userPaused])

  // Scroll-driven reveal: the frame opens up from a framed card to near full-bleed
  useEffect(() => {
    const frame = frameRef.current
    const section = sectionRef.current
    if (!frame || !section) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame.style.setProperty("--film-p", "1")
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = section.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the section top enters the bottom of the viewport, 1 when it reaches ~15% from top
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.85)))
      frame.style.setProperty("--film-p", p.toFixed(3))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      setUserPaused(false)
      v.play().catch(() => {})
    } else {
      setUserPaused(true)
      v.pause()
    }
  }, [])

  const toggleSound = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    const next = !v.muted
    v.muted = next
    setMuted(next)
    if (!next) {
      // Turning sound on: start from the top so the viewer gets the full film
      if (v.currentTime > 1.5) v.currentTime = 0
      setUserPaused(false)
      v.play().catch(() => {})
    }
  }, [])

  const seek = useCallback((t: number) => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = t
    setUserPaused(false)
    v.play().catch(() => {})
  }, [])

  const activeChapter = CHAPTERS.reduce((acc, c, i) => (progress * duration >= c.t ? i : acc), 0)

  return (
    <section
      ref={sectionRef}
      aria-labelledby="film-title"
      className="surface-dark grain relative overflow-hidden bg-primary py-24 md:py-32"
    >
      {/* Soft champagne glow behind the film */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(ellipse, hsl(41 55% 45% / 0.35), transparent 70%)" }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5 text-xs font-medium uppercase tracking-[0.3em] text-accent-ink">
              El Film
            </p>
            <h2
              id="film-title"
              className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-primary-foreground md:text-6xl"
            >
              MIR en <em className="italic text-gold-metallic pr-2">treinta segundos</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/65">
            Inmuebles comerciales AAA, inquilinos de clase mundial y un track record comprobado.
            Así invertimos.
          </p>
        </div>

        {/* Film frame — scales open as you scroll */}
        <div
          ref={frameRef}
          className="film-frame group relative mx-auto aspect-video w-full overflow-hidden bg-black shadow-[0_40px_120px_-40px_hsl(41_60%_30%/0.6)]"
          style={{ ["--film-p" as string]: 0 }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster="/video/mir-film-poster.jpg"
            muted
            loop
            playsInline
            preload="none"
            aria-label="Video institucional de MIR Investments"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 30)}
            onTimeUpdate={(e) => {
              const v = e.currentTarget
              if (v.duration) setProgress(v.currentTime / v.duration)
            }}
            onClick={togglePlay}
          >
            {loaded && (
              <>
                <source src="/video/mir-film-1080.mp4" type="video/mp4" media="(min-width: 1024px)" />
                <source src="/video/mir-film-720.mp4" type="video/mp4" />
              </>
            )}
          </video>

          {/* Fine gold hairline frame */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-accent/30" />

          {/* Bottom vignette for controls legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Controls */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-3 p-4 md:p-6">
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pausar video" : "Reproducir video"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-colors hover:border-accent/70 hover:text-accent-ink"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-px" />}
            </button>
            <button
              onClick={toggleSound}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
              className="flex h-10 items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors hover:border-accent/70 hover:text-accent-ink"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              <span className="hidden sm:inline">{muted ? "Activar sonido" : "Sonido activo"}</span>
            </button>
          </div>

          {/* Gold progress line */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-accent/70 via-accent to-[hsl(44_70%_78%)]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* Chapters */}
        <nav
          aria-label="Capítulos del video"
          className="mx-auto mt-8 grid max-w-5xl grid-cols-3 gap-x-4 gap-y-3 md:grid-cols-6"
        >
          {CHAPTERS.map((c, i) => (
            <button
              key={c.label}
              onClick={() => seek(c.t)}
              className={`group/ch border-t pt-3 text-left transition-colors duration-300 ${
                i === activeChapter && playing
                  ? "border-accent text-primary-foreground"
                  : "border-white/15 text-primary-foreground/50 hover:border-white/40 hover:text-primary-foreground/80"
              }`}
            >
              <span className="block font-serif text-sm italic text-accent-ink/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em]">
                {c.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}
