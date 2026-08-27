/**
 * Design reference: legal-operational PWA with compact, high-contrast content
 * panels. Every route supports direct access and keeps important actions close.
 */
import { AppShell } from "@/components/AppShell";
import { cicomGroups, lawGroups, occurrences, type Occurrence } from "@/data/appData";
import {
  AlertTriangle, ArrowLeft, BellRing, BookOpenText, Building2, CheckCircle2, ChevronRight, ClipboardList,
  Clock3, Download, ExternalLink, FileText, HeartHandshake, Info, Landmark, MapPin, MessageSquare,
  Phone, Search, Send, Settings2, ShieldCheck, Star, Wifi,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState, type ComponentType } from "react";
import { useLocation } from "wouter";

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
const legislationImage = "/manus-storage/agir-legal-legislation-panel_19a73d3a.png";
const favoritesImage = "/manus-storage/agir-legal-favorites-empty_3ba934db.png";

function useFavorites() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("agir-legal-favorites") ?? "[]") as string[]; } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("agir-legal-favorites", JSON.stringify(favoriteSlugs)); }, [favoriteSlugs]);
  const toggle = (slug: string) => setFavoriteSlugs((current) => current.includes(slug) ? current.filter((entry) => entry !== slug) : [...current, slug]);
  return { favoriteSlugs, toggle };
}

function PageHeading({ eyebrow, title, description, icon: Icon }: { eyebrow: string; title: string; description?: string; icon?: IconComponent }) {
  return <header className="page-heading page-enter">
    <span className="eyebrow">{eyebrow}</span>
    <div className="page-heading__title">{Icon && <span className="heading-icon"><Icon size={20} /></span>}<h1>{title}</h1><img className="page-heading__seal" src="/manus-storage/agir-legal-shield-mark_6aca9baa.png" alt="" /></div>
    {description && <p>{description}</p>}
  </header>;
}

function BackButton() {
  const [, setLocation] = useLocation();
  return <button className="back-button" onClick={() => setLocation("/ocorrencias")}><ArrowLeft size={18} /> Voltar</button>;
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`panel ${className}`}>{children}</section>;
}

function SearchField({ value, onChange, placeholder, label }: { value: string; onChange: (value: string) => void; placeholder: string; label: string }) {
  return <label className="search-field search-field--wide" aria-label={label}><Search size={20} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>;
}

function OccurrenceIcon({ category }: { category: string }) {
  const common = { size: 20, strokeWidth: 1.7 };
  if (category === "Patrimônio") return <Landmark {...common} />;
  if (category === "Trânsito") return <Building2 {...common} />;
  if (category === "Procedimento") return <ClipboardList {...common} />;
  return <ShieldCheck {...common} />;
}

