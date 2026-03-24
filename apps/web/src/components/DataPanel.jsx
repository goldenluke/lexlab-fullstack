import { useEffect, useState } from 'react';

export default function DataPanel(){

  const [data,setData]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:1234/dados/indicador?tipo=saude')
      .then(r=>r.json())
      .then(setData);
  },[]);

  if(!data) return null;

  return (
    <div className="border p-3">
      <h3>📊 Dados Reais</h3>
      <div>{data.indicador}: {data.valor}</div>
      <div className="text-xs">{data.fonte}</div>
    </div>
  );
}
