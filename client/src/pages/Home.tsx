/**
 * Design reference: compact legal-operational PWA. The home screen keeps its
 * narrow app silhouette, utility-first shortcuts, navy surfaces and gold cues.
 */
import { AppShell, Brand } from "@/components/AppShell";
import { occurrences } from "@/data/appData";
import { BellRing, BookOpenText, Building2, Clock3, HeartHandshake, Search, Settings2, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const shortcuts = [
  { title: "Ocorrências", description: "Consulte orientações por situação", icon: ShieldCheck, path: "/ocorrencias" },
  { title: "Apoiar projeto", description: "Ajude a manter o aplicativo", icon: HeartHandshake, path: "/apoiar" },
  { title: "Legislação", description: "Consulte leis e artigos", icon: BookOpenText, path: "/legislacao" },
  { title: "CICOMs", description: "Contatos e localizações", icon: Building2, path: "/cicoms" },
  { title: "Favoritos", description: "Conteúdos salvos", icon: Star, path: "/favoritos" },
  { title: "Consultados recentemente", description: "Nenhuma consulta local", icon: Clock3, path: "/ocorrencias" },
  { title: "Atualizações", description: "Novidades jurídicas", icon: BellRing, path: "/atualizacoes" },
  { title: "Ajustes", description: "Preferências do app", icon: Settings2, path: "/configuracoes" },
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
