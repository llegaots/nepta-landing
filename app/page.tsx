import { HeroSection } from '@/components/landing/HeroSection'
import { WhatWeBuildSection } from '@/components/landing/WhatWeBuildSection'
import { NeptaNav } from '@/components/layout/NeptaNav'
import { NeptaFooter } from '@/components/layout/NeptaFooter'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <NeptaNav variant="landing" />
      <main>
        <HeroSection />
        <WhatWeBuildSection />

        {/* Section E placeholder: used by nav (#contact) while the real Contact section is rebuilt */}
        <section id="contact" className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Contact
              </h2>
              <p className="mt-4 text-muted-foreground">
                This section will be rebuilt to fit the Vertical Agents as a Service positioning.
              </p>
            </div>
          </div>
        </section>
      </main>

      <NeptaFooter />
    </div>
  )
}
