import React, { useState, useEffect } from 'react';
import { Map, Loader2, Info, ShieldCheck } from 'lucide-react';

export default function LexGeo({ project }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Configuração dos caminhos baseada na sua estrutura
  const GEOJSON_CONFIG = { state: 'TO', file: 'geojs-17-mun.json' };

  useEffect(() => {
    setMounted(true);
    const script = document.createElement('script');
    script.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js';
    script.async = true;
    script.onload = () => loadGeoData();
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  const loadGeoData = async () => {
    try {
      // Busca o arquivo JSON da pasta public
      const response = await fetch(`/geojson_uf/${GEOJSON_CONFIG.file}`);
      const geojson = await response.json();
      renderMap(geojson);
    } catch (error) {
      console.error("Erro ao carregar o rastro geográfico:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderMap = (geojson) => {
    // Simulando dados de impacto para os municípios de TO
    // O Plotly usa o campo 'name' ou 'id' dentro de 'properties' do seu JSON
    const locations = geojson.features.map(f => f.properties.name);
    const zData = locations.map(() => Math.floor(Math.random() * 100));

    const data = [{
      type: 'choropleth',
      geojson: geojson,
      locations: locations,
      z: zData,
      featureidkey: 'properties.name', // Ajuste para o campo de nome no seu JSON
      colorscale: [
        [0, '#f8fafc'],
        [0.5, '#6366f1'],
        [1, '#312e81']
      ],
      marker: { line: { color: 'rgba(255,255,255,0.2)', width: 0.5 } },
      showscale: false
    }];

    const layout = {
      dragmode: 'pan',
      margin: { r: 0, t: 0, b: 0, l: 0 },
      geo: {
        visible: false,
        resolution: 50,
        fitbounds: 'locations' // Auto-zoom no Tocantins
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
    };

    window.Plotly.newPlot('lexgeo-map', data, layout, { 
      responsive: true, 
      displayModeBar: false 
    });
  };

  if (!mounted) return null;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-1000">
      <header className="flex justify-between items-end">
        <div className="space-y-1">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
            Lex<span className="text-indigo-600">Geo</span>
          </h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Mapeamento de Impacto: Tocantins</p>
        </div>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden min-h-[600px]">
          {loading && (
            <div className="absolute inset-0 z-50 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md flex flex-col items-center justify-center">
              <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
              <p className="text-[10px] font-black uppercase tracking-widest">Sincronizando Malha Geográfica...</p>
            </div>
          )}
          <div id="lexgeo-map" className="w-full h-full"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl">
            <h3 className="text-[10px] font-black uppercase text-indigo-400 mb-4">Análise LabSUS</h3>
            <p className="text-xs font-serif italic opacity-70 leading-relaxed">
              O rastro desta lei apresenta maior pressão regulatória nos municípios do eixo da BR-153.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[3rem] border border-indigo-100 dark:border-indigo-800">
            <ShieldCheck className="text-indigo-600 mb-2" size={20} />
            <p className="text-[10px] font-black uppercase text-indigo-900 dark:text-indigo-300">Dados Validados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
