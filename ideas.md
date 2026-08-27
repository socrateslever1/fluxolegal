# Direção de design — NEXO LEGAL

## Referência como estrutura funcional

O aplicativo preserva a arquitetura compacta, mobile-first e de consulta operacional que orientou a versão inicial. A marca, a cor e os ativos são próprios: o nome NEXO LEGAL posiciona o produto como elo entre ocorrência, orientação operacional e fonte jurídica.

## Abordagem escolhida: Central de decisão jurídico-operacional

### Movimento de design

PWA institucional de alto contraste, inspirada na sinalética operacional contemporânea e em cadernos de campo: compacta, precisa e legível sob pressão.

### Princípios centrais

1. Priorizar a ocorrência e a decisão imediata em uma coluna de consulta de largura móvel.
2. Manter títulos diretos, cartões densos e ícones lineares como instrumentos de leitura rápida.
3. Usar verde profundo como ambiente de concentração, marfim para leitura e cobre exclusivamente para ação, seleção e alerta.
4. Deixar fontes, base legal e estado de atualização sempre próximos do conteúdo operacional.

### Filosofia de cor

O **verde institucional** reduz a agressividade visual e comunica estabilidade, proteção e critério. O **marfim técnico** amplia a legibilidade e evita a fadiga de uma tela puramente branca. O **cobre operacional** não decora: assinala foco, ação, seleção e atenção.

### Paradigma de layout

Uma moldura vertical de aplicativo de campo permanece dominante em qualquer tela. No desktop, muito espaço negativo lateral protege a sensação de ferramenta móvel, e a informação continua sendo percorrida em sequência, não como um portal expansivo.

### Elementos de assinatura

O escudo de traço fino com três trajetórias convergentes é o selo da marca. Grades discretas, linhas de perímetro e marcas cobre de ação aparecem como linguagem de navegação e orientação, nunca como ornamento excessivo.

### Filosofia de interação

Cada toque deve conduzir à próxima decisão: busca reduz resultados de imediato, cartões levam ao conteúdo, fontes externas abrem apenas quando solicitadas e favoritos permanecem locais. A resposta tátil é curta e inequívoca.

### Animação

Entradas usam opacidade e deslocamento vertical de até 8px entre 160 e 220ms com `cubic-bezier(0.23, 1, 0.32, 1)`. Cartões comprimem levemente ao toque. Animação decorativa não é utilizada e `prefers-reduced-motion` é respeitado.

### Sistema tipográfico

`Barlow Condensed` sustenta títulos operacionais e rótulos de alta densidade; `Barlow` sustenta textos, controles e fontes. Títulos usam peso 700–800; rótulos 700; explicações 400–500.

### Essência da marca

**O elo jurídico-operacional que transforma uma ocorrência em decisão responsável, para profissionais de segurança pública que precisam consultar com rapidez e rastreabilidade.**

Personalidade: **criteriosa**, **protetiva**, **objetiva**.

### Voz da marca

Textos são diretos e procedimentais, sem promessas vagas. Exemplos: “Conecte a ocorrência à base legal.” e “Consulte o fundamento antes da decisão.”

### Wordmark e símbolo

O wordmark NEXO LEGAL usa caixa alta compacta e cobre discreto. O símbolo é um escudo geométrico próprio com três vetores internos que convergem para um ponto central, associado à conexão entre fato, procedimento e norma.

### Cor de assinatura

**Cobre de decisão — `#C7682C`**. Ele é reservado à ação, seleção, foco, alertas e pontos de identidade; grandes superfícies pertencem ao sistema verde institucional.

## Decisões de estilo

- A interface não deve extrapolar a moldura de uma ferramenta de campo em desktop.
- O verde institucional e o marfim técnico dominam superfícies e leitura; o cobre só informa estado ou ação.
- O símbolo NEXO atua como selo de navegação, estado e cabeçalho, em tamanho visível e com espaço ao redor.
- A marca exibida em qualquer tela é sempre **NEXO LEGAL**; nenhuma designação anterior, alternativa ou provisória permanece visível.
- Listas de decisão preservam um fluxo vertical e sequencial, inclusive no desktop; o foco de campo prevalece sobre grades expansivas.
- Ícones utilitários são neutros; o cobre de decisão `#C7682C` fica reservado para ação, seleção, foco, alerta e marca.
