# PRD - Landing Page MedSys Brasil

## 📋 Informações do Documento

| Campo       | Valor                      |
| ----------- | -------------------------- |
| **Projeto** | Landing Page MedSys Brasil |
| **Versão**  | 1.0.0                      |
| **Data**    | Novembro 2025              |
| **Status**  | Draft                      |
| **Cliente** | MedSys Ltda                |
| **Contato** | suporte@medsys.com.br      |

---

## 1. Visão Geral do Projeto

### 1.1 Objetivo

Desenvolver uma landing page moderna, tecnológica e de alta conversão para o software médico MedSys, substituindo o site atual em reformulação. A página deve transmitir confiança, inovação e profissionalismo para profissionais de saúde.

### 1.2 Problema a Resolver

- Site atual desatualizado e em reformulação
- Necessidade de aumentar conversões (leads e demonstrações)
- Posicionamento competitivo frente a concorrentes como iClinic, Feegow e GestãoDS
- Comunicar valor do produto de forma clara e impactante

### 1.3 Público-Alvo

| Segmento                | Descrição                              | Necessidade Principal          |
| ----------------------- | -------------------------------------- | ------------------------------ |
| Médicos Autônomos       | Consultório próprio, 1-3 profissionais | Simplicidade e custo-benefício |
| Pequenas Clínicas       | 3-10 profissionais                     | Gestão integrada e agendamento |
| Médias/Grandes Clínicas | 10+ profissionais                      | Escalabilidade e relatórios    |
| Médicos Itinerantes     | Múltiplos locais de atendimento        | Acesso mobile e cloud          |
| Em Transição Digital    | Saindo do papel para digital           | Facilidade de uso              |

---

## 2. Stack Tecnológica

### 2.1 Core Stack

| Tecnologia       | Versão            | Justificativa                            |
| ---------------- | ----------------- | ---------------------------------------- |
| **Next.js**      | 15.x (App Router) | SSR/SSG, performance, SEO otimizado      |
| **React**        | 19.x              | Hooks, Server Components                 |
| **TypeScript**   | 5.x               | Type safety, DX melhorada                |
| **Tailwind CSS** | 4.x               | Utility-first, design system consistente |
| **ShadCN/UI**    | Latest            | Componentes acessíveis e customizáveis   |

### 2.2 Bibliotecas para UI Moderna e Tecnológica

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "tailwindcss": "^4.0.0",

    "framer-motion": "^11.0.0",
    "lucide-react": "^0.460.0",
    "next-themes": "^0.4.0",

    "embla-carousel-react": "^8.0.0",
    "react-intersection-observer": "^9.0.0",

    "@formspree/react": "^2.5.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.23.0",

    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "class-variance-authority": "^0.7.0"
  }
}
```

### 2.3 Bibliotecas para Efeitos Visuais Tecnológicos

| Biblioteca                   | Uso                   | Efeito                            |
| ---------------------------- | --------------------- | --------------------------------- |
| **@tsparticles/react**       | Background interativo | Partículas flutuantes estilo tech |
| **aceternity-ui**            | Componentes premium   | Spotlight, 3D cards, gradientes   |
| **tailwindcss-animate**      | Animações CSS         | Fade, slide, bounce nativos       |
| **@splinetool/react-spline** | 3D elements           | Modelos 3D interativos (opcional) |

### 2.4 Ferramentas de Desenvolvimento

| Ferramenta          | Propósito    |
| ------------------- | ------------ |
| ESLint + Prettier   | Code quality |
| Husky + lint-staged | Git hooks    |
| Vitest              | Unit testing |
| Playwright          | E2E testing  |

---

## 3. Arquitetura do Projeto

### 3.1 Estrutura de Pastas

```
medsys-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── ui/                    # ShadCN components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   │
│   │   ├── sections/              # Seções da landing
│   │   │   ├── hero-section.tsx
│   │   │   ├── problem-section.tsx
│   │   │   ├── solution-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── benefits-section.tsx
│   │   │   ├── how-it-works-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── pricing-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   ├── cta-section.tsx
│   │   │   └── footer-section.tsx
│   │   │
│   │   ├── shared/                # Componentes reutilizáveis
│   │   │   ├── navbar.tsx
│   │   │   ├── logo.tsx
│   │   │   ├── section-header.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   ├── pricing-card.tsx
│   │   │   ├── faq-accordion.tsx
│   │   │   └── contact-form.tsx
│   │   │
│   │   └── effects/               # Efeitos visuais
│   │       ├── particles-bg.tsx
│   │       ├── gradient-blur.tsx
│   │       ├── floating-elements.tsx
│   │       ├── spotlight.tsx
│   │       └── animated-grid.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts               # cn() e helpers
│   │   ├── constants.ts           # Dados estáticos
│   │   └── validations.ts         # Schemas Zod
│   │
│   ├── hooks/
│   │   ├── use-scroll-animation.ts
│   │   ├── use-intersection.ts
│   │   └── use-media-query.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── styles/
│       └── animations.css
│
├── public/
│   ├── images/
│   │   ├── hero-mockup.webp
│   │   ├── features/
│   │   └── testimonials/
│   ├── icons/
│   └── og-image.png
│
├── .env.local
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### 3.2 Padrões de Código

