import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Reputation() {
  const [score,setScore]=useState(0);

  useEffect(()=>{
     fetchWithAuth('/reputation')
      .then(r=>r.json())
      .then(d=>setScore(d.score));
  },[]);

  return (
    <div className="card p-3">
      ⭐ Reputação: {score}
    </div>
  );
}
