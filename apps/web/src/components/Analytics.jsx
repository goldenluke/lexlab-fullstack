import React from 'react';
import { BarChart3, TrendingUp, Users, Target, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Analytics({ projects }) {
  const stats = [
    { label: 'Score Médio', value: '92.4', change: '+5.2%', up: true, icon: Target },
    { label: 'Impacto Social', value: '850k', change: '+12%', up: true, icon: Users },
    { label: 'Custo Médio', value: 'R$ 1.2M', change: '-2.1%', up: false, icon: Zap }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700 pb-24">
      <header className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
          Lex<span className="text-indigo-600">Metrics</span>
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Análise Comparativa e Rastro de Performance Legislativa</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 rounded-2xl">
                <s.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-[9px] font-black uppercase ${s.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {s.change}
              </div>
            </div>
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{s.label}</p>
            <p className="text-3xl font-black italic tracking-tighter">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl">
          <h3 className="text-sm font-black uppercase tracking-widest text-indigo-400 mb-10 flex items-center gap-3">
             <BarChart3 size={18} /> Comparativo de Efetividade (Score)
          </h3>
          <div className="space-y-8">
            {projects.map((p, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest opacity-60">
                  <span>{p.title}</span>
                  <span>{p.score}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${p.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 text-white p-12 rounded-[5rem] shadow-2xl flex flex-col justify-center space-y-6">
           <TrendingUp size={48} className="opacity-50" />
           <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Meta-Rastro de Aprovação</h4>
           <p className="text-sm font-serif italic opacity-80 leading-relaxed">
             A média de aprovação das leis geradas no LexLab é 34% superior ao rastro analógico tradicional da ALE-TO.
           </p>
           <div className="pt-6 border-t border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest italic">Fonte: Inteligência LabSUS 2026</p>
           </div>
        </div>
      </div>
    </div>
  );
}