```typescript
// Exemplo de componente seguindo padrões

// 1. Imports organizados
import { type FC } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// 2. Interface tipada
interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

// 3. Componente funcional com tipos explícitos
export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'group relative rounded-2xl border border-border/50',
        'bg-card/50 backdrop-blur-sm p-6',
        'hover:border-primary/50 transition-colors duration-300',
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
```

---

## 4. Design System

### 4.1 Paleta de Cores

```typescript
// tailwind.config.ts
const colors = {
  // Cores principais - Azul médico tecnológico
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Principal
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },

  // Secundária - Verde saúde/sucesso
  secondary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    500: '#10b981', // Principal
    600: '#059669',
    700: '#047857'
  },

  // Accent - Cyan tecnológico
  accent: {
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2'
  },

  // Backgrounds
  background: {
    DEFAULT: '#ffffff',
    dark: '#0a0a0f',
    card: '#f8fafc',
    cardDark: '#111827'
  }
}
```

### 4.2 Tipografia

```typescript
// Fontes recomendadas para visual tecnológico

// Headings: Inter ou Plus Jakarta Sans (moderna, tech)
// Body: Inter (legibilidade)
// Accent/Numbers: JetBrains Mono (código, dados)

import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta'
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})
```

### 4.3 Espaçamentos e Grid

```css
/* Sistema de espaçamento consistente */
:root {
  --section-padding-y: clamp(4rem, 10vw, 8rem);
  --section-padding-x: clamp(1rem, 5vw, 2rem);
  --container-max-width: 1280px;
  --content-max-width: 720px;
}
```

### 4.4 Efeitos Visuais Tecnológicos

| Efeito                | Onde Usar           | Implementação                 |
| --------------------- | ------------------- | ----------------------------- |
| **Gradient Mesh**     | Hero background     | CSS radial-gradients animados |
| **Glassmorphism**     | Cards, navbar       | backdrop-blur + bg-opacity    |
| **Glow Effects**      | Botões, cards hover | box-shadow com cor primary    |
| **Grid Pattern**      | Backgrounds         | SVG pattern ou CSS grid       |
| **Particles**         | Hero section        | tsparticles                   |
| **Spotlight**         | Mouse follow        | Gradient radial no cursor     |
| **Animated Border**   | Cards destaque      | Gradient conic animado        |
| **Floating Elements** | Decorativos         | Framer motion + CSS           |

---

## 5. Estrutura das Seções

### 5.1 Navbar (Fixa)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]     Funcionalidades  Benefícios  Preços  FAQ   [CTA]   │
│             ─────────────────────────────────────────  ┌─────┐ │
│                                                        │Teste│ │
│                                                        │Grátis│ │
│                                                        └─────┘ │
└─────────────────────────────────────────────────────────────────┘

