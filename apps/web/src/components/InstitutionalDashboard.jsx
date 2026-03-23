import { useEffect, useState } from 'react';
import PlotWrapper from './PlotWrapper';
import { fetchWithAuth } from '@lib/auth.js';

export default function InstitutionalDashboard() {
  const [minutas, setMinutas] = useState([]);

  useEffect(() => {
    fetchWithAuth('/projects').then(r => r.json()).then(setMinutas).catch(() => setMinutas([]));
  }, []);

  const categories = {};
  minutas.forEach(m => { categories[m.category] = (categories[m.category] || 0) + 1; });

  return (
    <div className="grid md:grid-cols-2 gap-6">
    <div className="card p-4">
    <h3 className="font-bold mb-4">Minutas por Categoria</h3>
    <PlotWrapper
    data={[{
      values: Object.values(categories),
          labels: Object.keys(categories),
          type: 'pie',
          marker: { colors: ['#6366f1', '#a855f7', '#ec4899'] }
    }]}
    layout={{ height: 300, paper_bgcolor: 'transparent', plot_bgcolor: 'transparent' }}
    />
    </div>
    <div className="card p-4 text-center flex flex-col justify-center">
    <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Total de Minutas</span>
    <span className="text-6xl font-black text-indigo-600">{minutas.length}</span>
    </div>
    </div>
  );
}
