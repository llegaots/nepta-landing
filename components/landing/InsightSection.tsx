'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingUp, DollarSign, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { TimelineDiagram } from './TimelineDiagram'

const insightEvents = [
  {
    id: '1',
    label: 'Liquidity Event',
    description: 'Business sale or exit',
    icon: <DollarSign className="h-6 w-6" />,
    highlight: true,
  },
  {
    id: '2',
    label: 'Capital Available',
    description: 'Money coming off the sidelines',
    icon: <TrendingUp className="h-6 w-6" />,
    highlight: true,
  },
  {
    id: '3',
    label: 'Strategy Shift',
    description: 'Change in investment focus',
    icon: <Briefcase className="h-6 w-6" />,
    highlight: true,
  },
  {
    id: '4',
    label: 'Investment Decision',
    description: 'They invest because something changed',
    icon: <Clock className="h-6 w-6" />,
    highlight: false,
  },
]

export function InsightSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            The Core Insight
          </h2>
          <p className="mt-6 text-2xl font-semibold text-primary">
            Capital raising isn't a list problem, it's a timing and context problem.
          </p>
          <p className="mt-4 text-xl text-muted-foreground">
            Investors don't invest because they got an email. They invest because something changed.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-muted-foreground/20">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-semibold text-muted-foreground">The Old Way</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <p className="text-muted-foreground">
                      Build a large investor list
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <p className="text-muted-foreground">
                      Send mass emails and newsletters
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <p className="text-muted-foreground">
                      Hope someone is ready to invest
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <p className="text-muted-foreground">
                      No visibility into investor readiness
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-semibold text-primary">The New Way</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="font-medium">
                      Detect when investors have fresh capital
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="font-medium">
                      Know who to reach out to and when
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="font-medium">
                      Personalized outreach at the right time
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="font-medium">
                      Close deals faster with less friction
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              When Investors Actually Invest
            </h3>
            <Card>
              <CardContent className="p-8">
                <TimelineDiagram events={insightEvents} />
              </CardContent>
            </Card>
            <p className="mt-6 text-center text-muted-foreground">
              Syndicators just don't see these moments, or know how to act on them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