Comportamento:
- Glassmorphism quando scrollar (backdrop-blur)
- Shrink suave no scroll
- Mobile: Hamburger menu com drawer
```

### 5.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                      [Particles Background]                      │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  Badge: "✨ Software médico na nuvem"                       ││
│  │                                                             ││
│  │  # Seu consultório na                                       ││
│  │    palma da mão                                             ││
│  │                                                             ││
│  │  Prontuário eletrônico, agenda inteligente                  ││
│  │  e gestão financeira em um só lugar.                        ││
│  │  Acesse de qualquer dispositivo, a qualquer hora.           ││
│  │                                                             ││
│  │  [🚀 Começar Teste Grátis]  [▶ Ver Demonstração]           ││
│  │                                                             ││
│  │  ✓ 14 dias grátis  ✓ Sem cartão  ✓ Cancele quando quiser   ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│              ┌─────────────────────────────┐                    │
│              │      [Mockup do Sistema]     │                    │
│              │     Dashboard/Prontuário     │                    │
│              │      com efeito 3D/float     │                    │
│              └─────────────────────────────┘                    │
│                                                                 │
│  ───────────── Trusted by 500+ Clínicas ─────────────          │
│  [Logo1]  [Logo2]  [Logo3]  [Logo4]  [Logo5]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Background: Gradient mesh animado + particles sutis
- Headline: Texto com gradient animado ou typewriter effect
- Mockup: Imagem com parallax ou 3D tilt no hover
- Badges: Animação de entrada staggered
- Stats: Contadores animados (500+ clínicas, 10k+ pacientes)

### 5.3 Problem Section (Pain Points)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│       Você ainda enfrenta esses problemas?                      │
│                                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │ 📋        │  │ 📅        │  │ 💸        │  │ 🔒        │   │
│  │ Pilhas de │  │ Agenda    │  │ Finanças  │  │ Dados em  │   │
│  │ papéis e  │  │ confusa e │  │ desorgani-│  │ risco sem │   │
│  │ prontuá-  │  │ pacientes │  │ zadas e   │  │ backup    │   │
│  │ rios      │  │ esquecidos│  │ sem       │  │ seguro    │   │
│  │ perdidos  │  │           │  │ controle  │  │           │   │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘   │
│                                                                 │
│  "Médicos perdem em média 2h por dia com tarefas               │
│   administrativas que poderiam ser automatizadas"               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Cards com ícones em vermelho/laranja (cor de "problema")
- Animação: Fade in on scroll, staggered
- Quote com destaque visual

### 5.4 Solution Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│       O MedSys resolve tudo isso para você                      │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  [Screenshot interativo do sistema]                      │  │
│  │                                                          │  │
│  │  ┌─────┐  ← Clique para ver: Prontuário                 │  │
│  │  └─────┘  ← Clique para ver: Agenda                     │  │
│  │           ← Clique para ver: Financeiro                 │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│        De                    Para                               │
│   ┌──────────┐          ┌──────────┐                           │
│   │ Papelada │    →     │ 100%     │                           │
│   │ e caos   │          │ Digital  │                           │
│   └──────────┘          └──────────┘                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.5 Features Section (Funcionalidades)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│          Tudo que você precisa em um só lugar                   │
│                                                                 │
│  [Tabs: Prontuário | Agenda | Financeiro | Telemedicina]       │
│  ════════════════                                               │
│                                                                 │
│  ┌──────────────────────┬──────────────────────────────────┐   │
│  │                      │                                  │   │
│  │  Prontuário          │  ┌─────────────────────────────┐│   │
│  │  Eletrônico          │  │                             ││   │
│  │                      │  │    [Screenshot/Animação]    ││   │
│  │  ✓ Histórico         │  │    do módulo selecionado    ││   │
│  │    completo          │  │                             ││   │
│  │                      │  │                             ││   │
│  │  ✓ Anamnese          │  └─────────────────────────────┘│   │
│  │    personalizada     │                                  │   │
│  │                      │                                  │   │
│  │  ✓ Anexos de         │                                  │   │
│  │    exames            │                                  │   │
│  │                      │                                  │   │
│  └──────────────────────┴──────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Funcionalidades a destacar:

📋 PRONTUÁRIO ELETRÔNICO
- Histórico médico integrado
- Anamnese digital personalizável
- Anexo de exames e documentos
- Prescrição eletrônica
- Modelos de documentos

📅 AGENDAMENTO INTELIGENTE
- Agenda online 24/7
- Confirmação automática (SMS/WhatsApp)
- Múltiplas agendas
- Integração Google Calendar
- Controle de faltas

💰 GESTÃO FINANCEIRA
- Fluxo de caixa
- Faturamento convênios (TISS)
- Emissão de NF-e
- Relatórios gerenciais
- Controle de inadimplência

🎥 TELEMEDICINA
- Teleconsulta integrada
- Videochamada criptografada
- Conformidade CFM
- Prescrição digital
```

