import React, { useState, useEffect } from 'react';
import { GitPullRequest, CheckCircle2, XCircle, MessageSquare, Clock, User, ArrowRight } from 'lucide-react';

export default function PullRequest({ projectId }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const suggestions = [
    { 
      id: 'PR-88', 
      title: 'Ajuste de Rastro Orçamentário', 
      author: 'Llama 3 (AI)', 
      status: 'Aberto',
      desc: 'Sugestão de alteração no Art. 4º para compatibilização com a LRF.',
      diff: '+ Inserir: "Observado o limite prudencial de gastos..."'
    },
    { 
      id: 'PR-87', 
      title: 'Correção de Técnica Legislativa', 
      author: 'Lucas Dourado', 
      status: 'Aprovado',
      desc: 'Mudança de parágrafo único para incisos para melhor clareza.',
      diff: 'Substituído rastro textual de lista por estrutura de itens.'
    }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Rastro de <span className="text-indigo-600">Sugestões</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Colaboração e Revisão de Minutas
          </p>
        </div>
      </header>

      <div className="space-y-6">
        {suggestions.map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 shadow-xl hover:shadow-2xl transition-all group">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                    s.status === 'Aberto' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-500'
                  }`}>
                    {s.status}
                  </span>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{s.id}</span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic">{s.title}</h3>
                <p className="text-sm text-slate-500 font-serif italic leading-relaxed">"{s.desc}"</p>
                
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-indigo-500 font-mono text-[11px] text-slate-600 dark:text-slate-400 italic">
                  {s.diff}
                </div>
              </div>

              <div className="flex flex-col justify-between items-end border-l border-slate-50 dark:border-slate-800 pl-8 md:min-w-[200px]">
                <div className="text-right">
                  <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Autor do Rastro</p>
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase">{s.author}</span>
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      <User size={14} />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-4 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-sm">
                    <XCircle size={20} />
                  </button>
                  <button className="p-4 bg-emerald-50 text-emerald-500 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                    <CheckCircle2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
