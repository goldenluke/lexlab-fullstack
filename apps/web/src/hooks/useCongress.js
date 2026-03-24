import { useEffect, useRef, useState } from 'react';

export default function useCongress(){

  const wsRef = useRef(null);

  const [minutas,setMinutas]=useState([]);
  const [activeMinuta,setActiveMinuta]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:1234/minutas')
      .then(r=>r.json())
      .then(setMinutas);

    const ws = new WebSocket('ws://localhost:1235');
    wsRef.current = ws;

    ws.onmessage = e => {
      const d = JSON.parse(e.data);

      if(d.type==='heat'){
        setMinutas(d.minutas);
      }
    };

    return ()=> ws.close();
  },[]);

  function send(x){
    if(wsRef.current?.readyState===1){
      wsRef.current.send(JSON.stringify(x));
    }
  }

  return {
    minutas,
    activeMinuta,
    setMinuta:(id)=>{
      setActiveMinuta(id);
      send({type:'set_minuta', id});
    },
    vote:(v)=>{
      send({type:'vote', value:v, id:activeMinuta});
    }
  };
}
