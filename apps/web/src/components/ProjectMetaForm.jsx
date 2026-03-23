import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function ProjectMetaForm({ editor }) {
  const [form, setForm] = useState({
    title:'',
    country:'Brasil',
    state:'',
    city:'',
    sphere:'municipal',
    category:'',
    norm_type:'minuta',
    tags:''
  });

  function update(k,v){
    setForm({...form,[k]:v});
  }

  async function save(){
    const content = editor.getHTML();

    await  fetchWithAuth('/projects',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        ...form,
        content,
        tags: form.tags.split(',').map(t=>t.trim())
      })
    });

    alert('Minuta salvo!');
  }

  async function autoClassify(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/ai/classify',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({text})
    });

    const data = await res.json();

    setForm({...form,...data});
  }

  return (
    <div className="space-y-2 p-3 border rounded bg-gray-50 dark:bg-gray-800">

      <input placeholder="Título" onChange={e=>update('title',e.target.value)} />
      <input placeholder="Estado" onChange={e=>update('state',e.target.value)} />
      <input placeholder="Município" onChange={e=>update('city',e.target.value)} />

      <input placeholder="Categoria (ex: saúde)" onChange={e=>update('category',e.target.value)} />

      <input placeholder="Tags (vírgula)" onChange={e=>update('tags',e.target.value)} />

      <div className="flex gap-2">
        <button onClick={save} className="bg-indigo-600 text-white px-3 py-1 rounded">
          💾 Salvar
        </button>

        <button onClick={autoClassify} className="bg-purple-600 text-white px-3 py-1 rounded">
          🧠 IA Classificar
        </button>
      </div>

    </div>
  );
}
