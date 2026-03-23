import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function ScorePoliticsPanel({ editor }) {

  const [score,setScore]=useState(null);
  const [politics,setPolitics]=useState(null);
  const [votes,setVotes]=useState([]);

  async function run(){
    const text = editor.getText();

    const s = await  fetchWithAuth('/score',{method:'POST',body:JSON.stringify({text})});
    const p = await  fetchWithAuth('/politics',{method:'POST',body:JSON.stringify({text})});
    const v = await  fetchWithAuth('/vote');

    setScore((await s.json()).score);
    setPolitics(await p.json());
    setVotes(await v.json());
  }

  async function sendVote(v){
    await  fetchWithAuth('/vote',{
      method:'POST',
      body: JSON.stringify({value:v})
    });
    run();
  }

  return (
    <div className="card p-4 space-y-3">

      <button onClick={run} className="btn btn-primary">
        📊 Analisar Lei
      </button>

      {score && (
        <div>
          <b>Score:</b> {score}/100
        </div>
      )}

      {politics && (
        <div>
          <b>🏛️ Aprovação:</b> {politics.aprovacao}%
        </div>
      )}

      <div className="flex gap-2">
        <button onClick={()=>sendVote(1)} className="btn btn-primary">👍</button>
        <button onClick={()=>sendVote(-1)} className="btn btn-secondary">👎</button>
      </div>

      <div>
        {votes.map((v,i)=>(
          <div key={i}>
            {v.value === 1 ? '👍' : '👎'}: {v.count}
          </div>
        ))}
      </div>

    </div>
  );
}