### 5.6 Benefits Section (3 Pilares)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│               Por que escolher o MedSys?                        │
│                                                                 │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│  │      ☁️         │ │      🔒         │ │      🔗         │   │
│  │                 │ │                 │ │                 │   │
│  │  ACESSIBILIDADE │ │   SEGURANÇA     │ │   INTEGRAÇÃO    │   │
│  │                 │ │                 │ │                 │   │
│  │  Acesse de      │ │  Dados          │ │  Todas as       │   │
│  │  qualquer       │ │  criptografados │ │  informações    │   │
│  │  dispositivo,   │ │  e backups      │ │  em um único    │   │
│  │  em qualquer    │ │  automáticos    │ │  lugar          │   │
│  │  lugar          │ │  diários        │ │  integrado      │   │
│  │                 │ │                 │ │                 │   │
│  │  [Ícone mobile] │ │  [Ícone shield] │ │  [Ícone dados]  │   │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘   │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  💡 "Com o MedSys, você ganha em média 2 horas por dia   │  │
│  │      para focar no que realmente importa: seus pacientes" │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Cards com efeito glassmorphism
- Ícones animados (Lottie ou SVG animado)
- Hover: Efeito glow + scale sutil

### 5.7 How It Works Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            Comece a usar em 3 passos simples                    │
│                                                                 │
│        ①                    ②                    ③             │
│   ┌─────────┐          ┌─────────┐          ┌─────────┐        │
│   │  📝     │   ───→   │  ⚙️     │   ───→   │  🚀     │        │
│   │         │          │         │          │         │        │
│   │ Cadastre│          │Configure│          │ Comece  │        │
│   │         │          │         │          │ a usar! │        │
│   └─────────┘          └─────────┘          └─────────┘        │
│                                                                 │
│   Crie sua conta      Importe seus         Gerencie tudo       │
│   em 2 minutos        pacientes            em um só lugar      │
│                                                                 │
│                    [Começar Agora →]                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Steps conectados com linha animada (draw on scroll)
- Números com circle + gradient border
- Animação sequencial no scroll

### 5.8 Testimonials Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         O que nossos clientes dizem                             │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │                                                        │    │
│  │  ⭐⭐⭐⭐⭐                                              │    │
│  │                                                        │    │
│  │  "O MedSys transformou a gestão do meu consultório.   │    │
│  │   Economizo horas por semana e meus pacientes         │    │
│  │   adoram o agendamento online."                       │    │
│  │                                                        │    │
│  │  ┌─────┐  Dr. João Silva                              │    │
│  │  │     │  Cardiologista - Porto Alegre/RS             │    │
│  │  │ 👤  │  Usando MedSys há 2 anos                     │    │
│  │  └─────┘                                              │    │
│  │                                                        │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│      ●  ○  ○  ○  ○       [←]  [→]                              │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ ⭐ 4.9   │ │ 500+     │ │ 50k+     │ │ 98%      │          │
│  │ Avaliação│ │ Clínicas │ │ Pacientes│ │Satisfação│          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Carousel com Embla (touch-friendly)
- Cards com foto + depoimento + credenciais
- Stats com counter animado
- Auto-play com pause on hover

