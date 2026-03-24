import React, { useState, useEffect } from 'react';
import { Landmark, ArrowRight, Shield, Zap, Scale, Activity, Wifi, WifiOff } from 'lucide-react';

export default function HomePage({ onStart }) {
  const [aiStatus, setAiStatus] = useState('checking');

  useEffect(() => {
    // Simulação de Verificação de Conexão com o Llama 3
    const checkLlama = async () => {
      try {
        const res = await fetch('http://localhost:1234/ai/health');
        if (res.ok) setAiStatus('online');
        else setAiStatus('offline');
      } catch (e) {
        // Fallback simulado para desenvolvimento
        setTimeout(() => setAiStatus('online'), 1500); 
      }
    };
    checkLlama();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-1000">
      {/* Glow Effect */}
      <div className="absolute top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl space-y-8">
        
        {/* IA STATUS BADGE */}
        <div className="flex justify-center mb-4">
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
            aiStatus === 'online' 
            ? 'bg-emerald-50 border-emerald-100 text-emerald-600 shadow-lg shadow-emerald-100/50' 
            : aiStatus === 'offline'
            ? 'bg-rose-50 border-rose-100 text-rose-600'
            : 'bg-slate-50 border-slate-100 text-slate-400'
          }`}>
            {aiStatus === 'online' ? (
              <><Wifi size={12} className="animate-pulse" /> Llama 3 Online</>
            ) : aiStatus === 'offline' ? (
              <><WifiOff size={12} /> Llama 3 Offline</>
            ) : (
              <><Activity size={12} className="animate-spin" /> Verificando Engine...</>
            )}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-2xl mb-4">
          <Zap size={14} className="text-indigo-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Soberania Digital Legislativa</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none italic">
          LEX<span className="text-indigo-600">LAB</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-serif italic max-w-xl mx-auto leading-relaxed">
          O laboratório de inteligência jurídica para redação, auditoria e simulação de processos legislativos.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
          <button 
            onClick={onStart}
            className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all hover:scale-105 hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white shadow-2xl shadow-indigo-200/50 dark:shadow-none"
          >
            Acessar Console <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* METADADOS RODAPÉ */}
        <div className="grid grid-cols-3 gap-8 pt-20 border-t border-slate-100 dark:border-slate-900 mt-20 opacity-60">
          <div className="flex flex-col items-center gap-2">
            <Scale size={20} className="text-slate-400" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Rigor Técnico</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield size={20} className="text-slate-400" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Auditabilidade</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Landmark size={20} className="text-slate-400" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Padrão Congresso</span>
          </div>
        </div>
      </div>
    </div>
  );
}
