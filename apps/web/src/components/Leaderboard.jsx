import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Leaderboard() {

  const [data,setData]=useState([]);

  useEffect(()=>{
     fetchWithAuth('/leaderboard')
      .then(r=>r.json())
      .then(setData);
  },[]);

  return (
    <div className="card p-4 space-y-2">

      <div className="font-bold">🏆 Top Autores</div>

      {data.map((u,i)=>(
        <div key={u.id}>
          #{i+1} {u.email} ⭐ {u.reputation}
        </div>
      ))}

    </div>
  );
}
