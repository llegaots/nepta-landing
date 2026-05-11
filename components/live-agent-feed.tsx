"use client"

import { useEffect, useState, useRef } from "react"

const AGENT_NAMES = [
  "capital-7f2a", "leasing-3b1c", "sourcing-9d4e", "nurture-2c8f",
  "outreach-5a3d", "investor-1e9b", "docusign-4f2c", "skiptracer-8d1a",
  "mls-scrape-6b3e", "newsletter-0c7f",
]

const TASKS = [
  "Email reactivation → 47 dormant LPs",
  "Processing lease via DocuSign",
  "Skip tracing 23 owner records",
  "LinkedIn outreach → physicians ICP",
  "Facebook lead capture → routing",
  "Calendly auto-booking investor call",
  "Generating DocuSign lease #892",
  "Tagging lead by source → drip",
  "Enriching 34 leads with skip trace",
  "Newsletter dispatch → 1.2K subs",
  "Multi-step LinkedIn follow-up",
  "SMS sequence → tour booking",
  "CRM pipeline stage update",
  "Investor engagement tracking",
]

const REGIONS = ["seattle", "toronto", "los-angeles", "vancouver", "texas"]
const STATUSES = [
  { label: "running",  color: "#4ade80" },
  { label: "running",  color: "#4ade80" },
  { label: "running",  color: "#4ade80" },
  { label: "queued",   color: "#facc15" },
  { label: "complete", color: "#60a5fa" },
]

type AgentRow = {
  id: string
  name: string
  task: string
  region: string
  status: typeof STATUSES[number]
  progress: number
  elapsed: string
  key: number
}

function randomRow(key: number): AgentRow {
  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    name: AGENT_NAMES[Math.floor(Math.random() * AGENT_NAMES.length)],
    task: TASKS[Math.floor(Math.random() * TASKS.length)],
    region: REGIONS[Math.floor(Math.random() * REGIONS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    progress: Math.floor(Math.random() * 85 + 10),
    elapsed: `${Math.floor(Math.random() * 14 + 1)}m ${Math.floor(Math.random() * 59)}s`,
    key,
  }
}

// Animated progress bar that slowly ticks forward
function ProgressBar({ initial }: { initial: number }) {
  const [pct, setPct] = useState(initial)
  const rafRef = useRef<number>(0)
  const pctRef = useRef(initial)

  useEffect(() => {
    const tick = () => {
      pctRef.current = Math.min(99, pctRef.current + 0.015)
      setPct(Math.round(pctRef.current))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{ width: "100%", height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 9 }}>
      <div style={{
        height: "100%", borderRadius: 9,
        width: `${pct}%`,
        background: "rgba(0,0,0,0.35)",
        transition: "width 0.5s linear",
      }} />
    </div>
  )
}

// Stable seed rows — same on server and client, no random values
const SEED_ROWS: AgentRow[] = [
  { id: "VEP001", name: "capital-7f2a",    task: "Email reactivation → 47 dormant LPs",  region: "seattle",     status: STATUSES[0], progress: 42, elapsed: "3m 12s", key: 0 },
  { id: "CWP002", name: "leasing-3b1c",    task: "Processing lease via DocuSign",        region: "toronto",     status: STATUSES[0], progress: 67, elapsed: "7m 48s", key: 1 },
  { id: "MCR003", name: "sourcing-9d4e",   task: "Skip tracing 23 owner records",        region: "los-angeles", status: STATUSES[3], progress: 18, elapsed: "1m 05s", key: 2 },
  { id: "VEP004", name: "outreach-5a3d",   task: "LinkedIn outreach → physicians ICP",   region: "seattle",     status: STATUSES[0], progress: 55, elapsed: "5m 30s", key: 3 },
  { id: "BSC005", name: "docusign-4f2c",   task: "Generating DocuSign lease #892",       region: "vancouver",   status: STATUSES[0], progress: 80, elapsed: "11m 22s", key: 4 },
  { id: "VEP006", name: "nurture-2c8f",    task: "Newsletter dispatch → 1.2K subs",      region: "seattle",     status: STATUSES[4], progress: 99, elapsed: "14m 01s", key: 5 },
]

export function LiveAgentFeed() {
  const [rows, setRows] = useState<AgentRow[]>(SEED_ROWS)
  const [mounted, setMounted] = useState(false)
  const keyRef = useRef(100)

  useEffect(() => {
    // Hydrate with random data only after client mount
    setMounted(true)
    setRows(Array.from({ length: 6 }, (_, i) => randomRow(i)))

    const t = setInterval(() => {
      keyRef.current++
      setRows(prev => [...prev.slice(1), randomRow(keyRef.current)])
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: 16,
      overflow: "hidden",
      background: "rgba(255,255,255,0.7)",
    }}>
      {/* Table header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 80px 70px",
        padding: "8px 16px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        background: "rgba(0,0,0,0.03)",
      }}>
        {["AGENT", "TASK", "REGION", "STATUS"].map(h => (
          <span key={h} style={{ fontSize: 8, letterSpacing: "0.16em", color: "rgba(0,0,0,0.30)", fontFamily: "monospace" }}>{h}</span>
        ))}
      </div>

      {/* Rows */}
      <div style={{ overflow: "hidden" }}>
        {rows.map((row, i) => (
          <div
            key={row.key}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 80px 70px",
              padding: "10px 16px",
              borderBottom: "1px solid rgba(0,0,0,0.04)",
              gap: 8,
              alignItems: "center",
              animation: i === rows.length - 1 ? "rowSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" : "none",
            }}
          >
            {/* Agent */}
            <div>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(0,0,0,0.65)", marginBottom: 1 }}>{row.name}</div>
              <div style={{ fontSize: 7.5, fontFamily: "monospace", color: "rgba(0,0,0,0.25)" }}>#{row.id}</div>
            </div>

            {/* Task + progress */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: 9, color: "rgba(0,0,0,0.50)", lineHeight: 1.35, marginBottom: 5,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>{row.task}</div>
              <ProgressBar initial={row.progress} />
            </div>

            {/* Region */}
            <div style={{ fontSize: 8, fontFamily: "monospace", color: "rgba(0,0,0,0.30)" }}>{row.region}</div>

            {/* Status */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: row.status.color,
                boxShadow: row.status.label === "running" ? `0 0 6px ${row.status.color}` : "none",
                animation: row.status.label === "running" ? "statusPulse 2s ease-in-out infinite" : "none",
                flexShrink: 0,
              }} />
              <span style={{ fontSize: 8, fontFamily: "monospace", color: "rgba(0,0,0,0.35)" }}>{row.status.label}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

export function LiveAgentCounter() {
  const [count, setCount] = useState(3847)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setCount(v => v + Math.floor(Math.random() * 3 - 1))
    }, 1200)
    return () => clearInterval(t)
  }, [])

  return (
    <span style={{
      fontFamily: "monospace",
      fontSize: "clamp(3rem, 6vw, 5rem)",
      fontWeight: 300,
      color: "rgba(0,0,0,0.85)",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      transition: "color 0.3s ease",
    }}>
      {mounted ? count.toLocaleString("en-US") : "3,847"}
    </span>
  )
}
