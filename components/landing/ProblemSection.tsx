'use client'

import { motion } from 'framer-motion'
import { Users, Mail, EyeOff, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FlowDiagram } from './FlowDiagram'

const problems = [
  {
    icon: Users,
    title: 'Rely on the same repeat investors',
    description: 'Over-reliance on existing LPs limits growth and creates bottlenecks',
  },
  {
    icon: Mail,
    title: 'Blast newsletters hoping someone is ready',
    description: 'Mass emails with low response rates waste time and damage relationships',
  },
  {
    icon: EyeOff,
    title: 'No visibility into investor liquidity events',
    description: "Miss opportunities when investors get new money or have exits",
  },
  {
    icon: Target,
    title: "Don't know who to reach out to, when, or what to say",
    description: 'Reactive outreach instead of strategic, timely connections',
  },
]

const currentWorkflow = [
  { id: '1', label: 'Send Newsletter', icon: <Mail className="h-6 w-6" /> },
  { id: '2', label: 'Wait for Response', icon: <Target className="h-6 w-6" /> },
  { id: '3', label: 'Follow Up Manually', icon: <Users className="h-6 w-6" /> },
  { id: '4', label: 'Miss Opportunities', icon: <EyeOff className="h-6 w-6" /> },
]

export function ProblemSection() {
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
            Raising Capital Today is Inefficient and Reactive
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Most syndicators struggle with the same fundamental problems
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <problem.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{problem.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {problem.description}
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
              Current Reactive Workflow
            </h3>
            <div className="rounded-lg border-2 border-muted-foreground/20 bg-muted/50 p-8">
              <FlowDiagram steps={currentWorkflow} direction="horizontal" />
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              The result: Missed capital opportunities, slower raises, and deals that take too long to close
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

