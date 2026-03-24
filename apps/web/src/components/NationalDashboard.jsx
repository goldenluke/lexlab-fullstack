import { useEffect, useState } from 'react';

export default function NationalDashboard(){

  const [leis,setLeis]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:1234/leis')
      .then(r=>r.json())
      .then(d=>setLeis(Object.entries(d)));
  },[]);

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold">📊 Brasil em Tempo Real</h2>

      {leis.map(([id,l])=>(
        <div key={id} className="border p-2">
          Lei {id} → {l.impacto}
        </div>
      ))}

    </div>
  );
}
