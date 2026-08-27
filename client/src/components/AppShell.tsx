/**
 * NEXO LEGAL is a compact legal-operational PWA. Its startup install prompt is
 * dismissible for the device and the permanent action remains in Settings.
 */
import { BookOpenText, Home, Menu, Star } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "wouter";

export const BRAND_MARK_URL = "/manus-storage/nexo-legal-salute-mark_97514722.png";
const INSTALL_HINT_UNTIL_KEY = "nexo-legal-install-hint-until";
const INSTALL_HINT_DISMISSED_KEY = "nexo-legal-install-hint-dismissed";

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

export function InstallHint({ persistent = false, onClose }: { persistent?: boolean; onClose?: () => void }) {
  return (
    <section className={`install-hint ${persistent ? "install-hint--settings" : ""}`} role={persistent ? "region" : "status"} aria-label="Instalar aplicativo">
      <div><strong>Instalar aplicativo</strong><span>Toque para instalar o NEXO LEGAL no celular.</span></div>
      <button type="button" onClick={() => window.alert("Use o menu do navegador para adicionar este aplicativo à tela inicial.")}>Instalar</button>
      {onClose && <button className="install-hint__close" type="button" aria-label="Fechar e não mostrar novamente" title="Fechar e não mostrar novamente" onClick={onClose}>×</button>}
    </section>
  );
}

function useTemporaryInstallHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const now = Date.now();
    let until = 0;
    try {
      if (window.localStorage.getItem(INSTALL_HINT_DISMISSED_KEY) === "true") return;
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

  const dismissPermanently = () => {
    try {
      window.localStorage.setItem(INSTALL_HINT_DISMISSED_KEY, "true");
      window.sessionStorage.removeItem(INSTALL_HINT_UNTIL_KEY);
    } catch {
      // The banner still closes in browsers that deny web storage access.
    }
    setVisible(false);
  };

  return { visible, dismissPermanently };
}

export function AppShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { visible: showInstallHint, dismissPermanently } = useTemporaryInstallHint();
  return (
    <div className="app-shell">
      <main className="app-shell__content">{children}</main>
      {showInstallHint && location !== "/configuracoes" && <InstallHint onClose={dismissPermanently} />}
      <BottomNav />
    </div>
  );
}
