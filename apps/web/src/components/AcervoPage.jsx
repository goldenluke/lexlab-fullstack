import { useEffect, useMemo, useState } from 'react';
import useMunicipios from '../hooks/useMunicipios';
import usePopulation from '../hooks/usePopulation';
import TerritorioMapa from './TerritorioMapa';

const AREAS = [
  'saude', 'educacao', 'seguranca_publica', 'assistencia_social', 'previdencia',
  'trabalho', 'tributario', 'financeiro', 'orcamentario', 'administrativo',
  'constitucional', 'civil', 'processual_civil', 'penal', 'processual_penal',
  'ambiental', 'urbanistico', 'agrario', 'consumidor', 'digital', 'lgpd',
  'tecnologia', 'inovacao', 'infraestrutura', 'transportes', 'energia',
  'saneamento', 'habitacao', 'cultura', 'esporte', 'turismo', 'comercio',
  'industria', 'relacoes_exteriores', 'defesa', 'direitos_humanos', 'minorias',
  'genero', 'igualdade_racial', 'juventude', 'idoso', 'crianca_adolescente',
  'acessibilidade', 'mobilidade_urbana', 'planejamento', 'desenvolvimento_economico',
];

const ESFERAS = ['', 'municipal', 'estadual', 'federal', 'distrital', 'supranacional', 'interfederativa'];

function formatNumber(v) {
  return new Intl.NumberFormat('pt-BR').format(Number(v || 0));
}

export default function AcervoPage({ onOpen }) {
  const [minutas, setMinutas] = useState([]);
  const [busca, setBusca] = useState('');
  const [estado, setEstado] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [area, setArea] = useState('');
  const [esfera, setEsfera] = useState('');
  const [semanticMode, setSemanticMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [territoryAI, setTerritoryAI] = useState('');
  const [territoryAILoading, setTerritoryAILoading] = useState(false);

  const { municipios, ufs } = useMunicipios(estado);
  const { ready: popReady, latestYear, getMunicipalityPopulation, getStatePopulation } = usePopulation();

  async function load() {
    setLoading(true);

    try {
      const params = new URLSearchParams();
      if (busca.trim()) params.set('q', busca.trim());
      if (estado) params.set('estado', estado);
      if (municipio) params.set('municipio', municipio);
      if (area) params.set('area', area);
      if (esfera) params.set('esfera', esfera);

      const endpoint = semanticMode && busca.trim()
        ? `http://localhost:1234/minutas/semantic?${params.toString()}`
        : `http://localhost:1234/minutas?${params.toString()}`;

      const r = await fetch(endpoint);
      const d = await r.json();
      setMinutas(Array.isArray(d) ? d : []);
    } catch {
      setMinutas([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [busca, estado, municipio, area, esfera, semanticMode]);

  const population = useMemo(() => {
    if (!popReady || !latestYear) return 0;
    if (municipio && estado) return getMunicipalityPopulation(estado, municipio, latestYear);
    if (estado) return getStatePopulation(estado, latestYear);
    return 0;
  }, [popReady, latestYear, estado, municipio, getMunicipalityPopulation, getStatePopulation]);

  const rate10k = population ? (minutas.length / population) * 10000 : 0;

  async function askTerritoryAI() {
    setTerritoryAILoading(true);
    setTerritoryAI('');

    try {
      const r = await fetch('http://localhost:1234/territorio/sugestoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          estado,
          municipio,
          area,
          esfera,
          busca,
          total: minutas.length,
          populacao: population,
          taxa10k: rate10k,
        }),
      });

      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      let result = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value);
        setTerritoryAI(result);
      }
    } catch {
      setTerritoryAI('Erro ao gerar sugestões.');
    } finally {
      setTerritoryAILoading(false);
    }
  }

  return (
    <div className="h-full flex flex-col bg-gray-950 text-white">
      <div className="border-b border-gray-800 p-4">
        <div className="flex flex-wrap gap-2">
          <input
            value={busca}
            onChange={e => setBusca(e.target.value)}
            placeholder={semanticMode ? '🧠 Busca semântica...' : '🔎 Buscar por texto...'}
            className="rounded bg-gray-900 px-3 py-2 outline-none"
          />

          <select
            value={estado}
            onChange={e => {
              setEstado(e.target.value);
              setMunicipio('');
            }}
            className="rounded bg-gray-900 px-3 py-2"
          >
            <option value="">UF</option>
            {ufs.map(uf => <option key={uf} value={uf}>{uf}</option>)}
          </select>

          <select
            value={municipio}
            onChange={e => setMunicipio(e.target.value)}
            className="rounded bg-gray-900 px-3 py-2"
          >
            <option value="">Município</option>
            {municipios.map(m => <option key={m} value={m}>{m}</option>)}
          </select>

          <select
            value={area}
            onChange={e => setArea(e.target.value)}
            className="rounded bg-gray-900 px-3 py-2"
          >
            <option value="">Área</option>
            {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
          </select>

          <select
            value={esfera}
            onChange={e => setEsfera(e.target.value)}
            className="rounded bg-gray-900 px-3 py-2"
          >
            <option value="">Esfera</option>
            {ESFERAS.filter(Boolean).map(e => <option key={e} value={e}>{e}</option>)}
          </select>

          <button
            onClick={() => setSemanticMode(v => !v)}
            className={`rounded px-3 py-2 ${semanticMode ? 'bg-purple-600' : 'bg-gray-700'}`}
          >
            {semanticMode ? 'IA semântica' : 'Busca texto'}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-300">
          <div className="rounded bg-gray-900 px-3 py-2">Resultados: {minutas.length}</div>
          <div className="rounded bg-gray-900 px-3 py-2">
            População {latestYear ? `(${latestYear})` : ''}: {formatNumber(population)}
          </div>
          <div className="rounded bg-gray-900 px-3 py-2">Minutas por 10k: {rate10k.toFixed(2)}</div>
          <button onClick={askTerritoryAI} className="rounded bg-blue-600 px-3 py-2">
            🤖 Sugerir leis por território
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-4 p-4">
        <div className="overflow-auto">
          {loading ? (
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">Carregando...</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {minutas.map(m => (
                <div
                  key={m.id}
                  onClick={() => onOpen?.(m)}
                  className="cursor-pointer rounded-xl border border-gray-800 bg-gray-900 p-4 transition hover:bg-gray-800"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-lg">{m.titulo || 'Sem título'}</h3>
                    {typeof m.score === 'number' && (
                      <span className="rounded bg-purple-600/20 px-2 py-1 text-xs text-purple-300">
                        {m.score.toFixed(3)}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    {m.estado} • {m.municipio} • {m.area} • {m.esfera}
                  </div>
                  <div className="mt-3 text-sm text-gray-300 line-clamp-3">
                    {(m.conteudo || '').slice(0, 220)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 overflow-auto">
          <TerritorioMapa
            estado={estado}
            filtros={{ busca, municipio, area, esfera }}
          />

          <div className="rounded-xl border border-gray-800 bg-gray-900 p-4">
            <div className="mb-2 font-semibold">🤖 Leis sugeridas pela IA</div>
            {territoryAILoading ? (
              <div className="text-sm text-gray-400">Gerando sugestões...</div>
            ) : (
              <pre className="whitespace-pre-wrap text-sm text-gray-200">
                {territoryAI || 'Clique em "Sugerir leis por território"'}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
