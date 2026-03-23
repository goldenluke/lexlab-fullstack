// src/components/AnalyticsDashboard.jsx
import Plot from 'react-plotly.js';

export default function AnalyticsDashboard({ projects }) {
  const categories = projects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h4 className="font-bold mb-4">Temas por Esfera</h4>
        <Plot
          data={[{
            values: Object.values(categories),
            labels: Object.keys(categories),
            type: 'pie',
            hole: 0.4,
            marker: { colors: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'] }
          }]}
          layout={{ height: 300, autosize: true, paper_bgcolor: 'transparent' }}
          config={{ displayModeBar: false }}
        />
      </div>
      
      <div className="card p-6 flex flex-col justify-center items-center">
        <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">Impacto Normativo Médio</span>
        <span className="text-6xl font-black text-indigo-600 mt-2">7.8</span>
        <span className="text-xs text-emerald-500 font-bold mt-2">↑ 12% em relação à última versão</span>
      </div>
    </div>
  );
}
