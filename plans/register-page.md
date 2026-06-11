# Página de Cadastro - CodeConnect

Implementar a página de Cadastro do CodeConnect seguindo o layout fornecido no Figma, utilizando os princípios de Atomic Design, TailwindCSS, reutilizando a infraestrutura e componentes criados para o fluxo de autenticação e adicionando testes de cobertura essenciais.

## User Review Required

> [!NOTE]
> A página de Cadastro reutiliza os componentes estruturais do fluxo de autenticação já criados, como o [AuthTemplate.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/templates/AuthTemplate/AuthTemplate.tsx) e os componentes de UI comuns: [Input.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Input/Input.tsx), [Button.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/Button/Button.tsx) e [SocialLoginGroup.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/molecules/SocialLoginGroup/SocialLoginGroup.tsx).

## Proposed Changes

### 1. Organisms (Seções da interface)

#### [NEW] [SignupForm.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/SignupForm/SignupForm.tsx)
Formulário de cadastro contendo:
- Título "Cadastro" + subtítulo "Olá! Preencha seus dados."
- Inputs de Nome, E-mail e Senha.
- Botão "Cadastrar →".
- Grupo de login social ([SocialLoginGroup.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/molecules/SocialLoginGroup/SocialLoginGroup.tsx)).
- Link de redirecionamento para a página de Login.

#### [NEW] [SignupForm.test.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/SignupForm/SignupForm.test.tsx)
Teste unitário e de comportamento para o formulário de cadastro, verificando a renderização correta de todos os elementos e a submissão dos dados preenchidos.

---

### 2. Pages

#### [NEW] [SignupPage.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/pages/SignupPage/SignupPage.tsx)
Página de cadastro do usuário que encapsula:
- Layout estruturado no [AuthTemplate.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/templates/AuthTemplate/AuthTemplate.tsx).
- Banner com imagem utilizando o [AuthBanner.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/AuthBanner/AuthBanner.tsx).
- Formulário [SignupForm.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/SignupForm/SignupForm.tsx).
- Definição do `<title>` da aba como `Cadastro | CodeConnect` e atualização da tag `<meta name="description">` para fins de SEO.

#### [NEW] [SignupPage.test.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/pages/SignupPage/SignupPage.test.tsx)
Teste integrado da página de cadastro que garante que ela compõe todos os elementos (Fomulário, Imagem do Banner e Layout) corretamente.

---

### 3. Routing & Entry Point

#### [MODIFY] [Router.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/Router.tsx)
- Importação do componente [SignupPage.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/pages/SignupPage/SignupPage.tsx).
- Atualização da rota `/signup` para renderizar a nova tela de cadastro ao invés de exibir a mensagem provisória.

---

### 4. Ajustes Finos (Refatoração de Login)

#### [MODIFY] [LoginForm.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/LoginForm/LoginForm.tsx) & [LoginForm.test.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/LoginForm/LoginForm.test.tsx)
- Correção de problemas de codificação de caracteres (mojibake) nos textos do formulário e dos testes que eram disparados durante a execução da suite de testes.
- Padronização de nomes de parâmetros (como mudar `e` para `event` nas chamadas de eventos para manter compatibilidade e legibilidade).

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
│   │   ├── LoginForm/
│   │   └── SignupForm/      <-- NOVO
│   └── templates/
│       └── AuthTemplate/
├── pages/
│   ├── LoginPage/
│   └── SignupPage/          <-- NOVO
├── App.tsx
├── Router.tsx
├── main.tsx
└── index.css
```

---

## Verification Plan

### Automated Tests
```bash
pnpm --filter web vitest run
```

### Manual Verification
- Executar o app frontend em ambiente de desenvolvimento local (`pnpm dev:web`).
- Acessar `/signup` e verificar visualmente se a tela de cadastro está centralizada, com o banner à esquerda (oculto no mobile) e o formulário à direita.
- Testar a navegação de ir e voltar entre `/login` e `/signup` clicando nos links no rodapé de cada formulário.
