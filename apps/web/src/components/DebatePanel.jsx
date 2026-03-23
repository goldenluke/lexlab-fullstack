import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function DebatePanel({ editor }) {

  const [data,setData]=useState(null);

  async function run(){
    const text = editor.getText();

    const res = await  fetchWithAuth('/ai/debate',{
      method:'POST',
      body: JSON.stringify({text})
    });

    setData(await res.json());
  }

  return (
    <div className="card p-3 space-y-2">

      <button onClick={run} className="btn btn-primary">
        🧠 Debater
      </button>

      {data && (
        <>
          <div><b>Pró:</b> {data.pro}</div>
          <div><b>Contra:</b> {data.contra}</div>
        </>
      )}

    </div>
  );
}
