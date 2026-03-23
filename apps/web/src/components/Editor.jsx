import CreatePRModal from "./CreatePRModal.jsx";
import { useEffect, useState, Suspense, lazy } from 'react';
import Editor from './Editor.jsx';
import { ArrowLeft, GitPullRequest, FileEdit, Activity } from 'lucide-react';

// 🛡️ Carregamento dinâmico do PullRequest para isolar o motor de gráficos (Plotly/Yjs)
const PullRequest = lazy(() => import('./PullRequest.jsx'));

export default function EditorPage({ project, onBack }) {
  const [view, setView] = useState('edit'); // 'edit' ou 'pr'
  const [aiStatus, setAiStatus] = useState('checking');

  useEffect(() => {
    // Health Check da IA (Llama)
    fetch('http://localhost:3001/ai/health')
    .then(res => res.json())
    .then(data => setAiStatus(data.status))
    .catch(() => setAiStatus('offline'));
  }, []);

  // 🛡️ CLAUSULA DE SEGURANÇA:
  // Permite renderizar a aba 'pr' (Mock) mesmo se o 'project' falhar no login 403
  if (!project && view !== 'pr') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 shadow-xl">
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mb-4"></div>
      <h2 className="text-slate-800 dark:text-white font-black uppercase tracking-tighter">Sincronizando Rastro Digital...</h2>
      <p className="text-slate-400 text-[10px] mt-2 uppercase font-bold tracking-widest">Aguardando autorização do banco</p>
      <button onClick={onBack} className="mt-6 text-indigo-600 text-xs underline font-black">VOLTAR AO DASHBOARD</button>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-in fade-in duration-700">

    {/* HEADER DINÂMICO */}
    <header className="flex justify-between items-center bg-white dark:bg-slate-900 p-5 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
    <div className="flex gap-4 items-center">
    <button
    onClick={onBack}
    className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-90"
    >
    <ArrowLeft size={20} />
    </button>
    <div>
    <h1 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
    {project?.title || "Intelligence Hub Preview"}
    </h1>
    <div className="flex items-center gap-2 mt-1">
    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${view === 'edit' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
    {view === 'edit' ? 'Draft Engine' : 'Audit Mode'}
    </span>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
    </div>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
    </div>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
    </div>

    {/* TOGGLE DE VISÃO (Pílula Estilizada) */}
    <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200/50">
    <button
    onClick={() => setView('edit')}
    className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${view === 'edit' ? 'bg-white shadow-md text-indigo-600 scale-105' : 'text-slate-400 hover:text-slate-600'}`}
    >
    <FileEdit size={14} /> Redação
    </button>
    <button
    onClick={() => setView('pr')}
    className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${view === 'pr' ? 'bg-white shadow-md text-emerald-600 scale-105' : 'text-slate-400 hover:text-slate-600'}`}
    >
    <GitPullRequest size={14} /> Pull Request
    </button>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
    </div>
    </header>

    {/* ÁREA DE CONTEÚDO COM FALLBACK DE CARREGAMENTO */}
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[650px] relative">
    <Suspense fallback={
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <Activity className="text-indigo-600 animate-bounce mb-2" size={32} />
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Carregando Módulos de Auditoria...</p>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
      </div>
    }>
    {view === 'edit' ? (
      <Editor
      initialContent={project?.content || "<h1>Nova Minuta</h1><p>Inicie o rastro digital...</p>"}
      projectId={project?.id || 'temp'}
      aiEnabled={aiStatus === 'online'}
      />
    ) : (
      <PullRequest
      key="pr-intelligence-hub"
      projectId={project?.id || 'mock-id'}
      onMerge={() => alert('Integração de Pull Request solicitada.')}
      />
    )}
    </Suspense>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
    </div>
      <CreatePRModal isOpen={isPRModalOpen} onClose={() => setIsPRModalOpen(false)} onSubmit={(data) => console.log("PR Criado:", data)} selectedText="Trecho automático do editor" />
    </div>
  );
}
