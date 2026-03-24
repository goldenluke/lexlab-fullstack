import { useEffect, useMemo, useRef, useState } from 'react';

const GEOJSON_MAP = {
  AC: 'geojs-12-mun',
  AL: 'geojs-27-mun',
  AP: 'geojs-16-mun',
  AM: 'geojs-13-mun',
  BA: 'geojs-29-mun',
  CE: 'geojs-23-mun',
  DF: 'geojs-53-mun',
  ES: 'geojs-32-mun',
  GO: 'geojs-52-mun',
  MA: 'geojs-21-mun',
  MT: 'geojs-51-mun',
  MS: 'geojs-50-mun',
  MG: 'geojs-31-mun',
  PA: 'geojs-15-mun',
  PB: 'geojs-25-mun',
  PR: 'geojs-41-mun',
  PE: 'geojs-26-mun',
  PI: 'geojs-22-mun',
  RJ: 'geojs-33-mun',
  RN: 'geojs-24-mun',
  RS: 'geojs-43-mun',
  RO: 'geojs-11-mun',
  RR: 'geojs-14-mun',
  SC: 'geojs-42-mun',
  SP: 'geojs-35-mun',
  SE: 'geojs-28-mun',
  TO: 'geojs-17-mun',
  BR: 'geojs-100-mun',
};

export default function TerritorioMapa({ estado, filtros }) {
  const ref = useRef(null);
  const [rows, setRows] = useState([]);
  const [geojson, setGeojson] = useState(null);
  const [loading, setLoading] = useState(false);

  const featureKey = useMemo(() => {
    if (!geojson?.features?.length) return null;
    const props = geojson.features[0].properties || {};
    const keys = [
      'NM_MUN',
      'NOME_MUN',
      'name',
      'municipio',
      'MUNICIPIO',
      'NM_MUNICIP',
    ];
    return keys.find(k => props[k] != null) || Object.keys(props)[0] || null;
  }, [geojson]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!estado) {
        setRows([]);
        setGeojson(null);
        return;
      }

      setLoading(true);

      try {
        const params = new URLSearchParams();
        params.set('estado', estado);
        if (filtros?.busca) params.set('busca', filtros.busca);
        if (filtros?.municipio) params.set('municipio', filtros.municipio);
        if (filtros?.area) params.set('area', filtros.area);
        if (filtros?.esfera) params.set('esfera', filtros.esfera);

        const [r1, r2] = await Promise.all([
          fetch(`http://localhost:1234/territorio/mapa?${params.toString()}`),
          fetch(`/geojson_uf/${GEOJSON_MAP[estado]}.json`),
        ]);

        const d1 = await r1.json();
        const d2 = await r2.json();

        if (cancelled) return;
        setRows(Array.isArray(d1) ? d1 : []);
        setGeojson(d2);
      } catch {
        if (!cancelled) {
          setRows([]);
          setGeojson(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => { cancelled = true; };
  }, [estado, filtros?.busca, filtros?.municipio, filtros?.area, filtros?.esfera]);

  useEffect(() => {
    let cancelled = false;

    async function draw() {
      if (!ref.current || !geojson || !featureKey) return;

      try {
        const mod = await import('plotly.js-dist-min');
        const Plotly = mod.default || mod;

        const locations = rows.map(r => r.municipio);
        const z = rows.map(r => Number(r.total || 0));

        const trace = {
          type: 'choropleth',
          geojson,
          featureidkey: `properties.${featureKey}`,
          locations,
          z,
          text: rows.map(r => `${r.municipio}: ${r.total}`),
          colorscale: 'Blues',
          marker: { line: { color: 'white', width: 0.25 } },
          hovertemplate: '%{text}<extra></extra>',
        };

        const layout = {
          margin: { l: 0, r: 0, t: 0, b: 0 },
          paper_bgcolor: '#0b1220',
          plot_bgcolor: '#0b1220',
          geo: {
            fitbounds: 'locations',
            visible: false,
          },
          height: 520,
        };

        if (cancelled) return;
        Plotly.react(ref.current, [trace], layout, { responsive: true });
      } catch (e) {
        console.log('mapa plotly:', e.message);
      }
    }

    draw();

    return () => {
      cancelled = true;
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, [rows, geojson, featureKey]);

  if (!estado) {
    return (
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-sm text-gray-400">
        Selecione uma UF para ver o mapa municipal.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-3">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-400">
        <span>Mapa municipal — {estado}</span>
        <span>{loading ? 'carregando...' : `${rows.length} municípios com minutas`}</span>
      </div>
      <div ref={ref} className="w-full" />
    </div>
  );
}
