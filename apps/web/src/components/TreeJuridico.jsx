export default function TreeJuridico({data}){

  if(!data) return <div>Carregando...</div>;

  return (
    <div className="p-4 space-y-6">

      {data.map((titulo,i)=>(
        <div key={i}>

          <h1 className="text-xl font-bold text-blue-400">
            {titulo.titulo}
          </h1>

          {titulo.capitulos.map((cap,j)=>(
            <div key={j} className="ml-4 mt-2">

              <h2 className="text-lg text-yellow-400">
                {cap.titulo}
              </h2>

              {cap.artigos.map((art,k)=>(
                <div key={k} className="ml-4 mt-2">

                  <h3 className="font-semibold">
                    {art.numero}
                  </h3>

                  <p className="text-zinc-300">
                    {art.texto}
                  </p>

                  {art.incisos.map((inc,x)=>(
                    <div key={x} className="ml-4 text-zinc-400">
                      {inc}
                    </div>
                  ))}

                  {art.paragrafos.map((p,x)=>(
                    <div key={x} className="ml-4 text-zinc-500">
                      {p.texto}
                    </div>
                  ))}

                </div>
              ))}

            </div>
          ))}

        </div>
      ))}

    </div>
  );
}
