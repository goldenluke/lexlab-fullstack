import React, { useState } from 'react';
import { 
  LayoutDashboard, BarChart3, User, LogOut, Landmark, 
  Gavel, History, DollarSign, Printer, Map, AlertOctagon,
  MessagesSquare, Scale, FileCheck, ShieldCheck, Network
} from 'lucide-react';

export default function Layout({ children, setPage, activePage, onLogout }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Console Central' },
    { id: 'ccj', icon: ShieldCheck, label: 'CCJ-Sim (Técnico)' },
    { id: 'comissoes', icon: FileCheck, label: 'Hub de Comissões' },
    { id: 'congresso', icon: Gavel, label: 'Plenário Virtual' },
    { id: 'supremacy', icon: Scale, label: 'LexSupremacy' },
    { id: 'fiscal', icon: DollarSign, label: 'LexBudget' },
    { id: 'geo', icon: Map, label: 'LexGeo (Mapas)' },
    { id: 'emergency', icon: AlertOctagon, label: 'LexEmergency' },
    { id: 'nexus', icon: Network, label: 'Nexo Semântico' },
    { id: 'social', icon: MessagesSquare, label: 'Social Sentiment' },
    { id: 'history', icon: History, label: 'Timeline Histórica' },
    { id: 'press', icon: Printer, label: 'LexPress (DOE)' },
    { id: 'analytics', icon: BarChart3, label: 'Métricas & IA' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans antialiased">
      <aside 
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center py-8 z-[100] transition-all duration-500 shadow-2xl ${isExpanded ? 'w-64 px-6' : 'w-20 px-2'}`}
      >
        {/* Logo Ampliada com Fundo Sólido Preservado */}
        <div 
          className="bg-indigo-600 p-3 rounded-[1.25rem] shadow-2xl mb-12 cursor-pointer hover:rotate-6 hover:scale-105 transition-all duration-300 active:scale-95" 
          onClick={() => setPage('dashboard')}
        >
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* O rect de fundo foi removido para transparência, deixando o bg-indigo-600 do Tailwind brilhar */}
            <path d="M50 25v50M25 42h50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="25" cy="42" r="7" fill="white"/>
            <circle cx="75" cy="42" r="7" fill="white"/>
            <path d="M25 42c0 12 10 22 25 22s25-10 25-22" stroke="white" strokeWidth="3" strokeDasharray="6 6" opacity="0.5"/>
            <circle cx="50" cy="68" r="4" fill="white" opacity="0.8"/>
          </svg>
        </div>

        <nav className="flex flex-col gap-2 flex-1 w-full overflow-y-auto no-scrollbar pr-1">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setPage(item.id)} 
              className={`flex items-center p-4 rounded-2xl transition-all w-full group relative ${activePage === item.id ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 font-black shadow-sm' : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-indigo-500'}`}
            >
              <item.icon size={22} className={`min-w-[22px] ${activePage === item.id ? 'scale-110' : ''}`} />
              <span className={`ml-4 text-[10px] font-black uppercase tracking-widest transition-opacity whitespace-nowrap overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                {item.label}
              </span>
              
              {!isExpanded && (
                <div className="absolute left-16 bg-slate-900 text-white text-[8px] font-black uppercase px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl border border-white/10">
                  {item.label}
                </div>
              )}
            </button>
          ))}
        </nav>

        <div className="w-full pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
          <button onClick={() => setPage('profile')} className="flex items-center p-4 text-slate-400 hover:text-indigo-600 transition-all">
            <User size={22} className="min-w-[22px]" />
            <span className={`ml-4 text-[10px] font-black uppercase tracking-widest transition-opacity overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>Perfil</span>
          </button>
          <button onClick={onLogout} className="flex items-center p-4 text-slate-300 hover:text-rose-500 transition-all cursor-pointer">
            <LogOut size={22} className="min-w-[22px]" />
            <span className={`ml-4 text-[10px] font-black uppercase tracking-widest transition-opacity overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>Sair</span>
          </button>
        </div>
      </aside>

      <main className={`flex-1 p-10 transition-all duration-500 ${isExpanded ? 'ml-64' : 'ml-20'}`}>
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
