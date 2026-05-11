'use client'

import { motion } from 'framer-motion'
import { landing } from '@/lib/landing-ui'

type AgentStatus = 'live' | 'roadmap'

const agents: Array<{
  index: string
  status: AgentStatus
  name: string
  summary: string
  bullets: [string, string]
}> = [
  {
    index: '01',
    status: 'live',
    name: 'Capital raising agents',
    summary: 'Sourcing, outreach, and pipeline through close.',
    bullets: ['Built for syndicators and funds.', 'Runs alongside live raises.'],
  },
  {
    index: '02',
    status: 'live',
    name: 'Leasing operation agents',
    summary: 'Leads, paperwork, reminders, and the handoffs your team repeats every season.',
    bullets: ['Fewer dropped leads.', 'Less time in admin loops.'],
  },
  {
    index: '03',
    status: 'live',
    name: 'Property management agents',
    summary: 'Tenant requests, maintenance coordination, and day-to-day comms.',
    bullets: ['Sits on top of existing tools.', 'Scoped to how your PM team works.'],
  },
  {
    index: '04',
    status: 'live',
    name: 'Reporting agent',
    summary: 'Structured updates for operators, investors, and internal stakeholders.',
    bullets: ['Consistent cadence.', 'Less manual deck and spreadsheet work.'],
  },
]

function StatusPill({ status }: { status: AgentStatus }) {
  if (status === 'live') {
    return (
      <span className="rounded-sm border border-primary/15 bg-primary/[0.07] px-2.5 py-1 text-[11px] font-medium text-primary">
        Live
      </span>
    )
  }
  return (
    <span className="rounded-sm border border-border bg-muted/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
      Roadmap
    </span>
  )
}

export function WhatWeBuildSection() {
  return (
    <section className={`border-t border-border/80 bg-muted/35 ${landing.section}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={landing.display}
        >
          <p className={landing.eyebrow}>what we build</p>
          <h2
            className={`${landing.displayHeading} mt-5 text-[clamp(1.875rem,3.8vw,3.25rem)] leading-[1.08]`}
          >
            Agents in production, not slideware.
          </h2>
          <p className={`${landing.lead} ${landing.prose} mt-6`}>
            Four agent lines, each tied to real estate operations. We ship narrow surfaces first,
            then widen scope as trust and data quality allow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-md border border-border/90 bg-border/55 p-px shadow-[0_1px_0_rgba(15,23,42,0.04)]"
        >
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[calc(0.375rem-1px)] bg-border/55 md:grid-cols-2">
            {agents.map((agent) => (
              <div
                key={agent.index}
                className="flex min-h-[260px] flex-col bg-background p-8 md:min-h-[280px] md:p-10 lg:p-11"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tabular-nums tracking-[0.12em] text-muted-foreground/90">
                    {agent.index}
                  </span>
                  <StatusPill status={agent.status} />
                </div>
                <h3 className="font-display mt-5 text-[1.375rem] font-semibold leading-snug tracking-tight text-foreground md:text-[1.5rem]">
                  {agent.name}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.65] text-muted-foreground">{agent.summary}</p>
                <div className="my-7 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />
                <ul className="mt-auto space-y-3 text-[15px] leading-relaxed text-foreground/95">
                  {agent.bullets.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-primary/80"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className={`${landing.prose} mt-10 text-[15px] leading-relaxed text-muted-foreground`}
        >
          More agents are in design. If your workflow is not listed, we still want to hear from you.
        </motion.p>
      </div>
    </section>
  )
}