export function OccurrencesPage() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => occurrences.filter((item) => `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))), [query]);
  return <AppShell><div className="wide-page">
    <PageHeading eyebrow="Consulta" title="Todas as ocorrências" description="Fichas publicadas para consulta offline." />
    <SearchField value={query} onChange={setQuery} label="Pesquisar ocorrência" placeholder="Pesquisar ocorrência, crime ou situação..." />
    <p className="result-count">{filtered.length} fichas disponíveis</p>
    <div className="occurrence-grid page-enter">
      {filtered.map((item) => <button className="occurrence-card" key={item.slug} onClick={() => setLocation(`/ocorrencia/${item.slug}`)}>
        <span className="occurrence-card__icon"><OccurrenceIcon category={item.category} /></span><div><strong>{item.title}</strong><span className="occurrence-card__meta">{item.category}</span><p>{item.description}</p></div><ChevronRight className="occurrence-card__chevron" size={17} />
      </button>)}
    </div>
    {filtered.length === 0 && <Panel className="empty-panel"><Search size={26} /><strong>Nenhuma ocorrência encontrada</strong><p>Tente buscar por crime, contexto ou situação.</p></Panel>}
  </div></AppShell>;
}

const legalActions = [
  ["Preserve vida e segurança", "Confirme se há risco ativo, agressor nas proximidades ou vítima com sinais vitais. Havendo vida, acione socorro imediatamente e limite movimentações ao indispensável."],
  ["Isole o local", "Defina perímetro, impeça entrada de curiosos e preserve corpo, arma, cápsulas, sangue, pegadas, veículos, câmeras e objetos."],
  ["Colete informações sem contaminar prova", "Identifique testemunhas e última pessoa que viu a vítima, anote horários e rotas, mas não recolha objetos nem altere a cena sem necessidade legal."],
  ["Encaminhe o fluxo competente", "Acione perícia, autoridade competente e apoio necessário, mantendo registro de quem entrou no local até a liberação."],
];

function AccordionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="accordion-block"><button onClick={() => setOpen((current) => !current)}><span>{title}</span><span>{open ? "Ocultar" : "Ver"} <ChevronRight className={open ? "rotate" : ""} size={16} /></span></button>{open && <div className="accordion-block__content">{children}</div>}</div>;
}

function LawLink({ title, source = "Código Penal" }: { title: string; source?: string }) {
  return <a className="law-link" href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm" target="_blank" rel="noreferrer"><div><strong>{title}</strong><span>{source}</span></div><span>Ver letra da lei <ExternalLink size={14} /></span></a>;
}

function DetailContent({ occurrence, toggle, favorite }: { occurrence: Occurrence; toggle: (slug: string) => void; favorite: boolean }) {
  return <div className="detail-page">
    <BackButton />
    <PageHeading eyebrow="Ocorrência" title={occurrence.title} icon={ShieldCheck} />
    <button className={`favorite-button ${favorite ? "is-favorite" : ""}`} onClick={() => toggle(occurrence.slug)}><Star size={17} fill={favorite ? "currentColor" : "none"} /> {favorite ? "Favoritado" : "Favoritar"}</button>
    <Panel><h2>O que diz o POP sobre isso</h2><p className="panel-lead">Procedimento Operacional Padrão vinculado a esta ocorrência.</p>
      <div className="pop-card"><span className="eyebrow">Preservação de local de crime</span><div className="pop-card__meta"><b>PROCESSO: 3.09.00</b><b>PROCEDIMENTO: 3.09.01 a 3.09.03</b><b>ESTABELECIDO EM: 20.02.2014</b></div>
        <p><b>NOME DO PROCEDIMENTO:</b> Avaliação, preservação e término da preservação de local de crime</p><p><b>RESPONSÁVEL:</b> Equipe policial</p>
        <p className="muted"><b>Onde encontrar:</b> POP Última Versão, p. 130–134 do arquivo.</p>
      </div>
      <AccordionBlock title="Sequência de ações citada no POP"><ol><li>Avalie riscos e priorize o socorro quando houver vítima viva.</li><li>Delimite o local e restrinja o acesso de pessoas não autorizadas.</li><li>Registre informações e preserve vestígios até a liberação competente.</li></ol></AccordionBlock>
      <AccordionBlock title="Base legal citada no POP"><p>{occurrence.article}. Consulte a legislação oficial e a cadeia de custódia aplicável ao fato.</p></AccordionBlock>
      <div className="caution"><AlertTriangle size={18} /><p><b>Atenção:</b> Não altere posição de cadáver, pessoa ou objeto. Não revistar bolsos da vítima nem permitir alteração de vestígios.</p></div>
    </Panel>
    <Panel><h2>Ação legal do policial na ocorrência</h2><div className="action-list">{legalActions.map(([title, copy], index) => <div className="action-item" key={title}><span>{index + 1}</span><div><strong>{title}</strong><p>{copy}</p></div></div>)}</div></Panel>
    <Panel><h2>Base legal</h2><LawLink title={occurrence.article} /><LawLink title="Arts. 158-A a 158-F do CPP — Cadeia de custódia" source="Código de Processo Penal" /></Panel>
    <Panel className="alert-panel"><span className="heading-icon"><AlertTriangle size={19} /></span><div><h2>{occurrence.title}: atenção operacional</h2><p>Não altere local, corpo, arma, cápsulas, sangue ou objetos, salvo para socorro ou segurança imediata.</p><a href="https://www.planalto.gov.br/" target="_blank" rel="noreferrer">Conferir fonte oficial <ExternalLink size={13} /></a><small>Última revisão: 21/08/2026</small></div></Panel>
  </div>;
}

export function OccurrenceDetailPage({ params }: { params: { slug: string } }) {
  const { favoriteSlugs, toggle } = useFavorites();
  const occurrence = occurrences.find((item) => item.slug === params.slug) ?? occurrences[0];
  return <AppShell><DetailContent occurrence={occurrence} toggle={toggle} favorite={favoriteSlugs.includes(occurrence.slug)} /></AppShell>;
}

export function LawPage() {
  const [query, setQuery] = useState("");
  const groups = lawGroups.map((group) => ({ ...group, items: group.items.filter((item) => `${group.title} ${item.title}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))) })).filter((group) => group.items.length > 0);
  return <AppShell><div className="wide-page">
    <div className="law-hero"><img src={legislationImage} alt="Textura editorial para legislação" /><PageHeading eyebrow="Fontes oficiais" title="Legislação" description="Leis cadastradas com link direto para conferência." /></div>
    <SearchField value={query} onChange={setQuery} label="Pesquisar artigo de lei" placeholder="Pesquisar por artigo, lei ou assunto..." />
    <div className="law-groups">{groups.map((group) => <Panel key={group.title} className="law-group"><div className="law-group__heading"><div><h2>{group.title}</h2><p className="law-group__meta">{group.meta}</p></div><span>{group.items.length} itens</span></div>{group.items.map((item) => <a className="law-link" href={item.url} target="_blank" rel="noreferrer" key={item.title}><div><strong>{item.title}</strong><span>{group.title} — {group.meta}</span></div><span>Ver letra da lei <ExternalLink size={14} /></span></a>)}</Panel>)}</div>
  </div></AppShell>;
}

