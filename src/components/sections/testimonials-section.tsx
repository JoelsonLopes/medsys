'use client'

import { Button } from '@/components/ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback } from 'react'

const TESTIMONIALS = [
  {
    id: 1,
    content:
      'O MedSys transformou a gestão do meu consultório. Economizo horas por semana e meus pacientes adoram o agendamento online.',
    author: 'Dr. João Silva',
    role: 'Cardiologista',
    location: 'Porto Alegre, RS',
    rating: 5
  },
  {
    id: 2,
    content:
      'Simplesmente o melhor software médico que já usei. A interface é intuitiva e o suporte é excepcional. Recomendo para todos os colegas.',
    author: 'Dra. Maria Oliveira',
    role: 'Dermatologista',
    location: 'São Paulo, SP',
    rating: 5
  },
  {
    id: 3,
    content:
      'A integração com o WhatsApp reduziu nossas faltas em 40%. O financeiro também ficou muito mais organizado. Vale cada centavo.',
    author: 'Dr. Carlos Santos',
    role: 'Ortopedista',
    location: 'Rio de Janeiro, RJ',
    rating: 5
  },
  {
    id: 4,
    content:
      'Migrar para o MedSys foi a melhor decisão administrativa que tomei. A segurança dos dados me deixa muito tranquila.',
    author: 'Dra. Ana Costa',
    role: 'Pediatra',
    location: 'Curitiba, PR',
    rating: 5
  }
]

const STATS = [
  { label: 'Clínicas Ativas', value: '500+' },
  { label: 'Pacientes Atendidos', value: '50k+' },
  { label: 'Satisfação', value: '98%' },
  { label: 'Avaliação Média', value: '4.9/5' }
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
            O que dizem nossos <span className="text-primary">clientes</span>
          </motion.h2>
          <p className="text-muted-foreground text-xl">
            Junte-se a centenas de médicos que já modernizaram seus
            consultórios.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mb-20 max-w-6xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="bg-background border-border/50 group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg">
                    <Quote className="text-primary/10 group-hover:text-primary/20 absolute top-6 right-6 h-8 w-8 transition-colors" />

                    <div className="mb-6 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 grow leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="mt-auto flex items-center gap-4">
                      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                        {testimonial.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .substring(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">
                          {testimonial.author}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-primary/20 hover:bg-primary/5 hover:text-primary h-12 w-12 rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary/20 hover:bg-primary/5 hover:text-primary h-12 w-12 rounded-full"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-border/50 mx-auto grid max-w-5xl grid-cols-2 gap-8 border-t pt-16 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-primary mb-2 text-3xl font-bold md:text-4xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
