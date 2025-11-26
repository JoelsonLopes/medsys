import { GradientBlur } from '@/components/effects/gradient-blur'
import { ParticlesBg } from '@/components/effects/particles-bg'
import { Spotlight } from '@/components/effects/spotlight'
import { HeroSection } from '@/components/sections/hero-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
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
    </main>
  )
}
