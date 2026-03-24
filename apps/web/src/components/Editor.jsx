import { useState } from 'react';

export default function Editor({ selected }){

  const [id] = useState(selected?.id || null);
  const [titulo,setTitulo]=useState(selected?.titulo || "");
  const [conteudo,setConteudo]=useState(selected?.conteudo || "");

  async function salvar(){

    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:1234/minutas/${id}`
      : `http://localhost:1234/minutas`;

    const r = await fetch(url,{
      method,
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ titulo, conteudo })
    });

    const d = await r.json();

    alert(id ? "✏️ Atualizado!" : "✅ Criado!");
  }

  return (
    <div className="h-full flex flex-col bg-gray-950 text-white">

      <input
        value={titulo}
        onChange={e=>setTitulo(e.target.value)}
        placeholder="Título"
        className="p-4 text-xl bg-gray-900"
      />

      <textarea
        value={conteudo}
        onChange={e=>setConteudo(e.target.value)}
        className="flex-1 p-4 bg-black"
      />

      <button
        onClick={salvar}
        className="bg-blue-600 p-3"
      >
        💾 Salvar
      </button>

    </div>
  );
}
