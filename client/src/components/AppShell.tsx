/**
 * NEXO LEGAL is a compact legal-operational PWA. Its installation prompt is
 * temporary at application start and persistent only in the settings route.
 */
import { BookOpenText, Home, Menu, Star } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "wouter";

export const BRAND_MARK_URL = "/manus-storage/nexo-legal-salute-mark_97514722.png";
const INSTALL_HINT_UNTIL_KEY = "nexo-legal-install-hint-until";

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

export function InstallHint({ persistent = false }: { persistent?: boolean }) {
  return (
    <section className={`install-hint ${persistent ? "install-hint--settings" : ""}`} role={persistent ? "region" : "status"} aria-label="Instalar aplicativo">
      <div><strong>Instalar aplicativo</strong><span>Toque para instalar o NEXO LEGAL no celular.</span></div>
      <button type="button" onClick={() => window.alert("Use o menu do navegador para adicionar este aplicativo à tela inicial.")}>Instalar</button>
    </section>
  );
}

function useTemporaryInstallHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let until = 0;
    try {
      until = Number(window.sessionStorage.getItem(INSTALL_HINT_UNTIL_KEY));
      if (!Number.isFinite(until) || until <= now) {
        until = now + 10_000;
        window.sessionStorage.setItem(INSTALL_HINT_UNTIL_KEY, String(until));
      }
    } catch {
      until = now + 10_000;
    }

    const remaining = until - now;
    if (remaining <= 0) return;
    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), remaining);
    return () => window.clearTimeout(timeout);
  }, []);

  return visible;
}

export function AppShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const showInstallHint = useTemporaryInstallHint();
  return (
    <div className="app-shell">
      <main className="app-shell__content">{children}</main>
      {showInstallHint && location !== "/configuracoes" && <InstallHint />}
      <BottomNav />
    </div>
  );
}
