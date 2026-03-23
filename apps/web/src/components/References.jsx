import React, { useState, useEffect } from 'react';
import { BookOpen, Link, Plus, Trash2, FileSearch, Quote, ExternalLink, ShieldCheck } from 'lucide-react';

export default function References({ project }) {
  const [mounted, setMounted] = useState(false);
  const [refs, setRefs] = useState([
    { id: 1, title: "Portaria de Consolidação nº 1/2017 - MS", type: "Normativa", link: "https://saude.gov.br", status: "Validado" },
    { id: 2, title: "Impacto da Vigilância Sanitária em Tocantins (Estudo)", type: "Científica", link: "https://fiocruz.br", status: "Validado" }
  ]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Rastro de <span className="text-indigo-600">Referências</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Embasamento Técnico e Científico: {project?.title || "Minuta Ativa"}
          </p>
        </div>
        <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[9px] uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center gap-2 shadow-xl">
          <Plus size={14} /> Adicionar Fonte
        </button>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista de Referências */}
        <div className="lg:col-span-2 space-y-4">
          {refs.map((ref) => (
            <div key={ref.id} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-lg flex items-center justify-between group hover:border-indigo-500 transition-all">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                  <FileSearch className="text-slate-400 group-hover:text-indigo-600" size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black uppercase text-indigo-600 tracking-widest">{ref.type}</span>
                    <span className="text-[8px] font-black uppercase px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">{ref.status}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase italic">{ref.title}</h4>
                </div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 text-slate-400 hover:text-indigo-600 transition-colors"><ExternalLink size={18} /></button>
                <button className="p-3 text-slate-400 hover:text-rose-500 transition-colors"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Painel de Formatação */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-10 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <Quote className="absolute -right-4 -bottom-4 text-white/5" size={120} />
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-6">Preview ABNT</h3>
            <div className="space-y-4 relative z-10">
              <p className="text-[11px] text-slate-400 font-serif italic leading-relaxed">
                "DOURADO, L. LabSUS: Epidemiologia Computacional em Tocantins. LexLab Press, 2026."
              </p>
              <button className="w-full bg-white/10 p-3 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                Copiar Citação
              </button>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[3rem] border border-indigo-100 dark:border-indigo-800">
             <div className="flex items-center gap-2 mb-4">
               <ShieldCheck size={18} className="text-indigo-600" />
               <h4 className="text-[10px] font-black uppercase text-indigo-900 dark:text-indigo-300">Validador de Rastro</h4>
             </div>
             <p className="text-[11px] text-indigo-800 dark:text-indigo-400 font-medium leading-relaxed italic">
               As referências foram cruzadas com o rastro normativo federal. Não há divergências com a legislação atual do Ministério da Saúde.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
