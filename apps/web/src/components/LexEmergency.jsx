import React, { useState, useEffect } from 'react';
import { AlertOctagon, Zap, ShieldAlert, Activity, BellRing, ChevronRight } from 'lucide-react';

export default function LexEmergency({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const protocols = [
    { title: 'Decreto de Calamidade Pública', status: 'Pronto para Assinatura', risk: 'Crítico' },
    { title: 'Dispensa de Licitação Sanitária', status: 'Validado (Art. 24, IV)', risk: 'Alto' },
    { title: 'Requisição Administrativa de Bens', status: 'Em Análise Jurídica', risk: 'Médio' }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700 pb-24">
      <header className="flex justify-between items-end border-b-4 border-rose-600 pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-rose-600 animate-pulse">
            <AlertOctagon size={32} />
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">Lex<span className="text-slate-900 dark:text-white">Emergency</span></h2>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Gabinete de Crise e Resposta Legislativa Rápida</p>
        </div>
        <div className="bg-rose-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-rose-500/30">
          Nível de Alerta: Laranja
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <Activity className="absolute -right-10 -top-10 text-rose-600/20" size={300} />
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-3">
              <Zap className="text-amber-400" /> Rastro de Ação Imediata
            </h3>
            <p className="text-sm font-serif italic opacity-80 leading-relaxed max-w-xl">
              "Baseado nos dados do LabSUS, o rastro epidemiológico sugere a ativação do Art. 14 da minuta {project?.id || 'Padrão'} para garantir o fluxo de insumos em Palmas e Araguaína."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {protocols.map((p, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 flex flex-col justify-between group hover:border-rose-500 transition-all">
                <p className="text-[9px] font-black uppercase text-rose-500 tracking-widest mb-2">{p.risk}</p>
                <h4 className="text-sm font-bold uppercase italic leading-tight mb-4">{p.title}</h4>
                <div className="flex justify-between items-center text-[8px] font-black uppercase text-slate-400">
                  <span>{p.status}</span>
                  <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/10 p-10 rounded-[4rem] border border-amber-200 dark:border-amber-800/30 space-y-6">
           <BellRing className="text-amber-600" size={40} />
           <h4 className="text-lg font-black uppercase italic tracking-tighter leading-tight text-amber-900 dark:text-amber-200">Painel de Monitoramento</h4>
           <div className="space-y-4">
              <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-600 w-[85%]"></div>
              </div>
              <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Capacidade do Sistema (LabSUS)</p>
           </div>
        </div>
      </div>
    </div>
  );
}
