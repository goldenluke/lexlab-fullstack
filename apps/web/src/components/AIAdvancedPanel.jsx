import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function AIAdvancedPanel({ editor }) {

  const [data,setData]=useState(null);

  async function runAI(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/ai/advanced',{
      method:'POST',
      body: JSON.stringify({ text })
    });

    const d = await res.json();
    setData(d);
  }

  return (
    <div className="card p-4 space-y-3">

      <button onClick={runAI} className="btn btn-primary">
        🧠 Análise Completa
      </button>

      {data && (
        <>
          <div>
            <b>📜 Novo artigo:</b>
            <pre>{data.newArticle}</pre>
          </div>

          <div>
            <b>⚠️ Conflitos:</b>
            {data.conflicts.map((c,i)=>(
              <div key={i}>{c}</div>
            ))}
          </div>

          <div>
            <b>📊 Impacto:</b>
            <div>Custo: {data.impact.custo}</div>
            <div>Judicialização: {data.impact.judicializacao}</div>
            <div>Social: {data.impact.impacto_social}</div>
          </div>

          <div>
            <b>⚖️ Comparação:</b>
            {data.comparison.map((c,i)=>(
              <div key={i}>
                {c.lei} - {c.similaridade}
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
