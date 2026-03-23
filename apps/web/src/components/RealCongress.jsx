import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function RealCongress({ editor }) {

  const [data,setData]=useState(null);

  async function run(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/politics/congress-real',{
      method:'POST',
      body: JSON.stringify({text})
    });

    setData(await res.json());
  }

  return (
    <div className="card p-3 space-y-2">

      <button onClick={run} className="btn btn-primary">
        🏛️ Congresso Real
      </button>

      {data && (
        <>
          <div>
            Câmara: {data.camara.votos}/{data.camara.total}
          </div>

          <div>
            Senado: {data.senado.votos}/{data.senado.total}
          </div>

          <div>
            Resultado:
            {data.aprovadoFinal ? ' ✅ Aprovado' : ' ❌ Rejeitado'}
          </div>
        </>
      )}

    </div>
  );
}
