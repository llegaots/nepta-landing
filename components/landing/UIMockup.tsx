'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface UIMockupProps {
  title?: string
  children: ReactNode
  className?: string
}

export function UIMockup({ title, children, className = '' }: UIMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="overflow-hidden border-2 shadow-xl">
        {title && (
          <div className="border-b bg-muted/50 px-4 py-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <p className="mt-2 text-sm font-medium">{title}</p>
          </div>
        )}
        <div className="bg-background p-6">{children}</div>
      </Card>
    </motion.div>
  )
}



