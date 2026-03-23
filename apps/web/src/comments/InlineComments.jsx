import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function InlineComments({ editor, projectId }) {

  const [comments, setComments] = useState([]);

  async function addComment() {

    if (!editor) return;

    const { from } = editor.state.selection;
    const text = prompt("Comentário:");

    if (!text) return;

    const c = {
      position: from,
      content: text
    };

    await fetchWithAuth('/comments', {
      method: 'POST',
      body: JSON.stringify({
        project_id: projectId,
        ...c
      })
    });

    setComments(prev => [...prev, c]);
  }

  return (
    <div className="border p-3 rounded">

      <div className="flex justify-between mb-2">
        <span className="font-bold">Comentários</span>
        <button onClick={addComment}>+</button>
      </div>

      {comments.map((c, i) => (
        <div key={i} className="text-sm border-t py-1">
          [{c.position}] {c.content}
        </div>
      ))}

    </div>
  );
}
