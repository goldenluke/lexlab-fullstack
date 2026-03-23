import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function PartyVote() {

  const [data,setData]=useState([]);

  async function vote(party,value){
    await  fetchWithAuth('/vote/party',{
      method:'POST',
      body: JSON.stringify({party,value})
    });
    load();
  }

  async function load(){
    const res = await  fetchWithAuth('/vote/party');
    setData(await res.json());
  }

  return (
    <div className="card p-3 space-y-2">

      <div className="font-bold">🗳️ Votação por Partido</div>

      {['esquerda','centro','direita'].map(p=>(
        <div key={p} className="flex gap-2">
          {p}
          <button onClick={()=>vote(p,1)}>👍</button>
          <button onClick={()=>vote(p,-1)}>👎</button>
        </div>
      ))}

      {data.map((d,i)=>(
        <div key={i}>{d.party}: {d.total}</div>
      ))}

    </div>
  );
}
