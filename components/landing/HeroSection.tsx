'use client'

import { motion } from 'framer-motion'
import { landing } from '@/lib/landing-ui'

export function HeroSection() {
  return (
    <section className={`relative overflow-hidden ${landing.section}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[min(520px,80vw)] w-[min(520px,80vw)] rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.09)_0%,transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="container relative mx-auto">
        <div className={`${landing.display}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={landing.eyebrow}
            >
              vertical agents for real estate firms
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`${landing.displayHeading} mt-6 text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.04]`}
            >
              NEPTA builds agents that run real estate operations.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className={`${landing.lead} ${landing.prose} mt-8`}
            >
              Capital raising, leasing operations, property management, and reporting. Each agent
              maps to workflows your team already runs. We deploy one surface at a time, then expand
              as the operational layer matures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 max-w-md border-t border-border/80 pt-10"
            >
              <div className="flex items-stretch gap-10">
                <div className="min-w-0 flex-1">
                  <p className="font-display text-2xl font-semibold tabular-nums tracking-tight text-foreground sm:text-[1.65rem]">
                    $1.45M+
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-snug text-muted-foreground">
                    Capital raised
                  </p>
                </div>

                <div className="w-px shrink-0 bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />

                <div className="min-w-0 flex-1">
                  <p className="font-display text-2xl font-semibold tabular-nums tracking-tight text-foreground sm:text-[1.65rem]">
                    20+
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-snug text-muted-foreground">
                    Clients served
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
