/**
 * NEXO LEGAL keeps a narrow operational silhouette, with uniform-inspired navy
 * slate, readable ivory and coral cues reserved for decision-oriented actions.
 */
import { AppShell, Brand } from "@/components/AppShell";
import { occurrences } from "@/data/appData";
import { BellRing, BookOpenText, Building2, ClipboardCheck, Clock3, HeartHandshake, Search, Settings2, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const shortcuts = [
  { title: "Atender ocorrência", description: "Localize o procedimento pela situação", icon: ShieldCheck, path: "/ocorrencias" },
  { title: "Procedimentos POP", description: "Consulte os POPs vinculados", icon: ClipboardCheck, path: "/procedimentos" },
  { title: "Pesquisar legislação", description: "Encontre norma, artigo ou tema", icon: BookOpenText, path: "/legislacao" },
  { title: "Acionar CICOM", description: "Contatos e localizações úteis", icon: Building2, path: "/cicoms" },
  { title: "Guardar referência", description: "Retome conteúdo salvo no aparelho", icon: Star, path: "/favoritos" },
  { title: "Retomar consulta", description: "Acesse a lista de ocorrências", icon: Clock3, path: "/ocorrencias" },
  { title: "Verificar mudanças", description: "Acompanhe a base jurídica", icon: BellRing, path: "/atualizacoes" },
  { title: "Controle local", description: "Ajuste preferências de campo", icon: Settings2, path: "/configuracoes" },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const matches = query.trim().length > 1
    ? occurrences.filter((item) => `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR"))).slice(0, 4)
    : [];

  return <AppShell installHint>
    <div className="home-main page-enter">
      <header className="home-header"><Brand /><span className="updated-at">Atualizado em 26/08/2026</span></header>
      <div className="home-search-wrap">
        <label className="search-field" aria-label="Pesquisar ocorrência">
          <Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Digite: ameaça, som alto, Maria da Penha..." />
        </label>
        {matches.length > 0 && <div className="search-results" role="listbox">
          {matches.map((item) => <button key={item.slug} onClick={() => setLocation(`/ocorrencia/${item.slug}`)}><span>{item.title}</span><small>{item.category}</small></button>)}
        </div>}
      </div>
      <section className="home-shortcut-grid" aria-label="Atalhos principais">
        {shortcuts.map(({ title, description, icon: Icon, path }) => <button key={title} className="home-card" onClick={() => setLocation(path)}>
          <Icon size={23} strokeWidth={1.8} /><strong>{title}</strong><span>{description}</span>
        </button>)}
      </section>
    </div>
  </AppShell>;
}
