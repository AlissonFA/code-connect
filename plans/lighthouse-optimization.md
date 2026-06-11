# Plano de Otimização: Performance e SEO (Lighthouse)

Este documento descreve as análises realizadas sobre o relatório do Lighthouse para as páginas de autenticação (Signup/Login) e detalha o plano de correções executado para otimizar os tempos de carregamento (FCP/LCP), evitar Cumulative Layout Shifts (CLS), melhorar o SEO e garantir as boas práticas de UX.

---

## 🔍 Diagnóstico e Otimizações Realizadas

### 1. Carregamento Condicional do Banner em Dispositivos Móveis
- **Problema:** A imagem do banner `/login-banner.png` (327 KB) era inserida na DOM e ocultada via CSS (`hidden md:block`) em dispositivos móveis. No entanto, o navegador ainda realizava o download do recurso, degradando a performance em redes móveis de forma desnecessária.
- **Solução:** O componente [AuthBanner.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/AuthBanner/AuthBanner.tsx) foi modificado para utilizar a tag `<picture>`. Em resoluções móveis (`max-width: 767px`), uma imagem vazia de 1x1 pixel SVG (data URI) é fornecida, prevenindo o download do banner. Em desktop (>= 768px), o formato moderno WebP é preferido, com fallback para o PNG original.

### 2. Otimização de Formato de Mídia (WebP)
- **Problema:** O banner original `/login-banner.png` (327 KB) no formato PNG sem compressão gerava um tempo maior de LCP.
- **Solução:** Convertido o arquivo para `/login-banner.webp` (23.5 KB) através de processamento com a biblioteca `sharp`. Isso resultou em uma redução de **92.8% no tamanho do arquivo**, diminuindo drasticamente a latência de rede.

### 3. Preload de Recursos Críticos (LCP)
- **Problema:** O banner de autenticação é o principal elemento visual LCP em desktop, mas era carregado tardiamente após o parser e execução do React.
- **Solução:** Adicionada uma tag `<link rel="preload">` no [index.html](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/index.html) para forçar o download prioritário da imagem WebP assim que o HTML for analisado pelo browser:
  ```html
  <link rel="preload" as="image" href="/login-banner.webp" type="image/webp" fetchpriority="high" media="(min-width: 768px)" />
  ```

### 4. Dimensões Explícitas de Imagens (CLS)
- **Problema:** Elementos de imagem no [AuthBanner.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/organisms/AuthBanner/AuthBanner.tsx) e [SocialButton.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/components/atoms/SocialButton/SocialButton.tsx) não possuíam atributos `width` e `height` no HTML, podendo causar pequenos shifts visuais durante o carregamento de rede.
- **Solução:** Adicionadas dimensões estáticas adequadas (`width={407} height={636}` no banner e `width={32} height={32}` nos botões sociais) auxiliando o browser a reservar o espaço correto em tela de forma síncrona.

### 5. Configuração Dinâmica de SEO na Página de Login
- **Problema:** Ao transitar entre rotas, o título e as metatags da página de Login não eram redefinidos, mantendo valores estáticos do HTML inicial.
- **Solução:** Adicionado hook `useEffect` no componente [LoginPage.tsx](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/apps/web/src/pages/LoginPage/LoginPage.tsx) para atualizar o título e descrição dinamicamente, mantendo o padrão adotado na página de cadastro e cumprindo as diretrizes de SEO do [AGENTS.md](file:///C:/Dev/02-Alura/AI-Native/CodeConnect/AGENTS.md).

---

## 🧪 Validação Técnica

1. **Testes Unitários:** Todos os testes unitários (`pnpm test:web`), incluindo análises de acessibilidade via `vitest-axe`, foram executados com sucesso (33 testes passando).
2. **Build de Produção:** O empacotamento para produção (`pnpm build:web`) concluiu sem erros ou warnings.
3. **Linting:** Resolvidos os avisos do linter ESLint em todo o código do frontend (`pnpm lint:web`).
