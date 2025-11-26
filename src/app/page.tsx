import { GradientBlur } from '@/components/effects/gradient-blur'
import { ParticlesBg } from '@/components/effects/particles-bg'
import { Spotlight } from '@/components/effects/spotlight'
import { BenefitsSection } from '@/components/sections/benefits-section'
import { CtaSection } from '@/components/sections/cta-section'
import { FaqSection } from '@/components/sections/faq-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { HeroSection } from '@/components/sections/hero-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { Footer } from '@/components/shared/footer'
import { Navbar } from '@/components/shared/navbar'

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen overflow-hidden">
      <ParticlesBg />
      <GradientBlur />
      <Spotlight />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
