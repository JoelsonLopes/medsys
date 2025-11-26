'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useForm as useFormspree } from '@formspree/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(6, 'Mensagem deve ter pelo menos 6 caracteres')
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  // Use the environment variable for the Formspree ID
  const [state, handleSubmitFormspree] = useFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID'
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    await handleSubmitFormspree(data)
    if (state.succeeded) {
      reset()
    }
  }

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-green-700">
          Mensagem Enviada!
        </h3>
        <p className="text-muted-foreground">
          Obrigado pelo contato. Nossa equipe retornará em breve.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => window.location.reload()}
        >
          Enviar outra mensagem
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card border-border/50 space-y-6 rounded-2xl border p-8 shadow-lg"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          id="name"
          placeholder="Dr. João Silva"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Profissional</Label>
          <Input
            id="email"
            type="email"
            placeholder="joao@clinica.com"
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefone (Opcional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            {...register('phone')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Como podemos ajudar?</Label>
        <Textarea
          id="message"
          placeholder="Gostaria de saber mais sobre o plano Profissional..."
          className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="h-12 w-full text-lg"
        disabled={isSubmitting || state.submitting}
      >
        {isSubmitting || state.submitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensagem
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      {state.errors && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-center text-sm text-red-600">
          Ocorreu um erro ao enviar. Por favor, tente novamente.
        </div>
      )}
    </form>
  )
}
