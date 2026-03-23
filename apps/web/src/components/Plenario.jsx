import React, { useState, useEffect } from 'react';
import { Gavel, Users, Check, X, Landmark, TrendingUp, ChevronDown, AlertCircle } from 'lucide-react';

export default function Plenario({ project, projects, onSelect }) {
  const [mounted, setMounted] = useState(false);
  const [voting, setVoting] = useState(false);
  const [result, setResult] = useState(null);
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Limpa o resultado se trocar de projeto
    setResult(null);
  }, [project]);

  const runSimulation = () => {
    if (!project) return;
    setVoting(true);
    setResult(null);
    
    // Simulação baseada no Score da Minuta
    setTimeout(() => {
      const baseScore = project.score || 70;
      const favor = Math.floor((baseScore / 100) * 24);
      const contra = Math.floor(Math.random() * (24 - favor));
      const abstencao = 24 - favor - contra;
      
      setResult({ 
        favor, 
        contra, 
        abstencao, 
        total: 24, 
        status: favor >= 13 ? 'Aprovado' : 'Rejeitado' 
      });
      setVoting(false);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-100 dark:border-slate-800 pb-10">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
            Plenário <span className="text-indigo-600">Virtual</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">ALE-TO: Assembleia Legislativa do Tocantins</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Seletor de Minuta Ativa */}
          <div className="relative">
            <button 
              onClick={() => setShowSelector(!showSelector)}
              className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 px-6 py-4 rounded-3xl flex items-center gap-4 shadow-sm hover:border-indigo-600 transition-all"
            >
              <div className="text-left">
                <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest italic">Minuta em Pauta</p>
                <p className="text-xs font-black uppercase text-slate-900 dark:text-white tracking-tight">
                  {project ? project.title : "Selecionar para Votação"}
                </p>
              </div>
              <ChevronDown size={18} className="text-indigo-600" />
            </button>

            {showSelector && (
              <div className="absolute top-full right-0 mt-3 w-80 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] shadow-2xl z-50 overflow-hidden animate-in zoom-in-95 duration-200">
                {projects?.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { onSelect(p); setShowSelector(false); }}
                    className={`w-full text-left px-8 py-5 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border-b border-slate-50 dark:border-slate-800 last:border-0 ${project?.id === p.id ? 'bg-indigo-50/50 dark:bg-indigo-900/10' : ''}`}
                  >
                    <p className="text-[9px] font-black text-indigo-600 uppercase mb-1 tracking-widest">{p.id}</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-white uppercase leading-tight italic">{p.title}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={runSimulation}
            disabled={voting || !project}
            className="bg-slate-900 dark:bg-indigo-600 text-white px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl flex items-center gap-4 disabled:opacity-30 disabled:hover:scale-100"
          >
            {voting ? "Contabilizando..." : <><Gavel size={20} /> Votar</>}
          </button>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {!project ? (
          <div className="lg:col-span-3 bg-amber-50 dark:bg-amber-900/10 border-2 border-dashed border-amber-200 dark:border-amber-800 p-20 rounded-[5rem] text-center space-y-4">
            <AlertCircle className="mx-auto text-amber-500" size={48} />
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-amber-900 dark:text-amber-200">Ordem do Dia Vazia</h3>
            <p className="text-sm text-amber-700 dark:text-amber-400 font-serif italic max-w-md mx-auto">
              Selecione uma minuta no menu acima para iniciar o rastro de votação no plenário da Assembleia Legislativa.
            </p>
          </div>
        ) : (
          <>
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-16 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-2xl min-h-[500px] flex flex-col justify-center relative overflow-hidden">
              {voting && <div className="absolute inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] z-10 animate-pulse"></div>}
              
              {result ? (
                <div className="space-y-12 animate-in zoom-in-95 duration-500">
                  <div className="text-center space-y-4">
                    <p className={`text-[10px] font-black uppercase tracking-[0.4em] italic ${result.status === 'Aprovado' ? 'text-emerald-500' : 'text-rose-500'}`}>
                      Rastro: {result.status}
                    </p>
                    <h3 className="text-9xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-none">
                      {result.favor}<span className="text-slate-200 dark:text-slate-800 text-6xl">/24</span>
                    </h3>
                  </div>
                  <div className="flex h-10 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-1.5 shadow-inner">
                    <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/20" style={{ width: `${(result.favor/24)*100}%` }}></div>
                    <div className="bg-rose-500 h-full rounded-full transition-all duration-1000 mx-1.5" style={{ width: `${(result.contra/24)*100}%` }}></div>
                    <div className="bg-slate-400 h-full rounded-full transition-all duration-1000" style={{ width: `${(result.abstencao/24)*100}%` }}></div>
                  </div>
                  <div className="flex justify-center gap-10">
                    <div className="text-center">
                      <p className="text-3xl font-black text-emerald-500 italic">{result.favor}</p>
                      <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">A Favor</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-rose-500 italic">{result.contra}</p>
                      <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Contra</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black text-slate-400 italic">{result.abstencao}</p>
                      <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Abstenção</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6 opacity-20">
                  <Landmark size={120} className="mx-auto" />
                  <p className="text-sm font-black uppercase tracking-[0.5em] italic">Aguardando rastro de votação para "{project.id}"</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-600 p-12 rounded-[4rem] text-white shadow-2xl space-y-8 h-full">
                <div className="space-y-4">
                  <TrendingUp size={32} className="text-indigo-300" />
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-tight">Projeção Política</h4>
                  <p className="text-sm font-serif italic opacity-80 leading-relaxed">
                    A minuta "{project.title}" apresenta um rastro de forte adesão na bancada da saúde, mas enfrenta escrutínio técnico na CCJ.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-black uppercase tracking-widest">Consenso Estimado</span>
                      <span className="text-emerald-400 font-black italic">{project.score}%</span>
                   </div>
                   <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 transition-all duration-1000" style={{ width: `${project.score}%` }}></div>
                   </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
