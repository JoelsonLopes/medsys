'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 text-primary border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            Software médico na nuvem
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            Seu consultório na{' '}
            <span className="from-primary to-accent bg-linear-to-r via-blue-400 bg-clip-text text-transparent">
              palma da mão
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed"
          >
            Prontuário eletrônico, agenda inteligente e gestão financeira em um
            só lugar. Acesse de qualquer dispositivo, a qualquer hora.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="shadow-primary/25 hover:shadow-primary/40 h-12 px-8 text-base shadow-lg transition-all duration-300"
            >
              Começar Teste Grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/50 hover:bg-background/80 h-12 px-8 text-base backdrop-blur-sm"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              Ver Demonstração
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary h-4 w-4" />
              <span>14 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary h-4 w-4" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-secondary h-4 w-4" />
              <span>Cancele quando quiser</span>
            </div>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          className="perspective-1000 relative z-10 mx-auto mt-20 max-w-5xl"
        >
          <div className="border-border/50 bg-background/50 shadow-primary/10 relative transform-gpu rounded-xl border p-2 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01] md:p-4">
            {/* Window Controls */}
            <div className="bg-muted/50 border-border/50 absolute top-0 right-0 left-0 flex h-8 items-center gap-2 rounded-t-lg border-b px-4 md:h-12">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>

            {/* Dashboard Image */}
            <div className="bg-background border-border/30 group relative mt-8 aspect-video overflow-hidden rounded-lg border md:mt-12">
              <Image
                src="/assets/dashboard-main.png"
                alt="MedSys Dashboard"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
              />

              {/* Overlay Gradient */}
              <div className="from-background/20 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />
            </div>
          </div>

          {/* Glow behind mockup */}
          <div className="bg-primary/20 absolute -inset-4 -z-10 rounded-4xl opacity-50 blur-3xl" />
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-muted-foreground mb-8 text-sm font-medium">
            CONFIADO POR MAIS DE 500 CLÍNICAS EM TODO O BRASIL
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
            {/* Placeholder Logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-foreground/10 h-8 w-24 animate-pulse rounded"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
