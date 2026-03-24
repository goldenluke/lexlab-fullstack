import useMinutas from '../hooks/useMinutas';

export default function MinutasList({onSelect}){

  const {minutas,loading}=useMinutas();

  if(loading){
    return <div className="p-4">Carregando...</div>;
  }

  if(!minutas.length){
    return <div className="p-4">Nenhuma minuta encontrada</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

      {minutas.map(m=>(
        <div
          key={m.id}
          onClick={()=>onSelect(m)}
          className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition"
        >

          <h2 className="font-bold text-lg mb-2">
            {m.titulo || "Sem título"}
          </h2>

          <p className="text-sm text-gray-400 mb-2">
            {m.estado} • {m.municipio}
          </p>

          <p className="text-xs text-gray-500">
            {new Date(m.criado_em).toLocaleString()}
          </p>

        </div>
      ))}

    </div>
  );
}
