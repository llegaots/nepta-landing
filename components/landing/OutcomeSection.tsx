'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, MailCheck, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { UIMockup } from './UIMockup'
import { Progress } from '@/components/ui/progress'

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Raise capital faster',
    description: 'Close deals in weeks instead of months',
  },
  {
    icon: Users,
    title: 'Build investor list more easily',
    description: 'Discover new investors in warm, credible ways',
  },
  {
    icon: MailCheck,
    title: 'Stop over-emailing same investors',
    description: "Reach out only when they're ready",
  },
  {
    icon: DollarSign,
    title: 'Unlock new money',
    description: "Find capital you didn't know existed",
  },
]

export function OutcomeSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">The Outcome</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            With this platform, syndicators achieve better results across the board
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <outcome.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{outcome.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-8 text-center text-2xl font-semibold">
              Real Results Dashboard
            </h3>
            <UIMockup title="Platform Metrics">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-semibold">Capital Raised</h4>
                      <span className="text-2xl font-bold text-primary">$12.5M</span>
                    </div>
                    <Progress value={85} className="mt-2" />
                    <p className="mt-2 text-sm text-muted-foreground">85% of target</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-semibold">New Investors</h4>
                      <span className="text-2xl font-bold text-primary">47</span>
                    </div>
                    <Progress value={78} className="mt-2" />
                    <p className="mt-2 text-sm text-muted-foreground">78% increase</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-semibold">Response Rate</h4>
                      <span className="text-2xl font-bold text-primary">34%</span>
                    </div>
                    <Progress value={34} className="mt-2" />
                    <p className="mt-2 text-sm text-muted-foreground">3x industry average</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-semibold">Time to Close</h4>
                      <span className="text-2xl font-bold text-primary">3.2 weeks</span>
                    </div>
                    <Progress value={65} className="mt-2" />
                    <p className="mt-2 text-sm text-muted-foreground">65% faster</p>
                  </CardContent>
                </Card>
              </div>
            </UIMockup>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

