import { useState } from 'react';
import { getToken } from '../lib/auth';

export default function MunicipioSelect(){

  const [cod,setCod]=useState('');

  async function salvar(){
    await fetch('http://localhost:1234/user/municipio',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Authorization:getToken()
      },
      body: JSON.stringify({ municipio: cod })
    });

    alert("Município salvo");
  }

  return (
    <div>
      <input
        placeholder="Código IBGE"
        value={cod}
        onChange={e=>setCod(e.target.value)}
      />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
