# MedSys - Software Médico na Nuvem

Landing page moderna, responsiva e de alta conversão desenvolvida para o SaaS **MedSys**. Focada em apresentar a solução de gestão para clínicas e consultórios com uma experiência de usuário premium.

![MedSys Cover](/public/assets/dashboard-main.png)

## 🚀 Tecnologias

Este projeto utiliza as tecnologias mais recentes do ecossistema React:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes**: [ShadCN UI](https://ui.shadcn.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Integrações**: Formspree (Contato), Google Analytics 4

## ✨ Funcionalidades

- **Design Premium**: Interface limpa, moderna e totalmente responsiva.
- **Dark Mode**: Suporte nativo a temas Claro e Escuro.
- **Animações Suaves**: Elementos com entrada animada e micro-interações.
- **Seções Completas**:
  - Hero com CTA de alta conversão.
  - Apresentação de Funcionalidades e Benefícios.
  - Tabela de Preços interativa (Mensal/Anual).
  - Prova Social (Depoimentos).
  - FAQ (Perguntas Frequentes).
- **Formulário de Contato**: Integrado com Formspree e validação Zod.
- **Botão WhatsApp**: Flutuante e animado para contato rápido.
- **SEO Otimizado**: Meta tags, Open Graph e JSON-LD configurados.

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18 ou superior
- npm ou pnpm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JoelsonLopes/medsys.git
cd medsys
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
NEXT_PUBLIC_FORMSPREE_ID=seu_id_aqui
NEXT_PUBLIC_GA_ID=seu_id_ga4_aqui
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará rodando em `http://localhost:3000`.

## 📦 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o ESLint.
- `npm run format`: Formata o código com Prettier.
- `npm run qa`: Executa todos os testes de qualidade (Lint, Format, Types, Tests).

## 📂 Estrutura do Projeto

```
src/
├── app/              # Rotas e Layouts (Next.js App Router)
├── components/       # Componentes React
│   ├── ui/           # Componentes Base (ShadCN)
│   ├── shared/       # Componentes Compartilhados (Navbar, Footer, etc)
│   ├── sections/     # Seções da Landing Page
│   └── forms/        # Formulários
├── lib/              # Utilitários e Configurações
└── styles/           # Estilos Globais
```

## 📄 Licença

Todos os direitos reservados © 2024 MedSys.
