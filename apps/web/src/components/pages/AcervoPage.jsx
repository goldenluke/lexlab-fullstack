import { useEffect, useState } from 'react'

export default function AcervoPage(){

  const [data,setData] = useState([])
  const [selected,setSelected] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:1234/minutas')
      .then(r=>r.json())
      .then(setData)
  },[])

  // 🔥 agrupar em árvore
  const tree = {}

  data.forEach(d=>{
    const m = d.metadata || {}

    const art = m.artigo || 'Sem artigo'
    const inciso = m.inciso || null

    if(!tree[art]) tree[art] = []
    tree[art].push(d)
  })

  return (
    <div className="flex h-screen bg-zinc-950 text-white">

      {/* SIDEBAR */}
      <div className="w-80 border-r border-zinc-800 overflow-auto p-4">
        <h1 className="text-lg font-bold mb-4">📚 Constituição</h1>

        {Object.keys(tree).map(art=>(
          <div key={art} className="mb-2">

            <div className="text-blue-400 font-bold">
              Art. {art}
            </div>

            <div className="ml-3">
              {tree[art].map(item=>(
                <div
                  key={item.id}
                  onClick={()=>setSelected(item)}
                  className="cursor-pointer text-sm hover:text-blue-300"
                >
                  {item.tipo} {item.metadata?.inciso || ''}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* CENTRO */}
      <div className="flex-1 p-6 overflow-auto">

        {!selected && (
          <div className="text-zinc-400">
            Selecione um dispositivo
          </div>
        )}

        {selected && (
          <>
            <h2 className="text-xl font-bold mb-4">
              {selected.titulo}
            </h2>

            <div className="whitespace-pre-wrap leading-relaxed text-lg">
              {selected.conteudo}
            </div>
          </>
        )}

      </div>

      {/* PAINEL DIREITO */}
      <div className="w-80 border-l border-zinc-800 p-4">
        <h2 className="font-bold mb-2">🧠 IA</h2>

        {selected && (
          <button
            className="bg-blue-600 px-3 py-2 rounded"
            onClick={async ()=>{
              const r = await fetch('http://localhost:1234/ai/explain',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({text:selected.conteudo})
              })
              const j = await r.json()
              alert(j.text)
            }}
          >
            Explicar dispositivo
          </button>
        )}
      </div>

    </div>
  )
}
