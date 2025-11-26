'use client'

import { Logo } from '@/components/shared/logo'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

const FOOTER_LINKS = [
  {
    title: 'Produto',
    links: [
      { label: 'Funcionalidades', href: '#features' },
      { label: 'Planos e Preços', href: '#pricing' },
      { label: 'Depoimentos', href: '#testimonials' },
      { label: 'Atualizações', href: '#' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nós', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contato', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de Uso', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Compliance', href: '#' }
    ]
  }
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' }
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-border/50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block">
              <Logo />
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Transformando a gestão de clínicas e consultórios em todo o
              Brasil. Tecnologia, segurança e eficiência para você focar no que
              importa: seus pacientes.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="bg-background border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="mb-6 text-lg font-bold">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-border/50 text-muted-foreground flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} MedSys Brasil. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="Termos de Uso"
            >
              Termos
            </Link>
            <Link
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="Política de Privacidade"
            >
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
