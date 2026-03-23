import React, { useState, useEffect } from 'react';
import { Share2, Zap, Target, BookOpen, DollarSign, BrainCircuit, BotMessageSquare, AlertTriangle } from 'lucide-react';

export default function NexusGraph({ project }) {
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Rastro Abstrato de Conceitos e Conexões
  const nodes = [
    { id: 'minuta', label: 'Minuta LX-2026', icon: BrainCircuit, color: 'text-indigo-600', type: 'Core' },
    { id: 'sus', label: 'Portarias SUS', icon: BookOpen, color: 'text-emerald-500', type: 'Norma Superior' },
    { id: 'fiscal', label: 'Teto Fiscal 2026', icon: DollarSign, color: 'text-rose-500', type: 'Restrição Fiscal' },
    { id: 'termo', label: 'Conceito: Medicamento', icon: Target, color: 'text-blue-500', type: 'Ontologia ANVISA' },
    { id: 'meta', label: 'Meta ODS 3.8', icon: Zap, color: 'text-amber-500', type: 'Rastro Global' }
  ];

  const connections = [
    { from: 'minuta', to: 'sus', label: 'Conformidade', color: 'border-emerald-200' },
    { from: 'minuta', to: 'termo', label: 'Uso de Vocabulário', color: 'border-blue-200' },
    { from: 'minuta', to: 'fiscal', label: 'Impacto Estimado', color: 'border-rose-200' },
    { from: 'termo', to: 'sus', label: 'Definição Técnica', color: 'border-slate-200' },
    { from: 'sus', to: 'meta', label: 'Alinhamento', color: 'border-amber-100' }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24">
      <header className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
          Nexo <span className="text-indigo-600">Semântico</span>
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          Visualização Ontológica e Abstrata: {project?.title || "Minuta Ativa"}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Visualização Abstrata do Grafo */}
        <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-950 p-12 rounded-[5rem] border border-slate-100 dark:border-slate-800 shadow-inner relative min-h-[600px] flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <Share2 size={600} className="absolute -left-40 -top-40 text-indigo-200 dark:text-indigo-900" />
          </div>
          
          <div className="relative z-10 flex flex-wrap gap-8 justify-center items-center">
            {nodes.map((node) => (
              <button 
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-6 rounded-[3rem] border-4 transition-all duration-500 text-center space-y-3 relative group ${
                  activeNode?.id === node.id 
                  ? 'bg-white dark:bg-slate-900 border-indigo-600 shadow-2xl scale-110' 
                  : 'bg-white/70 dark:bg-slate-900/50 border-white dark:border-slate-800 hover:border-indigo-100'
                }`}
              >
                <node.icon size={28} className={`${node.color} mx-auto`} />
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-white uppercase italic tracking-tight">{node.label}</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{node.type}</p>
                </div>
                {activeNode?.id === node.id && <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 animate-pulse"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Painel de Contexto do Nexo */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Contexto Ontológico</h3>
            {activeNode ? (
              <div className="space-y-4 animate-in fade-in">
                <div className="flex items-center gap-3">
                  <activeNode.icon size={20} className={activeNode.color} />
                  <p className="text-sm font-black text-slate-900 dark:text-white uppercase italic">{activeNode.label}</p>
                </div>
                <p className="text-xs text-slate-500 font-serif italic leading-relaxed">
                  Conexões Identificadas: {connections.filter(c => c.from === activeNode.id || c.to === activeNode.id).length}
                </p>
                <div className="space-y-2 pt-3">
                   {connections.filter(c => c.from === activeNode.id || c.to === activeNode.id).map((c, i) => (
                      <div key={i} className={`text-[9px] p-3 rounded-xl border border-dashed font-black uppercase tracking-widest ${c.color} text-slate-600 dark:text-slate-400 flex items-center justify-between`}>
                         <span>{c.from === activeNode.id ? '->' : '<-'} {c.label}</span>
                         <span>{c.from === activeNode.id ? nodes.find(n => n.id === c.to).label : nodes.find(n => n.id === c.from).label}</span>
                      </div>
                   ))}
                </div>
              </div>
            ) : (
              <p className="text-[11px] text-slate-400 font-serif italic text-center py-10">Selecione um nó no rastro para ver o nexo semântico.</p>
            )}
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-all duration-1000"></div>
            <div className="relative z-10 space-y-4">
               <div className="flex items-center gap-3 text-rose-400">
                  <AlertTriangle size={18} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest">Risco de Abstração</h4>
               </div>
               <p className="text-xs text-slate-300 font-serif italic leading-relaxed opacity-80">
                  "O rastro semântico entre a minuta e o 'medicamento' é forte, mas o nexo com o 'Teto Fiscal' indica risco orçamentário no Art. 4º."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
