'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CalendarX, FileWarning, ShieldAlert, TrendingDown } from 'lucide-react'

const PROBLEMS = [
  {
    icon: FileWarning,
    title: 'Papelada e Caos',
    description:
      'Pilhas de papéis, prontuários perdidos e dificuldade para encontrar informações dos pacientes.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20'
  },
  {
    icon: CalendarX,
    title: 'Agenda Confusa',
    description:
      'Pacientes esquecidos, horários duplicados e faltas que prejudicam o faturamento.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    icon: TrendingDown,
    title: 'Financeiro Desorganizado',
    description:
      'Falta de controle sobre contas a pagar e receber, glosas e fluxo de caixa.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20'
  },
  {
    icon: ShieldAlert,
    title: 'Dados em Risco',
    description:
      'Informações sensíveis armazenadas sem segurança, sem backup e vulneráveis a perdas.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20'
  }
]

export function ProblemSection() {
  return (
    <section className="bg-background relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Você ainda enfrenta esses{' '}
            <span className="text-red-500">problemas?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-xl"
          >
            A gestão manual ou com sistemas ultrapassados pode estar custando
            caro para o seu consultório.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'group bg-card relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg',
                problem.border
              )}
            >
              <div
                className={cn(
                  'mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110',
                  problem.bg
                )}
              >
                <problem.icon className={cn('h-6 w-6', problem.color)} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted/30 border-border/50 mx-auto mt-16 max-w-4xl rounded-2xl border p-8 text-center"
        >
          <p className="text-foreground text-lg font-medium md:text-xl">
            &quot;Médicos perdem em média{' '}
            <span className="font-bold text-red-500">2 horas por dia</span> com
            tarefas administrativas que poderiam ser automatizadas.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
