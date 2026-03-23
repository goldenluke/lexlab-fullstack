import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function RealPartySimulation({ editor }) {

  const [data,setData]=useState(null);

  async function run(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/politics/real',{
      method:'POST',
      body: JSON.stringify({text})
    });

    setData(await res.json());
  }

  return (
    <div className="card p-3 space-y-2">

      <button onClick={run} className="btn btn-primary">
        🏛️ Partidos reais
      </button>

      {data && Object.entries(data).map(([p,v])=>(
        <div key={p} className="flex justify-between text-sm">
          <span>{p}</span>
          <span>{v}%</span>
        </div>
      ))}

    </div>
  );
}
