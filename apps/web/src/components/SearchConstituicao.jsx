import { useState, useMemo } from 'react';

export default function Search({data,onSelect}){

  const [q,setQ] = useState('');

  const flatten = (obj,path=[])=>{
    let out = [];

    for(const k in obj){
      const v = obj[k];
      const newPath = [...path,k];

      if(typeof v === 'object'){
        out = out.concat(flatten(v,newPath));
      }else{
        out.push({path:newPath.join('/'),text:v});
      }
    }

    return out;
  };

  const flat = useMemo(()=>flatten(data||{}),[data]);

  const results = useMemo(()=>{
    if(!q) return [];
    return flat.filter(x=>x.text.toLowerCase().includes(q.toLowerCase())).slice(0,20);
  },[q,flat]);

  return (
    <div className="p-3 border-b border-zinc-800">

      <input
        value={q}
        onChange={e=>setQ(e.target.value)}
        placeholder="Buscar..."
        className="w-full p-2 rounded bg-zinc-800 text-white"
      />

      {q && (
        <div className="mt-2 max-h-60 overflow-auto">
          {results.map((r,i)=>(
            <div
              key={i}
              onClick={()=>onSelect(r.path)}
              className="p-2 hover:bg-zinc-800 cursor-pointer"
            >
              {r.text.slice(0,120)}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
