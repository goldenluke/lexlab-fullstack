import { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';

export default function MinutaSearch({ minutas, onSelect }) {

  const [query,setQuery] = useState('');
  const [index,setIndex] = useState(0);

  // 🔥 fuse config
  const fuse = useMemo(() => new Fuse(minutas, {
    keys: ['title'],
    threshold: 0.4
  }), [minutas]);

  const results = query
    ? fuse.search(query).map(r => r.item)
    : minutas.slice(0,5); // sugestão inicial

  function handleKey(e){
    if(e.key === 'ArrowDown'){
      setIndex(i => Math.min(i+1, results.length-1));
    }
    if(e.key === 'ArrowUp'){
      setIndex(i => Math.max(i-1, 0));
    }
    if(e.key === 'Enter'){
      if(results[index]){
        onSelect(results[index].id);
        setQuery(results[index].title);
      }
    }
  }

  return (
    <div className="relative">

      <input
        placeholder="Buscar minuta..."
        value={query}
        onChange={e=>setQuery(e.target.value)}
        onKeyDown={handleKey}
        className="border p-2 w-full"
      />

      {results.length > 0 && (
        <div className="absolute bg-white border w-full shadow z-10">

          {results.map((m,i)=>(
            <div
              key={m.id}
              onClick={()=>{
                onSelect(m.id);
                setQuery(m.title);
              }}
              className={`p-2 cursor-pointer ${
                i===index ? 'bg-blue-100' : ''
              }`}
            >
              {m.title}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}
