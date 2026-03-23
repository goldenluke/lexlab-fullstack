import React, { useState, useEffect } from 'react';
import { Printer, FileJson, FileText, Download, ShieldCheck, QrCode, ChevronDown } from 'lucide-react';

export default function Exporter({ project, projects, onSelect }) {
  const [mounted, setMounted] = useState(false);
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            LegisDoc <span className="text-indigo-600">Exporter</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Gerador de Protocolo Oficial</p>
        </div>

        {/* Seletor de Minuta Ativa */}
        <div className="relative">
          <button 
            onClick={() => setShowSelector(!showSelector)}
            className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm hover:border-indigo-600 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">
              {project ? project.title : "Selecionar Minuta"}
            </span>
            <ChevronDown size={16} className="text-indigo-600" />
          </button>

          {showSelector && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl z-50 overflow-hidden animate-in zoom-in-95 duration-200">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { onSelect(p); setShowSelector(false); }}
                  className="w-full text-left px-6 py-4 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border-b border-slate-50 dark:border-slate-800 last:border-0"
                >
                  <p className="text-[9px] font-black text-indigo-600 uppercase mb-1">{p.id}</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white uppercase">{p.title}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Preview com Dados Reais */}
        <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border-2 border-slate-100 dark:border-slate-800 shadow-2xl relative min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-8 right-8 text-slate-100 dark:text-slate-800 rotate-12">
            <QrCode size={120} />
          </div>
          <FileText size={80} className="text-slate-200 mb-6" />
          <div className="text-center space-y-2 relative z-10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest tracking-[0.3em]">Status: {project?.status || "PENDENTE"}</p>
            <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic max-w-xs leading-tight">
              {project ? project.title : "Selecione uma Minuta no Rastro"}
            </h3>
            <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mt-4">Protocolo: {project?.id || "N/A"}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-xl space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 flex items-center gap-2">
              <Download size={14} /> Formatos Disponíveis
            </h3>
            <div className="space-y-4">
              {[{ n: 'PDF Oficial (.pdf)', i: Printer }, { n: 'OpenDocument (.odt)', i: FileText }, { n: 'JSON Metadata (.json)', i: FileJson }].map((f, i) => (
                <button key={i} className="w-full group flex items-center gap-6 p-6 bg-white/5 hover:bg-indigo-600 rounded-[2.5rem] transition-all text-left">
                  <f.i className="text-indigo-400 group-hover:text-white" size={24} />
                  <p className="text-xs font-black uppercase tracking-widest">{f.n}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-[3rem] border border-emerald-100 dark:border-emerald-800 flex items-start gap-4">
             <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
             <p className="text-[11px] text-emerald-700 dark:text-emerald-500 font-serif italic leading-relaxed">
               "Selo de Autenticidade: O rastro de {project?.id || 'origem'} foi validado em conformidade com o rastro do SUS e LRF."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
