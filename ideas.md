# Direção de design — recriação AGIR LEGAL

## Referência como especificação

Esta é uma tarefa de recriação visual. A referência pública em `https://agir-legal.web.app/` é a especificação de base para composição, densidade, linguagem visual, navegação, hierarquia e comportamento observável. A fidelidade à referência prevalece sobre escolhas estilísticas alternativas.

## Abordagem escolhida: Aplicativo de consulta operacional

### Movimento de design

Interface PWA mobile-first de consulta jurídica-operacional, marcada por pragmatismo, contraste controlado e leitura rápida em contexto de campo.

### Princípios centrais

1. Priorizar informação e ação rápida em uma coluna central de largura móvel.
2. Criar hierarquia com títulos curtos, cartões densos e ícones lineares reconhecíveis.
3. Manter uma paleta noturna de alto contraste, com amarelo-dourado reservando ênfase, sinalização e identidade.
4. Preservar ações importantes sempre alcançáveis pela barra inferior e por pesquisa proeminente.

### Filosofia de cor

O azul-marinho quase preto sugere seriedade, discrição e foco. Superfícies azul-ardósia criam níveis de profundidade sem perder a sensação de app compacto. O dourado amarelado é uma luz funcional: comunica marca, estado ativo, chamadas de atenção e ícones sem transformar a tela em uma interface chamativa.

### Paradigma de layout

Uma moldura de aplicativo compacto e vertical é a estrutura dominante. No desktop, a experiência não se estica em uma página de marketing: permanece uma tela de consulta com largura deliberadamente limitada e muito espaço negativo lateral. Internamente, as páginas alternam uma grade de atalhos, uma grade de resultados e detalhes sequenciais de leitura.

### Elementos de assinatura

O projeto repete três motivos: o símbolo de escudo em traço fino, contornos discretos de cartões com brilho de superfície e o marcador amarelo-dourado de ação/seleção. A barra inferior ocupa uma faixa sólida e organiza a navegação com ícones compactos e rótulos curtos.

### Filosofia de interação

Toda interação deve responder de modo direto: cartões levam a uma rota, a busca reduz os resultados imediatamente e conteúdos salvos usam armazenamento local. O aplicativo evita efeitos decorativos; feedback de toque, foco e seleção deve ser claro e rápido.

### Animação

As transições usam opacidade e pequenos deslocamentos verticais de até 8px, com duração de 160–220ms e curva `cubic-bezier(0.23, 1, 0.32, 1)`. Cartões têm resposta tátil curta ao pressionar. A navegação inferior e os diálogos surgem sem exagero e respeitam `prefers-reduced-motion`.

### Sistema tipográfico

`Barlow Condensed` é usada nos títulos operacionais em caixa alta ou destaque, pela economia espacial e tom institucional. `Barlow` sustenta textos, descrições e controles pela legibilidade em telas compactas. Títulos de página usam peso 700–800; rótulos de cartões usam peso 700; textos descritivos usam 400–500.

### Essência da marca

Uma central de consulta jurídica-operacional para orientar decisões rápidas e responsáveis no cotidiano da segurança pública.

Personalidade: **sóbria**, **direta**, **protetiva**.

### Voz da marca

Títulos, CTAs e microcopy são objetivos e instrutivos, sem promessas vagas. Exemplos: “Consulte a situação antes de agir.” e “Encontre orientação por ocorrência, crime ou contexto.”

### Wordmark e símbolo

O wordmark combina o nome em caixa alta, com espaçamento compacto e dourado funcional. O símbolo é um escudo com marca de confirmação interna, desenhado como ícone vetorial original em fundo transparente e empregado em tamanho visível no cabeçalho e favicon.

### Cor de assinatura

**Dourado de guarda — `#E4C95E`**. Ele deve aparecer somente em pontos de identidade, foco, seleção e ação para manter sua força visual.

## Decisões de estilo

- Em desktop, as rotas preservam uma moldura operacional compacta e sequencial; grades largas não devem transformar a aplicação em um catálogo expansivo.
- O dourado de guarda permanece restrito a identidade, seleção, alerta, ação e numerais-chave. Grandes superfícies pertencem ao sistema azul-ardósia.
- O escudo com confirmação atua como selo institucional de marca em cabeçalhos, estados críticos, alertas e conteúdo salvo, formando uma gramática visual única além dos ícones utilitários.
