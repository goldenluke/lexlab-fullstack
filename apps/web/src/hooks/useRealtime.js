import { useEffect } from 'react';

export default function useRealtime(onMessage){

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:1234');

    ws.onmessage = e => onMessage(e.data);

    return ()=> ws.close();
  },[]);
}
