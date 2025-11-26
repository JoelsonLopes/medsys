'use client'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useState } from 'react'

const PLANS = [
  {
    name: 'Starter',
    description: 'Ideal para médicos em início de carreira.',
    price: { monthly: 97, annual: 77 },
    features: [
      { name: 'Prontuário Eletrônico', included: true },
      { name: 'Agenda Simples', included: true },
      { name: '1 Usuário', included: true },
      { name: 'Suporte por Email', included: true },
      { name: 'Confirmação via WhatsApp', included: false },
      { name: 'Gestão Financeira', included: false }
    ],
    highlight: false
  },
  {
    name: 'Profissional',
    description: 'Para consultórios que buscam eficiência.',
    price: { monthly: 197, annual: 157 },
    features: [
      { name: 'Prontuário Eletrônico', included: true },
      { name: 'Agenda Inteligente', included: true },
      { name: '3 Usuários', included: true },
      { name: 'Suporte Prioritário', included: true },
      { name: 'Confirmação via WhatsApp', included: true },
      { name: 'Gestão Financeira', included: true }
    ],
    highlight: true,
    badge: 'Mais Popular'
  },
  {
    name: 'Clínica',
    description: 'Gestão completa para clínicas em crescimento.',
    price: { monthly: 397, annual: 317 },
    features: [
      { name: 'Tudo do Profissional', included: true },
      { name: 'Multi-agendas', included: true },
      { name: '10 Usuários', included: true },
      { name: 'Gerente de Conta', included: true },
      { name: 'API de Integração', included: true },
      { name: 'Business Intelligence', included: true }
    ],
    highlight: false
  }
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section
      id="pricing"
      className="bg-background relative overflow-hidden py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Planos transparentes para{' '}
            <span className="text-primary">todos os tamanhos</span>
          </motion.h2>
          <p className="text-muted-foreground mb-8 text-xl">
            Escolha o plano ideal para o seu momento. Sem taxas escondidas.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span
              className={cn(
                'text-sm font-medium',
                !isAnnual ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              Mensal
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span
              className={cn(
                'text-sm font-medium',
                isAnnual ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              Anual{' '}
              <span className="ml-1 text-xs font-bold text-green-500">
                (20% OFF)
              </span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8 transition-all duration-300',
                plan.highlight
                  ? 'bg-card border-primary z-10 scale-105 shadow-2xl'
                  : 'bg-background border-border/50 hover:border-primary/50 hover:shadow-lg'
              )}
            >
              {plan.highlight && (
                <div className="bg-primary text-primary-foreground absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 h-10 text-sm">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-sm">R$</span>
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground text-sm">/mês</span>
                </div>
              </div>

              <ul className="mb-8 grow space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center gap-3 text-sm"
                  >
                    {feature.included ? (
                      <div className="bg-primary/10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                        <Check className="text-primary h-3 w-3" />
                      </div>
                    ) : (
                      <div className="bg-muted flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                        <X className="text-muted-foreground h-3 w-3" />
                      </div>
                    )}
                    <span
                      className={cn(
                        feature.included
                          ? 'text-foreground'
                          : 'text-muted-foreground line-through'
                      )}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'default' : 'outline'}
                className="w-full"
                size="lg"
              >
                {plan.highlight ? 'Começar Agora' : 'Falar com Vendas'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
