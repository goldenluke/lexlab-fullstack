import { useState } from 'react';

export default function PublicVote({ id }){

  const [res,setRes]=useState(null);

  async function votar(v){
    await fetch('http://localhost:1234/voto/popular',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({id,voto:v})
    });

    const r = await fetch(`http://localhost:1234/voto/popular/${id}`);
    const d = await r.json();

    setRes(d);
  }

  return (
    <div className="border p-3">

      <h3>🗳️ Voto Popular</h3>

      <button onClick={()=>votar('sim')}>Sim</button>
      <button onClick={()=>votar('nao')}>Não</button>

      {res && (
        <div>
          👍 {res.sim} | 👎 {res.nao}
        </div>
      )}

    </div>
  );
}
