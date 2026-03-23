// src/components/DiffViewer.jsx
import { diffWords } from 'diff';

export default function DiffViewer({ oldText = "", newText = "" }) {
  const differences = diffWords(oldText, newText);

  return (
    <div className="card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Comparação Normativa</h3>
    <div className="font-serif text-lg leading-relaxed text-justify">
    {differences.map((part, index) => (
      <span
      key={index}
      className={part.added ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30' :
        part.removed ? 'bg-rose-100 text-rose-800 line-through dark:bg-rose-900/30' : ''}
        >
        {part.value}
        </span>
    ))}
    </div>
    </div>
  );
}
