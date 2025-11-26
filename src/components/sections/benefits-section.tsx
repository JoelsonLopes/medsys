'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Cloud, Link as LinkIcon, ShieldCheck } from 'lucide-react'

const BENEFITS = [
  {
    title: 'Acessibilidade Total',
    description:
      'Acesse de qualquer dispositivo, em qualquer lugar. Seu consultório na palma da mão, 24 horas por dia.',
    icon: Cloud,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    delay: 0.1
  },
  {
    title: 'Segurança de Dados',
    description:
      'Dados criptografados de ponta a ponta e backups automáticos diários. Suas informações protegidas como devem ser.',
    icon: ShieldCheck,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    delay: 0.2
  },
  {
    title: 'Integração Completa',
    description:
      'Todas as informações em um único lugar. Prontuário, agenda e financeiro conversando entre si.',
    icon: LinkIcon,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    delay: 0.3
  }
]

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="bg-muted/30 relative overflow-hidden py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Por que escolher o <span className="text-primary">MedSys?</span>
          </motion.h2>
          <p className="text-muted-foreground text-xl">
            A base sólida que seu consultório precisa para crescer com segurança
            e eficiência.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              className="group bg-background border-border/50 relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={cn(
                  'mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110',
                  benefit.bg
                )}
              >
                <benefit.icon className={cn('h-7 w-7', benefit.color)} />
              </div>
              <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Glow Effect */}
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-5',
                  benefit.bg.replace('/10', '')
                )}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card border-primary/20 shadow-primary/5 relative mx-auto max-w-4xl overflow-hidden rounded-2xl border p-8 text-center shadow-lg"
        >
          <div className="via-primary absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent to-transparent opacity-50" />
          <p className="text-foreground relative z-10 text-lg font-medium md:text-xl">
            &quot;Com o MedSys, você ganha em média{' '}
            <span className="text-primary font-bold">2 horas por dia</span> para
            focar no que realmente importa: seus pacientes.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
