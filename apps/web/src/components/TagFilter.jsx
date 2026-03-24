export default function TagFilter({ tags, active, setActive }) {

  return (
    <div className="flex gap-2 flex-wrap">

      <button
        onClick={()=>setActive(null)}
        className={`px-2 py-1 border ${!active ? 'bg-black text-white' : ''}`}
      >
        Todos
      </button>

      {tags.map(tag=>(
        <button
          key={tag}
          onClick={()=>setActive(tag)}
          className={`px-2 py-1 border ${
            active === tag ? 'bg-blue-600 text-white' : ''
          }`}
        >
          {tag}
        </button>
      ))}

    </div>
  );
}
