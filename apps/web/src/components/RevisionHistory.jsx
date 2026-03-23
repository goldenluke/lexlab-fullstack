import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';
import { GitCommit, Clock, User } from 'lucide-react';

export default function RevisionHistory({ projectId }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHistory() {
      try {
        const res = await fetchWithAuth(`/versions?project=${projectId}`);
        const data = await res.json();
        setHistory(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erro ao carregar rastro de auditoria:", err);
      } finally {
        setLoading(false);
      }
    }
    if (projectId) loadHistory();
  }, [projectId]);

  if (loading) return <div className="animate-pulse text-[10px] font-black text-slate-400">CARREGANDO RASTRO...</div>;

  return (
    <div className="card p-6 bg-slate-50/50 border-slate-200">
      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
        <GitCommit size={14} className="text-indigo-500" />
        Rastro de Auditoria
      </h3>

      <div className="space-y-6 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
        {history.length > 0 ? history.map((rev, i) => (
          <div key={i} className="flex gap-4 relative group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-indigo-500 transition-colors shadow-sm">
              <Clock size={14} className="text-slate-400 group-hover:text-indigo-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
                {rev.message || "Ajuste na redação da minuta"}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] text-indigo-600 font-black uppercase flex items-center gap-1">
                  <User size={10} /> {rev.author || 'Sistema'}
                </span>
                <span className="text-[9px] text-slate-400">•</span>
                <span className="text-[9px] text-slate-400 uppercase font-medium">
                  {new Date(rev.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-[10px] text-slate-400 italic pl-10">Iniciando rastro digital...</p>
        )}
      </div>

      <button className="w-full mt-6 pt-4 border-t border-slate-200 text-[9px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest text-center">
        Ver histórico completo de fé pública
      </button>
    </div>
  );
}
