import React, { useState, useEffect } from 'react';
import { Plus, FileText, Search, ArrowUpRight } from 'lucide-react';

export default function Dashboard({ projects, onOpen, onNew }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-3">
          <h1 className="text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">Console de <span className="text-indigo-600">Redação</span></h1>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] ml-2">Gestão de Inteligência Legislativa</p>
        </div>
        <button onClick={onNew} className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl flex items-center gap-3 active:scale-95">
          <Plus size={18} /> Nova Minuta
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.id} onClick={() => onOpen(p)} className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3.5rem] hover:border-indigo-500 transition-all cursor-pointer hover:shadow-2xl shadow-sm">
            <div className="flex justify-between items-start mb-10">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                <FileText className="text-slate-400 group-hover:text-indigo-600" size={24} />
              </div>
              <span className="text-[10px] font-black text-slate-300 uppercase">{p.date}</span>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{p.id}</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white uppercase leading-tight group-hover:text-indigo-600 transition-colors italic">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
