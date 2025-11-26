'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const FAQS = [
  {
    question: 'Como funciona a migração dos meus dados atuais?',
    answer:
      'Nossa equipe especializada realiza todo o processo de migração para você. Importamos cadastros de pacientes, histórico de prontuários e agenda de outros sistemas ou planilhas, garantindo que você não perca nenhuma informação.'
  },
  {
    question: 'É seguro armazenar os dados dos pacientes na nuvem?',
    answer:
      'Sim, muito mais seguro que em servidores locais. Utilizamos criptografia de ponta a ponta (nível bancário), backups automáticos diários e servidores certificados com os mais altos padrões de segurança (HIPAA/LGPD).'
  },
  {
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer:
      'Sim! Não temos contratos de fidelidade. Você pode cancelar sua assinatura quando quiser, sem multas ou taxas escondidas. Seus dados serão exportados e entregues a você.'
  },
  {
    question: 'O suporte técnico está incluso no valor?',
    answer:
      'Com certeza. Oferecemos suporte ilimitado via chat, email e WhatsApp (nos planos Profissional e Clínica) durante o horário comercial. Nossa equipe é treinada para resolver problemas rapidamente.'
  },
  {
    question: 'O sistema funciona em celular e tablet?',
    answer:
      'Sim! O MedSys é 100% responsivo e funciona perfeitamente em qualquer dispositivo com acesso à internet, seja computador, tablet ou smartphone, sem precisar instalar nada.'
  }
]

export function FaqSection() {
  return (
    <section
      id="faq"
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
            Dúvidas <span className="text-primary">Frequentes</span>
          </motion.h2>
          <p className="text-muted-foreground text-xl">
            Tire suas dúvidas sobre como o MedSys pode transformar seu
            consultório.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50"
              >
                <AccordionTrigger className="hover:text-primary text-left text-lg font-medium transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
