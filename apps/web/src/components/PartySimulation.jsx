import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function PartySimulation({ editor }) {

  const [data,setData]=useState(null);

  async function run(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/politics/parties',{
      method:'POST',
      body: JSON.stringify({text})
    });

    setData(await res.json());
  }

  return (
    <div className="card p-3 space-y-2">

      <button onClick={run} className="btn btn-primary">
        🏛️ Simular Partidos
      </button>

      {data && (
        <>
          <div>Esquerda: {data.esquerda}%</div>
          <div>Centro: {data.centro}%</div>
          <div>Direita: {data.direita}%</div>
          <div className="text-xs opacity-60">{data.observacao}</div>
        </>
      )}

    </div>
  );
}
