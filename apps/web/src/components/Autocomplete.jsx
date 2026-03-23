import { useState, useEffect } from 'react';

export default function Autocomplete({ editor }) {
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    if (!editor) return;

    const interval = setInterval(async () => {
      const text = editor.getText();

      if (text.length < 20) return;

      try {
        const res = await fetch('http://localhost:3001/suggest', {
          method: 'POST',
          body: JSON.stringify({ text })
        });

        const data = await res.json();

        setSuggestion(data.suggestion?.slice(0, 200));
      } catch (e) {
        console.error(e);
      }

    }, 2000);

    return () => clearInterval(interval);
  }, [editor]);

  if (!suggestion) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg p-3 max-w-md">
      <div className="text-sm text-gray-400">Sugestão IA</div>
      <div className="text-gray-700">{suggestion}</div>

      <button
        onClick={() => {
          editor.chain().focus().insertContent("\n" + suggestion).run();
          setSuggestion('');
        }}
        className="mt-2 text-blue-600"
      >
        Aceitar
      </button>
    </div>
  );
}
