import { GradientBlur } from '@/components/effects/gradient-blur'
import { ParticlesBg } from '@/components/effects/particles-bg'
import { ContactForm } from '@/components/forms/contact-form'
import { Footer } from '@/components/shared/footer'
import { Navbar } from '@/components/shared/navbar'

export default function ContactPage() {
  return (
    <main className="bg-background relative flex min-h-screen flex-col overflow-hidden">
      <ParticlesBg />
      <GradientBlur />
      <Navbar />

      <div className="relative z-10 container mx-auto grow px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Fale com nossa <span className="text-primary">equipe</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-xl leading-relaxed">
              Estamos prontos para tirar suas dúvidas e mostrar como o MedSys
              pode revolucionar seu consultório.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Telefone / WhatsApp</h3>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                  <p className="text-muted-foreground text-sm">
                    Seg-Sex, 9h às 18h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">contato@medsys.com.br</p>
                  <p className="text-muted-foreground text-sm">
                    Resposta em até 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
