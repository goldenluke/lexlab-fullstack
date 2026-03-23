import { fetchWithAuth } from '@lib/auth.js';

export default function PublishButton({ projectId }) {

  async function publish() {
    await fetchWithAuth('/publish', {
      method: 'POST',
      body: JSON.stringify({ project_id: projectId })
    });

    alert("Publicado!");
  }

  return (
    <button
      onClick={publish}
      className="bg-green-600 text-white px-3 py-1 rounded"
    >
      Publicar
    </button>
  );
}
