import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Ranking() {
  const [data,setData]=useState([]);

  useEffect(()=>{
     fetchWithAuth('/ranking')
      .then(r=>r.json())
      .then(setData);
  },[]);

  return (
    <div className="card p-4 space-y-2">

      <div className="font-bold">🏆 Ranking</div>

      {data.map((p,i)=>(
        <div key={p.id}>
          #{i+1} {p.title} ({p.score})
        </div>
      ))}

    </div>
  );
}
