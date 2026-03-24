import { useEffect, useState } from 'react';

export default function History(){

  const [list,setList]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:1234/minuta/minuta-1/history')
      .then(r=>r.json())
      .then(setList);
  },[]);

  return (
    <div>
      <h3>🕰️ Histórico</h3>

      {list.map(v=>(
        <div key={v.id}>
          {new Date(v.created_at).toLocaleString()}
        </div>
      ))}
    </div>
  );
}
