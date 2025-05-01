# Sistema de Gestão de Condomínio

Este projeto é um sistema moderno de gestão de condomínio desenvolvido com Next.js, oferecendo uma interface completa para administradores e moradores gerenciarem diversos aspectos do condomínio.

## Arquitetura do Projeto

### Estrutura Tecnológica

- **Framework**: Next.js 15.2.4 com React 19
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: Shadcn UI (baseado em Radix UI)
- **Formulários**: React Hook Form com validação Zod
- **Estado**: React Hooks e Context API

### Estrutura de Diretórios

```
condominio/
├── app/                    # Rotas da aplicação (Next.js App Router)
│   ├── admin/              # Área administrativa
│   │   ├── actions.ts      # Server Actions da área admin
│   │   ├── components/     # Componentes específicos da área admin
│   │   │   ├── admin-header.tsx
│   │   │   ├── admin-sidebar.tsx
│   │   │   └── admin-footer.tsx
│   │   ├── help/           # Página de ajuda
│   │   │   ├── actions.ts  # Server Actions específicos da página de ajuda
│   │   │   ├── components/ # Componentes específicos da página de ajuda
│   │   │   └── page.tsx    # Página de ajuda
│   │   ├── settings/       # Página de configurações
│   │   │   ├── actions.ts  # Server Actions específicos das configurações
│   │   │   ├── components/ # Componentes específicos das configurações
│   │   │   └── page.tsx    # Página de configurações
│   │   ├── layout.tsx      # Layout da área administrativa
│   │   └── page.tsx        # Página principal da área admin
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── components/             # Biblioteca de componentes
│   ├── providers/          # Provedores de contexto
│   ├── shared/             # Componentes compartilhados
│   │   ├── badges/         # Badges para status, prioridade, etc.
│   │   └── ...
│   └── ui/                 # Componentes de UI base (Shadcn)
│       ├── button.tsx
│       ├── sidebar.tsx     # Componente de sidebar configurável
│       └── ...
├── hooks/                  # Custom hooks
├── lib/                    # Funções utilitárias
├── public/                 # Arquivos estáticos
└── styles/                 # Estilos adicionais
```

## Arquitetura de Componentes

### Componentes Globais vs. Específicos

O projeto segue uma estrutura clara para organização de componentes:

1. **Componentes UI Base** (`/components/ui/`):
   - Implementações do Shadcn UI com customizações
   - Componentes reutilizáveis e configuráveis como Button, Sidebar, Dialog
   - Design system consistente com variações via class-variance-authority

2. **Componentes Compartilhados** (`/components/shared/`):
   - Componentes de alto nível compostos a partir dos componentes UI
   - Badges, diálogos acessíveis e outros elementos compartilhados

3. **Componentes Específicos** (`/app/admin/components/`):
   - AdminSidebar, AdminHeader, AdminFooter
   - Componentes específicos para as diferentes áreas da aplicação

### Arquitetura Modular por Página

O projeto adota uma arquitetura modular onde cada página ou funcionalidade conta com sua própria estrutura encapsulada:

1. **Actions por Página**: 
   - Cada seção/página possui seu próprio arquivo de Server Actions
   - `/app/admin/actions.ts`: Define ações para área administrativa (ex: `getUserData()`)
   - `/app/admin/help/actions.ts`: Ações específicas para página de ajuda
   - `/app/admin/settings/actions.ts`: Ações específicas para configurações

2. **Componentes por Página**:
   - Cada seção possui pasta de componentes dedicada com elementos utilizados apenas naquele contexto
   - Componentes são encapsulados no escopo de sua funcionalidade
   - Reduz acoplamento e facilita manutenção

Esta abordagem modular melhora:
- **Separação de responsabilidades**: Cada módulo cuida apenas de suas funcionalidades
- **Reutilização localizada**: Componentes são mantidos próximos de seu uso
- **Manutenibilidade**: Facilita encontrar e modificar código relacionado
- **Escalabilidade**: Novas páginas seguem a mesma estrutura padrão

## Layout Responsivo

A aplicação implementa um design responsivo com:

- **Sidebar Colapsável**: Interface que se adapta a diferentes tamanhos de tela
- **Layout Adaptativo**: Comportamentos diferentes para desktop e mobile
- **Componente Sidebar Avançado**: Configurável com múltiplas variantes
  - Controlável via estado
  - Suporte para navegação aninhada
  - Persistência de estado via cookies

## Temas e Estilização

- **Temas Claro/Escuro**: Via ThemeProvider
- **Tailwind CSS**: Framework principal de estilização
- **Variáveis CSS**: Sistema de design tokens para consistência visual

## Características Avançadas

- **Hooks Personalizados**: useToast, useMobile para lógica reutilizável
- **Acessibilidade**: Implementações acessíveis para diálogos e navegação
- **Animações**: Transições suaves para melhor experiência do usuário

## Serviços

O projeto utiliza Docker para provisionar os serviços necessários:

- **PostgreSQL**: Banco de dados relacional
- **Adminer**: Interface web para gerenciar o banco de dados
- **Mailcatcher**: Servidor SMTP para testes de email

Para gerenciar os serviços, use os scripts NPM:

```bash
# Iniciar app com todos os serviços
npm run dev:all

# Iniciar apenas os containers
npm run services:up

# Parar containers
npm run services:down

# Ver logs
npm run services:logs

# Reiniciar todos os serviços
npm run services:restart

# Reiniciar apenas o banco de dados
npm run db:reset

# Abrir Adminer no navegador
npm run db:adminer

# Abrir Mailcatcher no navegador
npm run mail:view
```

Acesse:
- **Adminer**: [http://localhost:8080](http://localhost:8080)
- **Mailcatcher**: [http://localhost:1080](http://localhost:1080)

## Execução do Projeto

```bash
# Copiar variáveis de ambiente
cp .env.development.example .env.development

# Instalar dependências
npm install
# ou
pnpm install

# Executar em desenvolvimento
npm run dev
# ou
pnpm dev

# Construir para produção
npm run build
# ou
pnpm build
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.