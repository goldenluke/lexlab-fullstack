import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, AlertCircle, PieChart, Activity, ShieldCheck } from 'lucide-react';

export default function FiscalSentinel({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const budgetMetrics = [
    { label: 'Custo Estimado (Anual)', value: 'R$ 14.2M', status: 'Dentro do Teto', color: 'text-indigo-600' },
    { label: 'Fonte de Custeio', value: 'Fundo Estadual de Saúde', status: 'Identificado', color: 'text-emerald-500' },
    { label: 'Risco Fiscal', value: 'Baixo', status: 'LFR Compliance', color: 'text-emerald-500' }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000">
      <header className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          Fiscal <span className="text-emerald-600">Sentinel</span>
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          Análise de Impacto Financeiro e Orçamentário
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {budgetMetrics.map((m, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{m.label}</h4>
            <div className="space-y-1">
              <p className={`text-4xl font-black tracking-tighter ${m.color}`}>{m.value}</p>
              <p className="text-[9px] font-black uppercase text-slate-300 italic">{m.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4 text-emerald-400">
              <ShieldCheck size={32} />
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Certificação LRF</h3>
            </div>
            <p className="text-slate-400 font-serif italic text-lg leading-relaxed">
              "O rastro financeiro desta lei está em conformidade com o Plano Plurianual (PPA). O impacto na Vigilância Sanitária de Tocantins está mitigado por repasses federais previstos no rastro do SUS."
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800 p-12 rounded-[5rem] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6 text-emerald-700 dark:text-emerald-400">
            <Activity size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest">Projeção 2026-2030</span>
          </div>
          <div className="space-y-4">
            <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full w-full overflow-hidden">
               <div className="h-full bg-emerald-500 w-[65%]"></div>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full w-full overflow-hidden">
               <div className="h-full bg-emerald-500 w-[40%] opacity-50"></div>
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-4 text-center">Rastro de Sustentabilidade Financeira: Estável</p>
          </div>
        </div>
      </div>
    </div>
  );
}
