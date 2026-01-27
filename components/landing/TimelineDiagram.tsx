'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TimelineEvent {
  id: string
  label: string
  description?: string
  icon?: ReactNode
  highlight?: boolean
}

interface TimelineDiagramProps {
  events: TimelineEvent[]
  className?: string
}

export function TimelineDiagram({ events, className = '' }: TimelineDiagramProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative mb-8 flex items-start gap-4"
        >
          <div
            className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 ${
              event.highlight
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background'
            }`}
          >
            {event.icon}
          </div>
          <div className="flex-1 pt-2">
            <h4 className="font-semibold">{event.label}</h4>
            {event.description && (
              <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}



