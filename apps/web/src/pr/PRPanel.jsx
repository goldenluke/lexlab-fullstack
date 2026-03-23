import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function PRPanel({ projectId, editor }) {

  const [loading, setLoading] = useState(false);

  async function createPR() {

    if (!editor) return;

    setLoading(true);

    const content = editor.getHTML();

    await fetchWithAuth('/prs', {
      method: 'POST',
      body: JSON.stringify({
        project_id: projectId,
        content
      })
    });

    alert("PR criado");

    setLoading(false);
  }

  return (
    <div className="border p-4 rounded-xl">

      <div className="font-bold mb-2">Pull Request</div>

      <button
        onClick={createPR}
        className="bg-black text-white px-3 py-1 rounded"
      >
        {loading ? "..." : "Criar PR"}
      </button>

    </div>
  );
}
