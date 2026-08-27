# Observações iniciais — consulta jurídica interna

## DireitoHD

O portal público expõe um **Vade Mecum on-line** e uma navegação por áreas jurídicas, incluindo Direito Penal, Processo Penal e Investigação Criminal, Direito de Trânsito e Direito Militar. Também funciona como catálogo de referências externas para órgãos oficiais e jurisprudência.

## Portal da Legislação da Presidência

O portal oficial oferece busca própria e navegação por legislação federal, histórica, estadual, Judiciário, internacional e consulta pública. Entre as categorias federais visíveis estão Constituição, leis ordinárias, leis complementares, estatutos, decretos, decretos-leis, medidas provisórias e súmulas vinculantes.

## Hipótese de integração

O NEXO LEGAL não deve tentar exibir uma página externa dentro de `iframe` como estratégia principal. A solução precisa verificar cabeçalhos de segurança e políticas de uso e, quando a fonte permitir consulta automatizada, coletar somente metadados e texto autorizado em uma camada de servidor, preservando URL, data de coleta, hash, versão e atribuição. A interface mostra então uma página própria de leitura, busca e fonte.

## Checagem técnica inicial

Uma requisição HTTP passiva ao DireitoHD retornou `200 OK` e não apresentou, nessa resposta, cabeçalhos `X-Frame-Options` ou `Content-Security-Policy` filtrados. Isso **não equivale a autorização de republicação nem garante incorporação estável**, pois políticas podem variar por rota, conteúdo e alteração posterior.

O Portal da Legislação carregou no navegador de análise, mas a mesma consulta por linha de comando excedeu o tempo limite sem retornar cabeçalhos. Portanto, o aplicativo não deve depender de `iframe`, de leitura direta no navegador ou de uma suposição de CORS. A arquitetura recomendada permanece uma camada controlada de ingestão e índice no servidor, mediante fonte e permissão adequadas.

## Mecanismo identificado no repositório DireitoHD

O repositório usa uma arquitetura estática com **catálogo de documentos** e arquivos JSON individuais em `assets/dhd-docs/`. O módulo `assets/dhd-enhance.js` faz carregamento sob demanda, mantém um `Map` de cache no navegador e limita resultados de artigo, catálogo e página a 80 itens. A busca já interpreta referências de lei, artigo, inciso, alínea e parágrafo; também normaliza acentos, extrai variações numéricas e atribui pontuação de relevância a blocos e itens do catálogo.

O modelo de documento previsto pela implementação inclui blocos estruturados, referência de artigo, contexto de artigo, inciso e alínea. O leitor renderiza esses blocos em cartões de artigo, mantendo índice, resultados no documento e resultados no acervo. Essa estrutura é a base adequada para uma migração ao NEXO LEGAL: adaptar os JSONs e o índice, não carregar as páginas HTML externas nem depender de incorporação em quadro.

## Gerador de dados identificado

O gerador `tools/build-dhd-data.js` percorre HTMLs autorais, exclui dependências e resultados antigos, extrai texto, metadados, links, blocos e referências normativas e gera um JSON para cada documento. Também produz `assets/dhd-site-index.js` com título, caminho, tipo, estatísticas, referências de artigos e texto de busca, além de um relatório de tamanho do acervo.

O gerador já adota boas práticas úteis à migração: normalização de acentos, remoção de URLs inseguras (`javascript:` e `data:`), distinção entre links internos e externos, e transformação de marcação de texto em um subconjunto controlado. No NEXO LEGAL, esse pipeline deve migrar para uma tarefa de ingestão no servidor e acrescentar `source_url`, `source_name`, `collected_at`, `source_hash`, `content_hash`, `revision_status` e `legal_scope` a cada documento.

## Discussões no GitHub

O repositório não possui issues listadas no momento. Há uma pull request aberta, **#1 — “Construir fundação do novo portal jurídico”**, com um comentário. Ela descreve uma modernização para Vite + React, catálogo automático de 527 documentos, pesquisa com filtros por tipo e área, leitor modular por dispositivo, separação entre explicações e comentários, e preparação de atualização governamental e comentários em Cloudflare D1.

Essa proposta confirma que a leitura interna deve ser uma evolução do conteúdo estruturado do repositório, não um quadro que carregue o site de origem. Para o NEXO LEGAL, o domínio policial-militar deverá ser uma prioridade de ranqueamento e de atalhos, sem eliminar a busca jurídica ampla baseada no catálogo geral.

## Código da ramificação moderna

A ramificação aberta `agent/modern-legal-portal` contém uma aplicação React com `src/App.jsx`, catálogo gerado, dados destacados e testes. O leitor já oferece busca interna por artigo, índice de artigos, ajuste de fonte, régua de leitura, fonte oficial por documento e painéis para explicação, comentários, relações e perguntas assistidas.

Os dados destacados guardam, por norma e artigo, título, referência, texto, explicação, tópicos, relações e URL oficial. Parte dos registros declara explicitamente que a conferência oficial ainda é pendente. No NEXO LEGAL, esse campo deve tornar-se uma regra de publicação: somente conteúdo com `revision_status = verified` poderá ser mostrado como “versão conferida”; materiais pendentes ficam sinalizados e não recebem prioridade operacional.

## Dimensão do acervo versionado

No estado inspecionado do repositório, `assets/dhd-docs/` contém 539 documentos estruturados e ocupa aproximadamente **96 MB**; o índice geral ocupa cerca de **752 KB**. O relatório do próprio repositório registra 539 documentos, 157.701 blocos e 19.059 âncoras de artigo. A leitura interna não deve transportar esse acervo integral para o navegador: primeiro carrega um índice compacto, depois busca no servidor e entrega apenas o trecho, artigo ou documento solicitado.
