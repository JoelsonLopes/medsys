'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with Gradient and Overlay */}
      <div className="bg-primary/90 absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
        <div className="from-background absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary-foreground mb-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Pronto para modernizar seu consultório?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-xl"
          >
            Junte-se a mais de 500 médicos que já transformaram sua gestão com o
            MedSys. Teste grátis por 14 dias, sem compromisso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 h-14 w-full rounded-full px-8 text-lg sm:w-auto"
              asChild
            >
              <Link href="/cadastro">
                Começar Teste Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-14 w-full rounded-full bg-transparent px-8 text-lg sm:w-auto"
              asChild
            >
              <Link href="/contato">
                <MessageSquare className="mr-2 h-5 w-5" />
                Falar com Consultor
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary-foreground/60 mt-6 text-sm"
          >
            Não é necessário cartão de crédito. Cancele quando quiser.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
