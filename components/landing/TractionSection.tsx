'use client'

import { motion } from 'framer-motion'
import { landing } from '@/lib/landing-ui'

const stats = [
  { value: '$100K+', label: 'Bootstrapped revenue' },
  { value: '53%', label: 'Client return rate' },
  { value: '130%', label: 'Net dollar retention' },
  { value: '$6–8K', label: 'Avg. monthly revenue' },
] as const

export function TractionSection() {
  return (
    <section className={`border-t border-border/80 bg-background ${landing.section}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={landing.display}
        >
          <p className={landing.eyebrow}>traction</p>
          <h2
            className={`${landing.displayHeading} mt-5 text-[clamp(1.875rem,3.8vw,3.25rem)] leading-[1.08]`}
          >
            Bootstrapped. Clients come back.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 rounded-md border border-border/90 bg-muted/50 p-8 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-y-12 gap-x-0 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-y-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={index > 0 ? 'lg:border-l lg:border-border/70 lg:pl-8 xl:pl-11' : ''}
              >
                <p className="font-display text-[clamp(1.75rem,3.2vw,2.35rem)] font-semibold tabular-nums tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-[13px] font-medium leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className={`${landing.lead} ${landing.prose} mt-10`}
        >
          We work as revenue share, monthly retainer, or scoped custom deployment, depending on the
          agent and the operator.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="font-display mt-12 max-w-[30rem] text-lg italic leading-relaxed text-muted-foreground"
        >
          Built by two operators in Montréal.
        </motion.p>
      </div>
    </section>
  )
}