### 5.9 Pricing Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              Planos que cabem no seu bolso                      │
│                                                                 │
│   [Toggle: Mensal / Anual (20% OFF)]                           │
│                                                                 │
│  ┌──────────────┐  ┌──────────────────┐  ┌──────────────┐      │
│  │   STARTER    │  │   PROFISSIONAL   │  │  CLÍNICA     │      │
│  │              │  │   ⭐ POPULAR     │  │              │      │
│  │  R$ 97/mês   │  │   R$ 197/mês     │  │  R$ 397/mês  │      │
│  │              │  │   ████████████   │  │              │      │
│  │  Ideal para  │  │   Ideal para     │  │  Ideal para  │      │
│  │  médicos     │  │   consultórios   │  │  clínicas    │      │
│  │  autônomos   │  │   em crescimento │  │  maiores     │      │
│  │              │  │                  │  │              │      │
│  │  ✓ 1 usuário │  │  ✓ 3 usuários    │  │  ✓ Ilimitado │      │
│  │  ✓ 200 pac.  │  │  ✓ 1000 pac.     │  │  ✓ Ilimitado │      │
│  │  ✓ Prontuário│  │  ✓ Tudo Starter  │  │  ✓ Tudo Pro  │      │
│  │  ✓ Agenda    │  │  ✓ Telemedicina  │  │  ✓ API       │      │
│  │  ✓ Financeiro│  │  ✓ WhatsApp      │  │  ✓ Suporte   │      │
│  │              │  │  ✓ Relatórios    │  │    prioritário│      │
│  │              │  │                  │  │  ✓ Multi-    │      │
│  │              │  │                  │  │    unidades  │      │
│  │              │  │                  │  │              │      │
│  │ [Começar]    │  │ [Teste Grátis]   │  │ [Falar c/    │      │
│  │              │  │                  │  │  Vendas]     │      │
│  └──────────────┘  └──────────────────┘  └──────────────┘      │
│                                                                 │
│  💳 Aceitamos: PIX, Cartão, Boleto                             │
│  🔒 Garantia de 30 dias ou seu dinheiro de volta               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Plano popular com destaque (border gradient, badge)
- Toggle mensal/anual com animação de preço
- Comparison table expandível (opcional)
- Badge "Mais Popular" com animação

### 5.10 FAQ Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│               Perguntas Frequentes                              │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ▼  Preciso instalar algum programa?                     │  │
│  │     ────────────────────────────────────────────────────│  │
│  │     Não! O MedSys funciona 100% na nuvem. Basta         │  │
│  │     acessar pelo navegador de qualquer dispositivo.     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ▶  Meus dados estão seguros?                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ▶  Posso importar dados de outro sistema?               │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ▶  Vocês oferecem suporte técnico?                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ▶  Posso cancelar a qualquer momento?                   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│            Ainda tem dúvidas? [Fale Conosco]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Accordion com animação suave (Radix/ShadCN)
- Ícone rotativo no expand
- Search opcional para muitas perguntas

### 5.11 CTA Final Section

```
┌─────────────────────────────────────────────────────────────────┐
│  ████████████████████████████████████████████████████████████  │
│  █                                                           █  │
│  █     Pronto para transformar seu consultório?              █  │
│  █                                                           █  │
│  █     Comece seu teste grátis de 14 dias hoje mesmo         █  │
│  █                                                           █  │
│  █     ┌─────────────────────────────────────────────────┐   █  │
│  █     │                                                 │   █  │
│  █     │  Nome: [________________________]               │   █  │
│  █     │                                                 │   █  │
│  █     │  E-mail: [______________________]               │   █  │
│  █     │                                                 │   █  │
│  █     │  WhatsApp: [____________________]               │   █  │
│  █     │                                                 │   █  │
│  █     │  Especialidade: [▼ Selecione___]                │   █  │
│  █     │                                                 │   █  │
│  █     │        [🚀 Começar Teste Grátis]                │   █  │
│  █     │                                                 │   █  │
│  █     └─────────────────────────────────────────────────┘   █  │
│  █                                                           █  │
│  █     ✓ Sem cartão de crédito  ✓ Setup em 5 minutos       █  │
│  █                                                           █  │
│  ████████████████████████████████████████████████████████████  │
└─────────────────────────────────────────────────────────────────┘
```

**Especificações:**

- Background com gradient forte (primary → accent)
- Form integrado com Formspree
- Validação com React Hook Form + Zod
- Loading state animado no submit
- Success message com confetti (opcional)

### 5.12 Footer Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Logo MedSys]                                                  │
│                                                                 │
│  Software médico na nuvem                                       │
│  que simplifica sua gestão                                      │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  PRODUTO           EMPRESA          SUPORTE          LEGAL     │
│  ─────────         ───────          ───────          ─────     │
│  Funcionalidades   Sobre nós        Central Ajuda    Termos    │
│  Preços            Blog             Contato          Privacidade│
│  Integrações       Carreiras        WhatsApp         LGPD      │
│  Atualizações      Imprensa         Tutoriais        Cookies   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  📍 Rio Grande do Sul, Brasil                                   │
│  📞 (51) 99961-7746                                             │
│  ✉️  suporte@medsys.com.br                                      │
│                                                                 │
│  [LinkedIn] [Instagram] [YouTube] [WhatsApp]                   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  © 2025 MedSys. Desenvolvido por Teu Médico (teumed.com.br)   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Componentes de Efeitos Visuais

