import { LandingHeader } from '@/components/landing/LandingHeader'
import { HeroSection } from '@/components/landing/HeroSection'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { InsightSection } from '@/components/landing/InsightSection'
import { HowItWorksSection } from '@/components/landing/HowItWorksSection'
import { OutcomeSection } from '@/components/landing/OutcomeSection'
import { CTASection } from '@/components/landing/CTASection'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <HeroSection />
      <ProblemSection />
      <InsightSection />
      <HowItWorksSection />
      <OutcomeSection />
      <CTASection />
    </div>
  )
}
