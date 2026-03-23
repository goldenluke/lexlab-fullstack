import React, { useState } from 'react';
import { X, Send, AlertCircle, FileText } from 'lucide-react';

export default function CreatePRModal({ isOpen, onClose, onSubmit, selectedText }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <FileText size={18} />
            </div>
            <h2 className="font-black text-slate-800 dark:text-white uppercase tracking-tighter">Propor Emenda</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-rose-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Título da Proposta</label>
            <input 
              autoFocus
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ex: Ajuste de Redação Art. 4º"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Justificativa Técnica</label>
            <textarea 
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm font-serif italic outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
              placeholder="Descreva por que esta alteração é necessária..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {selectedText && (
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <div className="flex items-center gap-2 text-amber-600 mb-2">
                <AlertCircle size={14} />
                <span className="text-[9px] font-black uppercase">Trecho Selecionado</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-serif line-clamp-2">"{selectedText}"</p>
            </div>
          )}

          <button 
            disabled={!title || !description}
            onClick={() => { onSubmit({ title, description }); onClose(); }}
            className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <Send size={14} /> Enviar Proposta ao Rastro Digital
          </button>
        </div>
      </div>
    </div>
  );
}
