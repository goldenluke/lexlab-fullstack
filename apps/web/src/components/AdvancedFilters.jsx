import { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, Globe, ChevronDown } from 'lucide-react';

export default function AdvancedFilters({ data, onFilter }) {
  const [search, setSearch] = useState('');
  const [esfera, setEsfera] = useState('todos');
  const [estado, setEstado] = useState('todos');

  const uniqueStates = useMemo(() => {
    const states = data.map(p => p.state).filter(Boolean);
    return ['todos', ...new Set(states)];
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = (item.title?.toLowerCase().includes(search.toLowerCase()) ||
                            item.tags?.some(t => t.toLowerCase().includes(search.toLowerCase())));
      const matchesEsfera = esfera === 'todos' || item.sphere === esfera;
      const matchesEstado = estado === 'todos' || item.state === estado;
      return matchesSearch && matchesEsfera && matchesEstado;
    });
  }, [search, esfera, estado, data]);

  useEffect(() => {
    onFilter(filtered);
  }, [filtered, onFilter]);

  const inputClass = "w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all appearance-none text-sm font-medium text-slate-700 dark:text-slate-200";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Busca */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-slate-400" size={18} />
        <input 
          className={inputClass}
          placeholder="Termo técnico ou #tag..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Esfera */}
      <div className="relative flex items-center">
        <Globe className="absolute left-4 text-slate-400 pointer-events-none" size={18} />
        <select 
          className={inputClass}
          value={esfera}
          onChange={(e) => setEsfera(e.target.value)}
        >
          <option value="todos">Todas as Esferas</option>
          <option value="federal">Federal</option>
          <option value="estadual">Estadual</option>
          <option value="municipal">Municipal</option>
        </select>
        <ChevronDown className="absolute right-4 text-slate-400 pointer-events-none" size={16} />
      </div>

      {/* Estado */}
      <div className="relative flex items-center">
        <MapPin className="absolute left-4 text-slate-400 pointer-events-none" size={18} />
        <select 
          className={inputClass}
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          {uniqueStates.map(st => (
            <option key={st} value={st}>
              {st === 'todos' ? 'Todos os Estados' : st}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 text-slate-400 pointer-events-none" size={16} />
      </div>
    </div>
  );
}
