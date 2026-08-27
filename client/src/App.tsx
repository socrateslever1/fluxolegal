/**
 * NEXO LEGAL maintains a compact field-reference architecture with accessible
 * navy-slate contrast and direct paths to POPs and official legal sources.
 */
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import {
  AboutPage, CicomPage, FavoritesPage, LawPage, MenuPage, OccurrenceDetailPage,
  OccurrencesPage, ProceduresPage, SettingsPage, SuggestionPage, SupportPage, UpdatesPage,
} from "./pages/AppPages";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/ocorrencias" component={OccurrencesPage} />
    <Route path="/ocorrencia/:slug" component={OccurrenceDetailPage} />
    <Route path="/legislacao" component={LawPage} />
    <Route path="/procedimentos" component={ProceduresPage} />
    <Route path="/cicoms" component={CicomPage} />
    <Route path="/favoritos" component={FavoritesPage} />
    <Route path="/menu" component={MenuPage} />
    <Route path="/atualizacoes" component={UpdatesPage} />
    <Route path="/configuracoes" component={SettingsPage} />
    <Route path="/apoiar" component={SupportPage} />
    <Route path="/sugestoes" component={SuggestionPage} />
    <Route path="/sobre" component={AboutPage} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
