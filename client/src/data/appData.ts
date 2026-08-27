/**
 * NEXO LEGAL data model: compact field reference containing only document-level
 * POP metadata and occurrence-specific legal explanations with source attribution.
 */
export type Occurrence = {
  slug: string;
  title: string;
  description: string;
  category: string;
  article: string;
};

export type PopProcedure = {
  id: string;
  process: string;
  procedures: string[];
  purpose: string;
  linkedSlugs: string[];
  source: string;
};

export type LegalBrief = {
  id: string;
  title: string;
  law: string;
  explanation: string;
  attention: string;
  terms: string[];
  linkedSlugs: string[];
  url: string;
};

export const occurrences: Occurrence[] = [
  { slug: "homicidio", title: "Homicídio", description: "Morte violenta ou suspeita, com prioridade para segurança, preservação do local e acionamento do fluxo competente.", category: "Vida", article: "Art. 121 — Código Penal" },
  { slug: "tentativa-de-homicidio", title: "Tentativa de homicídio", description: "Agressão com possível intenção letal, exigindo socorro imediato, segurança e preservação de prova.", category: "Vida", article: "Art. 121, c/c art. 14, II — Código Penal" },
  { slug: "encontro-de-cadaver", title: "Encontro de cadáver", description: "Localização de corpo ou restos mortais, com foco em isolamento, preservação e acionamento da autoridade competente.", category: "Vida", article: "Arts. 158-A a 158-F — CPP" },
  { slug: "tentativa-de-suicidio", title: "Tentativa de suicídio", description: "Crise com risco à própria vida, demandando proteção imediata, socorro e preservação de eventual prova.", category: "Proteção", article: "Art. 122 — Código Penal" },
  { slug: "automutilacao", title: "Automutilação", description: "Crise com lesão autoinduzida ou risco de repetição, exigindo proteção, socorro e preservação de sinais relevantes.", category: "Proteção", article: "Art. 122 — Código Penal" },
  { slug: "omissao-de-socorro", title: "Omissão de socorro", description: "Situação em que pessoa deixa de prestar assistência possível ou acionar socorro diante de risco.", category: "Proteção", article: "Art. 135 — Código Penal" },
  { slug: "maus-tratos", title: "Maus-tratos", description: "Exposição de pessoa sob cuidado, autoridade ou vigilância a perigo de vida ou saúde.", category: "Proteção", article: "Art. 136 — Código Penal" },
  { slug: "abandono-de-incapaz", title: "Abandono de incapaz", description: "Pessoa incapaz ou vulnerável deixada sem cuidado por quem tinha dever de proteção.", category: "Proteção", article: "Art. 133 — Código Penal" },
  { slug: "sequestro", title: "Sequestro", description: "Privação da liberdade por retirada, retenção ou condução da vítima contra a vontade, com prioridade para proteção e apoio.", category: "Liberdade", article: "Art. 148 — Código Penal" },
  { slug: "carcere-privado", title: "Cárcere privado", description: "Privação de liberdade por manter pessoa trancada, impedida de sair ou sob vigilância contra sua vontade.", category: "Liberdade", article: "Art. 148 — Código Penal" },
  { slug: "violacao-de-domicilio", title: "Violação de domicílio por particular", description: "Entrada ou permanência de particular em casa alheia contra a vontade de quem de direito.", category: "Liberdade", article: "Art. 150 — Código Penal" },
  { slug: "violencia-psicologica", title: "Violência psicológica contra a mulher", description: "Conduta que causa dano emocional à mulher, especialmente em contexto doméstico ou familiar.", category: "Mulher", article: "Art. 147-B — Código Penal" },
  { slug: "calunia", title: "Calúnia", description: "Imputação falsa de fato definido como crime, inclusive em redes sociais ou mensagens.", category: "Honra", article: "Art. 138 — Código Penal" },
  { slug: "difamacao", title: "Difamação", description: "Imputação de fato ofensivo à reputação, comum em conflitos de vizinhos, trabalho e redes sociais.", category: "Honra", article: "Art. 139 — Código Penal" },
  { slug: "injuria", title: "Injúria", description: "Ofensa à dignidade ou decoro da pessoa, com atenção a eventual motivação discriminatória.", category: "Honra", article: "Art. 140 — Código Penal" },
  { slug: "invasao-de-dispositivo", title: "Invasão de dispositivo informático", description: "Acesso indevido a celular, conta, aplicativo ou sistema, exigindo preservação de vestígios digitais.", category: "Digital", article: "Art. 154-A — Código Penal" },
  { slug: "estelionato", title: "Estelionato", description: "Fraude para obter vantagem ilícita, comum em Pix, venda falsa, boleto, cartão e internet.", category: "Patrimônio", article: "Art. 171 — Código Penal" },
  { slug: "apropriacao-indebita", title: "Apropriação indébita", description: "Pessoa se apropria de bem que recebeu legitimamente e deixa de devolver.", category: "Patrimônio", article: "Art. 168 — Código Penal" },
  { slug: "extorsao", title: "Extorsão", description: "Constrangimento com violência ou grave ameaça para obter vantagem econômica ou indevida.", category: "Patrimônio", article: "Art. 158 — Código Penal" },
  { slug: "estupro", title: "Estupro", description: "Violência sexual com necessidade de proteção, saúde, privacidade e preservação de vestígios.", category: "Sexual", article: "Art. 213 — Código Penal" },
  { slug: "estupro-de-vulneravel", title: "Estupro de vulnerável", description: "Crime sexual contra pessoa vulnerável, com máxima proteção, privacidade e acionamento da rede competente.", category: "Sexual", article: "Art. 217-A — Código Penal" },
  { slug: "atentado-ao-pudor", title: "Atentado ao pudor (termo antigo)", description: "Termo antigo usado popularmente para ato libidinoso indevido; a conduta atual depende do enquadramento legal vigente.", category: "Sexual", article: "Art. 214 — Código Penal (revogado)" },
  { slug: "violacao-sexual-fraude", title: "Violação sexual mediante fraude", description: "Crime sexual em que fraude ou outro meio impede ou dificulta a manifestação livre da vontade da vítima.", category: "Sexual", article: "Art. 215 — Código Penal" },
  { slug: "importunacao-sexual", title: "Importunação sexual", description: "Ato libidinoso praticado contra alguém, sem anuência, comum em transporte, evento ou via pública.", category: "Sexual", article: "Art. 215-A — Código Penal" },
  { slug: "assedio-sexual", title: "Assédio sexual", description: "Constrangimento para vantagem ou favorecimento sexual com relação de superioridade hierárquica.", category: "Sexual", article: "Art. 216-A — Código Penal" },
  { slug: "registro-nao-autorizado", title: "Registro não autorizado da intimidade sexual", description: "Filmagem, fotografia ou registro de nudez, ato sexual ou libidinoso íntimo sem autorização.", category: "Sexual", article: "Art. 216-B — Código Penal" },
  { slug: "divulgacao-cena-intima", title: "Divulgação de cena íntima ou de estupro", description: "Divulgação, publicação ou transmissão de cena íntima, sexual ou de estupro sem consentimento.", category: "Sexual", article: "Art. 218-C — Código Penal" },
  { slug: "violencia-sexual-domestica", title: "Violência sexual doméstica contra a mulher", description: "Violência sexual no contexto doméstico ou familiar contra a mulher, com atuação protetiva e preservação de vestígios.", category: "Mulher", article: "Lei Maria da Penha" },
  { slug: "violencia-patrimonial", title: "Violência patrimonial contra a mulher", description: "Retenção, subtração, destruição ou controle de bens, documentos, instrumentos ou recursos da mulher.", category: "Mulher", article: "Art. 7º, IV — Lei Maria da Penha" },
  { slug: "perseguicao", title: "Perseguição (stalking)", description: "Perseguição reiterada por qualquer meio, inclusive digital, que ameaça ou perturba liberdade e privacidade.", category: "Liberdade", article: "Art. 147-A — Código Penal" },
  { slug: "violencia-sexual-digital", title: "Violência sexual contra criança/adolescente em meio digital", description: "Produção, divulgação, armazenamento, aliciamento ou circulação de conteúdo de violência sexual contra criança ou adolescente.", category: "Proteção", article: "ECA, arts. 240 e 241-A" },
  { slug: "veiculo-adulterado", title: "Veículo adulterado", description: "Suspeita de adulteração de chassi, placa, motor ou sinal identificador de veículo.", category: "Trânsito", article: "Art. 311 — Código Penal" },
  { slug: "fuga-local-acidente", title: "Fuga do local de acidente", description: "Condutor se afasta do local do acidente para fugir de responsabilidade penal ou civil.", category: "Trânsito", article: "Art. 305 — CTB" },
  { slug: "direcao-perigosa", title: "Direção perigosa", description: "Condução sem habilitação ou com manobra que gere perigo concreto de dano, conforme elementos observados.", category: "Trânsito", article: "Arts. 309 a 311 — CTB" },
  { slug: "racha", title: "Racha", description: "Disputa de corrida, competição ou demonstração de perícia em veículo automotor sem autorização.", category: "Trânsito", article: "Art. 308 — CTB" },
  { slug: "vias-de-fato", title: "Vias de fato", description: "Agressão física sem lesão aparente relevante, exigindo separação, identificação e avaliação de crime mais grave.", category: "Contravenções", article: "Art. 21 — LCP" },
  { slug: "jogo-de-azar", title: "Jogo de azar", description: "Exploração de jogo de azar, máquinas, banca, apostas ou estabelecimento clandestino.", category: "Contravenções", article: "Art. 50 — LCP" },
  { slug: "embriaguez-publica", title: "Embriaguez pública", description: "Pessoa em estado de embriaguez gerando escândalo, risco próprio ou risco a terceiros.", category: "Contravenções", article: "Art. 62 — LCP" },
  { slug: "desacato", title: "Desacato", description: "Conduta ofensiva contra funcionário público no exercício da função ou em razão dela.", category: "Administração", article: "Art. 331 — Código Penal" },
  { slug: "desobediencia", title: "Desobediência", description: "Descumprimento de ordem legal, clara e possível de cumprir, emanada por funcionário público.", category: "Administração", article: "Art. 330 — Código Penal" },
  { slug: "resistencia", title: "Resistência", description: "Oposição à execução de ato legal mediante violência ou ameaça a funcionário competente.", category: "Administração", article: "Art. 329 — Código Penal" },
  { slug: "descumprimento-de-medida", title: "Descumprimento de medida protetiva", description: "Violação de medida protetiva de urgência, com prioridade à segurança da vítima e conferência do documento.", category: "Mulher", article: "Art. 24-A — Lei Maria da Penha" },
  { slug: "maria-da-penha", title: "Maria da Penha", description: "Atendimento policial a violência doméstica e familiar contra a mulher, com foco em proteção imediata e preservação de provas.", category: "Mulher", article: "Lei 11.340/2006" },
  { slug: "ameaca", title: "Ameaça", description: "Relato de promessa de mal injusto e grave, exigindo verificação do contexto, risco atual e prova disponível.", category: "Vida", article: "Art. 147 — Código Penal" },
  { slug: "lesao-corporal", title: "Lesão corporal", description: "Ocorrência com dano à integridade corporal ou saúde, demandando atendimento, prova e classificação posterior.", category: "Vida", article: "Art. 129 — Código Penal" },
  { slug: "furto", title: "Furto", description: "Subtração sem violência ou grave ameaça, exigindo identificação do bem, autoria, imagens e testemunhas.", category: "Patrimônio", article: "Art. 155 — Código Penal" },
  { slug: "roubo", title: "Roubo", description: "Subtração com violência ou grave ameaça, com prioridade para segurança, atendimento e preservação de provas.", category: "Patrimônio", article: "Art. 157 — Código Penal" },
  { slug: "receptacao", title: "Receptação", description: "Situação envolvendo posse, transporte ou comercialização de bem possivelmente produto de crime.", category: "Patrimônio", article: "Art. 180 — Código Penal" },
  { slug: "dano", title: "Dano", description: "Destruição, inutilização ou deterioração de coisa alheia, com foco em prova, autoria e contexto.", category: "Patrimônio", article: "Art. 163 — Código Penal" },
  { slug: "perturbacao-do-sossego", title: "Perturbação do sossego", description: "Perturbação do trabalho ou sossego alheios, poluição sonora ou uso abusivo de instrumentos sonoros.", category: "Contravenções", article: "Art. 42 — LCP" },
  { slug: "porte-de-droga", title: "Porte de droga para consumo pessoal", description: "Pessoa encontrada adquirindo, guardando, transportando ou trazendo consigo droga em contexto de consumo pessoal.", category: "Drogas", article: "Art. 28 — Lei de Drogas" },
  { slug: "trafico-de-drogas", title: "Tráfico de drogas", description: "Conduta com indícios de venda, entrega, depósito, transporte, guarda ou distribuição de drogas sem autorização.", category: "Drogas", article: "Art. 33 — Lei de Drogas" },
  { slug: "embriaguez-ao-volante", title: "Embriaguez ao volante", description: "Condução sob influência de álcool ou substância psicoativa, com medidas administrativas e possível crime.", category: "Trânsito", article: "Arts. 165 e 306 — CTB" },
  { slug: "acidente-de-transito", title: "Acidente de trânsito", description: "Atendimento a sinistro de trânsito com ou sem vítima, com foco em segurança, socorro e preservação do local.", category: "Trânsito", article: "Código de Trânsito Brasileiro" },
  { slug: "abordagem-e-busca", title: "Abordagem e busca pessoal", description: "Consulta operacional sobre abordagem e busca pessoal, com necessidade de fundamento concreto e registro adequado.", category: "Procedimento", article: "Arts. 240 e 244 — CPP" },
  { slug: "ingresso-em-domicilio", title: "Ingresso em domicílio", description: "Entrada em residência exige cautela, verificação de hipótese legal, fatos concretos e registro circunstanciado.", category: "Procedimento", article: "Constituição Federal, art. 5º, XI" },
  { slug: "prisao-em-flagrante", title: "Prisão em flagrante", description: "Providência legal sensível que exige situação flagrancial, preservação de direitos, comunicações e encaminhamento adequado.", category: "Procedimento", article: "Arts. 301 a 310 — CPP" },
  { slug: "uso-de-algemas", title: "Uso de algemas", description: "Uso de algemas deve observar risco concreto, necessidade, proporcionalidade, segurança e registro da justificativa.", category: "Procedimento", article: "Súmula Vinculante 11" },
  { slug: "uso-da-forca", title: "Uso da força", description: "Uso da força deve ser necessário, proporcional, progressivo quando possível e limitado ao controle legal da ocorrência.", category: "Procedimento", article: "Lei 13.060/2014" },
  { slug: "arma-de-fogo", title: "Arma de fogo", description: "Ocorrência com arma de fogo, acessório ou munição exige segurança, apreensão correta e verificação documental.", category: "Armas", article: "Lei 10.826/2003" },
  { slug: "porte-de-arma-branca", title: "Porte de arma branca", description: "Pessoa portando objeto perfurocortante em contexto de risco ou sem justificativa compatível.", category: "Armas", article: "Art. 19 — LCP" },
  { slug: "crianca-e-adolescente", title: "Criança e adolescente", description: "Atendimento envolvendo criança ou adolescente deve priorizar proteção integral, privacidade e órgãos competentes.", category: "Proteção", article: "ECA, arts. 98 a 105" },
  { slug: "pessoa-idosa", title: "Pessoa idosa em situação de risco", description: "Atendimento envolvendo pessoa com 60 anos ou mais, com foco em proteção, dignidade, saúde e rede competente.", category: "Proteção", article: "Estatuto da Pessoa Idosa" },
  { slug: "pessoa-vulneravel", title: "Pessoa vulnerável em situação de risco", description: "Atendimento envolvendo pessoa incapaz, dependente ou enferma sem condições de autoproteção.", category: "Proteção", article: "Proteção integral" },
  { slug: "apreensao-de-celular", title: "Apreensão de celular", description: "Apreensão de aparelho ou mídia digital relacionada ao fato exige base legal, cadeia de custódia e cautela com dados.", category: "Procedimento", article: "Arts. 158-A a 158-F — CPP" },
  { slug: "preservacao-local", title: "Preservação de local de crime", description: "Local com vestígios, vítima, objetos ou ambiente que precisa permanecer preservado até liberação competente.", category: "Procedimento", article: "Art. 169 — CPP" },
  { slug: "leis-de-interesse-policial", title: "Leis de interesse policial", description: "Consulta rápida de normas públicas úteis à atuação policial, com foco em legalidade, direitos fundamentais, força e prova.", category: "Procedimento", article: "Fontes oficiais" },
];

