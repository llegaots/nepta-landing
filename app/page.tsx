import type { Metadata } from 'next'
import { HeroSection } from '@/components/landing/HeroSection'
import { WhatWeBuildSection } from '@/components/landing/WhatWeBuildSection'
import { ContactSection } from '@/components/landing/ContactSection'
import { NeptaNav } from '@/components/layout/NeptaNav'
import { NeptaFooter } from '@/components/layout/NeptaFooter'

export const metadata: Metadata = {
  title: 'NEPTA · AI-native real estate, one agent at a time',
  description:
    'NEPTA designs and deploys vertical AI agents for real estate operators: capital raising, leasing, property management, and reporting.',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <NeptaNav variant="landing" />
      <main>
        <HeroSection />
        <WhatWeBuildSection />
        <ContactSection />
      </main>

      <NeptaFooter />
    </div>
  )
}
