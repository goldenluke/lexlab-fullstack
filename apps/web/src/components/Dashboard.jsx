import { useEffect, useState } from 'react';

export default function Dashboard(){

  const [data,setData]=useState({});

  useEffect(()=>{
    fetch('http://localhost:1234/dashboard/1')
      .then(r=>r.json())
      .then(setData);
  },[]);

  return (
    <div>

      <h2>📊 Indicador por 10k habitantes</h2>

      {Object.entries(data).map(([cod,v])=>(
        <div key={cod}>
          {cod} → taxa: {v.taxa.toFixed(2)}
        </div>
      ))}

    </div>
  );
}
