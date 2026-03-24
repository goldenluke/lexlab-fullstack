export default function BrazilMap({ dados }){

  return (
    <div className="border p-3">

      <h3>🗺️ Brasil (simplificado)</h3>

      {Object.entries(dados || {}).map(([uf,v])=>(
        <div key={uf}>
          {uf}: 👍{v.sim} 👎{v.nao}
        </div>
      ))}

    </div>
  );
}
