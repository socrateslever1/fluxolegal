/**
 * Design reference: NEXO LEGAL is a compact legal-operational PWA. Slate navy,
 * ivory and soft coral support friendly contrast and a field-uniform character.
 */
import { BookOpenText, Home, Menu, Star } from "lucide-react";
import type { ReactNode } from "react";
import { useLocation } from "wouter";

export const BRAND_MARK_URL = "/manus-storage/nexo-legal-salute-mark_97514722.png";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <img src={BRAND_MARK_URL} alt="Símbolo do NEXO LEGAL" className="brand__mark" />
      <div>
        <div className="brand__wordmark">NEXO LEGAL</div>
        {!compact && <p className="brand__tagline">Conecte a ocorrência à decisão legal.</p>}
      </div>
    </div>
  );
}

function BottomNav() {
  const [location, setLocation] = useLocation();
  const items = [
    { label: "Início", icon: Home, path: "/" },
    { label: "Legislação", icon: BookOpenText, path: "/legislacao" },
    { label: "Favoritos", icon: Star, path: "/favoritos" },
    { label: "Menu", icon: Menu, path: "/menu" },
  ];
  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {items.map(({ label, icon: Icon, path }) => (
        <button key={path} className={`bottom-nav__item ${location === path ? "is-active" : ""}`} onClick={() => setLocation(path)}>
          <Icon size={18} strokeWidth={1.8} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

export function InstallHint() {
  return (
    <div className="install-hint" role="status">
      <div><strong>Instalar aplicativo</strong><span>Toque para instalar o NEXO LEGAL no celular.</span></div>
      <button type="button" onClick={() => window.alert("Use o menu do navegador para adicionar este aplicativo à tela inicial.")}>Instalar</button>
    </div>
  );
}

export function AppShell({ children, installHint = false }: { children: ReactNode; installHint?: boolean }) {
  return (
    <div className="app-shell">
      <main className="app-shell__content">{children}</main>
      {installHint && <InstallHint />}
      <BottomNav />
    </div>
  );
}
