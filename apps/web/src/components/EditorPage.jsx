import { useState } from 'react';
import DiffViewer from './DiffViewer';
import AIReal from './AIReal';
import LexGeo from './LexGeo';

export default function EditorPage({ project, onBack }) {

  const [text,setText]=useState(project.content);
  const [old,setOld]=useState(project.content);

  async function save(){
    await fetch(`http://localhost:1234/minutas/${project.id}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({content:text})
    });

    setOld(text);
    alert("Salvo");
  }

  return (
    <div className="p-6 space-y-4">

      <button onClick={onBack}>← Voltar</button>

      <textarea
        className="w-full h-64 border p-2"
        value={text}
        onChange={e=>setText(e.target.value)}
      />

      <div className="flex gap-2">
        <button onClick={save} className="bg-green-600 text-white px-3 py-1 rounded">
          Salvar
        </button>

        <AIReal text={text}/>
      </div>

      <h3>🔥 Diff</h3>
      <DiffViewer oldText={old} newText={text} />

      <LexGeo/>

    </div>
  );
}
