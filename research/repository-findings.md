# Evidências técnicas do repositório `www.direitomobile.com`

## Estrutura encontrada

O repositório já contém um acervo estruturado e um leitor modular. O comando de geração `tools/build-dhd-data.js` percorre páginas HTML locais, remove ruído de espelho, normaliza texto, identifica artigos, parágrafos, incisos e alíneas, e gera um JSON por documento em `assets/dhd-docs/`. O catálogo reduzido é publicado como `assets/dhd-site-index.js` e o leitor só carrega o JSON completo quando o usuário abre um documento.

## Medidas observadas

O relatório de geração datado de 13/08/2026 registra 539 documentos, 157.701 blocos e 19.059 referências de artigos. A pasta dos JSONs ocupa 98.787.523 bytes; os doze maiores documentos, como CPP, Constituição e Código Penal, variam aproximadamente entre 1,2 MB e 5,9 MB. O catálogo global atual ocupa 767.795 bytes. Esses números tornam inadequado transferir o acervo integral ao primeiro carregamento de uma PWA policial.

## Componentes reaproveitáveis

O mecanismo de busca atual trata números de leis e artigos, incisos, alíneas e parágrafos; aplica normalização sem acentos e pontua resultados de documento e de trecho. O leitor também mantém cache em memória e limita resultados de busca, índice e catálogo. Essas regras são reaproveitáveis, mas devem ser portadas como biblioteca TypeScript e executadas no servidor para o acervo completo, deixando o cliente com metadados leves e resultados paginados.

## Riscos e correções necessárias

O gerador toma como fonte o espelho HTML existente, que contém conteúdo de terceiros e não garante atualização jurídica. A amostra de Lei Orgânica das Polícias Militares e Bombeiros Militares apresentou metadado de título inconsistente, apesar de blocos e links apontarem para outro diploma. Assim, o catálogo não deve ser importado diretamente como verdade jurídica: precisa de validação de fonte primária, identificador canônico, hash de conteúdo, data de conferência e revisão editorial. A extração pode ser preservada como material de apoio, com proveniência e licença verificadas, mas não como texto oficial autossuficiente.

## Comentários e histórico do GitHub

O pull request aberto `#1` descreve uma fundação moderna planejada: migração da interface para React, catálogo de 527 documentos, pesquisa e filtros por tipo e área, leitor responsivo, painéis para comentários/relações/futura IA, e endpoint/migração de comentários para Cloudflare D1. A intenção de "importação progressiva, conferência oficial, busca semântica e atualização governamental" é coerente com o novo AGIR LEGAL. Não foram encontrados comentários humanos em código ou issues; o único comentário é automatizado e registra uma falha histórica de publicação, posteriormente tratada por commits de preparação da distribuição.
