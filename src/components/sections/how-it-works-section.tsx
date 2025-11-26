'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, ClipboardPen, Rocket, Settings } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    title: 'Cadastre-se',
    description:
      'Crie sua conta em menos de 2 minutos. Sem cartão de crédito e sem compromisso.',
    icon: ClipboardPen,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    number: '02',
    title: 'Configure',
    description:
      'Personalize seu perfil, horários de atendimento e importe seus pacientes facilmente.',
    icon: Settings,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    number: '03',
    title: 'Comece a Usar',
    description:
      'Pronto! Agora é só gerenciar seus agendamentos e prontuários de forma simples.',
    icon: Rocket,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  }
]

export function HowItWorksSection() {
  return (
    <section className="bg-background relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Comece a usar em{' '}
            <span className="text-primary">3 passos simples</span>
          </motion.h2>
          <p className="text-muted-foreground text-xl">
            Simplificamos tudo para você focar no atendimento aos seus
            pacientes.
          </p>
        </div>

        <div className="relative mx-auto mb-20 max-w-5xl">
          {/* Connecting Line (Desktop) */}
          <div className="bg-border absolute top-1/2 left-0 z-0 hidden h-0.5 w-full -translate-y-1/2 md:block" />

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-background flex flex-col items-center rounded-2xl border p-6 text-center shadow-lg md:border-none md:bg-transparent md:shadow-none"
              >
                <div className="relative mb-6">
                  <div className="bg-background border-muted relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 shadow-sm">
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 h-8 w-8 rounded-full ${step.bg} ${step.color} border-background flex items-center justify-center border-2 text-sm font-bold`}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="group h-12 rounded-full px-8 text-lg"
            asChild
          >
            <Link href="/cadastro">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
