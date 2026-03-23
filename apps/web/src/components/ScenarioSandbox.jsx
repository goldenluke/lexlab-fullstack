import React, { useState, useEffect } from 'react';
import { Play, TrendingUp, Users, DollarSign, Loader2, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ScenarioSandbox({ project }) {
  const [mounted, setMounted] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeScenario, setActiveScenario] = useState('A');
  const [results, setResults] = useState(null);

  useEffect(() => setMounted(true), []);

  // Simulação de rastro de otimização da IA
  const scenarios = {
    A: { 
      title: "Texto Original", 
      content: project?.content || "Nenhuma minuta selecionada no rastro." 
    },
    B: { 
      title: "Otimização LexLab", 
      content: project ? `[IA] ${project.content.replace("estabelece", "fortalece as redes de")} com foco em vigilância sanitária e sustentabilidade.` : "Aguardando rastro de dados..." 
    }
  };

  const runSimulation = () => {
    if (!project) return;
    setIsSimulating(true);
    setTimeout(() => {
      setResults({
        A: { economy: project.score - 10, social: 70, risk: 15, compliance: 80 },
        B: { economy: project.score + 5, social: 92, risk: 5, compliance: 98 }
      });
      setIsSimulating(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Scenario <span className="text-indigo-600">Sandbox</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Simulação de Impacto: {project?.title || "Selecione uma Minuta"}
          </p>
        </div>
        
        <button 
          onClick={runSimulation}
          disabled={isSimulating || !project}
          className="bg-indigo-600 text-white px-10 py-5 rounded-[2.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl flex items-center gap-3 disabled:opacity-30"
        >
          {isSimulating ? <Loader2 className="animate-spin" size={18} /> : <Play size={18} />}
          {isSimulating ? 'Processando Rastro...' : 'Simular Melhoria IA'}
        </button>
      </header>

      {!project ? (
        <div className="bg-amber-50 border border-amber-100 p-12 rounded-[4rem] text-center space-y-4">
          <AlertCircle className="mx-auto text-amber-500" size={48} />
          <p className="text-sm font-black text-amber-900 uppercase tracking-widest">Rastro Interrompido</p>
          <p className="text-xs text-amber-700 font-serif italic italic leading-relaxed">Selecione uma minuta no Console para iniciar a simulação A/B.</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-8">
            {['A', 'B'].map((s) => (
              <div 
                key={s}
                onClick={() => setActiveScenario(s)}
                className={`p-10 rounded-[4rem] border-4 transition-all cursor-pointer relative overflow-hidden ${
                  activeScenario === s 
                  ? 'bg-white dark:bg-slate-900 border-indigo-600 shadow-2xl scale-[1.02]' 
                  : 'bg-slate-50 dark:bg-slate-900/50 border-transparent opacity-60'
                }`}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[9px] font-black bg-slate-900 text-white px-4 py-1.5 rounded-full tracking-widest uppercase">
                    Cenário {s}
                  </span>
                  {results && s === 'B' && (
                    <span className="text-emerald-500 font-black text-[9px] uppercase flex items-center gap-1 tracking-widest animate-pulse">
                      <CheckCircle2 size={14}/> Sugerido
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic mb-4">
                  {scenarios[s].title}
                </h3>
                <p className="text-sm text-slate-400 font-serif italic leading-relaxed">
                  "{scenarios[s].content}"
                </p>
              </div>
            ))}
          </div>

          {results && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in slide-in-from-bottom-8">
              {[
                { label: 'Eficiência Fiscal', val: results[activeScenario].economy, icon: DollarSign, color: 'text-emerald-500' },
                { label: 'Impacto Social', val: results[activeScenario].social, icon: Users, color: 'text-indigo-600' },
                { label: 'Risco Jurídico', val: results[activeScenario].risk, icon: AlertCircle, color: 'text-rose-500' },
                { label: 'Compliance SUS', val: results[activeScenario].compliance, icon: Sparkles, color: 'text-amber-500' }
              ].map((m, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 text-center shadow-lg">
                  <div className={`flex justify-center mb-4 ${m.color}`}><m.icon size={24} /></div>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">{m.val}%</p>
                  <h4 className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">{m.label}</h4>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
