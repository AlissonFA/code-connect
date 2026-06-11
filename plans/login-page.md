# Página de Login - CodeConnect

Implementar a página de Login do CodeConnect seguindo o layout fornecido, utilizando Atomic Design, TailwindCSS, e preparando a estrutura para reuso na futura página de cadastro.

## User Review Required

> [!IMPORTANT]
> O projeto frontend está em estado **scaffold padrão do Vite**. Será necessário instalar e configurar:
> - **TailwindCSS v4** (via `@tailwindcss/vite`)
> - **React Router v7** (para navegação entre Login e futura página de Cadastro)
> - **Vitest + Testing Library** (para cobertura de testes de componentes)

> [!WARNING]
> Os arquivos padrão do Vite ([App.css](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/App.css), [App.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/App.tsx)) serão **substituídos**.

## Proposed Changes

### 1. Infraestrutura & Configuração

#### [MODIFY] [package.json](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/package.json)
Instalar dependências:
- `tailwindcss`, `@tailwindcss/vite` — estilização
- `react-router-dom` — rotas
- `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom` — testes

#### [MODIFY] [vite.config.ts](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/vite.config.ts)
Adicionar o plugin `@tailwindcss/vite` ao Vite.

#### [MODIFY] [index.css](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/index.css)
Adicionar o import do TailwindCSS v4: `@import "tailwindcss";`

#### [DELETE] [App.css](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/App.css)
Arquivo de estilo padrão do Vite será removido.

#### [MODIFY] [index.html](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/index.html)
- Atualizar `<title>` para "CodeConnect"
- Importar fonte **Inter** do Google Fonts
- Atualizar `lang` para `pt-BR`

#### [NEW] [vitest.setup.ts](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/vitest.setup.ts)
Setup de testes com `@testing-library/jest-dom`.

#### [MODIFY] [tsconfig.app.json](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/tsconfig.app.json)
Adicionar types do Vitest ao compilador TS.

---

### 2. Atoms (Elementos fundamentais)

#### [NEW] [Input.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Input/Input.tsx)
Campo de input reutilizável com:
- Props: `label`, `type`, `placeholder`, `id`, `name`, `value`, `onChange`
- Estilo dark com borda sutil, foco com anel verde

#### [NEW] [Input.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Input/Input.test.tsx)
Teste de renderização e interação do Input.

#### [NEW] [Button.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Button/Button.tsx)
Botão primário reutilizável com:
- Props: `children`, `type`, `variant` (`primary` | `link`), `onClick`
- Variante primária: fundo verde (#22C55E), hover com brilho
- Variante link: texto verde sublinhado

#### [NEW] [Button.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Button/Button.test.tsx)
Teste de renderização e click handler.

#### [NEW] [Checkbox.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Checkbox/Checkbox.tsx)
Checkbox estilizado com label.
- Props: `label`, `id`, `checked`, `onChange`

#### [NEW] [Checkbox.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Checkbox/Checkbox.test.tsx)
Teste de renderização e toggle.

#### [NEW] [Divider.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Divider/Divider.tsx)
Divisor horizontal com texto central ("ou entre com outras contas").
- Props: `text`

#### [NEW] [Divider.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Divider/Divider.test.tsx)
Teste de renderização com texto.

#### [NEW] [SocialButton.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/SocialButton/SocialButton.tsx)
Botão social com ícone e label.
- Props: `icon` (path da imagem), `label`, `onClick`

#### [NEW] [SocialButton.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/SocialButton/SocialButton.test.tsx)
Teste de renderização com ícone e label.

---

### 3. Molecules (Combinações de átomos)

#### [NEW] [SocialLoginGroup.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/molecules/SocialLoginGroup/SocialLoginGroup.tsx)
Grupo de botões sociais (Github + Gmail) com o Divider acima.

#### [NEW] [SocialLoginGroup.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/molecules/SocialLoginGroup/SocialLoginGroup.test.tsx)
Teste de renderização do grupo completo.

---

### 4. Organisms (Seções da interface)

#### [NEW] [LoginForm.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/LoginForm/LoginForm.tsx)
Formulário de login completo contendo:
- Título "Login" + subtítulo "Boas-vindas! Faça seu login."
- Input de email/usuário
- Input de senha
- Checkbox "Lembrar-me" + link "Esqueci a senha"
- Botão "Login →"
- SocialLoginGroup
- Link "Crie seu cadastro!"

#### [NEW] [LoginForm.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/LoginForm/LoginForm.test.tsx)
Teste de renderização do formulário completo e submissão.

#### [NEW] [AuthBanner.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/AuthBanner/AuthBanner.tsx)
Banner lateral reutilizável (Login e Cadastro usam banners diferentes).
- Props: `imageSrc`, `alt`
- Exibe a imagem com `object-cover` e bordas arredondadas à esquerda

#### [NEW] [AuthBanner.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/AuthBanner/AuthBanner.test.tsx)
Teste de renderização com a imagem correta.

---

### 5. Templates (Estrutura de layout)

#### [NEW] [AuthTemplate.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/templates/AuthTemplate/AuthTemplate.tsx)
Layout reutilizável para páginas de autenticação (Login e Cadastro):
- Background escuro (#0B1120) com decorações de fundo (shapes "C" estilizados)
- Card centralizado com grid de 2 colunas:
  - Slot esquerdo: banner (recebe `ReactNode`)
  - Slot direito: formulário (recebe `ReactNode`)
- Responsividade: em mobile, o banner fica escondido

#### [NEW] [AuthTemplate.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/templates/AuthTemplate/AuthTemplate.test.tsx)
Teste de renderização dos slots.

---

### 6. Pages

#### [NEW] [LoginPage.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/pages/LoginPage/LoginPage.tsx)
Página de Login que compõe:
- `AuthTemplate` como layout
- `AuthBanner` com `login-banner.png`
- `LoginForm`

#### [NEW] [LoginPage.test.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/pages/LoginPage/LoginPage.test.tsx)
Teste de renderização da página completa.

---

### 7. Routing & Entry Point

#### [NEW] [Router.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/Router.tsx)
Configuração de rotas com React Router:
- `/login` → `LoginPage`
- `/` → redirect para `/login`

#### [MODIFY] [App.tsx](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/App.tsx)
Substituir conteúdo padrão pelo `RouterProvider`.

---

## Estrutura Final de Pastas

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Checkbox/
│   │   ├── Divider/
│   │   ├── Input/
│   │   └── SocialButton/
│   ├── molecules/
│   │   └── SocialLoginGroup/
│   ├── organisms/
│   │   ├── AuthBanner/
│   │   └── LoginForm/
│   └── templates/
│       └── AuthTemplate/
├── pages/
│   └── LoginPage/
├── App.tsx
├── Router.tsx
├── main.tsx
└── index.css
```

## Reuso para Página de Cadastro (futuro)

A página de cadastro reutilizará:
- `AuthTemplate` — mesmo layout base
- `AuthBanner` — com uma imagem diferente (`signup-banner.png`)
- `SocialLoginGroup` — mesmos botões sociais
- Atoms (`Input`, `Button`, `Checkbox`) — mesmos componentes

Apenas será necessário criar um novo **`SignupForm`** (organism) e uma nova **`SignupPage`** (page).

---

## Verification Plan

### Automated Tests
```bash
pnpm --filter web vitest run
```

### Manual Verification
- `pnpm dev:web` e verificar visualmente a página de login no navegador
- Confirmar que o layout corresponde ao mockup fornecido
- Testar responsividade (mobile: banner oculto)
