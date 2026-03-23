import React, { useState, useEffect } from 'react';
import { MessagesSquare, Users, TrendingUp, ThumbsUp, ThumbsDown, MessageCircle, AlertCircle } from 'lucide-react';

export default function SocialSentiment({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const socialMetrics = [
    { label: 'Aceitação Popular', val: 78, icon: ThumbsUp, color: 'text-emerald-500' },
    { label: 'Resistência Setorial', val: 22, icon: ThumbsDown, color: 'text-rose-500' },
    { label: 'Engajamento Digital', val: 65, icon: MessageCircle, color: 'text-indigo-600' }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24">
      <header className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          Social <span className="text-indigo-600">Sentiment</span>
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          Simulação de Repercussão e Escuta Social
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {socialMetrics.map((m, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl group hover:scale-105 transition-all">
            <m.icon size={28} className={`${m.color} mb-6`} />
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</h4>
            <p className="text-5xl font-black text-slate-900 dark:text-white mt-2 tracking-tighter">{m.val}%</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 p-12 opacity-10">
          <Users size={200} />
        </div>
        <div className="relative z-10 space-y-8">
          <h3 className="text-xl font-black uppercase italic tracking-tighter flex items-center gap-3">
            <TrendingUp size={24} className="text-indigo-400" /> Mapa de Calor Setorial
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Recepção Estimada</p>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase italic"><span>Conselhos de Saúde</span><span className="text-emerald-400">90%</span></div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[90%]"></div></div>
                
                <div className="flex justify-between text-[10px] font-black uppercase italic"><span>Setor Farmacêutico</span><span className="text-rose-400">45%</span></div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-[45%]"></div></div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
               <div className="flex items-center gap-3 mb-4 text-amber-400">
                  <AlertCircle size={20} />
                  <p className="text-[10px] font-black uppercase tracking-widest">Insight IA</p>
               </div>
               <p className="text-sm text-slate-300 font-serif italic leading-relaxed">
                 "O rastro da lei sugere uma alta adesão em Tocantins, especialmente por fortalecer a Vigilância Sanitária local. Recomenda-se audiência pública com o setor produtivo para mitigar o rastro de resistência no Art. 5º."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
