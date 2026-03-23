import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function JustificationPanel({ editor }) {

  const [text,setText]=useState('');

  async function run(){
    const content = editor.getText();

    const res = await  fetchWithAuth('/ai/justification',{
      method:'POST',
      body: JSON.stringify({text:content})
    });

    const d = await res.json();
    setText(d.text);
  }

  return (
    <div className="card p-3 space-y-2">

      <button onClick={run} className="btn btn-primary">
        🧠 Gerar Justificativa
      </button>

      {text && (
        <pre className="text-sm whitespace-pre-wrap">
          {text}
        </pre>
      )}

    </div>
  );
}
