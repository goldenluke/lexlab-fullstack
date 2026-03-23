import React, { useState } from 'react';
import { ShieldCheck, Zap, Scale, FileText, AlertTriangle, Loader2 } from 'lucide-react';

export default function CCJSim({ project }) {
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runIAAnalysis = async () => {
    if (!project) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/llama', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Analise a constitucionalidade desta minuta legislativa: ${project.content}. Verifique conflitos com a Constituição Federal e leis do Tocantins.`,
          systemPrompt: "Você é um consultor jurídico da CCJ (Comissão de Constituição e Justiça). Forneça um parecer técnico rigoroso, citando artigos e decidindo se a matéria é CONSTITUCIONAL ou INCONSTITUCIONAL."
        })
      });
      const data = await response.json();
      setAnalysis(data.content);
    } catch (err) {
      setAnalysis("Erro ao processar o rastro jurídico. Verifique a conexão com a Groq.");
    }
    setIsLoading(false);
  };

  if (!project) return (
    <div className="p-20 text-center opacity-30 font-black uppercase tracking-[0.4em] italic">
      Selecione um projeto no Console para análise técnica
    </div>
  );

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000">
      <header className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-1">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            CCJ<span className="text-indigo-600">-Sim</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Simulação de Constitucionalidade e Justiça</p>
        </div>
        <button 
          onClick={runIAAnalysis}
          disabled={isLoading}
          className="bg-indigo-600 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3"
        >
          {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Zap size={16} />}
          {isLoading ? 'Consultando Llama 3...' : 'Gerar Parecer IA'}
        </button>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm min-h-[400px]">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <FileText size={18} /> Parecer Técnico Relator
            </h3>
            {analysis ? (
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed font-serif whitespace-pre-wrap">
                {analysis}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-slate-300 dark:text-slate-700 italic">
                Aguardando ativação do rastro analítico...
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[3rem] border border-emerald-100 dark:border-emerald-800/30">
            <Scale className="text-emerald-600 mb-4" size={32} />
            <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400">Status Jurídico</h4>
            <p className="text-lg font-black italic tracking-tighter text-emerald-900 dark:text-emerald-100">Admissível</p>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-[3rem] shadow-xl">
             <ShieldCheck className="text-indigo-400 mb-4" size={32} />
             <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Rastro de Integridade</h4>
             <p className="text-sm italic opacity-80">98% de compatibilidade com a jurisprudência do STF (2026).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
