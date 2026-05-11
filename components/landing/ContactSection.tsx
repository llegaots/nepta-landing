'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { landing } from '@/lib/landing-ui'

const founders = [
  {
    name: 'Julian',
    email: 'julian@neptaai.com',
    phone: '+1 438 882 8831',
    linkedinLabel: 'LinkedIn',
    linkedinHref: 'https://www.linkedin.com/in/julian-etauri',
  },
  {
    name: 'Lucas',
    email: 'lucas@neptaai.com',
    phone: '+1 438 501 7336',
    linkedinLabel: 'LinkedIn',
    linkedinHref: 'https://www.linkedin.com/in/lucas-legatos',
  },
] as const

const linkClass =
  'text-foreground underline decoration-primary/25 decoration-1 underline-offset-[5px] transition-colors hover:text-primary hover:decoration-primary/50'

export function ContactSection() {
  return (
    <section id="contact" className={`border-t border-border/80 bg-muted/35 ${landing.section}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={landing.display}
        >
          <p className={landing.eyebrow}>contact</p>
          <h2
            className={`${landing.displayHeading} mt-5 text-[clamp(1.875rem,3.8vw,3.25rem)] leading-[1.08]`}
          >
            Operators, investors, builders: we read every note.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {founders.map((f) => (
            <div
              key={f.name}
              className="rounded-md border border-border/90 bg-background/80 p-8 shadow-[0_1px_0_rgba(15,23,42,0.03)] md:p-9"
            >
              <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-foreground">
                {f.name}
              </h3>
              <p className="mt-5 text-[17px] leading-relaxed">
                <a href={`mailto:${f.email}`} className={linkClass}>
                  {f.email}
                </a>
              </p>
              <p className="mt-2 text-[17px] tabular-nums text-muted-foreground">{f.phone}</p>
              <p className="mt-3 text-[17px]">
                <a href={f.linkedinHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {f.linkedinLabel}
                </a>
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-12 max-w-4xl border-t border-border/80 pt-10"
        >
          <p className={`${landing.lead} text-[17px]`}>
            Prefer the waitlist?{' '}
            <Link href="/signup" className={linkClass}>
              Sign up here
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
