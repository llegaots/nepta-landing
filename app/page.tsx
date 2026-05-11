"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { IntroAnimation, INTRO_DURATION_MS, HERO_REVEAL_MS } from "@/components/intro-animation"
import { AgentInterface } from "@/components/agent-interface"
import { PixelIcon } from "@/components/pixel-icon"
import { LiveAgentFeed, LiveAgentCounter } from "@/components/live-agent-feed"
import { RevealText } from "@/components/reveal-text"
import { StackingAgentCards } from "@/components/stacking-agent-cards"
import { MobileNav } from "@/components/mobile-nav"
import { DevExSection } from "@/components/devex-section"

// ─── Intersection Observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView()
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = end / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [inView, end])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ─── Bento card ──────────────────────────────────────────────────────────────
function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden transition-all duration-700 hover:border-black/[0.15] hover:bg-[#fafaf8] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease`,
      }}
    >
      {/* Hover glow spot */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.03), transparent 60%)" }}
      />
      {children}
    </div>
  )
}

// ─── Pill tag ─────────────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] tracking-widest font-semibold text-black bg-black/[0.08] border border-black/[0.1]">
      {children}
    </span>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function AgenticPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [heroReady, setHeroReady] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  // Start video zoom slightly before hero content reveals, for seamless overlap
  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), HERO_REVEAL_MS)
    return () => clearTimeout(t)
  }, [])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">

      {/* ── INTRO ANIMATION ───────────────────────────────────────────────── */}
      <IntroAnimation onDone={handleIntroDone} />

      {/* ── STICKY NAV ────────────────────────────────────────────────────── */}
      <MobileNav />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden">

        {/* Video background — zooms in once intro is done */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agentic-hero-9yW3wnTNMfn2U6lsVhTTZSJFEvAoSj.mp4"
          style={{
            transform: videoReady ? "scale(1.05)" : "scale(0.85)",
            transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />



        {/* Progressive blur + light gradient rising from bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "65%", background: "linear-gradient(to top, #F5F4F0 0%, #F5F4F0 18%, rgba(245,244,240,0.85) 35%, rgba(245,244,240,0.5) 55%, rgba(245,244,240,0.15) 75%, transparent 100%)" }} />
        {/* Backdrop blur layers — progressively lighter toward top */}
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "20%", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "38%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "55%", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />

        {/* Spacer so hero content doesn't sit under the fixed nav */}
        <div className="h-20" />

        {/* Title + metrics — anchored to bottom left */}
        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col px-6 md:px-12 pb-12 max-w-3xl">
          {/* Title */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-semibold text-[#111] leading-[1.0] tracking-tight mb-10"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0ms, filter 1s cubic-bezier(0.16,1,0.3,1) 0ms, transform 1s cubic-bezier(0.16,1,0.3,1) 0ms",
            }}
          >
            Making Real<br />Estate Firms<br />AI-native.
          </h1>

        </div>
      </section>

      {/* ── WHAT WE BUILD (bento) ──────────────────────────────────────── */}
      <section id="services" className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4"><Tag>WHAT WE BUILD</Tag></div>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-12">
              Eliminate admin.<br />Focus on what really matters.
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left column - Problem statement */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <p className="text-xl md:text-2xl font-light text-black leading-relaxed mb-6">
                    Most real estate firms run on manual work that should have been automated years ago.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Leads sitting uncontacted",
                      "Investors going cold between raises", 
                      "Contracts built by hand",
                      "Admin consuming hours that should go toward closing deals"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/30 mt-2.5 shrink-0" />
                        <span className="text-base text-black/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right column - Solution */}
              <div className="lg:col-span-7 space-y-8">
                <div className="p-6 md:p-8 rounded-2xl bg-black/[0.03] border border-black/[0.06]">
                  <h3 className="text-lg font-medium text-black mb-4">We fix that with vertical AI agents</h3>
                  <p className="text-base text-black/70 leading-relaxed">
                    Each one built to own a specific function inside your firm. A leasing agent that captures every lead, routes it to the right person, and follows up automatically. A capital raising agent that sources investors, runs outreach, and books meetings while you sleep. A nurturing agent that keeps your entire database warm with the right content, automatically, every month. An underwriting agent that pulls comps, runs analysis, and surfaces what matters — without someone doing it manually.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Custom-built", desc: "To your operation and data" },
                    { label: "No new software", desc: "Works with your existing stack" },
                    { label: "Human focus", desc: "Your team does what matters" }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl border border-black/[0.06] bg-white">
                      <div className="text-sm font-medium text-black mb-1">{item.label}</div>
                      <div className="text-sm text-black/50">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by card */}
          <div className="mt-12 p-8 rounded-2xl bg-black/[0.03] border border-black/[0.06]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-black tracking-widest uppercase mb-2">Trusted by 30+ Firms</div>
                <p className="text-base text-black/70 leading-relaxed max-w-lg">
                  Each agent is custom-built for a specific real estate workflow.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-black">30+</div>
                  <div className="text-xs text-black/50 mt-1">Clients</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div className="text-center">
                  <div className="text-3xl font-semibold text-black">50+</div>
                  <div className="text-xs text-black/50 mt-1">Agents Deployed</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BUILD YOUR AGENTS (4 cards) ───────────────────────────────────── */}
      <section id="agents" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <PixelIcon type="agents" size={40} />
              <div className="mt-4"><Tag>AGENT TYPES</Tag></div>
              <RevealText className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
                {"Vertical agents.\nReal results."}
              </RevealText>
            </div>
            <p className="text-sm text-black/45 leading-relaxed max-w-xs">
              Each agent is custom-built for a specific real estate workflow. Proven across 30+ client deployments.
            </p>
          </div>

          <StackingAgentCards />
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section id="workflow" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="workflow" size={40} />
            <div className="mt-4"><Tag>WORKFLOW</Tag></div>
            <RevealText className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
              {"From call to deployed\nin four steps."}
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" onMouseMove={handleMouse}>
            {[
              { n: "01", title: "Discovery",  desc: "30-minute call to understand your workflow, tech stack, and bottlenecks.", delay: 0,   img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/define-5aafAmGBrxZpOqJ3XLHY3n3qzC2I5K.png" },
              { n: "02", title: "Custom Build", desc: "We build your agent tailored to your exact workflow and systems.", delay: 80,  img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compose-5RT5VR4f1Y3GoFmovqTKLTG4UXp3g2.png" },
              { n: "03", title: "Integration",    desc: "We connect to your current stack, whether there's an API or not.", delay: 140, img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-zm8guZwxJHtwWsJ7XO4B0CF7GzlNK8.png" },
              { n: "04", title: "Go Live",  desc: "Agents start working immediately.", delay: 200, img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deploy-an8fgHSLzniojkcmRyGGIFQUJF9T5J.png" },
            ].map((step) => (
              <BentoCard key={step.n} className="relative overflow-hidden flex flex-col min-h-[320px]" delay={step.delay}>
                {/* Image at top — mask fades it out strongly before the bottom edge */}
                <div className="absolute inset-x-0 top-0 h-56 pointer-events-none">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover object-top"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
                    }}
                  />
                </div>
                {/* Number top-left */}
                <div className="relative z-10 p-7">
                  <span className="font-pixel text-[11px] text-black/20 tracking-widest block">{step.n}</span>
                </div>
                {/* Text pushed further down */}
                <div className="relative z-10 px-7 pb-7 mt-auto pt-16">
                  <h3 className="text-2xl font-medium text-black mb-3">{step.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{step.desc}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ──────────────────────────────────────────────────── */}
      <section id="integrations" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <PixelIcon type="integrations" size={40} />
              <div className="mt-4"><Tag>INTEGRATIONS</Tag></div>
              <RevealText className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
                {"Connect your stack.\nUnify your workflow."}
              </RevealText>
            </div>
            <div className="max-w-sm">
              <p className="text-xl md:text-2xl font-semibold text-black leading-snug">
                Any Customer Relationship Management system.<br />Any Property Management Software.
              </p>
            </div>
          </div>

          {/* Full-width image block with glass cards */}
          {/* Mobile: flex-col, image + cards stacked. Desktop: image fills block, cards absolute */}
          <div className="rounded-2xl overflow-hidden border border-black/[0.07] flex flex-col md:block md:relative" onMouseMove={handleMouse}>
            {/* Image */}
            <div className="relative w-full h-[280px] md:h-[480px] shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Org%20Arc%20-%20Upscaled-Sk90jShfu7nltLnhoQbaMJC1YaQKuU.png"
                alt="Agent orchestration architecture"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Cards — flex row on mobile (equal spacing), absolute on desktop */}
            <div className="flex flex-col gap-3 p-4 md:absolute md:bottom-4 md:right-4 md:p-0 md:w-72">
              <div
                className="rounded-xl border border-white/50 p-6"
                style={{
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  background: "rgba(255,255,255,0.60)",
                }}
              >
                <Tag>SDK</Tag>
                <h3 className="mt-3 text-lg font-light mb-2">Custom integrations</h3>
                <p className="text-xs text-black/45 leading-relaxed mb-4">Connect proprietary systems or build custom workflows with our developer API.</p>
                <div className="bg-black/[0.05] rounded-lg border border-black/[0.07] p-3 font-mono text-[11px] text-black/50 leading-relaxed">
                  <span className="text-black/25">// MLS integration</span><br />
                  <span className="text-blue-600/70">nepta</span>.connect{"({"}<br />
                  {"  "}<span className="text-amber-700/70">source</span>: <span className="text-green-700/70">&apos;mls-rets&apos;</span>,<br />
                  {"  "}<span className="text-amber-700/70">onListing</span>: <span className="text-black/35">async (data) </span>={">"}<br />
                  {"    "}<span className="text-blue-600/70">agent</span>.match(data)<br />
                  {"})"}
                </div>
              </div>

              <div
                className="rounded-xl border border-white/50 p-6"
                style={{
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  background: "rgba(255,255,255,0.60)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                  <span className="text-xs text-black/40 tracking-widest">LIVE API</span>
                </div>
                <p className="text-sm text-black/45">Full REST + WebSocket API. Stream agent outputs directly into your product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPER EXPERIENCE ──────────────────────────────────────────── */}
      <DevExSection />

      {/* ── MARQUEE CAPABILITIES ──────────────────────────────────────────── */}
      <section className="py-0 border-t border-black/[0.06] overflow-hidden select-none">
        <div className="flex border-b border-black/[0.06]" style={{ animation: "marqueeLeft 28s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {["Capital Raising", "Investor Outreach", "Lease Automation", "Lead Sourcing", "DocuSign Integration", "Skip Tracing", "MLS Scraping", "Investor Nurturing", "Newsletter Campaigns", "LP Communications"].map((cap) => (
                <div key={cap} className="flex items-center gap-6 px-10 py-5 border-r border-black/[0.06] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                  <span className="text-sm text-black/45 whitespace-nowrap tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex" style={{ animation: "marqueeRight 22s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {["Tour Scheduling", "Application Processing", "Prospect Qualification", "Database Building", "Calendly Integration", "Email Sequences", "Engagement Tracking", "Data Enrichment", "Custom Workflows", "Performance Analytics"].map((cap) => (
                <div key={cap} className="flex items-center gap-6 px-10 py-5 border-r border-black/[0.06] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/12 shrink-0" />
                  <span className="text-sm text-black/30 whitespace-nowrap tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── LIVE AGENTS ��──────────────────────────────────────────────────── */}
      <section id="live" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <PixelIcon type="agents" size={40} />
              <div className="mt-4"><Tag>LIVE RIGHT NOW</Tag></div>
              <RevealText className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
                {"One agent at\na time."}
              </RevealText>
              <p className="mt-6 text-base text-black leading-relaxed max-w-sm">
                Right now, NEPTA agents are raising capital, processing leases, and nurturing investors for real estate firms across North America.
              </p>
              <div className="mt-10 flex items-end gap-2">
                <LiveAgentCounter />
                <span className="text-black text-sm mb-1 tracking-wide">tasks running for real estate firms</span>
              </div>
            </div>
            <div className="relative">
              <LiveAgentFeed />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────���──────────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden">
        {/* Glass panels image — anchored to bottom center */}
        <img
          src="/images/footer.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none"
          style={{ opacity: 0.85 }}
        />
        {/* Progressive blur from bottom — blends into site bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        />
        {/* Colour fade from bottom to site bg #f5f4f0 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgb(245,244,240) 0%, rgba(245,244,240,0.92) 18%, rgba(245,244,240,0.55) 35%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            What could we build for you?
          </h2>
          <p className="text-sm text-black leading-relaxed mb-10">
            30-minute discovery call. No commitment. We&apos;ll map your workflow and show you exactly where AI agents can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium text-center"
          >
            BOOK A CALL
          </a>
        </div>
      </section>


      {/* ── FOOTER ───────────────────────────────────────────────────���────── */}
      <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <span className="font-pixel text-xs tracking-[0.25em] text-black">NEPTA A.I</span>

          {/* Nav sections */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { label: "Services",     href: "#services" },
              { label: "Agents",       href: "#agents" },
              { label: "Workflow",     href: "#workflow" },
              { label: "Integrations", href: "#integrations" },
              { label: "Live",         href: "#live" },
            ].map(l => (
              <a key={l.label} href={l.href} className="text-xs text-black hover:text-black/70 transition-colors tracking-widest">{l.label}</a>
            ))}
          </div>

          {/* Contact link */}
          <a href="/contact" className="text-xs text-black hover:text-black/70 transition-colors tracking-widest">Contact Us</a>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-black/[0.04]">
          <span className="text-xs text-black/70">© 2026 NEPTA A.I. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
