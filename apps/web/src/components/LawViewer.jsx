import { useState } from 'react';
import { parseLaw } from './useLawParser';
import { fetchWithAuth } from '@lib/auth.js';

export default function LawViewer({ project }) {

  const articles = parseLaw(project.content);
  const [selected,setSelected]=useState(null);
  const [ai,setAi]=useState('');

  async function explain(text){
    const res = await  fetchWithAuth('/ai/generate',{
      method:'POST',
      body: JSON.stringify({
        prompt: "Explique juridicamente: " + text
      })
    });

    const d = await res.json();
    setAi(d.text);
  }

  return (
    <div className="flex gap-4">

      {/* SIDEBAR */}
      <aside className="w-64 card p-3 space-y-1 overflow-y-auto">

        {articles.map(a=>(
          <div
            key={a.id}
            onClick={()=>setSelected(a)}
            className="cursor-pointer text-sm hover:text-indigo-600"
          >
            {a.title}
          </div>
        ))}

      </aside>

      {/* MAIN */}
      <div className="flex-1 space-y-4">

        {!selected && (
          <div className="card p-6">
            Selecione um artigo
          </div>
        )}

        {selected && (
          <>
            <div className="card p-6 prose max-w-none">
              <div dangerouslySetInnerHTML={{__html:selected.content}} />
            </div>

            <div className="flex gap-2">

              <button
                onClick={()=>explain(selected.content)}
                className="btn btn-primary"
              >
                🧠 Explicar
              </button>

            </div>

            {ai && (
              <div className="card p-4 text-sm">
                {ai}
              </div>
            )}
          </>
        )}

      </div>

    </div>
  );
}
