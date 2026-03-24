import { useState } from 'react';

export default function MinutaForm(){

  const [titulo,setTitulo] = useState('');
  const [conteudo,setConteudo] = useState('');
  const [tipo,setTipo] = useState('');
  const [codigo,setCodigo] = useState('');
  const [artigo,setArtigo] = useState('');

  async function salvar(){

    await fetch('http://localhost:1234/minutas',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        titulo,
        conteudo,
        tipo,
        metadados:{
          codigo,
          artigo
        }
      })
    });

    alert("Salvo");
  }

  return (
    <div className="p-6 bg-slate-900 rounded-xl">

      <input
        placeholder="Título"
        className="w-full p-2 mb-2 bg-slate-800"
        onChange={e=>setTitulo(e.target.value)}
      />

      <select
        className="w-full p-2 mb-2 bg-slate-800"
        onChange={e=>setTipo(e.target.value)}
      >
        <option value="">Tipo</option>
        <option value="lei_seca">Lei Seca</option>
        <option value="jurisprudencia">Jurisprudência</option>
        <option value="norma_tecnica">Norma Técnica</option>
        <option value="ato_administrativo">Ato Administrativo</option>
      </select>

      {tipo === 'lei_seca' && (
        <>
          <input
            placeholder="Código (CF, CP, CC...)"
            className="w-full p-2 mb-2 bg-slate-800"
            onChange={e=>setCodigo(e.target.value)}
          />
          <input
            placeholder="Artigo"
            className="w-full p-2 mb-2 bg-slate-800"
            onChange={e=>setArtigo(e.target.value)}
          />
        </>
      )}

      <textarea
        className="w-full h-40 p-2 bg-slate-800"
        onChange={e=>setConteudo(e.target.value)}
      />

      <button
        onClick={salvar}
        className="mt-4 bg-blue-600 px-4 py-2 rounded"
      >
        💾 Salvar
      </button>

    </div>
  );
}
