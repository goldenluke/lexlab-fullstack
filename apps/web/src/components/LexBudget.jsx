import React from 'react';
import { DollarSign, CheckCircle2, TrendingUp } from 'lucide-react';

export default function LexBudget({ project }) {
  if (!project) return <div className="p-20 text-center font-black opacity-20 text-slate-400">VINCULE UMA MINUTA AO FISCAL SENTINEL</div>;

  return (
    <div className="p-10 space-y-10 animate-in fade-in">
      <div className="bg-slate-900 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <TrendingUp className="absolute -right-10 -bottom-10 text-white/5" size={300} />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-2">Orçamento: {project.id}</p>
        <h2 className="text-7xl font-black italic tracking-tighter leading-none">R$ {(project.budget || 0).toLocaleString('pt-BR')}</h2>
        <div className="mt-8 flex items-center gap-3 bg-white/10 w-fit px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10">
          <CheckCircle2 className="text-emerald-400" size={16} />
          <span className="text-[9px] font-black uppercase tracking-widest italic">Fonte: Tesouro Estadual (TO)</span>
        </div>
      </div>
    </div>
  );
}
