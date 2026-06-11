# Diretrizes de Desenvolvimento e Comandos (AGENTS.md)

Este arquivo contém as instruções de build, teste, desenvolvimento e as diretrizes do padrão **Antigravity** aplicáveis a este projeto. Qualquer agente de IA trabalhando nesta codebase deve seguir estas regras rigorosamente.

---

## 🚀 Visão Geral do Projeto

Este repositório é um **monorepo** gerenciado com **pnpm workspaces** estruturado da seguinte forma:
- **[apps/web](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web)**: Frontend desenvolvido em **React 19**, **Vite**, **TypeScript**, estilizado com **TailwindCSS** e estruturado seguindo **Atomic Design**.
- **[apps/api](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/api)**: Backend desenvolvido em **NestJS 11** e **TypeScript**, projetado de forma estritamente aderente aos princípios **REST**.

---

## 🛠️ Comandos de Execução

Sempre prefira executar os scripts a partir da raiz do monorepo utilizando os comandos mapeados no [package.json](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/package.json) raiz.

### Desenvolvimento
- Iniciar Frontend (`apps/web`): `pnpm dev:web`
- Iniciar Backend (`apps/api`): `pnpm dev:api`

### Build
- Compilar Frontend (`apps/web`): `pnpm build:web`
- Compilar Backend (`apps/api`): `pnpm build:api`

### Execução em Produção
- Iniciar Backend em Produção: `pnpm start:api`

### Testes e Validação (Backend - `apps/api`)
- Executar testes unitários: `pnpm --filter api test`
- Executar testes em modo watch: `pnpm --filter api test:watch`
- Executar testes de cobertura: `pnpm --filter api test:cov`
- Executar testes ponta a ponta (E2E): `pnpm --filter api test:e2e`

### Formatação e Linting
- Executar lint no Frontend: `pnpm --filter web lint`
- Executar lint no Backend: `pnpm --filter api lint`
- Formatar código do Backend: `pnpm --filter api format`

---

## ⚙️ Convenções de Engenharia e Código

### 1. Frontend ([apps/web](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/web))
- **Arquitetura (Atomic Design)**: Divida os componentes em camadas estruturadas:
  - **Atoms**: Elementos de UI fundamentais e indivisíveis (ex: botões, inputs, badges).
  - **Molecules**: Combinação de átomos que funcionam juntos (ex: formulário de busca, campo com input + label).
  - **Organisms**: Componentes complexos que formam seções distintas da interface (ex: header, sidebar, cards).
  - **Templates**: Estrutura de layout de página que define o posicionamento dos componentes.
  - **Pages**: Telas reais onde os templates são preenchidos com dados reais e o estado é gerenciado.
- **Estilização (TailwindCSS)**: Use TailwindCSS de forma consistente para estilização, mantendo a estética visual rica do Antigravity.
  - **Tamanhos e Dimensões**: Prefira utilizar os tokens de tamanhos nativos e mais próximos do Tailwind (ex.: `text-3xl`, `p-4`) em vez de definir valores arbitrários customizados (`text-[2rem]`, `p-[17px]`).
  - **Cores e Paleta**: Não utilize cores hexadecimais inline ou arbitrárias em classes Tailwind (ex.: `text-[#63F57E]`). Em vez disso, estenda o tema do Tailwind na folha de estilos principal (diretiva `@theme` do Tailwind v4) e configure as cores na paleta de cores oficial do projeto.
- **Cobertura de Testes**: Todo componente criado deve ter um arquivo de teste cobrindo o seu uso essencial.


### 2. Backend ([apps/api](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/apps/api))
- **Princípios REST**: A API deve ser estritamente aderente aos princípios REST:
  - Recursos substantivos no plural (ex: `/posts`, `/users`).
  - Métodos HTTP corretos (`GET` para leitura, `POST` para criação, `PUT` para substituição completa, `PATCH` para atualização parcial, `DELETE` para exclusão).
  - Status HTTP semânticos (ex: `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`).

### 3. Controle de Versão (Git - Ambos os Projetos)
- **Conventional Commits**: Mensagens de commit devem seguir o padrão `<tipo>(<escopo>): <descrição>`:
  - `feat`: Nova funcionalidade.
  - `fix`: Correção de bug.
  - `docs`: Alterações de documentação.
  - `style`: Estilização e formatação de código (sem alteração lógica).
  - `refactor`: Refatoração de código.
  - `test`: Criação ou ajuste de testes.
  - `chore`: Atualização de dependências ou build.

---

## 🌌 Diretrizes do Padrão Antigravity

Qualquer agente que opere nesta codebase deve seguir as regras de design, fluxo e comunicação do Antigravity:

### 1. Fluxo de Planejamento (Planning Mode)
Para qualquer alteração complexa, que altere a arquitetura ou que não seja uma correção trivial, o agente deve seguir o seguinte fluxo:
1. **Pesquisa (Research)**: Explorar a codebase usando ferramentas de leitura, sem realizar alterações de código.
2. **Plano de Implementação**: Criar ou atualizar o artefato `implementation_plan.md` no diretório de cérebros/conversação e solicitar feedback (`RequestFeedback: true`).
3. **Aprovação**: Aguardar a aprovação expressa do usuário.
4. **Execução**: Criar e manter atualizado o artefato `task.md` para acompanhar o progresso das tarefas.
5. **Verificação**: Validar as mudanças (compilação, testes, linting) e criar o artefato `walkthrough.md`.

### 2. Formato de Links e Referências a Arquivos
Ao se comunicar ou criar artefatos, todos os links para arquivos e símbolos de código devem:
- Utilizar o esquema `file:///` com caminhos absolutos e barras normais (`/`), mesmo no Windows.
- Exemplo correto: `[package.json](file:///c:/Dev/02-Alura/AI-Native/CodeConnect/package.json)`.
- **NÃO** envolver o texto do link em crases (ex: usar `[main.ts](...)` e nunca `[`main.ts`](...)`).
- Referenciar linhas específicas se possível usando `#L<numero>` no link.

### 3. Estética Visual Premium (Aplica-se ao Frontend)
Ao criar ou editar interfaces de usuário:
- **Estética Rica**: Usar gradientes suaves, sombras realistas, efeitos de glassmorphism, modo escuro elegante e cores selecionadas em paletas HSL (evitar cores puras/primárias sem tratamento).
- **Tipografia Moderna**: Importar e utilizar fontes modernas do Google Fonts (ex: Inter, Roboto, Outfit) ao invés das fontes padrão do navegador.
- **Micro-animações**: Implementar animações sutis de hover e transições suaves de estado para aumentar o engajamento.
- **Sem Placeholders**: Não utilizar imagens ou textos temporários. Se uma imagem for necessária, utilizar a ferramenta `generate_image`.
- **Design Dinâmico e Responsivo**: Garantir que as interfaces se adaptem perfeitamente a diferentes tamanhos de tela.

### 4. Boas Práticas de SEO
Sempre aplique boas práticas de SEO nas interfaces criadas:
- Tag `<title>` descritiva e meta descrições para cada página.
- Hierarquia semântica correta (apenas um único `<h1>` por página).
- IDs únicos e descritivos para elementos interativos (facilitando testes automatizados).

### 5. Estilo de Comunicação
- Respostas extremamente concisas e direto ao ponto.
- Uso de negrito, listas e blocos de código com a linguagem especificada para formatação no chat.
