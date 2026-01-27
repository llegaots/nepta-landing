'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Ready to Raise Capital Faster?
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Stop guessing when investors are ready. Start reaching out at the right time, 
            with the right message, to the right people.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <Link href="/signup">
              <Button size="lg" className="group text-lg px-8">
                Join the waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Setup in minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}

