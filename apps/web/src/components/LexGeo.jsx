import { useEffect, useState } from 'react';

export default function LexGeo(){

  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:1234/geo')
      .then(r=>r.json())
      .then(setData);
  },[]);

  return (
    <div className="border p-3">
      <h3>🗺️ Impacto Territorial</h3>
      {data.map(d=>(
        <div key={d.name}>{d.name}: {d.value}</div>
      ))}
    </div>
  );
}
