import { GradientBlur } from '@/components/effects/gradient-blur'
import { ParticlesBg } from '@/components/effects/particles-bg'
import { Spotlight } from '@/components/effects/spotlight'
import { Navbar } from '@/components/shared/navbar'

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen overflow-hidden">
      <ParticlesBg />
      <GradientBlur />
      <Spotlight />
      <Navbar />

      <section className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center md:pt-48 md:pb-32">
        <h1 className="from-primary to-accent mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
          Software Médico na Nuvem
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          Simplifique a gestão do seu consultório com o MedSys.
        </p>
      </section>
    </main>
  )
}
