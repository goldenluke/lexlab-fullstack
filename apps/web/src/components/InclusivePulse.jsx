import React, { useState, useEffect } from 'react';
import { HeartPulse, Users, ShieldAlert, CheckCircle2, Sparkles, Activity } from 'lucide-react';

export default function InclusivePulse({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const metrics = [
    { label: 'Saúde Coletiva', score: 92, status: 'Consistente', color: 'text-rose-500' },
    { label: 'Equidade Social', score: 85, status: 'Bom', color: 'text-indigo-600' },
    { label: 'Vigilância Sanitária', score: 98, status: 'Referência', color: 'text-emerald-500' },
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Inclusive <span className="text-rose-500">Pulse</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Auditoria de Determinantes Sociais e Saúde
          </p>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 border border-rose-100 dark:border-rose-800">
          <Activity size={14} className="animate-pulse" /> Monitoramento em Tempo Real
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-rose-100 dark:hover:shadow-none transition-all">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{m.label}</h4>
            <div className="flex items-baseline gap-2">
              <p className={`text-6xl font-black tracking-tighter ${m.color}`}>{m.score}%</p>
              <span className="text-[9px] font-black uppercase text-slate-300 italic">{m.status}</span>
            </div>
            <div className="mt-8 h-2 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-1000 bg-current ${m.color}`} style={{ width: `${m.score}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all duration-1000"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="p-6 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
            <Sparkles className="text-rose-400" size={40} />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Parecer Técnico LexLab</h3>
            <p className="text-slate-400 font-serif italic text-xl leading-relaxed max-w-4xl">
              "A proposta reflete um rastro de gestão em saúde pública comparável à atuação em vigilância sanitária estadual. A estrutura normativa protege o rastro de financiamento para o SUS nas microrregiões."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
