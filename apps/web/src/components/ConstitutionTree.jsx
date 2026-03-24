import { useState } from 'react'

function Node({label, children, onClick}){

  const [open,setOpen] = useState(false)

  return (
    <div className="ml-2">

      <div
        className="cursor-pointer hover:text-blue-400 flex items-center gap-1"
        onClick={()=>{
          setOpen(!open)
          onClick && onClick()
        }}
      >
        <span className="text-xs">
          {children ? (open ? "▼" : "▶") : "•"}
        </span>

        {label}
      </div>

      {open && (
        <div className="ml-4 border-l border-zinc-800 pl-2">
          {children}
        </div>
      )}

    </div>
  )
}

export default function ConstitutionTree({data,onSelect}){

  if(!data) return null

  return (
    <div className="text-sm">

      {Object.entries(data).map(([titulo,capitulos])=>(
        <Node key={titulo} label={`Título ${titulo}`}>

          {Object.entries(capitulos).map(([cap,secs])=>(
            <Node key={cap} label={`Capítulo ${cap}`}>

              {Object.entries(secs).map(([sec,subsecs])=>(
                <Node key={sec} label={`Seção ${sec}`}>

                  {Object.entries(subsecs).map(([sub,arts])=>(
                    <Node key={sub} label={`Subseção ${sub}`}>

                      {Object.entries(arts).map(([art,conteudo])=>(
                        <Node
                          key={art}
                          label={`Art. ${art}`}
                          onClick={()=>onSelect(conteudo)}
                        >

                          {/* INCISOS */}
                          {conteudo.incisos && Object.entries(conteudo.incisos).map(([i,texto])=>(
                            <Node
                              key={i}
                              label={`Inciso ${i}`}
                              onClick={()=>onSelect({texto})}
                            />
                          ))}

                          {/* PARÁGRAFOS */}
                          {conteudo.paragrafos && Object.entries(conteudo.paragrafos).map(([p,obj])=>(
                            <Node
                              key={p}
                              label={`§ ${p}`}
                              onClick={()=>onSelect(obj)}
                            >

                              {obj.incisos && Object.entries(obj.incisos).map(([i,texto])=>(
                                <Node
                                  key={i}
                                  label={`Inciso ${i}`}
                                  onClick={()=>onSelect({texto})}
                                />
                              ))}

                            </Node>
                          ))}

                        </Node>
                      ))}

                    </Node>
                  ))}

                </Node>
              ))}

            </Node>
          ))}

        </Node>
      ))}

    </div>
  )
}
