import React from 'react';
import { Scale, CheckCircle2, AlertTriangle, Landmark, BookOpen } from 'lucide-react';

export default function LexSupremacy({ project }) {
  if (!project) return <div className="p-20 text-center font-black opacity-20 text-slate-400">SELECIONE UMA MINUTA PARA ANÁLISE DE KELSEN</div>;

  return (
    <div className="p-10 space-y-10 animate-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white dark:bg-slate-900 p-12 rounded-[5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-10">Lex<span className="text-indigo-600">Supremacy</span></h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100">
            <div className="flex items-center gap-4 text-emerald-600"><Landmark size={20} /><span className="text-[10px] font-black uppercase italic">Constituição Federal</span></div>
            <CheckCircle2 className="text-emerald-500" size={18} />
          </div>
          <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400"><BookOpen size={20} /><span className="text-[10px] font-black uppercase italic">Lei Orgânica do SUS</span></div>
            <CheckCircle2 className="text-emerald-500" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
