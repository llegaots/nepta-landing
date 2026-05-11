"use client"

import { useEffect, useRef, useState } from "react"

const AGENTS = [
  {
    label: "CAPITAL RAISING",
    title: "$217 to raise $250K",
    desc: "Multi-channel investor outreach. Auto-capture leads, tag by source, route into drip campaigns. One client raised $1.2M in 97 days at $0.012 per dollar raised.",
    stats: [{ v: "$1.45M", l: "capital raised" }, { v: "83x", l: "blended ROI" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  },
  {
    label: "LEASING OPERATIONS",
    title: "575+ hours saved per season",
    desc: "End-to-end lease automation: lead qualification, tour scheduling, application processing, and DocuSign lease generation. 100% lead response rate, zero manual entry.",
    stats: [{ v: "575+", l: "hours saved" }, { v: "100%", l: "response rate" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  },
  {
    label: "LEAD SOURCING",
    title: "5-15 qualified leads daily",
    desc: "Scrapes MLS and public records, enriches with skip trace data, qualifies prospects 24/7. Replaced a $2,200/mo VA while improving lead-to-close rate by 27%.",
    stats: [{ v: "5-15", l: "leads/day" }, { v: "+27%", l: "close rate" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  },
  {
    label: "INVESTOR NURTURE",
    title: "10 hrs/week admin eliminated",
    desc: "Personalized investor updates, newsletter campaigns, and LP communications on autopilot. Re-activation campaigns between raises keep your investor database warm.",
    stats: [{ v: "$45K", l: "admin saved" }, { v: "130%", l: "retention" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
  },
  {
    label: "PROPERTY MANAGEMENT",
    title: "Coming Soon",
    desc: "Full-stack property operations: maintenance coordination, tenant communications, rent collection, and vendor management. Contact us to learn more and join the waitlist.",
    stats: [{ v: "—", l: "in development" }, { v: "→", l: "contact us" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
    comingSoon: true,
  },
  {
    label: "UNDERWRITING",
    title: "Coming Soon",
    desc: "Automated deal analysis: rent comps, expense modeling, cap rate calculations, and investment memo generation. Contact us to learn more and join the waitlist.",
    stats: [{ v: "—", l: "in development" }, { v: "→", l: "contact us" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
    comingSoon: true,
  },
]

const STICKY_TOP   = 80   // matches top: 80px on first card
const STICKY_STEP  = 16   // each card stacks 16px lower
const SCALE_STEP   = 0.04 // scale reduction per card stacked on top
const OFFSET_STEP  = 8    // px pushed down per card stacked on top

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] tracking-widest font-semibold text-black/80 bg-black/[0.08] border border-black/[0.1]">
      {children}
    </span>
  )
}

export function StackingAgentCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  // depth[i] = 0..N how many cards are currently stacked on top of card i
  const [depth, setDepth] = useState<number[]>(AGENTS.map(() => 0))

  useEffect(() => {
    function onScroll() {
      const nextDepth = AGENTS.map((_, i) => {
        // Count how many cards j > i are currently in sticky position (i.e. have scrolled past card i)
        let count = 0
        for (let j = i + 1; j < AGENTS.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          // Card j is "on top of" card i when it has reached its sticky position
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {AGENTS.map((agent, i) => {
        const d         = depth[i]
        const scale     = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={agent.label}
            ref={el => { cardRefs.current[i] = el }}
            className="sticky mb-4"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform:      `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition:     "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange:     "transform",
              }}
            >
              <div className="group relative bg-[#faf9f7] rounded-2xl border border-black/[0.07] overflow-hidden cursor-pointer">

                {/* ��─ MOBILE: image top, fades out at bottom ── */}
                {agent.img && (
                  <div className="relative w-full h-52 pointer-events-none md:hidden">
                    <img
                      src={agent.img}
                      alt={agent.label}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                )}

                {/* ── DESKTOP: image right, fades out at left (absolute) ── */}
                {agent.img && (
                  <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 pointer-events-none">
                    <img
                      src={agent.img}
                      alt={agent.label}
                      className="w-full h-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to right, #faf9f7 0%, transparent 55%)",
                      }}
                    />
                  </div>
                )}

                {/* Text content */}
                <div
                  className="relative z-10 p-8"
                  style={{ maxWidth: agent.img ? undefined : "100%" }}
                  // On desktop limit to left 60% so text doesn't overlap image
                >
                  <div className="md:max-w-[60%]">
                    <div className="flex items-start justify-between mb-6">
                      <Tag>{agent.label}</Tag>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-black">{agent.title}</h3>
                    <p className="text-sm text-black leading-relaxed mb-8">{agent.desc}</p>
                  </div>
                  <div className="flex gap-8 pt-6 border-t border-black/[0.06]">
                    {agent.stats.map(s => (
                      <div key={s.l}>
                        <div className="text-2xl font-light">{s.v}</div>
                        <div className="text-[11px] text-black/35 tracking-widest mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
