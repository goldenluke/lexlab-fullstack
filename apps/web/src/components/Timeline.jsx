import React, { useState, useEffect } from 'react';
import { History, Calendar, ArrowRight, ShieldCheck, Clock, Landmark, FileText } from 'lucide-react';

export default function Timeline({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const historicalMilestones = [
    { date: '1995-2002', title: 'Ciclo de Consolidação SUS/TO', desc: 'Período de estruturação das primeiras vigilâncias municipais.', icon: Landmark, color: 'text-amber-500' },
    { date: '2015-05-12', title: 'Lei de Transparência Sanitária', desc: 'Marco anterior que rege o rastro de dados atual.', icon: FileText, color: 'text-indigo-400' },
    { date: '2026-03-23', title: 'Minuta LexLab (Atual)', desc: project?.title || 'Redação em progresso', icon: Clock, color: 'text-emerald-500', active: true }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24">
      <header className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          Legislative <span className="text-indigo-600">Timeline</span>
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          Rastro Cronológico e Evolução Normativa
        </p>
      </header>

      <div className="relative">
        {/* Linha Central da Timeline */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

        <div className="space-y-12">
          {historicalMilestones.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Círculo Central */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 z-10 hidden md:block"></div>

              <div className="w-full md:w-1/2 space-y-4">
                <div className={`bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl transition-all hover:border-indigo-500 group ${item.active ? 'ring-2 ring-indigo-600 ring-offset-4 dark:ring-offset-slate-950' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className={item.color} size={24} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-serif italic mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-600 text-white p-10 rounded-[4rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Próximo Rastro Estimado</p>
          <h4 className="text-2xl font-black uppercase italic tracking-tighter">Protocolo no Plenário Virtual</h4>
        </div>
        <ArrowRight size={40} className="opacity-20 hidden md:block" />
        <div className="bg-white/10 px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center gap-3">
           <ShieldCheck size={20} className="text-emerald-400" />
           <span className="text-[9px] font-black uppercase tracking-[0.2em]">Rastro de Continuidade Validado</span>
        </div>
      </div>
    </div>
  );
}