### 6.1 Particles Background (Hero)

```typescript
// components/effects/particles-bg.tsx
'use client'

import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: '#3b82f6' },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            outModes: 'bounce'
          },
          links: {
            enable: true,
            distance: 150,
            color: '#3b82f6',
            opacity: 0.2,
            width: 1
          }
        },
        detectRetina: true
      }}
    />
  )
}
```

### 6.2 Gradient Blur Background

```typescript
// components/effects/gradient-blur.tsx
export function GradientBlur() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80
                   bg-primary/30 rounded-full blur-[100px]
                   animate-blob"
      />
      {/* Blob 2 */}
      <div
        className="absolute top-40 -left-40 w-80 h-80
                   bg-secondary/30 rounded-full blur-[100px]
                   animate-blob animation-delay-2000"
      />
      {/* Blob 3 */}
      <div
        className="absolute bottom-40 right-20 w-80 h-80
                   bg-accent/20 rounded-full blur-[100px]
                   animate-blob animation-delay-4000"
      />
    </div>
  )
}
```

### 6.3 Animated Grid Pattern

```css
/* styles/animations.css */
.grid-pattern {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgb(var(--primary) / 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--primary) / 0.05) 1px, transparent 1px);
}

.grid-pattern-animated {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgb(var(--primary) / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--primary) / 0.1) 1px, transparent 1px);
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}
```

### 6.4 Spotlight Effect (Mouse Follow)

```typescript
// components/effects/spotlight.tsx
'use client'

import { useEffect, useRef } from 'react'

export function Spotlight() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0
                   transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(59, 130, 246, 0.1),
            transparent 40%
          )`
        }}
      />
    </div>
  )
}
```

### 6.5 Animated Border Card

```typescript
// components/shared/animated-border-card.tsx
export function AnimatedBorderCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      {/* Animated gradient border */}
      <div
        className="absolute -inset-0.5 bg-linear-to-r from-primary via-secondary to-accent
                   rounded-2xl blur opacity-30 group-hover:opacity-100
                   transition duration-1000 group-hover:duration-200
                   animate-gradient-xy"
      />

      {/* Content */}
      <div className="relative bg-background rounded-2xl p-6">
        {children}
      </div>
    </div>
  )
}
```

---

## 7. Formulário de Contato (Formspree)

### 7.1 Configuração

```typescript
// lib/constants.ts
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

// Campos do formulário
export const FORM_FIELDS = {
  name: 'nome',
  email: 'email',
  phone: 'whatsapp',
  specialty: 'especialidade',
  message: 'mensagem'
}

// Especialidades médicas
export const SPECIALTIES = [
  'Clínico Geral',
  'Cardiologia',
  'Dermatologia',
  'Ginecologia',
  'Pediatria',
  'Ortopedia',
  'Psiquiatria',
  'Neurologia',
  'Oftalmologia',
  'Outra'
] as const
```

### 7.2 Schema de Validação

```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo'),

  email: z.string().email('E-mail inválido'),

  whatsapp: z
    .string()
    .regex(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/, 'WhatsApp inválido')
    .optional(),

  especialidade: z.string().min(1, 'Selecione uma especialidade'),

  mensagem: z.string().max(1000, 'Mensagem muito longa').optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

### 7.3 Componente do Formulário

