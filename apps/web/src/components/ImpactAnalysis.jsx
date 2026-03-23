import React from 'react';
import { Target, AlertTriangle, Zap, BarChart, TrendingUp, ShieldAlert } from 'lucide-react';

export default function ImpactAnalysis({ project }) {
  const metrics = [
    { label: 'Conflito Normativo', value: 'Baixo', color: 'text-emerald-500', icon: ShieldAlert },
    { label: 'Impacto Econ\u00F4mico', value: 'R$ 2.4Bi', color: 'text-indigo-600', icon: TrendingUp },
    { label: 'Complexidade Social', value: 'M\u00E9dia', color: 'text-amber-500', icon: BarChart },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
      <header className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Mapa de Impacto (Nexus)</h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">An\u00E1lise de Correla\u00E7\u00E3o via Llama 3</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <m.icon className={`${m.color} mb-4`} size={24} />
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</h4>
            <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-[10px] font-black uppercase">
              <Zap size={14} /> Insight da Intelig\u00EAncia
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter">Detec\u00E7\u00E3o de Antinomia</h3>
            <p className="text-slate-400 font-serif italic text-lg leading-relaxed">
              "A Se\u00E7\u00E3o IV desta minuta pode conflitar com o Artigo 12 da Lei Federal 13.709. Recomenda-se a cl\u00E1usula de revoga\u00E7\u00E3o expressa para evitar inseguran\u00E7a jur\u00EDdica."
            </p>
          </div>
          <div className="w-48 h-48 rounded-full border-8 border-indigo-500/30 flex items-center justify-center relative">
             <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/10"></div>
             <Target size={64} className="text-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
