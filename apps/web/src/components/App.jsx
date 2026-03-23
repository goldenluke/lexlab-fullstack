import React, { useState, useEffect } from 'react';
import Layout from './Layout.jsx';
import Auth from './Auth.jsx';
import Dashboard from './Dashboard.jsx';
import EditorPage from './EditorPage.jsx';
import Analytics from './Analytics.jsx';
import Plenario from './Plenario.jsx';
import Profile from './Profile.jsx';
import NexusGraph from './NexusGraph.jsx';
import ScenarioSandbox from './ScenarioSandbox.jsx';
import LexBudget from './LexBudget.jsx';
import Exporter from './Exporter.jsx';
import References from './References.jsx';
import LegalLinter from './LegalLinter.jsx';
import SocialSentiment from './SocialSentiment.jsx';
import LexGeo from './LexGeo.jsx';
import Timeline from './Timeline.jsx';
import LexSupremacy from './LexSupremacy.jsx';
import CCJSim from './CCJSim.jsx';
import LexCom from './LexCom.jsx';
import LexPress from './LexPress.jsx';
import LexEmergency from './LexEmergency.jsx';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [page, setPage] = useState('dashboard');
  const [activeProject, setActiveProject] = useState(null);
  
  const [projects, setProjects] = useState([
    { id: 'LX-2026-001', title: "Reforma Tributária - Simpler", status: 'Ativo', score: 85, budget: 4500000, theme: 'Tributário', content: "Art 1º..." },
    { id: 'LX-2026-002', title: "Código de Vigilância Sanitária", status: 'Revisão', score: 92, budget: 1200000, theme: 'Saúde Pública', content: "Art 1º..." },
    { id: 'LX-2026-003', title: "Lei de Incentivo ao LabSUS", status: 'Concluído', score: 98, budget: 850000, theme: 'Tecnologia', content: "Art 1º..." },
  ]);

  // Rastro de Títulos Dinâmicos
  useEffect(() => {
    if (!isAuthenticated) {
      document.title = "LexLab | Gabinete Digital";
      return;
    }

    const pageTitles = {
      dashboard: "Console Central",
      editor: activeProject ? `Editando: ${activeProject.id}` : "Nova Minuta",
      ccj: "CCJ-Sim | Análise Técnica",
      comissoes: "Hub de Comissões",
      congresso: "Plenário Virtual",
      supremacy: "LexSupremacy | Kelsen",
      fiscal: "LexBudget | Sentinela Fiscal",
      geo: "LexGeo | Mapas Legislativos",
      emergency: "🚨 GABINETE DE CRISE",
      nexus: "Nexo Semântico",
      social: "Social Sentiment",
      history: "Timeline Histórica",
      press: "LexPress | Diário Oficial",
      analytics: "Métricas & IA",
      profile: "Perfil do Consultor"
    };

    const currentTitle = pageTitles[page] || "Digital Twin";
    document.title = `LexLab | ${currentTitle}`;
  }, [page, activeProject, isAuthenticated]);

  useEffect(() => {
    const auth = localStorage.getItem("lexlab_auth") === "true";
    setIsAuthenticated(auth);
    setIsLoaded(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("lexlab_auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("lexlab_auth");
    setIsAuthenticated(false);
    setPage('dashboard');
  };

  if (!isLoaded) return <div className="h-screen bg-slate-950 flex items-center justify-center text-indigo-500 font-black animate-pulse uppercase tracking-widest">Sincronizando LexLab...</div>;
  if (!isAuthenticated) return <Auth onLogin={handleLogin} />;

  return (
    <Layout setPage={setPage} activePage={page} onLogout={handleLogout}>
      {page === 'dashboard' && <Dashboard projects={projects} onOpen={(p) => { setActiveProject(p); setPage('editor'); }} onNew={() => { setActiveProject(null); setPage('editor'); }} />}
      {page === 'editor' && <EditorPage project={activeProject} onBack={() => setPage('dashboard')} />}
      {page === 'ccj' && <CCJSim project={activeProject} />}
      {page === 'comissoes' && <LexCom project={activeProject} />}
      {page === 'congresso' && <Plenario project={activeProject} projects={projects} onSelect={setActiveProject} />}
      {page === 'supremacy' && <LexSupremacy project={activeProject} />}
      {page === 'fiscal' && <LexBudget project={activeProject} />}
      {page === 'geo' && <LexGeo project={activeProject} />}
      {page === 'emergency' && <LexEmergency project={activeProject} />}
      {page === 'nexus' && <NexusGraph project={activeProject} />}
      {page === 'social' && <SocialSentiment project={activeProject} />}
      {page === 'history' && <Timeline project={activeProject} />}
      {page === 'press' && <LexPress project={activeProject} />}
      {page === 'analytics' && <Analytics projects={projects} />}
      {page === 'profile' && <Profile user={{name: "Lucas Dourado", role: "Chief Strategist", bio: "Pesquisador LabSUS."}} />}
    </Layout>
  );
}
