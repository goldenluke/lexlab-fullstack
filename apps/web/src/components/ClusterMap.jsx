import { useEffect, useState } from 'react';

export default function ClusterMap(){

  const [data,setData]=useState({});

  useEffect(()=>{
    fetch('http://localhost:1234/cluster/1')
      .then(r=>r.json())
      .then(setData);
  },[]);

  return (
    <div>

      <h2>🗺️ Clusterização Avançada</h2>

      <p>K ótimo: {data.k}</p>

      {data.clusters && Object.entries(data.clusters).map(([cod,c])=>(
        <div key={cod}>
          {cod} → Cluster {c}
        </div>
      ))}

      <h3>📈 Perfil dos Clusters</h3>

      {data.perfil && Object.entries(data.perfil.taxa || {}).map(([cluster,val])=>(
        <div key={cluster}>
          Cluster {cluster} → taxa média: {val.toFixed(2)}
        </div>
      ))}

    </div>
  );
}
