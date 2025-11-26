'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function SolutionSection() {
  return (
    <section className="bg-muted/30 relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            O MedSys resolve tudo isso{' '}
            <span className="text-primary">para você</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-xl"
          >
            Transforme a gestão do seu consultório com uma plataforma completa,
            intuitiva e segura.
          </motion.p>
        </div>

        {/* Dashboard Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-20 max-w-5xl"
        >
          <div className="border-border/50 bg-background group relative aspect-video overflow-hidden rounded-xl border shadow-2xl">
            <Image
              src="/assets/dashboard-secondary.png"
              alt="MedSys Solution Dashboard"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Interactive Overlay Hints (Decorative) */}
            <div className="bg-primary absolute top-1/4 left-1/4 h-4 w-4 animate-ping rounded-full opacity-75" />
            <div className="bg-primary absolute top-1/4 left-1/4 h-4 w-4 rounded-full border-2 border-white shadow-lg" />

            <div className="bg-secondary absolute right-1/4 bottom-1/3 h-4 w-4 animate-ping rounded-full opacity-75 delay-700" />
            <div className="bg-secondary absolute right-1/4 bottom-1/3 h-4 w-4 rounded-full border-2 border-white shadow-lg" />
          </div>

          {/* Background Glow */}
          <div className="bg-primary/10 absolute -inset-4 -z-10 rounded-full opacity-50 blur-3xl" />
        </motion.div>

        {/* Comparison Block */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border-border/50 rounded-2xl border p-8 text-center opacity-70 grayscale"
            >
              <div className="mb-4 text-4xl">😫</div>
              <h3 className="mb-2 text-xl font-semibold">Caos e Papelada</h3>
              <p className="text-muted-foreground text-sm">
                Processos manuais, lentos e propensos a erros.
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-primary flex justify-center"
            >
              <ArrowRight className="h-12 w-12 rotate-90 md:rotate-0" />
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card border-primary/20 shadow-primary/5 relative overflow-hidden rounded-2xl border p-8 text-center shadow-lg"
            >
              <div className="bg-primary/5 absolute inset-0" />
              <div className="relative z-10">
                <div className="mb-4 text-4xl">🤩</div>
                <h3 className="text-primary mb-2 text-xl font-bold">
                  100% Digital
                </h3>
                <p className="text-muted-foreground text-sm">
                  Automação, segurança e controle total.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
