import React, { useState, useEffect } from 'react';
import { Gavel, Clock, Map, AlertTriangle, CheckCircle2, Info, ArrowRight } from 'lucide-react';

export default function Congresso({ project }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const proceduralSteps = [
    { name: 'Protocolo e Autua\u00E7\u00E3o', status: 'complete', desc: 'Rastro inicial gerado.' },
    { name: 'CCJ (Constitui\u00E7\u00E3o e Justi\u00E7a)', status: 'current', desc: 'An\u00E1lise de admissibilidade pedente.' },
    { name: 'Comiss\u00E3o de Finan\u00E7as', status: 'pending', desc: 'Aguardando impacto or\u00E7ament\u00E1rio.' },
    { name: 'Plen\u00E1rio', status: 'pending', desc: 'Vota\u00E7\u00E3o final.' }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
      <header className="flex justify-between items-end">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Rastro <span className="text-indigo-600">Regimental</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Monitoramento de Tramita\u00E7\u00E3o e Rito
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Timeline Legislativa */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-10 flex items-center gap-2">
              <Map size={20} className="text-indigo-600" /> Fluxo de Tramita\u00E7\u00E3o
            </h3>
            
            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
              {proceduralSteps.map((step, i) => (
                <div key={i} className="relative pl-12 group">
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center z-10 transition-colors ${
                    step.status === 'complete' ? 'bg-emerald-500 text-white' : 
                    step.status === 'current' ? 'bg-indigo-600 text-white animate-pulse' : 
                    'bg-slate-100 text-slate-300'
                  }`}>
                    {step.status === 'complete' ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                  </div>
                  <div>
                    <h4 className={`text-sm font-black uppercase tracking-widest ${step.status === 'pending' ? 'text-slate-300' : 'text-slate-900 dark:text-white'}`}>
                      {step.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-serif italic mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisor Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-10 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Gavel size={80} />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-6">Conselheiro IA</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <AlertTriangle className="text-amber-500 shrink-0" size={20} />
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "Risco de Inconstitucionalidade Formal: O Art. 12 invade compet\u00EAncia privativa da Uni\u00E3o. Recomendo alterar para car\u00E1ter autorizativo."
                </p>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-between group">
                Verificar Urg\u00EAncia <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[4rem] border border-indigo-100 dark:border-indigo-800">
             <div className="flex items-center gap-2 mb-4">
               <Info size={18} className="text-indigo-600" />
               <h4 className="text-[10px] font-black uppercase text-indigo-900 dark:text-indigo-300">Dica Regimental</h4>
             </div>
             <p className="text-[11px] text-indigo-800 dark:text-indigo-400 font-medium leading-relaxed">
               Este projeto se enquadra no rastro de "Tramita\u00E7\u00E3o Ordin\u00E1ria". O prazo estimado para primeira an\u00E1lise na CCJ \u00E9 de 15 dias \u00FAteis.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
