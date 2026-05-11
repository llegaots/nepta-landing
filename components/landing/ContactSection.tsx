'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fraunces } from '@/lib/fonts'

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

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-muted/20 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-[880px]"
        >
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Contact</p>
          <h2
            className={`${fraunces.className} mt-4 text-[clamp(32px,3.6vw,56px)] font-semibold tracking-[-0.02em] leading-[1.08] text-foreground`}
          >
            If you run a real estate firm, invest in the space, or build for it, we are easy to
            reach.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mt-12 grid max-w-3xl grid-cols-1 gap-10 border-b border-border pb-12 md:grid-cols-2 md:gap-16"
        >
          {founders.map((f) => (
            <div key={f.name}>
              <h3 className={`${fraunces.className} text-[22px] font-semibold text-foreground`}>
                {f.name}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed">
                <a
                  href={`mailto:${f.email}`}
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  {f.email}
                </a>
              </p>
              <p className="mt-2 text-[17px] text-muted-foreground">{f.phone}</p>
              <p className="mt-2 text-[17px]">
                <a
                  href={f.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  {f.linkedinLabel}
                </a>
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 text-[17px] text-muted-foreground"
        >
          Prefer the waitlist?{' '}
          <Link href="/signup" className="text-foreground underline decoration-border underline-offset-4 hover:text-primary">
            Sign up here
          </Link>
          .
        </motion.p>
      </div>
    </section>
  )
}
