import { useState } from 'react';

export default function AIGenerator(){

  const [tema,setTema]=useState('');
  const [resultado,setResultado]=useState('');

  async function gerar(){
    const r = await fetch('http://localhost:1234/ai/generate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({tema})
    });

    const d = await r.json();
    setResultado(d.texto);
  }

  return (
    <div className="border p-3 space-y-2">

      <h3>🧠 Gerar Projeto de Lei</h3>

      <input
        placeholder="Tema..."
        value={tema}
        onChange={e=>setTema(e.target.value)}
        className="border p-1 w-full"
      />

      <button onClick={gerar} className="bg-black text-white px-2 py-1">
        Gerar
      </button>

      {resultado && (
        <pre className="text-sm whitespace-pre-wrap">
          {resultado}
        </pre>
      )}

    </div>
  );
}
