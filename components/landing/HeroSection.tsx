'use client'

import { motion } from 'framer-motion'
import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-[880px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.03 }}
              className="text-xs font-medium uppercase tracking-[0.14em] text-primary"
            >
              vertical agents for real estate firms
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
              className={`${fraunces.className} mt-5 text-[clamp(44px,5vw,84px)] font-semibold tracking-[-0.02em] leading-[1.05]`}
            >
              NEPTA builds agents that run real estate operations.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-muted-foreground"
            >
              NEPTA designs and deploys vertical AI agents for real estate operators.
              One agent at a time, until the operational layer runs itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-10 flex items-stretch gap-8"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`${fraunces.className} text-[22px] font-semibold text-foreground`}>
                    $1.45M+
                  </span>
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  capital raised
                </div>
              </div>

              <div className="hidden w-px bg-border" />

              <div className="flex-1">
                <span className={`${fraunces.className} text-[22px] font-semibold text-foreground`}>
                  20+
                </span>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  clients served
                </div>
              </div>

              <div className="hidden w-px bg-border" />

              {/* Third stat kept aligned with the original "proof row" intent. */}
              <div className="flex-1">
                <span className={`${fraunces.className} text-[22px] font-semibold text-foreground`}>
                  $100K+
                </span>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  bootstrapped revenue
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