```typescript
// components/shared/contact-form.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm as useFormspree } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { FORMSPREE_ENDPOINT, SPECIALTIES } from '@/lib/constants'

export function ContactForm() {
  const [formspreeState, sendToFormspree] = useFormspree(FORMSPREE_ENDPOINT)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: '',
      email: '',
      whatsapp: '',
      especialidade: '',
      mensagem: ''
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    await sendToFormspree(data)
  }

  // Success state
  if (formspreeState.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Recebemos seu contato!</h3>
        <p className="text-muted-foreground">
          Nossa equipe entrará em contato em até 24 horas.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Nome */}
      <div>
        <Input
          placeholder="Seu nome completo"
          {...form.register('nome')}
          className="h-12"
        />
        {form.formState.errors.nome && (
          <p className="text-sm text-destructive mt-1">
            {form.formState.errors.nome.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          {...form.register('email')}
          className="h-12"
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive mt-1">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <Input
          placeholder="(00) 00000-0000"
          {...form.register('whatsapp')}
          className="h-12"
        />
      </div>

      {/* Especialidade */}
      <div>
        <Select onValueChange={(value) => form.setValue('especialidade', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Sua especialidade" />
          </SelectTrigger>
          <SelectContent>
            {SPECIALTIES.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-12"
        disabled={formspreeState.submitting}
      >
        {formspreeState.submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Começar Teste Grátis
          </>
        )}
      </Button>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
        <span>✓ Sem cartão</span>
        <span>✓ 14 dias grátis</span>
        <span>✓ Cancele quando quiser</span>
      </div>
    </form>
  )
}
```

---

## 8. SEO e Performance

### 8.1 Metadata

```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medsys.com.br'),

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
  },

  verification: {
    google: 'GOOGLE_VERIFICATION_CODE'
  }
}
```

### 8.2 Structured Data (JSON-LD)

```typescript
// components/structured-data.tsx
export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MedSys',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '97.00',
      priceCurrency: 'BRL'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500'
    },
    author: {
      '@type': 'Organization',
      name: 'MedSys Ltda',
      url: 'https://www.medsys.com.br'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
```

### 8.3 Performance Checklist

| Item                | Implementação                                       |
| ------------------- | --------------------------------------------------- |
| **Images**          | Next/Image com WebP, lazy loading, blur placeholder |
| **Fonts**           | next/font com display: swap                         |
| **CSS**             | Tailwind purge, critical CSS inline                 |
| **JS**              | Code splitting, dynamic imports                     |
| **Caching**         | Static generation (SSG), ISR se necessário          |
| **Core Web Vitals** | LCP < 2.5s, FID < 100ms, CLS < 0.1                  |

```typescript
// Exemplo de otimização de imagem
import Image from 'next/image'

<Image
  src="/images/hero-mockup.webp"
  alt="Dashboard MedSys"
  width={1200}
  height={800}
  priority // Para imagens above the fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  className="object-cover"
/>
```

---

## 9. Acessibilidade (a11y)

### 9.1 Checklist

- [ ] Contraste mínimo 4.5:1 para texto
- [ ] Focus visible em todos elementos interativos
- [ ] Skip to content link
- [ ] Alt text em todas imagens
- [ ] Aria labels em ícones
- [ ] Keyboard navigation completa
- [ ] Reduced motion support
- [ ] Screen reader testing

### 9.2 Implementação

```typescript
// Exemplo de componente acessível
<Button
  aria-label="Iniciar teste grátis do MedSys"
  className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
>
  Começar Teste Grátis
</Button>

// Reduced motion
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Analytics e Tracking

### 10.1 Eventos a Rastrear

| Evento         | Trigger             | Dados                |
| -------------- | ------------------- | -------------------- |
| `page_view`    | Carregamento        | URL, referrer        |
| `cta_click`    | Clique em CTA       | button_text, section |
| `form_start`   | Início do form      | form_name            |
| `form_submit`  | Envio do form       | form_name, fields    |
| `scroll_depth` | 25%, 50%, 75%, 100% | depth_percentage     |
| `feature_view` | Tab de feature      | feature_name         |
| `pricing_view` | Seção pricing       | plan_viewed          |

### 10.2 Implementação

```typescript
// lib/analytics.ts
export const trackEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }

  // Opcional: Outros providers (Mixpanel, Amplitude, etc.)
}

// Uso
<Button onClick={() => {
  trackEvent('cta_click', {
    button_text: 'Começar Teste Grátis',
    section: 'hero'
  })
}}>
  Começar Teste Grátis
</Button>
```

---

## 11. Responsividade

### 11.1 Breakpoints

```typescript
// tailwind.config.ts
const screens = {
  sm: '640px', // Mobile landscape
  md: '768px', // Tablet
  lg: '1024px', // Desktop
  xl: '1280px', // Large desktop
  '2xl': '1536px' // Extra large
}
```

### 11.2 Mobile-First Approach

```typescript
// Exemplo de componente responsivo
<section className="
  py-12 md:py-16 lg:py-24           // Padding vertical
  px-4 md:px-6 lg:px-8              // Padding horizontal
