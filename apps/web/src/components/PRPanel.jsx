import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function PRPanel({ projectId, editor }) {

  const [prs, setPRs] = useState([]);

  useEffect(() => {

    if (!projectId) return;

    fetchWithAuth('/prs?project=' + projectId)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setPRs(data);
        else setPRs([]);
      })
      .catch(() => setPRs([]));

  }, [projectId]);

  async function createPR() {
    if (!editor || !projectId) return;

    const content = editor.getHTML();

    await fetchWithAuth('/prs', {
      method: 'POST',
      body: JSON.stringify({ project_id: projectId, content })
    });

    location.reload();
  }

  async function vote(pr_id, value) {
    await fetchWithAuth('/vote', {
      method: 'POST',
      body: JSON.stringify({ pr_id, value })
    });
  }

  async function merge(pr_id) {
    await fetchWithAuth('/merge', {
      method: 'POST',
      body: JSON.stringify({ pr_id })
    });

    alert("Merged!");
  }

  if (!projectId) {
    return (
      <div className="border p-4 rounded-xl text-sm opacity-60">
        Salve a minuta para habilitar PRs
      </div>
    );
  }

  return (
    <div className="border p-4 rounded-xl">

      <div className="flex justify-between mb-2">
        <span className="font-bold">PRs</span>
        <button onClick={createPR}>+</button>
      </div>

      {prs.length === 0 && (
        <div className="text-sm opacity-60">
          Nenhum PR ainda
        </div>
      )}

      {prs.map(pr => (
        <div key={pr.id} className="border-t py-2 text-sm">

          <div>PR #{pr.id} ({pr.status})</div>

          <div className="flex gap-2 mt-1">

            <button onClick={() => vote(pr.id, 1)}>👍</button>
            <button onClick={() => vote(pr.id, -1)}>👎</button>

            {pr.status === 'open' && (
              <button onClick={() => merge(pr.id)}>
                merge
              </button>
            )}

          </div>

        </div>
      ))}

    </div>
  );
}
