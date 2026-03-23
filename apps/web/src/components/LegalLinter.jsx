import React, { useState, useEffect } from 'react';
import { SearchCode, AlertCircle, CheckCircle2, Zap, Info, ShieldAlert, Filter } from 'lucide-react';

export default function LegalLinter({ project }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const alerts = [
    { type: 'Crítico', msg: 'Uso de termo ambíguo: "Remédio". Substituir por "Medicamento" conforme rastro da ANVISA.', icon: ShieldAlert, color: 'text-rose-500', bg: 'bg-rose-50' },
    { type: 'Técnico', msg: 'Vício de Iniciativa: O Art. 3º cria despesa sem rastro de fonte orçamentária.', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { type: 'Estilo', msg: 'Voz Passiva excessiva detectada no Parágrafo Único. Recomenda-se voz ativa.', icon: Info, color: 'text-indigo-500', bg: 'bg-indigo-50' }
  ];

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Legal <span className="text-indigo-600">Linter</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            Auditoria de Técnica Legislativa e Taxonomia
          </p>
        </div>
        <div className="flex gap-3">
          <span className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
            <Filter size={12}/> Filtro Ativo: Vigilância Sanitária
          </span>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Painel de Alertas Dinâmicos */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-8 flex items-center gap-2">
              <Zap size={20} className="text-indigo-600" /> Rastro de Inconsistências
            </h3>
            
            <div className="space-y-6">
              {alerts.map((alert, i) => (
                <div key={i} className={`${alert.bg} dark:bg-slate-800/50 p-6 rounded-[2.5rem] border border-transparent hover:border-indigo-100 transition-all flex gap-6`}>
                  <div className={`${alert.color} shrink-0`}><alert.icon size={24} /></div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{alert.type}</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-white italic leading-relaxed">"{alert.msg}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Score de Qualidade Normativa */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-12 rounded-[5rem] shadow-2xl text-center relative overflow-hidden">
             <div className="relative z-10 space-y-4">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Taxonomy Score</h3>
               <p className="text-7xl font-black tracking-tighter italic">{project?.score || 85}%</p>
               <div className="flex justify-center gap-2">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span className="text-[9px] font-black uppercase tracking-widest">Apto para Protocolo</span>
               </div>
             </div>
          </div>

          <div className="bg-indigo-600 text-white p-10 rounded-[4rem] shadow-xl">
             <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Dica de Redação Oficial</h4>
             <p className="text-xs font-serif italic leading-relaxed opacity-80">
               "Evite o rastro de termos subjetivos como 'considerável' ou 'adequado'. Utilize critérios técnicos mensuráveis conforme o Manual da Presidência."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
