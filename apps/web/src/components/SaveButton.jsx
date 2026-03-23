import { fetchWithAuth } from '@lib/auth.js';

export default function SaveButton({ editor }) {

  async function save() {

    if (!editor) {
      alert('Editor não carregado');
      return;
    }

    const content = editor.getHTML();

    const title = prompt('Título da minuta:');

    if (!title) return;

    try {

      await fetchWithAuth('/projects', {
        method: 'POST',
        body: JSON.stringify({ title, content })
      });

      alert('✅ Minuta salva com sucesso');

    } catch (e) {
      console.error(e);
      alert('Erro ao salvar');
    }
  }

  return (
    <button
      onClick={save}
      className="btn btn-primary"
    >
      💾 Salvar Minuta
    </button>
  );
}
