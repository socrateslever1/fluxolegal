/**
 * NEXO LEGAL uses a decision-immediate home: search comes first, one primary
 * field action leads the screen, and supporting references follow by urgency.
 */
import { AppShell, Brand } from "@/components/AppShell";
import { occurrences } from "@/data/appData";
import { ArrowRight, BellRing, BookOpenText, Building2, ClipboardCheck, Clock3, Search, Settings2, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const fieldActions = [
  { eyebrow: "PROCEDIMENTO", title: "Consultar POP", description: "Encontre o processo vinculado ao atendimento.", icon: ClipboardCheck, path: "/procedimentos" },
  { eyebrow: "FUNDAMENTO", title: "Pesquisar legislação", description: "Localize lei, artigo ou tema jurídico.", icon: BookOpenText, path: "/legislacao" },
  { eyebrow: "APOIO", title: "Acionar CICOM", description: "Acesse contatos e áreas de atendimento.", icon: Building2, path: "/cicoms" },
];

const continuityActions = [
  { title: "Favoritos", icon: Star, path: "/favoritos" },
  { title: "Atualizações", icon: BellRing, path: "/atualizacoes" },
  { title: "Configurar", icon: Settings2, path: "/configuracoes" },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const matches = query.trim().length > 1
    ? occurrences.filter((item) => `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))).slice(0, 4)
    : [];

  return <AppShell>
    <div className="home-main page-enter">
      <header className="home-header"><Brand /><span className="updated-at">Atualizado em 26/08/2026</span></header>
      <section className="home-command">
        <span className="action-kicker">Consulta de campo</span>
        <h1>Qual ação você precisa agora?</h1>
        <p>Pesquise a situação, a norma ou avance direto pela ação operacional.</p>
      <div className="home-search-wrap">
        <label className="search-field" aria-label="Pesquisar ocorrência">
          <Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ocorrência, crime, artigo ou situação..." />
        </label>
        {matches.length > 0 && <div className="search-results" role="listbox">
          {matches.map((item) => <button key={item.slug} onClick={() => setLocation(`/ocorrencia/${item.slug}`)}><span>{item.title}</span><small>{item.category}</small></button>)}
        </div>}
      </div>
        <div className="triage-row" aria-label="Caminhos de consulta rápida"><button onClick={() => setLocation("/ocorrencias")}>Ocorrências</button><button onClick={() => setLocation("/procedimentos")}>POPs</button><button onClick={() => setLocation("/legislacao")}>Leis</button></div>
      </section>
      <button className="primary-action" onClick={() => setLocation("/ocorrencias")}><span className="primary-action__icon"><ShieldCheck size={25} /></span><span><em>Ação imediata</em><strong>Atender ocorrência</strong><small>Localize a ficha e seus vínculos jurídicos.</small></span><ArrowRight size={22} /></button>
      <section className="field-actions" aria-label="Ações de campo"><div className="section-label"><span>Referências de campo</span><i /></div>{fieldActions.map(({ eyebrow, title, description, icon: Icon, path }) => <button key={title} className="field-action" onClick={() => setLocation(path)}><span className="field-action__icon"><Icon size={20} /></span><span><em>{eyebrow}</em><strong>{title}</strong><small>{description}</small></span><ArrowRight size={18} /></button>)}</section>
      <section className="continuity-actions" aria-label="Continuidade"><div className="section-label"><span>Continuidade</span><i /></div><div>{continuityActions.map(({ title, icon: Icon, path }) => <button key={title} onClick={() => setLocation(path)}><Icon size={17} /><span>{title}</span></button>)}</div></section>
    </div>
  </AppShell>;
}
