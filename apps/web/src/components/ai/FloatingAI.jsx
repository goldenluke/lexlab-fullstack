import { useState } from 'react';
import { suggest } from '../../ai/useAI';

export default function FloatingAI({ editor }) {

  const [loading, setLoading] = useState(false);

  async function run() {
    if (!editor) return;

    setLoading(true);

    const text = editor.getText();
    const res = await suggest(text);

    alert(res);

    setLoading(false);
  }

  return (
    <button
      onClick={run}
      className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow"
    >
      {loading ? "..." : "IA"}
    </button>
  );
}
