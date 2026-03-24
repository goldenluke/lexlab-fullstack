import { useEffect, useState } from "react";

export default function MapaMunicipios(){

  const [data,setData] = useState([]);
  const [selected,setSelected] = useState(null);
  const [ia,setIa] = useState("");

  useEffect(()=>{
    fetch("http://localhost:1234/municipios")
      .then(r=>r.json())
      .then(setData);
  },[]);

  async function select(m){
    setSelected(m);

    const r = await fetch(
      "http://localhost:1234/ia-territorio?cod="+m.cod_ibge
    );

    const j = await r.json();
    setIa(j.resposta);
  }

  return (
    <div className="p-4">
      <h2>🗺️ Municípios</h2>

      <div className="grid grid-cols-4 gap-2 max-h-96 overflow-auto">
        {data.map(m=>(
          <div
            key={m.cod_ibge}
            onClick={()=>select(m)}
            className="p-2 bg-zinc-800 cursor-pointer rounded"
          >
            {m.nome} ({m.uf})
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-4">
          <h3>📊 {selected.nome}</h3>
          <pre className="text-xs bg-black p-2">{ia}</pre>
        </div>
      )}
    </div>
  );
}
