'use client'

import { motion } from 'framer-motion'
import { fraunces } from '@/lib/fonts'

const stats = [
  { value: '$100K+', label: 'bootstrapped revenue' },
  { value: '53%', label: 'client return rate' },
  { value: '130%', label: 'net dollar retention' },
  { value: '$6–8K', label: 'avg. monthly revenue' },
] as const

export function TractionSection() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-[880px]"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Traction</p>
          <h2
            className={`${fraunces.className} mt-4 text-[clamp(32px,3.6vw,56px)] font-semibold tracking-[-0.02em] leading-[1.08] text-foreground`}
          >
            Bootstrapped. Clients come back.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index < stats.length - 1
                  ? 'lg:border-r lg:border-border lg:pr-10'
                  : ''
              }
            >
              <p
                className={`${fraunces.className} text-[clamp(28px,3vw,40px)] font-semibold tabular-nums tracking-tight text-foreground`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-10 max-w-[720px] text-[17px] leading-[1.7] text-muted-foreground"
        >
          We work as a revenue share, a monthly retainer, or a scoped custom deployment, depending on
          the agent and the operator.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className={`${fraunces.className} mt-10 max-w-[480px] text-lg italic leading-relaxed text-muted-foreground`}
        >
          Built by two operators in Montréal.
        </motion.p>
      </div>
    </section>
  )
}
