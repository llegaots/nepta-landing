'use client'

import { motion } from 'framer-motion'
import { fraunces } from '@/lib/fonts'

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
    summary: 'Investor sourcing, outreach, and pipeline through close.',
    bullets: ['Built for syndicators and funds.', 'Runs alongside your raise process.'],
  },
  {
    index: '02',
    status: 'live',
    name: 'Leasing operation agents',
    summary: 'Lead routing, paperwork, reminders, and handoffs your team repeats every season.',
    bullets: ['Fewer dropped leads.', 'Less time in admin loops.'],
  },
  {
    index: '03',
    status: 'live',
    name: 'Property management agents',
    summary: 'Tenant requests, maintenance coordination, and day-to-day comms.',
    bullets: ['Designed to sit on top of existing tools.', 'Scoped to how your PM team already works.'],
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
      <span className="inline-flex rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
        Live
      </span>
    )
  }
  return (
    <span className="inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
      Roadmap
    </span>
  )
}

export function WhatWeBuildSection() {
  return (
    <section className="border-t border-border bg-muted/20 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-[880px]"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">What we build</p>
          <h2
            className={`${fraunces.className} mt-4 text-[clamp(32px,3.6vw,56px)] font-semibold tracking-[-0.02em] leading-[1.08] text-foreground`}
          >
            Agents in production, not slideware.
          </h2>
          <p className="mt-4 max-w-[640px] text-[17px] leading-[1.7] text-muted-foreground">
            NEPTA ships vertical agents for real estate firms: capital raising, leasing operations,
            property management, and reporting. Each one is scoped to real workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2"
        >
          {agents.map((agent) => (
            <div key={agent.index} className="bg-background p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs tabular-nums text-muted-foreground">{agent.index}</span>
                <StatusPill status={agent.status} />
              </div>
              <h3
                className={`${fraunces.className} mt-4 text-[22px] font-semibold leading-snug tracking-tight text-foreground md:text-[24px]`}
              >
                {agent.name}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.65] text-muted-foreground">{agent.summary}</p>
              <div className="my-6 h-px w-full bg-border" />
              <ul className="space-y-2.5 text-[15px] leading-relaxed text-foreground">
                {agent.bullets.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 max-w-[640px] text-sm text-muted-foreground"
        >
          More agents are in design. If you run a workflow we have not listed, we still want to hear
          from you.
        </motion.p>
      </div>
    </section>
  )
}
