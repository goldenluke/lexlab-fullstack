import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileText, Gavel, AlertCircle, CheckCircle2, Scale, ChevronRight } from 'lucide-react';

export default function CCJSim({ project }) {
  const [mounted, setMounted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState(null);

  useEffect(() => setMounted(true), []);

  const runAnalysis = () => {
    if (!project) return;
    setAnalyzing(true);
    setTimeout(() => {
      setReport({
        conclusion: project.score > 85 ? 'Pela Constitucionalidade' : 'Pela Inconstitucionalidade Parcial',
        votes: { favor: 5, contra: 2 },
        summary: `O rastro da minuta "${project.title}" foi analisado. Verificou-se simetria com o Art. 196 da CF/88. Todavia, o rastro do Art. 12 sugere invasão de competência municipal.`
      });
      setAnalyzing(false);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
            CCJ<span className="text-indigo-600">-Sim</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Simulador de Comissões de Constituição e Justiça
          </p>
        </div>
        <button 
          onClick={runAnalysis}
          disabled={analyzing || !project}
          className="bg-slate-900 text-white px-10 py-5 rounded-[2.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl flex items-center gap-3 disabled:opacity-20"
        >
          {analyzing ? <span className="animate-pulse">Analisando Rastro...</span> : <><ShieldCheck size={18} /> Emitir Parecer Técnico</>}
        </button>
      </header>

      {!project ? (
        <div className="p-20 bg-slate-100 dark:bg-slate-900/50 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[5rem] text-center opacity-40 font-black uppercase italic tracking-widest">
          Selecione uma minuta para iniciar o rastro da CCJ
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Parecer do Relator */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-12 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="flex items-center gap-4 text-indigo-600 mb-4">
              <FileText size={24} />
              <h3 className="text-xl font-black uppercase italic tracking-tighter">Relatório de Admissibilidade</h3>
            </div>

            {report ? (
              <div className="space-y-6 animate-in zoom-in-95 duration-500">
                <div className={`p-6 rounded-3xl border-l-8 ${report.conclusion.includes('Pela Constitucionalidade') ? 'bg-emerald-50 border-emerald-500' : 'bg-rose-50 border-rose-500'}`}>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Conclusão do Voto Relator</p>
                  <p className={`text-xl font-black italic uppercase ${report.conclusion.includes('Pela Constitucionalidade') ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {report.conclusion}
                  </p>
                </div>
                <p className="text-sm font-serif italic text-slate-600 dark:text-slate-400 leading-relaxed">
                  "{report.summary}"
                </p>
              </div>
            ) : (
              <div className="py-20 text-center space-y-4 opacity-20">
                <Scale size={60} className="mx-auto" />
                <p className="text-[10px] font-black uppercase tracking-widest">Aguardando rastro de análise técnica</p>
              </div>
            )}
          </div>

          {/* Votação na Comissão */}
          <div className="space-y-6">
            <div className="bg-slate-950 text-white p-10 rounded-[4rem] shadow-xl relative overflow-hidden">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6">Placar da Comissão</h4>
              {report ? (
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-5xl font-black italic">{report.votes.favor}</p>
                    <p className="text-[8px] font-black uppercase text-emerald-400">Favoráveis</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black italic opacity-30">{report.votes.contra}</p>
                    <p className="text-[8px] font-black uppercase text-rose-400">Contrários</p>
                  </div>
                </div>
              ) : (
                <p className="text-xs italic opacity-40">O rastro de votos será gerado após o parecer.</p>
              )}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/10 p-10 rounded-[4rem] border border-amber-100 dark:border-amber-900/30">
              <div className="flex items-center gap-2 mb-4 text-amber-600">
                <AlertCircle size={18} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Rastro de Veto</h4>
              </div>
              <p className="text-[11px] text-amber-800 dark:text-amber-200 font-serif italic leading-relaxed">
                A CCJ alerta que o rastro de despesa continuada sem compensação pode levar ao veto governamental por inconstitucionalidade material.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
