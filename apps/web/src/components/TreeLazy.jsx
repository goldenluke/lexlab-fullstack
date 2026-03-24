import { useState, useEffect } from 'react';

const roman = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

function formatLabel(key,parent){
  if(parent === 'artigos') return `Art. ${parseInt(key)+1}º`;
  if(parent === 'paragrafos') return `§${parseInt(key)+1}º`;
  if(parent === 'incisos') return `Inciso ${roman[key] || key}`;
  return isNaN(key) ? key : `Item ${parseInt(key)+1}`;
}

export default function TreeLazy({data,openPath,highlight}){

  const Node = ({node,name,parent,path=[],level=0})=>{
    const currentPath = [...path,name].join('/');
    const shouldOpen = openPath?.startsWith(currentPath);

    const [open,setOpen] = useState(shouldOpen);

    useEffect(()=>{
      if(shouldOpen) setOpen(true);
    },[openPath]);

    const isLeaf = typeof node !== 'object';
    const label = formatLabel(name,parent);

    return (
      <div id={currentPath} style={{marginLeft: level*12}}>

        <div
          onClick={()=>setOpen(!open)}
          className={`cursor-pointer flex gap-2 py-1
          ${highlight===currentPath ? 'bg-yellow-500 text-black rounded px-1' : 'hover:text-blue-400'}`}
        >
          {!isLeaf && (open ? '▼' : '▶')}
          <span>{label}</span>
        </div>

        {open && !isLeaf && (
          <div className="border-l border-zinc-700 pl-2">
            {Object.entries(node).map(([k,v])=>(
              <Node
                key={k}
                node={v}
                name={k}
                parent={name}
                path={[...path,name]}
                level={level+1}
              />
            ))}
          </div>
        )}

        {open && isLeaf && (
          <div className="text-zinc-300 text-sm whitespace-pre-wrap">
            {node}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-3">
      {Object.entries(data||{}).map(([k,v])=>(
        <Node key={k} node={v} name={k}/>
      ))}
    </div>
  );
}
