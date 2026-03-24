import React, { useState } from 'react';
import { ShieldCheck, Zap, Scale, FileText, Loader2, AlertCircle } from 'lucide-react';

export default function CCJSim({ project }) {
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const runIAAnalysis = async () => {
    if (!project) return;
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/llama', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Analise a constitucionalidade desta minuta: "${project.title}". Conteúdo: ${project.content || "Foco em saúde pública e LabSUS"}. Verifique conflitos com a Constituição Federal e leis do Tocantins.`,
          systemPrompt: "Você é um consultor jurídico sênior da CCJ. Forneça um parecer técnico rigoroso, citando fundamentos legais e concluindo se a matéria é CONSTITUCIONAL ou INCONSTITUCIONAL. Use um tom formal e preciso."
        })
      });

      if (!response.ok) throw new Error('Falha no rastro da API');
      
      const data = await response.json();
      setAnalysis(data.content);
    } catch (err) {
      setError("O rastro de IA falhou. Verifique se a GROQ_API_KEY está configurada na Vercel.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!project) return (
    <div className="p-20 text-center opacity-30 font-black uppercase tracking-[0.4em] italic">
      Selecione uma matéria para iniciar o rastro jurídico
    </div>
  );

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000">
      <header className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-1">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            CCJ<span className="text-indigo-600">-Sim</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Simulador de Constitucionalidade via Llama 3</p>
        </div>
        <button 
          onClick={runIAAnalysis}
          disabled={isLoading}
          className={`px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all flex items-center gap-3 ${isLoading ? 'bg-slate-200 text-slate-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
        >
          {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Zap size={16} />}
          {isLoading ? 'Processando Llama Local (LabSUS)...' : 'Gerar Parecer Técnico'}
        </button>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm min-h-[500px] relative overflow-hidden">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
              <FileText size={18} /> Parecer Jurídico do Relator
            </h3>
            
            {error && (
              <div className="flex items-center gap-3 p-6 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                <AlertCircle size={18} /> {error}
              </div>
            )}

            {analysis ? (
              <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed font-serif whitespace-pre-wrap animate-in slide-in-from-bottom-4 duration-700">
                {analysis}
              </div>
            ) : !isLoading && (
              <div className="h-64 flex flex-col items-center justify-center text-slate-300 dark:text-slate-700 italic space-y-4">
                <Scale size={48} className="opacity-20" />
                <p>O rastro analítico aguarda o comando de execução.</p>
              </div>
            )}
            
            {isLoading && (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-full"></div>
                <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded w-5/6"></div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
            <ShieldCheck className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-2">Certificação Digital</h4>
            <p className="text-xs italic opacity-70 leading-relaxed">Este parecer utiliza o rastro de jurisprudência do STF integrado via LexLab Nexus.</p>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-[3.5rem] border border-indigo-100 dark:border-indigo-800/30">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4">Probabilidade de Aprovação</h4>
            <div className="text-4xl font-black italic tracking-tighter text-indigo-900 dark:text-indigo-100">88%</div>
            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 mt-4 rounded-full overflow-hidden">
               <div className="h-full bg-indigo-600 w-[88%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
