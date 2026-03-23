import React, { useState, useEffect } from 'react';
import { Printer, Download, Share2, ShieldCheck, QrCode, Bookmark, ChevronLeft } from 'lucide-react';

export default function LexPress({ project }) {
  const [mounted, setMounted] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => setMounted(true), []);

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
    }, 2500);
  };

  if (!mounted) return null;
  if (!project) return (
    <div className="p-20 text-center opacity-30 font-black uppercase tracking-[0.4em] italic">
      Selecione uma matéria aprovada para publicação
    </div>
  );

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000 pb-24">
      <header className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">
            Lex<span className="text-indigo-600">Press</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Editoração e Diário Oficial</p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-indigo-600 transition-all shadow-sm">
            <Download size={20} />
          </button>
          <button 
            onClick={handlePublish}
            disabled={isPublished || isPublishing}
            className={`px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all flex items-center gap-3 ${isPublished ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-indigo-600'}`}
          >
            {isPublishing ? 'Gerando Rastro...' : isPublished ? 'Publicado no DOE' : 'Publicar Agora'}
          </button>
        </div>
      </header>

      {/* Simulação do Papel do Diário Oficial */}
      <div className="bg-white dark:bg-slate-50 shadow-2xl rounded-[1rem] p-16 border-t-[12px] border-indigo-600 min-h-[1000px] relative overflow-hidden text-slate-900 font-serif">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <QrCode size={120} />
        </div>

        {/* Cabeçalho Oficial */}
        <div className="text-center border-b-2 border-slate-200 pb-10 mb-10 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest">Estado do Tocantins</p>
          <h1 className="text-2xl font-black uppercase tracking-tighter">Diário Oficial Legislativo</h1>
          <div className="flex justify-center gap-10 text-[9px] font-bold uppercase py-2">
            <span>ANO XXXVIII - Nº 6.542</span>
            <span>PALMAS, {new Date().toLocaleDateString('pt-BR')}</span>
          </div>
        </div>

        {/* Conteúdo da Lei */}
        <div className="space-y-8 max-w-2xl mx-auto leading-relaxed text-justify">
          <div className="text-right italic font-bold text-sm mb-12">
            "Dispõe sobre {project.title.toLowerCase()} e dá outras providências no rastro da gestão de saúde pública."
          </div>

          <h3 className="font-bold text-center uppercase tracking-widest mb-6 underline">LEI Nº {project.id.replace('LX-', '9.')}</h3>

          <p className="font-bold">O GOVERNADOR DO ESTADO DO TOCANTINS:</p>
          <p>Faço saber que a Assembleia Legislativa decreta e eu sanciono a seguinte Lei:</p>

          <div className="space-y-6">
            <p><span className="font-bold italic">Art. 1º</span> {project.content || "Fica instituído o rastro normativo conforme diretrizes do LabSUS."}</p>
            <p><span className="font-bold italic">Art. 2º</span> Esta Lei entra em vigor na data de sua publicação.</p>
          </div>

          <div className="pt-20 text-center space-y-1">
            <div className="w-48 h-px bg-slate-300 mx-auto mb-4" />
            <p className="font-black uppercase tracking-tighter">Governador do Estado</p>
            <p className="text-[10px] font-bold text-slate-400">Assinado Digitalmente via LexLab Rastro-ID</p>
          </div>
        </div>

        {/* Selo de Autenticidade */}
        <div className="absolute bottom-10 left-10 flex items-center gap-2 opacity-30">
          <ShieldCheck size={16} />
          <span className="text-[8px] font-black uppercase tracking-widest">Validação Hash: {Math.random().toString(36).substring(7).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}
