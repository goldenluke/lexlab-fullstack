import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Bicameral({ editor }) {

  const [data,setData]=useState(null);

  async function run(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/politics/bicameral',{
      method:'POST',
      body: JSON.stringify({text})
    });

    setData(await res.json());
  }

  return (
    <div className="card p-3 space-y-2">

      <button onClick={run} className="btn btn-primary">
        🏛️ Câmara + Senado
      </button>

      {data && (
        <>
          <div>Câmara: {data.camara}%</div>
          <div>Senado: {data.senado}%</div>
          <div>
            Resultado: {data.aprovado ? '✅ Aprovado' : '❌ Rejeitado'}
          </div>
        </>
      )}

    </div>
  );
}
