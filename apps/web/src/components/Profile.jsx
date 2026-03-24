import { useEffect, useState } from 'react';
import { getToken } from '../lib/auth';

export default function Profile(){

  const [data,setData]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:1234/user/profile',{
      headers:{ Authorization: getToken() }
    })
    .then(r=>r.json())
    .then(setData);
  },[]);

  if(!data) return <div>Carregando...</div>;

  return (
    <div>
      <h3>Perfil</h3>
      <p>Total votos: {data.total}</p>
      <p>Sim: {data.sim}</p>
      <p>Não: {data.nao}</p>
    </div>
  );
}
