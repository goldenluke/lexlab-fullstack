import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Congress(){

  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);

  async function load(){

    try{

      // 🔥 endpoint correto
      const res = await fetchWithAuth('/politics/congress-real');

      const d = await res.json();

      console.log("CONGRESS:", d);

      setData(d);

    }catch(e){

      console.error("Erro congresso", e);

      // 🔥 fallback mock (IMPORTANTE)
      setData({
        camara:{ votos:300, total:513, aprovado:true },
        senado:{ votos:50, total:81, aprovado:true },
        aprovadoFinal:true
      });

    }finally{
      setLoading(false);
    }

  }

  useEffect(()=>{
    load();
  },[]);

  if(loading){
    return (
      <div className="p-6 text-center opacity-60">
        Carregando simulação...
      </div>
    );
  }

  if(!data){
    return (
      <div className="p-6 text-center opacity-60">
        Nenhum dado disponível
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="card p-4 text-center">

        <div className="text-xl font-bold">
          🏛️ Congresso Nacional
        </div>

        <div className="text-sm opacity-60">
          Simulação de aprovação
        </div>

      </div>

      {/* CAMARA */}
      <div className="card p-4">

        <div className="font-bold mb-2">
          Câmara dos Deputados
        </div>

        <div>
          {data.camara.votos} / {data.camara.total} votos
        </div>

        <div className="mt-2">
          {data.camara.aprovado
            ? "✅ Aprovado"
            : "❌ Rejeitado"}
        </div>

      </div>

      {/* SENADO */}
      <div className="card p-4">

        <div className="font-bold mb-2">
          Senado Federal
        </div>

        <div>
          {data.senado.votos} / {data.senado.total} votos
        </div>

        <div className="mt-2">
          {data.senado.aprovado
            ? "✅ Aprovado"
            : "❌ Rejeitado"}
        </div>

      </div>

      {/* RESULTADO FINAL */}
      <div className="card p-4 text-center">

        <div className="text-lg font-bold">
          Resultado Final
        </div>

        <div className="text-2xl mt-2">
          {data.aprovadoFinal
            ? "✅ APROVADO"
            : "❌ REJEITADO"}
        </div>

      </div>

    </div>
  );
}
