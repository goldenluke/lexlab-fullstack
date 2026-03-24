import { useEffect, useState } from 'react';

export default function useMinutas(){

  const [minutas,setMinutas]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    fetch('http://localhost:1234/minutas')
      .then(r=>r.json())
      .then(data=>{
        setMinutas(data);
        setLoading(false);
      })
      .catch(()=>{
        setLoading(false);
      });
  },[]);

  return {minutas,loading};
}
