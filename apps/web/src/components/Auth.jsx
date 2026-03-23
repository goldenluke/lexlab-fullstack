import React, { useState } from 'react';
import { Landmark, Mail, Lock, User, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden font-sans antialiased">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-600/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-xl relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-12 rounded-[5rem] shadow-2xl space-y-10">
          
          <div className="text-center space-y-4">
            {/* Logo Unificada (Favicon) */}
            <div className="inline-flex bg-indigo-600 p-5 rounded-[2rem] shadow-lg shadow-indigo-500/20 mb-2">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="25" fill="#4f46e5"/>
                <path d="M50 25v50M25 42h50" stroke="white" strokeWidth="8" strokeLinecap="round"/>
                <circle cx="25" cy="42" r="7" fill="white"/>
                <circle cx="75" cy="42" r="7" fill="white"/>
                <path d="M25 42c0 12 10 22 25 22s25-10 25-22" stroke="white" strokeWidth="3" strokeDasharray="6 6" opacity="0.5"/>
                <circle cx="50" cy="68" r="4" fill="white" opacity="0.8"/>
              </svg>
            </div>
            <h1 className="text-4xl font-black text-white uppercase italic tracking-tighterleading-none">
              Lex<span className="text-indigo-500">Lab</span>
            </h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Digital Twin Legislativo</p>
          </div>

          <div className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input type="text" placeholder="NOME COMPLETO" className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white text-[10px] font-black uppercase tracking-widest focus:border-indigo-500 outline-none placeholder:text-slate-600" />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="email" placeholder="E-MAIL INSTITUCIONAL" className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white text-[10px] font-black uppercase tracking-widest focus:border-indigo-500 outline-none placeholder:text-slate-600" />
            </div>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input type="password" placeholder="SENHA" className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white text-[10px] font-black uppercase tracking-widest focus:border-indigo-500 outline-none placeholder:text-slate-600" />
            </div>
          </div>

          <button onClick={onLogin} className="w-full bg-white text-slate-950 py-6 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all group">
            {isLogin ? 'Acessar Gabinete' : 'Criar Credencial'} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>

          <p className="text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-[9px] font-black text-slate-500 uppercase tracking-widest hover:text-indigo-400">
              {isLogin ? 'Não possui acesso? Solicitar Credencial' : 'Já possui conta? Fazer Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
