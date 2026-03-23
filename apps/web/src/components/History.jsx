import React, { useState, useEffect } from 'react';
import { History, RotateCcw, User, Clock, FileText } from 'lucide-react';

export default function HistoryPage({ projectId }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  const timeline = [
    { version: 'v1.4', user: 'Lucas Dourado', action: 'Revisão de Impacto IA', date: 'Hoje, 14:20' },
    { version: 'v1.3', user: 'Sistema', action: 'Auto-save (Rastro)', date: 'Hoje, 12:05' },
    { version: 'v1.0', user: 'Lucas Dourado', action: 'Criação da Minuta', date: 'Ontem, 09:15' },
  ];

  if (!mounted) return null;
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-700">
      <header className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Time <span className="text-indigo-600">Machine</span></h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Rastro de Versões e Auditoria</p>
      </header>
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
        {timeline.map((v, i) => (
          <div key={i} className="p-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-6">
              <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">{v.version}</span>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase">{v.action}</h4>
                <div className="flex items-center gap-3 mt-1 text-[9px] font-black text-slate-400 uppercase">
                   <User size={12}/> {v.user} <Clock size={12} className="ml-2"/> {v.date}
                </div>
              </div>
            </div>
            <button className="p-3 bg-slate-900 text-white rounded-2xl hover:bg-indigo-600 transition-all shadow-lg"><RotateCcw size={16}/></button>
          </div>
        ))}
      </div>
    </div>
  );
}