export function CicomPage() {
  const [query, setQuery] = useState("");
  const groups = cicomGroups.map((group) => ({ ...group, units: group.units.filter((unit) => `${group.name} ${unit.unit} ${unit.area} ${unit.phone}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))) })).filter((group) => group.units.length > 0);
  return <AppShell installHint><div className="wide-page cicom-page"><BackButton /><PageHeading eyebrow="Consulta operacional" title="CICOMs" icon={Building2} /><SearchField value={query} onChange={setQuery} label="Pesquisar CICOM" placeholder="Pesquisar por CICOM, CPA, bairro ou telefone..." />
    <div className="cicom-groups">{groups.map((group) => <Panel key={group.name} className="cicom-group"><div className="cicom-group__heading"><h2>{group.name}</h2><span>{group.units.length}</span></div>{group.units.map((unit) => <article className="cicom-unit" key={unit.unit}><strong>{unit.unit}</strong><p>{unit.area}</p><div><a href={`https://wa.me/5592${unit.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer"><Phone size={15} /> {unit.phone}</a><a href={unit.map} target="_blank" rel="noreferrer"><MapPin size={15} /> Localização <ExternalLink size={13} /></a></div></article>)}</Panel>)}</div>
  </div></AppShell>;
}

export function FavoritesPage() {
  const { favoriteSlugs, toggle } = useFavorites();
  const [, setLocation] = useLocation();
  const favorites = occurrences.filter((item) => favoriteSlugs.includes(item.slug));
  return <AppShell><div className="wide-page narrow-page"><PageHeading eyebrow="Consulta local" title="Favoritos" description="Salvos somente neste aparelho para uso offline." />
    {favorites.length ? <div className="favorites-list">{favorites.map((item) => <button className="occurrence-card" key={item.slug} onClick={() => setLocation(`/ocorrencia/${item.slug}`)}><span className="occurrence-card__icon"><Star size={20} /></span><div><strong>{item.title}</strong><span className="occurrence-card__meta">Salvo neste aparelho</span><p>{item.description}</p></div><span className="icon-action" onClick={(event) => { event.stopPropagation(); toggle(item.slug); }} aria-label={`Remover ${item.title} dos favoritos`}><Star size={17} fill="currentColor" /></span></button>)}</div> : <Panel className="empty-panel favorites-empty"><img src={favoritesImage} alt="Pasta vazia de conteúdos salvos" /><strong>Nenhum conteúdo salvo</strong><p>Use o botão Favoritar nas fichas para manter consultas importantes neste aparelho.</p></Panel>}
  </div></AppShell>;
}

const menuItems = [
  ["Atualizações jurídicas", BellRing, "/atualizacoes", "0"], ["Todas as ocorrências", ClipboardList, "/ocorrencias"], ["Favoritos", Star, "/favoritos"], ["Sugestões", MessageSquare, "/sugestoes"], ["Sobre", Info, "/sobre"], ["Configurações", Settings2, "/configuracoes"],
] as const;

export function MenuPage() {
  const [, setLocation] = useLocation();
  return <AppShell installHint><div className="wide-page narrow-page"><PageHeading eyebrow="Menu" title="AGIR LEGAL" description="Base jurídica disponível offline." />
    <Panel className="menu-panel">{menuItems.map(([label, Icon, path, end]) => <button key={label} className="menu-row" onClick={() => setLocation(path)}><Icon size={19} /><span>{label}</span>{end ? <em>{end}</em> : <ChevronRight size={18} />}</button>)}<button className="menu-row" onClick={() => window.alert("Use o menu do navegador para adicionar este aplicativo à tela inicial.")}><Download size={19} /><span>Instalar AGIR LEGAL</span><ChevronRight size={18} /></button></Panel>
    <Panel className="status-panel"><h2>Status da base</h2><p><Wifi size={16} /> Online</p><span>Última sincronização: 27/08/2026, 02:45:43</span><small>O painel administrativo fica acessível somente por /admin.</small></Panel>
  </div></AppShell>;
}

export function UpdatesPage() {
  return <AppShell><div className="wide-page narrow-page"><PageHeading eyebrow="Atualizações" title="Atualizações jurídicas" description="Alterações detectadas ou registradas para revisão." /><Panel className="empty-panel update-empty"><BellRing size={30} /><strong>Nenhuma atualização pendente</strong><p>A verificação automática online depende da configuração do serviço administrativo.</p></Panel></div></AppShell>;
}

export function SettingsPage() {
  const [minorOffense, setMinorOffense] = useState(() => localStorage.getItem("agir-legal-minor-offense") === "true");
  useEffect(() => localStorage.setItem("agir-legal-minor-offense", String(minorOffense)), [minorOffense]);
  return <AppShell><div className="wide-page narrow-page"><PageHeading eyebrow="Preferências" title="Configurações" description="Preferências locais do aparelho." />
    <Panel><h2>Aplicativo</h2><button className="gold-button" onClick={() => window.alert("Use o menu do navegador para adicionar este aplicativo à tela inicial.")}><Download size={17} /> Instalar AGIR LEGAL</button></Panel>
    <Panel><h2>Preferências locais</h2><label className="setting-toggle"><span><b>Identificar menor potencial ofensivo</b><small>Quando ativado, mostra a indicação de menor potencial ofensivo e libera o botão GERAR TCO nas ocorrências compatíveis.</small></span><input type="checkbox" checked={minorOffense} onChange={(event) => setMinorOffense(event.target.checked)} /><i aria-hidden="true" /></label></Panel>
  </div></AppShell>;
}

export function SupportPage() {
  return <AppShell><div className="wide-page narrow-page"><PageHeading eyebrow="Apoio" title="Apoiar o projeto" description="Contribuição voluntária, de valor livre, para manter o AGIR LEGAL vivo e em melhoria constante." /><Panel className="support-panel"><span className="heading-icon"><HeartHandshake size={23} /></span><strong>Apoio ainda não configurado</strong><p>Apoio voluntário ao projeto AGIR LEGAL.</p><small>Quando o administrador ativar este módulo, a chave Pix aparecerá aqui de forma discreta.</small></Panel></div></AppShell>;
}

export function SuggestionPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <AppShell><div className="wide-page narrow-page"><PageHeading eyebrow="Contribuição" title="Enviar sugestão" description="Não informe dados pessoais, dados de vítimas, suspeitos, local ou ocorrências reais sigilosas." />
    <Panel><form className="suggestion-form" onSubmit={submit}><label>Tipo<select defaultValue="correcao"><option value="nova-lei">Nova lei</option><option value="nova-ocorrencia">Nova ocorrência</option><option value="correcao">Correção</option><option value="melhoria">Melhoria</option><option value="nova-funcionalidade">Nova funcionalidade</option><option value="outro">Outro</option></select></label><label>Título<input required /></label><label>Descrição<textarea required rows={5} /></label><label>Lei/artigo opcional<input /></label><label>Fonte opcional<input /></label><label>Contato opcional<input /></label><button className="gold-button" type="submit"><Send size={17} /> Enviar sugestão</button>{sent && <p className="form-success"><CheckCircle2 size={17} /> Sugestão registrada nesta demonstração local.</p>}</form></Panel>
  </div></AppShell>;
}

export function AboutPage() {
  return <AppShell><div className="wide-page narrow-page"><PageHeading eyebrow="Sobre" title="Sobre o AGIR LEGAL" description="Guia operacional jurídico de consulta rápida, com funcionamento offline e fontes oficiais." />
    <Panel className="about-panel"><h2>Finalidade</h2><p>O AGIR LEGAL foi criado para apoiar o policial militar de área durante o atendimento imediato da ocorrência, no local do fato. A proposta é oferecer consulta rápida sobre POP, base legal pública, cuidados de segurança, preservação de provas e encaminhamentos básicos para que a atuação comece, desenvolva-se e seja encerrada dentro da legalidade.</p><p>O conteúdo ajuda a organizar a primeira resposta operacional: proteger vítimas, estabilizar o ambiente, conter risco atual, identificar envolvidos e testemunhas, preservar vestígios e apresentar ou encaminhar pessoas, objetos e informações à autoridade competente quando cabível.</p><p>O app não substitui análise do caso concreto, comando, autoridade competente, Poder Judiciário, corregedoria, protocolos institucionais, normas internas ou a conferência da fonte oficial vigente antes de decisões sensíveis.</p></Panel><p className="signature">Desenvolvido para demonstração da interface pública.</p>
  </div></AppShell>;
}