">
  <div className="
    grid
    grid-cols-1                      // Mobile: 1 coluna
    md:grid-cols-2                   // Tablet: 2 colunas
    lg:grid-cols-3                   // Desktop: 3 colunas
    gap-6 md:gap-8
  ">
    {/* Cards */}
  </div>
</section>
```

---

## 12. Deploy e Infraestrutura

### 12.1 Vercel (Recomendado)

```json
// vercel.json
{
  "framework": "nextjs",
  "regions": ["gru1"], // São Paulo
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 12.2 Variáveis de Ambiente

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.medsys.com.br
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Opcionais
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
```

---

## 13. Timeline Estimado

### Fase 1: Setup e Estrutura (2-3 dias)

- [ ] Inicializar projeto Next.js 15
- [ ] Configurar Tailwind + ShadCN
- [ ] Setup ESLint, Prettier, Husky
- [ ] Estrutura de pastas
- [ ] Design tokens (cores, tipografia)

### Fase 2: Componentes Base (3-4 dias)

- [ ] Navbar responsiva
- [ ] Componentes UI (Button, Card, Input, etc.)
- [ ] Efeitos visuais (particles, gradients)
- [ ] Animações base (Framer Motion)

### Fase 3: Seções da Landing (5-7 dias)

- [ ] Hero Section
- [ ] Problem/Solution
- [ ] Features (com tabs)
- [ ] Benefits
- [ ] How it Works
- [ ] Testimonials (carousel)
- [ ] Pricing
- [ ] FAQ
- [ ] CTA Final
- [ ] Footer

### Fase 4: Integrações (2-3 dias)

- [ ] Formulário Formspree
- [ ] Analytics (GA4)
- [ ] SEO/Meta tags
- [ ] Structured Data

### Fase 5: Polish e QA (2-3 dias)

- [ ] Responsividade completa
- [ ] Testes de performance
- [ ] Acessibilidade
- [ ] Cross-browser testing
- [ ] Bug fixes

### Fase 6: Deploy (1 dia)

- [ ] Setup Vercel
- [ ] Configurar domínio
- [ ] SSL/Security headers
- [ ] Monitoramento

**Total Estimado: 15-21 dias úteis**

---

## 14. Checklist de Entrega

### Funcional

- [ ] Todas as seções implementadas
- [ ] Navegação funcionando
- [ ] Formulário enviando dados
- [ ] Links internos/externos funcionando
- [ ] Dark mode (se aplicável)

### Performance

- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Cumulative Layout Shift < 0.1

### SEO

- [ ] Meta tags completas
- [ ] Open Graph configurado
- [ ] Sitemap gerado
- [ ] Robots.txt configurado
- [ ] Structured Data válido

### Acessibilidade

- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader tested
- [ ] Contraste adequado

### Cross-Browser

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile iOS Safari
- [ ] Mobile Chrome

---

## 15. Referências de Design

### Inspirações de Landing Pages Tech/SaaS

1. Linear.app - Clean, minimalista, animações sutis
2. Vercel.com - Gradientes, grid patterns
3. Stripe.com - Gradientes vibrantes, ilustrações
4. Notion.so - Simplicidade, whitespace
5. Raycast.com - Dark mode, glassmorphism

### Recursos

- [Tailwind UI](https://tailwindui.com) - Componentes premium
- [Aceternity UI](https://ui.aceternity.com) - Efeitos modernos
- [Magic UI](https://magicui.design) - Componentes animados
- [Shadcn/UI](https://ui.shadcn.com) - Base components

---

## 16. Contatos e Responsáveis

| Papel            | Nome          | Contato                  |
| ---------------- | ------------- | ------------------------ |
| Cliente          | MedSys Ltda   | suporte@medsys.com.br    |
| Telefone         | -             | (51) 99961-7746          |
| Desenvolvido por | Joelson Lopes | joelsonlopes85@gmail.com |

---

_Documento criado em Novembro/2025_
_Última atualização: v1.0.0_
