import { useEffect, useState } from 'react';
import TreeLazy from '../TreeLazy.jsx';
import Search from '../SearchConstituicao.jsx';

export default function ConstituicaoPage(){

  const [data,setData] = useState(null);
  const [openPath,setOpenPath] = useState(null);
  const [highlight,setHighlight] = useState(null);
  const [modoLeitura,setModoLeitura] = useState(false);

  useEffect(()=>{
    fetch('/constituicao.json')
      .then(r=>r.json())
      .then(setData);
  },[]);

  function handleSelect(path){
    setOpenPath(path);
    setHighlight(path);

    setTimeout(()=>{
      const el = document.getElementById(path);
      if(el){
        el.scrollIntoView({behavior:'smooth',block:'center'});
      }
    },200);
  }

  return (
    <div className="flex flex-col h-screen">

      <div className="flex items-center justify-between p-2 border-b border-zinc-800">
        <Search data={data} onSelect={handleSelect}/>
        <button
          onClick={()=>setModoLeitura(!modoLeitura)}
          className="ml-2 px-3 py-1 bg-blue-600 rounded"
        >
          📖 Modo Leitura
        </button>
      </div>

      <div className={`flex-1 overflow-auto ${modoLeitura?'max-w-3xl mx-auto text-lg leading-8':''}`}>
        <TreeLazy data={data} openPath={openPath} highlight={highlight}/>
      </div>

    </div>
  );
}
