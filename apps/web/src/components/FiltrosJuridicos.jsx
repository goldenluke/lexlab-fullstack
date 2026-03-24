import { useState, useEffect } from 'react';

const SUBTIPOS = {
  lei_seca: [
    'CF/88',
    'Código Penal',
    'Código Civil',
    'CLT',
    'CDC',
    'CTN'
  ],
  jurisprudencia: [
    'STF',
    'STJ',
    'TJ',
    'TRF',
    'Súmula',
    'Tema'
  ],
  norma_tecnica: [
    'ANVISA',
    'ANS',
    'ABNT',
    'INMETRO'
  ]
};

export default function Filtros({ onResult }){

  const [f,setF] = useState({
    tipo:'',
    subtipo:'',
    estado:'',
    municipio:'',
    busca:''
  });

  function setField(k,v){
    setF(prev=>({...prev,[k]:v}));
  }

  async function buscar(){

    const params = new URLSearchParams(f).toString();

    const r = await fetch(`http://localhost:1234/minutas?${params}`);
    const d = await r.json();

    onResult(d);
  }

  useEffect(()=>{ buscar(); },[]);

  return (
    <div className="bg-slate-900 p-4 rounded-xl mb-6 grid grid-cols-2 md:grid-cols-5 gap-3">

      {/* BUSCA */}
      <input
        placeholder="🔎 Buscar texto..."
        className="p-2 bg-slate-800 rounded"
        onChange={e=>setField('busca',e.target.value)}
      />

      {/* TIPO */}
      <select
        className="p-2 bg-slate-800 rounded"
        onChange={e=>{
          setField('tipo',e.target.value);
          setField('subtipo','');
        }}
      >
        <option value="">Tipo jurídico</option>
        <option value="lei_seca">Lei Seca</option>
        <option value="jurisprudencia">Jurisprudência</option>
        <option value="norma_tecnica">Norma Técnica</option>
        <option value="ato_administrativo">Ato Administrativo</option>
        <option value="projeto_lei">Projeto de Lei</option>
        <option value="decreto">Decreto</option>
        <option value="portaria">Portaria</option>
        <option value="resolucao">Resolução</option>
        <option value="emenda">Emenda Constitucional</option>
        <option value="mp">Medida Provisória</option>
        <option value="parecer">Parecer</option>
      </select>

      {/* SUBTIPO DINÂMICO */}
      {SUBTIPOS[f.tipo] && (
        <select
          className="p-2 bg-slate-800 rounded"
          onChange={e=>setField('subtipo',e.target.value)}
        >
          <option value="">Subtipo</option>
          {SUBTIPOS[f.tipo].map(s=>(
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      )}

      {/* ESTADO */}
      <input
        placeholder="Estado (UF)"
        className="p-2 bg-slate-800 rounded"
        onChange={e=>setField('estado',e.target.value)}
      />

      {/* MUNICÍPIO */}
      <input
        placeholder="Município"
        className="p-2 bg-slate-800 rounded"
        onChange={e=>setField('municipio',e.target.value)}
      />

      {/* BOTÃO */}
      <button
        onClick={buscar}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded col-span-2 md:col-span-1"
      >
        🔍 Filtrar
      </button>

    </div>
  );
}
