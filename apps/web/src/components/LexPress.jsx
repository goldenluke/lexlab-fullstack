import React, { useState, useEffect } from 'react';
import { FileText, Search, ChevronRight, Globe, Send, Loader2 } from 'lucide-react';
import { fetchWithAuth } from '@lib/auth.js';

export default function LexPress() {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Rastro: Busca as minutas do seu Django Backend (via ngrok ou localhost)
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchWithAuth('https://labsus-api.ngrok-free.app/api/projects/');
        setProjects(data);
      } catch (err) {
        console.error("Erro ao carregar rastro de minutas:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);

  const handleSelect = (id) => {
    setSelectedId(id);
    // Aqui você pode disparar o rastro para o Editor ou CCJ-Sim
    console.log("Minuta selecionada para rastro:", id);
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <header className="flex justify-between items-end border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">Lex<span className="text-emerald-500">Press</span></h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Distribuição e Clipping Legislativo</p>
        </div>
        <div className="flex gap-2">
           <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl flex items-center gap-2">
              <Search size={14} className="text-slate-500" />
              <input type="text" placeholder="BUSCAR RASTRO..." className="bg-transparent border-none text-[10px] font-bold focus:outline-none w-32" />
           </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Lado Esquerdo: Lista de Seleção */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Minutas Disponíveis (LabSUS)</h3>
          
          {isLoading ? (
            <div className="flex items-center gap-3 p-6 bg-slate-900/50 rounded-3xl animate-pulse">
              <Loader2 className="animate-spin text-emerald-500" size={20} />
              <span className="text-[10px] font-bold uppercase">Sincronizando Banco de Dados...</span>
            </div>
          ) : (
            <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  className={`w-full text-left p-5 rounded-[2rem] border transition-all flex items-center justify-between group ${
                    selectedId === p.id 
                    ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-900 border-slate-800 hover:border-slate-600 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${selectedId === p.id ? 'bg-white/20' : 'bg-slate-800'}`}>
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-tight">{p.title || 'Sem Título'}</h4>
                      <p className="text-[9px] opacity-60 font-mono">ID: {p.id.toString().slice(0,8)} | TO-2026</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={`transition-transform ${selectedId === p.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Lado Direito: Ações de Publicação */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="space-y-6">
            <Globe className="text-emerald-500" size={40} />
            <h3 className="text-xl font-black italic tracking-tighter uppercase">Pronto para Publicação</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              O rastro selecionado será processado pelo **Llama Local** para formatação oficial do Diário Oficial do Estado (DOE-TO) e indexação no LabSUS.
            </p>
          </div>
          
          <button 
            disabled={!selectedId}
            className="w-full bg-slate-950 text-white p-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors disabled:opacity-20 disabled:cursor-not-allowed group"
          >
            <Send size={16} className="group-hover:-rotate-12 transition-transform" />
            Publicar no LexPress
          </button>
        </div>
      </div>
    </div>
  );
}
