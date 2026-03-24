import { useState } from 'react';

export default function TerritorioIA({ estado, municipio }) {

  const [text,setText] = useState('');
  const [loading,setLoading] = useState(false);

  async function gerar(){

    setLoading(true);
    setText("⏳ IA analisando território...");

    const controller = new AbortController();

    const timeout = setTimeout(()=>{
      controller.abort();
    },15000);

    try{

      const r = await fetch('http://localhost:1234/territorio/sugestoes',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ estado, municipio }),
        signal: controller.signal
      });

      const d = await r.json();

      setText(d.text);

    }catch(e){

      if(e.name === "AbortError"){
        setText("⚠️ IA demorou demais (timeout)");
      }else{
        setText("❌ erro ao conectar com IA");
      }

    }finally{
      clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-6">

      <button
        onClick={gerar}
        className="bg-blue-600 px-4 py-2 rounded text-white font-bold hover:bg-blue-700"
      >
        🤖 Gerar leis por território
      </button>

      <pre className="mt-4 text-sm whitespace-pre-wrap text-slate-300">
        {text}
      </pre>

    </div>
  );
}
