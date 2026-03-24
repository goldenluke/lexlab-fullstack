import React, { useState } from 'react';
import { Sparkles, Loader2, Wand2, AlertTriangle } from 'lucide-react';

export default function EditorIA({ content, setContent }) {
  const [status, setStatus] = useState('idle'); // idle | loading | error

  const suggestNextArticle = async () => {
    if (!content || content.length < 5) {
      alert("Escreva pelo menos o título ou o Art. 1º para dar contexto ao Llama.");
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/llama', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: "Gere o rastro do próximo artigo baseado no texto anterior.",
          context: content
        })
      });

      const data = await response.json();
      
      if (data.content) {
        // Rastro de Injeção: Adiciona o novo texto com quebra de linha
        const newText = content + "\n\n" + data.content.trim();
        setContent(newText);
        setStatus('idle');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Erro silencioso capturado:", err);
      setStatus('error');
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6 p-2 bg-slate-900/50 rounded-2xl border border-white/5">
      <button
        onClick={suggestNextArticle}
        disabled={status === 'loading'}
        className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 transition-all ${
          status === 'loading' ? 'bg-slate-800 text-slate-500' : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
        }`}
      >
        {status === 'loading' ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
        {status === 'loading' ? 'Llama Processando...' : 'Sugerir Novo Artigo'}
      </button>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-rose-500 text-[9px] font-bold uppercase animate-pulse">
          <AlertTriangle size={12} /> Erro no Rastro Local (Ollama)
        </div>
      )}
      
      <div className="text-[9px] font-bold uppercase text-slate-500 tracking-widest">
        IA Local: Llama 3.2 (RTX 3060 Active)
      </div>
    </div>
  );
}
