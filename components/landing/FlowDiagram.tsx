'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FlowStep {
  id: string
  label: string
  icon?: ReactNode
}

interface FlowDiagramProps {
  steps: FlowStep[]
  direction?: 'horizontal' | 'vertical'
  className?: string
}

export function FlowDiagram({ steps, direction = 'horizontal', className = '' }: FlowDiagramProps) {
  return (
    <div className={`flex ${direction === 'horizontal' ? 'flex-row items-center' : 'flex-col items-start'} gap-4 ${className}`}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {step.icon}
            </div>
            <span className="text-sm font-medium">{step.label}</span>
          </motion.div>
          {index < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
              className={`mx-4 h-0.5 w-8 bg-primary/30 ${direction === 'vertical' ? 'rotate-90' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}