export const popProcedures: PopProcedure[] = [
  {
    id: "preservacao-local",
    process: "Preservação de local de crime",
    procedures: ["Avaliação do local", "Ação do policial para preservação", "Término da preservação"],
    purpose: "Reúne avaliação do local, preservação do cenário e encerramento da preservação após a atuação competente.",
    linkedSlugs: ["homicidio", "tentativa-de-homicidio", "encontro-de-cadaver", "lesao-corporal", "roubo", "preservacao-local", "acidente-de-transito"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "uso-algemas",
    process: "Uso de algemas",
    procedures: ["Preparação do EPI e das algemas", "Ato de algemação"],
    purpose: "Reúne a preparação do EPI e das algemas com o procedimento de algemação previsto no POP.",
    linkedSlugs: ["uso-de-algemas", "prisao-em-flagrante", "resistencia", "desobediencia", "abordagem-e-busca"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "veiculo",
    process: "Vistoria e identificação de veículo",
    procedures: ["Vistoria e identificação de veículo"],
    purpose: "Reúne a vistoria e a identificação de veículo previstas no procedimento POP correspondente.",
    linkedSlugs: ["veiculo-adulterado", "receptacao", "roubo", "furto"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "transito",
    process: "Acidente de trânsito",
    procedures: ["Atendimento de ocorrência"],
    purpose: "Reúne o procedimento de atendimento de ocorrência aplicável a sinistros de trânsito cadastrados.",
    linkedSlugs: ["acidente-de-transito", "fuga-local-acidente", "embriaguez-ao-volante", "direcao-perigosa", "racha"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "substancia-ilegal",
    process: "Averiguação de substância ilegal",
    procedures: ["Localização", "Identificação", "Apreensão"],
    purpose: "Reúne localização, identificação e apreensão de substância ilegal no POP informado.",
    linkedSlugs: ["porte-de-droga", "trafico-de-drogas", "apreensao-de-celular"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "transporte-presos",
    process: "Transporte e escolta de presos",
    procedures: ["Verificação das condições", "Transporte do preso", "Embarque e desembarque", "Apresentação"],
    purpose: "Reúne verificação das condições, transporte, embarque, desembarque e apresentação de pessoa custodiada.",
    linkedSlugs: ["prisao-em-flagrante", "uso-de-algemas", "resistencia", "desobediencia"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "bloqueio-via",
    process: "Bloqueio policial em via pública",
    procedures: ["Planejamento", "Montagem", "Comando", "Segurança", "Seleção e vistoria de veículos", "Finalização"],
    purpose: "Reúne planejamento, montagem, comando, segurança, seleção, vistoria e finalização do bloqueio policial em via pública.",
    linkedSlugs: ["veiculo-adulterado", "embriaguez-ao-volante", "direcao-perigosa", "racha"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "vias-de-fato",
    process: "Vias de fato",
    procedures: ["Medidas de atendimento"],
    purpose: "Reúne as medidas de atendimento registradas para vias de fato no POP correspondente.",
    linkedSlugs: ["vias-de-fato", "lesao-corporal", "ameaca", "perturbacao-do-sossego"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "perturbacao-sossego",
    process: "Perturbação do sossego público",
    procedures: ["Atendimento de ocorrência"],
    purpose: "Reúne o atendimento de ocorrência registrado para perturbação do sossego público.",
    linkedSlugs: ["perturbacao-do-sossego", "dano", "vias-de-fato"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
  {
    id: "violencia-domestica",
    process: "Violência doméstica e familiar contra a mulher",
    procedures: ["Atendimento de ocorrência"],
    purpose: "Reúne o atendimento de ocorrência de violência doméstica e familiar contra a mulher previsto no POP.",
    linkedSlugs: ["maria-da-penha", "violencia-psicologica", "violencia-sexual-domestica", "violencia-patrimonial", "descumprimento-de-medida", "ameaca"],
    source: "POPs Integrados PMAM e PCAM, Volume I, 3ª edição, 2022",
  },
];

export const legalBriefs: LegalBrief[] = [
  {
    id: "flagrante",
    title: "Prisão em flagrante",
    law: "Código de Processo Penal, arts. 301 a 310",
    explanation: "Para ocorrências em que a pessoa foi detida durante ou logo após o fato, estes artigos reúnem as regras legais sobre prisão em flagrante e apresentação.",
    attention: "Use esta referência somente quando a ficha registrar situação de flagrante; confira os elementos documentados no atendimento e a redação oficial do CPP.",
    terms: ["prisão", "flagrante", "apresentação", "condução", "custodiado"],
    linkedSlugs: ["prisao-em-flagrante", "resistencia", "desobediencia", "uso-de-algemas"],
    url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm",
  },
  {
    id: "busca-pessoal",
    title: "Busca pessoal e domiciliar",
    law: "Código de Processo Penal, arts. 240 e 244",
    explanation: "Para ficha de abordagem, ingresso em domicílio ou apreensão de celular, estes artigos concentram os limites legais de busca pessoal e domiciliar.",
    attention: "Aplique a referência correspondente à situação registrada na ficha; domicílio e dados pessoais exigem verificação da hipótese legal concreta.",
    terms: ["busca", "abordagem", "domicílio", "revista", "fundada suspeita"],
    linkedSlugs: ["abordagem-e-busca", "ingresso-em-domicilio", "apreensao-de-celular"],
    url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm",
  },
  {
    id: "cadeia-custodia",
    title: "Preservação de local e cadeia de custódia",
    law: "Código de Processo Penal, arts. 158-A a 158-F e art. 169",
    explanation: "Para homicídio, encontro de cadáver, lesão corporal, preservação de local ou apreensão de celular, os dispositivos organizam a rastreabilidade dos vestígios relacionados ao fato.",
    attention: "Esta referência é exibida porque a ocorrência possui vestígio ou local a preservar; consulte a redação oficial para identificar o artigo aplicável ao registro concreto.",
    terms: ["local", "vestígio", "prova", "cadeia", "cadáver", "preservação"],
    linkedSlugs: ["homicidio", "tentativa-de-homicidio", "encontro-de-cadaver", "lesao-corporal", "preservacao-local", "apreensao-de-celular"],
    url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm",
  },
  {
    id: "violencia-domestica",
    title: "Violência doméstica e familiar",
    law: "Lei Maria da Penha, Lei n.º 11.340/2006",
    explanation: "Para violência doméstica, ameaça, violência psicológica, violência patrimonial ou descumprimento de medida, a lei reúne as formas de violência e providências previstas para o atendimento.",
    attention: "A ficha deve registrar somente informações pertinentes ao caso; verifique na fonte oficial a existência e o teor de medida protetiva eventualmente informada.",
    terms: ["mulher", "doméstica", "medida protetiva", "maria da penha", "ameaça"],
    linkedSlugs: ["maria-da-penha", "violencia-psicologica", "violencia-sexual-domestica", "violencia-patrimonial", "descumprimento-de-medida", "ameaca"],
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
  },
  {
    id: "drogas",
    title: "Drogas: porte e tráfico",
    law: "Lei de Drogas, Lei n.º 11.343/2006, arts. 28 e 33",
    explanation: "Para ocorrência de porte ou tráfico de drogas, os arts. 28 e 33 são apresentados como referência para a leitura do tipo legal associado à ficha.",
    attention: "Não utilize a referência isoladamente para classificar a situação; mantenha no registro os elementos observados e consulte a redação oficial da norma.",
    terms: ["droga", "substância", "porte", "tráfico", "apreensão"],
    linkedSlugs: ["porte-de-droga", "trafico-de-drogas"],
    url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11343.htm",
  },
  {
    id: "forca",
    title: "Uso de instrumentos de menor potencial ofensivo",
    law: "Lei n.º 13.060/2014",
    explanation: "Para ocorrência marcada por uso da força, resistência ou emprego de algemas, a lei reúne diretrizes sobre instrumentos de menor potencial ofensivo aplicáveis aos agentes de segurança pública.",
    attention: "O texto é apresentado apenas nas fichas relacionadas a esse tema; consulte a lei e o protocolo institucional correspondente ao equipamento registrado.",
    terms: ["força", "instrumentos", "menor potencial", "segurança", "proporcionalidade"],
    linkedSlugs: ["uso-da-forca", "uso-de-algemas", "resistencia"],
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13060.htm",
  },
  {
    id: "crianca-adolescente",
    title: "Proteção de criança e adolescente",
    law: "Estatuto da Criança e do Adolescente, Lei n.º 8.069/1990",
    explanation: "Para ocorrência que envolva criança ou adolescente, os dispositivos selecionados reúnem garantias e medidas de proteção relacionadas ao atendimento cadastrado.",
    attention: "Mantenha sigilo sobre dados identificáveis no registro e consulte o artigo correspondente na fonte oficial conforme a situação descrita.",
    terms: ["criança", "adolescente", "menor", "eca", "proteção"],
    linkedSlugs: ["crianca-e-adolescente", "violencia-sexual-digital", "estupro-de-vulneravel"],
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm",
  },
];

export const getProceduresForOccurrence = (slug: string) => popProcedures.filter((procedure) => procedure.linkedSlugs.includes(slug));
export const getLegalBriefsForOccurrence = (slug: string) => legalBriefs.filter((brief) => brief.linkedSlugs.includes(slug));

export type LawGroup = { title: string; meta: string; items: { title: string; url: string }[] };

const planalto = "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm";
export const lawGroups: LawGroup[] = [
  { title: "Código Penal", meta: "Federal — 2.848/1940", items: ["Art. 147 — Ameaça", "Art. 129 — Lesão corporal", "Art. 155 — Furto", "Art. 157 — Roubo", "Art. 180 — Receptação", "Art. 163 — Dano", "Art. 331 — Desacato", "Art. 330 — Desobediência", "Art. 329 — Resistência", "Art. 121 — Homicídio", "Art. 122 — Induzimento, instigação ou auxílio a suicídio", "Art. 148 — Sequestro e cárcere privado", "Art. 147-A — Perseguição", "Art. 213 — Estupro", "Art. 217-A — Estupro de vulnerável"].map((title) => ({ title, url: planalto })) },
  { title: "Código de Processo Penal", meta: "Federal — 3.689/1941", items: ["Arts. 301 a 310 — Prisão em flagrante", "Arts. 301 a 303 — Flagrante delito", "Art. 240 — Busca pessoal e domiciliar", "Art. 244 — Busca pessoal", "Art. 249 — Busca em mulher", "Art. 169 — Preservação do local da infração"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm" })) },
  { title: "Lei das Contravenções Penais", meta: "Federal — 3.688/1941", items: ["Art. 42 — Perturbação do trabalho ou sossego alheios", "Art. 21 — Vias de fato", "Art. 19 — Porte de arma fora de casa", "Art. 50 — Jogo de azar", "Art. 62 — Embriaguez pública"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3688.htm" })) },
  { title: "Lei Maria da Penha", meta: "Federal — 11.340/2006", items: ["Art. 12 — Providências da autoridade policial", "Art. 7º — Formas de violência doméstica e familiar", "Art. 10 — Providências imediatas", "Art. 22 — Medidas protetivas ao agressor", "Art. 23 — Medidas protetivas à ofendida", "Art. 24-A — Descumprimento de medida protetiva"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm" })) },
  { title: "Lei de Drogas", meta: "Federal — 11.343/2006", items: ["Art. 28 — Porte de droga para consumo pessoal", "Art. 33 — Tráfico de drogas"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11343.htm" })) },
  { title: "Código de Trânsito Brasileiro", meta: "Federal — 9.503/1997", items: ["Arts. 165 e 306 — Álcool e direção", "Regras do CTB — Acidente de trânsito", "Art. 305 — Afastar-se do local do acidente", "Arts. 309 a 311 — Crimes de direção com perigo de dano"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm" })) },
  { title: "Constituição Federal", meta: "Federal — Constituição/1988", items: ["Art. 5º — Direitos e garantias fundamentais", "Art. 144 — Segurança pública"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" })) },
  { title: "Estatuto da Criança e do Adolescente", meta: "Federal — 8.069/1990", items: ["Arts. 98 a 105 — Criança e adolescente", "Arts. 240 e 241-A — Violência sexual em material digital", "Art. 241-D — Aliciamento sexual de menor de 14 anos"].map((title) => ({ title, url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm" })) },
  { title: "Estatuto da Pessoa Idosa", meta: "Federal — 10.741/2003", items: [{ title: "Arts. 43 a 45 — Pessoa idosa", url: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm" }] },
  { title: "Estatuto do Desarmamento", meta: "Federal — 10.826/2003", items: [{ title: "Regras do Estatuto — Arma de fogo", url: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.826compilado.htm" }] },
  { title: "Lei de Abuso de Autoridade", meta: "Federal — 13.869/2019", items: [{ title: "Arts. 1º e seguintes — Abuso de autoridade", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13869.htm" }] },
  { title: "Lei dos Juizados Especiais", meta: "Federal — 9.099/1995", items: [{ title: "Arts. 60 a 76 — Menor potencial ofensivo", url: "https://www.planalto.gov.br/ccivil_03/leis/l9099.htm" }] },
  { title: "Lei de Tortura", meta: "Federal — 9.455/1997", items: [{ title: "Lei 9.455/1997 — Vedação absoluta à tortura", url: "https://www.planalto.gov.br/ccivil_03/leis/l9455.htm" }] },
  { title: "Uso de instrumentos de menor potencial ofensivo", meta: "Federal — 13.060/2014", items: [{ title: "Lei 13.060/2014 — Instrumentos de menor potencial ofensivo", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13060.htm" }] },
  { title: "Lei de Organização Criminosa", meta: "Federal — 12.850/2013", items: [{ title: "Lei 12.850/2013 — Organização criminosa", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12850.htm" }] },
  { title: "Pacote Anticrime e cadeia de custódia", meta: "Federal — 13.964/2019", items: [{ title: "Arts. 158-A a 158-F do CPP — Cadeia de custódia", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13964.htm" }] },
  { title: "Lei Orgânica Nacional das Polícias Militares e Bombeiros Militares", meta: "Federal — 14.751/2023", items: [{ title: "Arts. 2º e 3º — Atuação das Polícias Militares", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14751.htm" }] },
  { title: "Legislação estadual da Polícia Militar do Amazonas", meta: "Estadual — Amazonas — Consulta oficial/2026", items: [{ title: "Página oficial — Leis estaduais da PMAM", url: "https://www.pm.am.gov.br/" }] },
  { title: "Legislação interna da PMAM", meta: "Estadual — Amazonas — Consulta oficial/2026", items: [{ title: "Página oficial — Normas internas da PMAM", url: "https://www.pm.am.gov.br/" }] },
  { title: "Estatuto do Policial Civil do Amazonas", meta: "Estadual — Amazonas — 1.323/1978", items: [{ title: "Lei nº 1.323/1978 — Estatuto do Policial Civil do Amazonas", url: "https://www.aleam.gov.br/" }] },
  { title: "Organização Básica da PMAM", meta: "Estadual — Amazonas — 1.143/1975", items: [{ title: "Lei nº 1.143/1975 — Organização Básica da PMAM", url: "https://www.aleam.gov.br/" }] },
  { title: "Código Ambiental do Município de Manaus", meta: "Municipal — Manaus — 605/2001", items: [{ title: "Lei Municipal nº 605/2001 — Código Ambiental de Manaus", url: "https://www.manaus.am.gov.br/" }] },
  { title: "Controle de poluição sonora por veículos em Manaus", meta: "Municipal — Manaus — 2.986/2022", items: [{ title: "Lei Municipal nº 2.986/2022 — Poluição sonora por veículos", url: "https://www.manaus.am.gov.br/" }] },
];

export type Cicom = { unit: string; area: string; phone: string; map: string };
export type CicomGroup = { name: string; units: Cicom[] };
const makeCicom = (unit: string, area: string, phone: string): Cicom => ({ unit, area, phone, map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${unit} Manaus AM`)}` });
export const cicomGroups: CicomGroup[] = [
  { name: "CPA Norte", units: [makeCicom("6ª CICOM", "Cidade Nova", "98842-1565"), makeCicom("13ª CICOM", "Cidade de Deus", "98842-1633"), makeCicom("15ª CICOM", "Monte das Oliveiras", "98842-1697"), makeCicom("18ª CICOM", "Novo Israel", "98842-1712"), makeCicom("26ª CICOM", "Santa Etelvina", "98842-1767"), makeCicom("27ª CICOM", "Novo Aleixo", "98842-1772")] },
  { name: "CPA Sul", units: [makeCicom("1ª CICOM", "Cachoeirinha, Praça 14 e São Francisco", "98842-1756"), makeCicom("2ª CICOM", "Colônia Oliveira Machado, Educandos e Santa Luzia", "98842-1464"), makeCicom("3ª CICOM", "Petrópolis — Rua Cel. Ferreira de Araújo, 569", "98842-1549"), makeCicom("7ª CICOM", "Betânia", "98842-1570"), makeCicom("24ª CICOM", "Centro de Manaus, Aparecida e Presidente Vargas", "98842-1548")] },
  { name: "CPA Leste", units: [makeCicom("4ª CICOM", "Gilberto Mestrinho e adjacências", "98842-1552"), makeCicom("9ª CICOM", "São José Operário", "98842-1581"), makeCicom("11ª CICOM", "Coroado", "98842-1593"), makeCicom("14ª CICOM", "Nova Floresta, Tancredo Neves e Jorge Teixeira", "98842-1667"), makeCicom("25ª CICOM", "Armando Mendes e áreas próximas", "98842-2911"), makeCicom("28ª CICOM", "Colônia Antônio Aleixo e Puraquequara", "98842-1460"), makeCicom("29ª CICOM", "Mauazinho", "98842-1752"), makeCicom("30ª CICOM", "Jorge Teixeira e Val Paraíso", "98842-1732")] },
  { name: "CPA Oeste", units: [makeCicom("5ª CICOM", "Santo Antônio, Glória, São Raimundo e Vila da Prata", "98842-1561"), makeCicom("8ª CICOM", "Compensa 1, 2 e 3 e Santo Agostinho", "98842-1577"), makeCicom("19ª CICOM", "Ponta Negra, Nova Esperança e Lírio do Vale", "98842-1763"), makeCicom("20ª CICOM", "Tarumã e comunidades adjacentes", "98842-1837")] },
  { name: "CPA Centro-Sul", units: [makeCicom("12ª CICOM", "Flores e áreas adjacentes", "98842-1622"), makeCicom("16ª CICOM", "Adrianópolis e Aleixo", "98842-1705"), makeCicom("22ª CICOM", "Nossa Senhora das Graças, Vieiralves e áreas próximas", "98842-1784"), makeCicom("23ª CICOM", "Parque Dez de Novembro e Eldorado", "98842-2298")] },
  { name: "CPA Centro-Oeste", units: [makeCicom("10ª CICOM", "Alvorada e Dom Pedro", "98842-1589"), makeCicom("17ª CICOM", "Redenção, Planalto e Paz", "98842-1709"), makeCicom("21ª CICOM", "São Jorge e Vila da Prata", "98842-2850")] },
];
