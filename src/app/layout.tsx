import { JsonLd } from '@/components/seo/json-ld'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap'
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medsys.com.br'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'MedSys - Software Médico na Nuvem | Gestão de Consultórios',
    template: '%s | MedSys'
  },
  description:
    'Software médico completo para gestão de consultórios e clínicas. Prontuário eletrônico, agenda inteligente, telemedicina e gestão financeira em um só lugar. Teste grátis por 14 dias.',
  keywords: [
    'software médico',
    'prontuário eletrônico',
    'gestão de consultório',
    'agenda médica',
    'telemedicina',
    'sistema para clínicas',
    'software para médicos',
    'gestão de pacientes',
    'prescrição eletrônica'
  ],
  authors: [{ name: 'MedSys', url: 'https://www.medsys.com.br' }],
  creator: 'Teu Médico - teumed.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.medsys.com.br',
    siteName: 'MedSys',
    title: 'MedSys - Software Médico na Nuvem',
    description:
      'Gerencie seu consultório de qualquer lugar. Prontuário, agenda e financeiro integrados.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MedSys - Software Médico na Nuvem'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedSys - Software Médico na Nuvem',
    description: 'Gerencie seu consultório de qualquer lugar.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <JsonLd />
      </body>
    </html>
  )
}
