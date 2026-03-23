import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Comments({ projectId }) {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchWithAuth('/comments?project=' + projectId)
      .then(r => r.json())
      .then(setComments);
  }, [projectId]);

  async function add() {
    const text = prompt("Comentário:");
    if (!text) return;

    await fetchWithAuth('/comments', {
      method: 'POST',
      body: JSON.stringify({
        project_id: projectId,
        content: text,
        position: 0
      })
    });

    location.reload();
  }

  return (
    <div className="p-4 border rounded-xl">

      <div className="font-bold mb-2">Comentários</div>

      <button onClick={add} className="mb-2 text-sm underline">
        Novo comentário
      </button>

      {comments.map(c => (
        <div key={c.id} className="text-sm border-t py-2">
          {c.content}
        </div>
      ))}

    </div>
  );
}
