import { useEffect, useState } from 'react';
import BrazilMapPlotly from './BrazilMapPlotly';

export default function CongressPage({ user }){

  const [mapa,setMapa]=useState({});
  const [minuta,setMinuta]=useState('1');

  // websocket
  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:1235');

    ws.onmessage = async e=>{
      const d = JSON.parse(e.data);

      if(d.type==='update'){
        const r = await fetch(`http://localhost:1234/mapa/${minuta}`);
        const data = await r.json();
        setMapa(data);
      }
    };

    return ()=>ws.close();
  },[minuta]);

  useEffect(()=>{
    fetch(`http://localhost:1234/mapa/${minuta}`)
      .then(r=>r.json())
      .then(setMapa);
  },[minuta]);

  async function votar(v){
    await fetch('http://localhost:1234/voto',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        userId:user.id,
        minutaId:minuta,
        voto:v
      })
    });
  }

  return (
    <div>

      <h2>📊 Mapa Analítico Nacional</h2>

      <BrazilMapPlotly votos={mapa} />

      <button onClick={()=>votar('sim')}>Sim</button>
      <button onClick={()=>votar('nao')}>Não</button>

    </div>
  );
}
