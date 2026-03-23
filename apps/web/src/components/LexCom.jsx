import React, { useState, useEffect } from 'react';
import { FileCheck, ShieldCheck, DollarSign, HeartPulse, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function LexCom({ project }) {
  const [activeTab, setActiveTab] = useState('ccj');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (!project) return (
    <div className="p-20 text-center opacity-20 font-black uppercase tracking-[0.5em] italic">
      Aguardando Distribuição de Matéria...
    </div>
  );

  const comissoes = {
    ccj: {
      name: 'Constituição e Justiça',
      icon: ShieldCheck,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      parecer: project.score > 80 ? 'Pela Admissibilidade' : 'Inconstitucionalidade Parcial',
      rastro: "Análise de simetria com a Constituição do Estado do Tocantins e competência legislativa municipal/estadual."
    },
    cft: {
      name: 'Finanças e Tributação',
      icon: DollarSign,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      parecer: project.budget < 2000000 ? 'Adequação Orçamentária' : 'Risco de Excesso de Teto',
      rastro: `O rastro financeiro de R$ ${project.budget?.toLocaleString()} foi confrontado com a LDO 2026.`
    },
    cs: {
      name: 'Saúde e Assistência',
      icon: HeartPulse,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      parecer: 'Mérito Aprovado',
      rastro: "Rastro de impacto positivo nos indicadores de Vigilância Sanitária e fortalecimento do LabSUS."
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
            Lex<span className="text-indigo-600">Com</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Hub de Comissões Temáticas: {project.id}
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Navegação entre Comissões */}
        <div className="space-y-3">
          {Object.entries(comissoes).map(([id, com]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full p-6 rounded-[2.5rem] border transition-all flex items-center gap-4 ${activeTab === id ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 hover:border-indigo-200'}`}
            >
              <com.icon size={20} className={activeTab === id ? 'text-indigo-400' : com.color} />
              <span className="text-[10px] font-black uppercase tracking-widest text-left leading-tight">{com.name}</span>
            </button>
          ))}
        </div>

        {/* Detalhe do Parecer */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-12 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className={`p-4 rounded-2xl ${comissoes[activeTab].bg} ${comissoes[activeTab].color}`}>
                    {React.createElement(comissoes[activeTab].icon, { size: 24 })}
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">Parecer de <span className="text-indigo-600">Mérito</span></h3>
               </div>
               <div className={`px-6 py-3 rounded-full font-black text-[9px] uppercase tracking-[0.2em] border ${comissoes[activeTab].parecer.includes('Risco') ? 'bg-rose-50 border-rose-100 text-rose-600' : 'bg-emerald-50 border-emerald-100 text-emerald-600'}`}>
                 {comissoes[activeTab].parecer}
               </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
               <p className="text-sm font-serif italic text-slate-600 dark:text-slate-300 leading-relaxed">
                 "{comissoes[activeTab].rastro}"
               </p>
            </div>

            <div className="flex items-center gap-4 pt-6">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-black">D{i}</div>)}
               </div>
               <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Relatoria e Membros Sorteados</p>
               <div className="flex-1" />
               <button className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all">
                  Ver Relatório Completo <ChevronRight size={14} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
