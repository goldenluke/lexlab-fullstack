export default function Sidebar({page,setPage}){

  const Item = ({label,value})=>(
    <div
      onClick={()=>setPage(value)}
      className={`px-4 py-2 cursor-pointer rounded-lg mb-1
      ${page===value?'bg-blue-600 text-white':'text-zinc-300 hover:bg-zinc-800'}`}
    >
      {label}
    </div>
  );

  return (
    <div className="w-64 bg-zinc-900 h-screen p-3 border-r border-zinc-800">

      <h1 className="text-xl font-bold mb-4">
        LexLab
      </h1>

      <Item label="Acervo" value="acervo"/>
      <Item label="Constituição" value="constituicao"/>
      <Item label="Editor" value="editor"/>

    </div>
  );
}
