'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Calendar,
  Check,
  DollarSign,
  FileText,
  MessageCircle
} from 'lucide-react'
import { useState } from 'react'

const FEATURES = [
  {
    id: 'prontuario',
    label: 'Prontuário',
    title: 'Prontuário Eletrônico Completo',
    description:
      'Tenha o histórico completo do paciente em um só lugar. Personalize anamneses, anexe exames e emita prescrições com poucos cliques.',
    icon: FileText,
    items: [
      'Histórico unificado',
      'Modelos personalizáveis',
      'Prescrição digital',
      'Anexos ilimitados'
    ],
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: 'agenda',
    label: 'Agenda',
    title: 'Agendamento Inteligente',
    description:
      'Otimize sua agenda com confirmações automáticas e controle total de horários. Reduza faltas e organize múltiplos profissionais.',
    icon: Calendar,
    items: [
      'Confirmação via WhatsApp',
      'Lista de espera',
      'Multi-agendas',
      'Bloqueios recorrentes'
    ],
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    title: 'Gestão Financeira Integrada',
    description:
      'Controle o fluxo de caixa do seu consultório sem complicações. Faturamento TISS, emissão de NF-e e relatórios gerenciais.',
    icon: DollarSign,
    items: [
      'Fluxo de caixa',
      'Faturamento TISS',
      'Emissão de Boletos/NF-e',
      'Relatórios DRE'
    ],
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    title: 'Integração com WhatsApp',
    description:
      'Automatize a comunicação com seus pacientes. Envie lembretes de consulta e confirmações diretamente pelo WhatsApp.',
    icon: MessageCircle,
    items: [
      'Confirmação automática',
      'Lembretes de consulta',
      'Mensagens personalizadas',
      'Redução de faltas'
    ],
    color: 'text-green-600',
    bg: 'bg-green-600/10'
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section
      id="features"
      className="bg-background relative overflow-hidden py-20 md:py-32"
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
            Tudo que você precisa em{' '}
            <span className="text-primary">um só lugar</span>
          </motion.h2>
          <p className="text-muted-foreground text-xl">
            Centralize a gestão do seu consultório com ferramentas poderosas e
            integradas.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Tabs Navigation */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={cn(
                  'flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300',
                  activeFeature === index
                    ? 'bg-card border-primary scale-105 shadow-lg'
                    : 'hover:bg-muted/50 text-muted-foreground border-transparent bg-transparent'
                )}
              >
                <div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-lg transition-colors',
                    activeFeature === index ? feature.bg : 'bg-muted'
                  )}
                >
                  <feature.icon
                    className={cn(
                      'h-6 w-6',
                      activeFeature === index
                        ? feature.color
                        : 'text-muted-foreground'
                    )}
                  />
                </div>
                <div>
                  <h3
                    className={cn(
                      'text-lg font-semibold',
                      activeFeature === index ? 'text-foreground' : ''
                    )}
                  >
                    {feature.label}
                  </h3>
                  {activeFeature === index && (
                    <motion.p
                      layoutId="active-desc"
                      className="text-muted-foreground mt-1 line-clamp-1 text-sm"
                    >
                      {feature.title}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-card border-border/50 relative min-h-[500px] overflow-hidden rounded-3xl border p-8 shadow-2xl md:p-12 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col"
              >
                <div className="mb-8">
                  <div
                    className={cn(
                      'mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium',
                      FEATURES[activeFeature].bg,
                      FEATURES[activeFeature].color
                    )}
                  >
                    {(() => {
                      const Icon = FEATURES[activeFeature].icon
                      return <Icon className="h-4 w-4" />
                    })()}
                    {FEATURES[activeFeature].label}
                  </div>
                  <h3 className="mb-4 text-3xl font-bold">
                    {FEATURES[activeFeature].title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                    {FEATURES[activeFeature].description}
                  </p>
                </div>

                <div className="mt-auto grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    {FEATURES[activeFeature].items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="bg-primary/10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          <Check className="text-primary h-4 w-4" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Visual Placeholder / Abstract UI */}
                  <div className="bg-muted/30 border-border/50 relative flex min-h-[200px] items-center justify-center rounded-2xl border p-6">
                    {/* Abstract UI Elements based on feature type */}
                    {activeFeature === 0 && ( // Prontuário
                      <div className="w-full space-y-3 opacity-80">
                        <div className="h-4 w-1/3 animate-pulse rounded bg-blue-500/20" />
                        <div className="bg-background border-border/50 h-32 w-full rounded-xl border p-4 shadow-sm">
                          <div className="mb-4 flex gap-3">
                            <div className="bg-muted h-10 w-10 rounded-full" />
                            <div className="space-y-2">
                              <div className="bg-muted h-3 w-24 rounded" />
                              <div className="bg-muted h-2 w-16 rounded" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-muted/50 h-2 w-full rounded" />
                            <div className="bg-muted/50 h-2 w-5/6 rounded" />
                            <div className="bg-muted/50 h-2 w-4/6 rounded" />
                          </div>
                        </div>
                      </div>
                    )}
                    {activeFeature === 1 && ( // Agenda
                      <div className="grid w-full grid-cols-3 gap-2 opacity-80">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-background border-border/50 flex aspect-square flex-col justify-between rounded-lg border p-2 shadow-sm"
                          >
                            <div className="bg-muted h-2 w-4 rounded" />
                            {i % 2 === 0 && (
                              <div className="h-1.5 w-full rounded bg-green-500/20" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {activeFeature === 2 && ( // Financeiro
                      <div className="flex h-32 w-full items-end justify-between gap-2 px-4 opacity-80">
                        <div className="h-[40%] w-full rounded-t-lg bg-yellow-500/20" />
                        <div className="h-[70%] w-full rounded-t-lg bg-yellow-500/30" />
                        <div className="h-[50%] w-full rounded-t-lg bg-yellow-500/40" />
                        <div className="h-[85%] w-full rounded-t-lg bg-yellow-500/50" />
                        <div className="h-[60%] w-full rounded-t-lg bg-yellow-500/20" />
                      </div>
                    )}
                    {activeFeature === 3 && ( // WhatsApp
                      <div className="bg-background border-border/50 mx-auto w-full max-w-sm overflow-hidden rounded-xl border opacity-90 shadow-sm">
                        <div className="flex items-center gap-3 bg-[#075E54] p-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                            MS
                          </div>
                          <div className="text-sm font-medium text-white">
                            MedSys Bot
                          </div>
                        </div>
                        <div className="space-y-3 bg-[#E5DDD5] p-4">
                          <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white p-2 text-xs shadow-sm">
                            Olá! Sua consulta com Dr. Silva está agendada para
                            amanhã às 14:00.
                          </div>
                          <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white p-2 text-xs shadow-sm">
                            Digite 1 para confirmar ou 2 para remarcar.
                          </div>
                          <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#DCF8C6] p-2 text-xs shadow-sm">
                            1
                          </div>
                          <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white p-2 text-xs shadow-sm">
                            Confirmado! Obrigado.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
