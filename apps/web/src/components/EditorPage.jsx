import React, { useState, useEffect } from 'react';
import { 
  Save, ChevronLeft, Maximize2, Minimize2, Wand2, Sparkles,
  Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote, Code, Eye, Edit3,
  Strikethrough, Link, Image, Table, Type, AlignLeft, HelpCircle, MoreHorizontal,
  Subscript, Superscript, Underline
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function EditorPage({ project, onBack, onSave, isFocusMode, setIsFocusMode }) {
  const [content, setContent] = useState(project?.content || '');
  const [viewMode, setViewMode] = useState('edit');
  const [showMore, setShowMore] = useState(false);

  const insertTag = (tagOpen, tagClose = '') => {
    const textarea = document.getElementById('editor-area');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selection = text.substring(start, end);
    const newText = text.substring(0, start) + tagOpen + (selection || 'texto') + tagClose + text.substring(end);
    setContent(newText);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tagOpen.length, end + tagOpen.length + (selection ? 0 : 5));
    }, 10);
  };

  const groups = {
    estilo: [
      { icon: Bold, action: () => insertTag('**', '**'), label: 'Negrito' },
      { icon: Italic, action: () => insertTag('*', '*'), label: 'Itálico' },
      { icon: Underline, action: () => insertTag('<u>', '</u>'), label: 'Sublinhado' },
      { icon: Strikethrough, action: () => insertTag('~~', '~~'), label: 'Tachado' },
    ],
    estrutura: [
      { icon: Heading1, action: () => insertTag('# '), label: 'Título 1' },
      { icon: Heading2, action: () => insertTag('## '), label: 'Título 2' },
      { icon: Quote, action: () => insertTag('> '), label: 'Citação' },
      { icon: Code, action: () => insertTag('`', '`'), label: 'Código' },
    ],
    listas: [
      { icon: List, action: () => insertTag('- '), label: 'Lista' },
      { icon: ListOrdered, action: () => insertTag('1. '), label: 'Lista Numérica' },
    ],
    insercao: [
      { icon: Link, action: () => insertTag('[Link](', ')'), label: 'Link' },
      { icon: Table, action: () => insertTag('\n| Col1 | Col2 |\n|------|------|\n| Item | Item |\n'), label: 'Tabela' },
      { icon: Subscript, action: () => insertTag('<sub>', '</sub>'), label: 'Subscrito' },
    ]
  };

  return (
    <div className={`max-w-6xl mx-auto space-y-4 animate-in fade-in duration-700 pb-20 ${isFocusMode ? 'mt-4' : ''}`}>
      {/* Header Compacto */}
      <header className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          {!isFocusMode && (
            <button onClick={onBack} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-slate-400">
              <ChevronLeft size={18} />
            </button>
          )}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button onClick={() => setViewMode('edit')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === 'edit' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}>
              Escrita
            </button>
            <button onClick={() => setViewMode('preview')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${viewMode === 'preview' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}>
              Preview
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button onClick={() => setIsFocusMode(!isFocusMode)} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-indigo-600 transition-all">
            {isFocusMode ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
          <button onClick={() => onSave({ ...project, content })} className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg flex items-center gap-2">
            <Save size={14} /> Salvar
          </button>
        </div>
      </header>

      {/* Toolbar Adaptativa */}
      {viewMode === 'edit' && (
        <div className="flex flex-wrap items-center gap-1 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md">
          {/* Grupo Principal */}
          {Object.entries(groups).map(([name, btns], idx) => (
            <React.Fragment key={name}>
              <div className={`flex items-center gap-1 ${idx > 1 && !showMore ? 'hidden md:flex' : 'flex'}`}>
                {btns.map((btn, i) => (
                  <button key={i} onClick={btn.action} className="p-2.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-slate-500 hover:text-indigo-600 rounded-lg transition-all" title={btn.label}>
                    <btn.icon size={16} />
                  </button>
                ))}
              </div>
              {idx < Object.keys(groups).length - 1 && <div className="h-6 w-px bg-slate-100 dark:bg-slate-800 mx-1" />}
            </React.Fragment>
          ))}

          {/* Botão de Expansão (Mobile/Small Screen) */}
          <button 
            onClick={() => setShowMore(!showMore)}
            className="md:hidden p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-lg"
          >
            <MoreHorizontal size={16} />
          </button>

          <div className="flex-1" />
          
          <button className="flex items-center gap-2 px-4 py-2 text-[9px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl transition-all hover:scale-105">
            <Sparkles size={12} /> Sugerir Próximo Artigo
          </button>
        </div>
      )}

      {/* Área de Trabalho */}
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-10 min-h-[650px] transition-all">
        {viewMode === 'edit' ? (
          <textarea 
            id="editor-area"
            className="w-full min-h-[550px] bg-transparent text-lg font-serif italic leading-relaxed text-slate-700 dark:text-slate-200 focus:outline-none resize-none"
            placeholder="O rastro da lei começa aqui..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <div className="prose prose-slate dark:prose-invert max-w-none font-serif italic text-lg leading-relaxed">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Footer de Status */}
      <footer className="flex justify-between px-6 text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
        <div className="flex gap-4">
          <span>Palavras: {content.split(/\s+/).filter(x => x).length}</span>
          <span>Caracteres: {content.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Sincronizado com LabSUS
        </div>
      </footer>
    </div>
  );
}
