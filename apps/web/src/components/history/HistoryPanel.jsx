import React, { useState, useEffect } from 'react';
import { History, RotateCcw, User, Clock } from 'lucide-react';

export default function HistoryPanel({ projectId }) {
  const [history, setHistory] = useState([
    { id: 1, user: "Dr. Lucas", action: "Alterou Art. 5º", time: "10 min atrás" },
    { id: 2, user: "Sistema IA", action: "Revisão Gramatical", time: "1h atrás" }
  ]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <History size={18} className="text-indigo-600" />
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rastro de Alterações</h3>
      </div>
      
      <div className="space-y-4">
        {history.map(item => (
          <div key={item.id} className="flex gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              <User size={14} />
            </div>
            <div>
              <p className="text-[11px] font-black text-slate-700 dark:text-slate-200 uppercase">{item.action}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] text-slate-400 font-bold uppercase">{item.user}</span>
                <span className="text-[9px] text-slate-400 uppercase flex items-center gap-1">
                   <Clock size={10} /> {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase text-slate-500 rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2">
        <RotateCcw size={14} /> Ver Histórico Completo
      </button>
    </div>
  );
}
