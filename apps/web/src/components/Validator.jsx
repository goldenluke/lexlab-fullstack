import { useEffect, useState } from 'react';

export default function Validator({ editor }) {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    if (!editor) return;

    const interval = setInterval(async () => {
      const text = editor.getText();

      if (text.length < 30) return;

      try {
        const res = await fetch('http://localhost:1234/validate', {
          method: 'POST',
          body: JSON.stringify({ text })
        });

        const data = await res.json();

        try {
          const parsed = JSON.parse(data.result);
          setIssues(parsed);
        } catch {
          setIssues([]);
        }

      } catch (e) {
        console.error(e);
      }

    }, 3000);

    return () => clearInterval(interval);
  }, [editor]);

  if (!issues.length) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white border shadow-lg p-3 max-w-md">
      <h3 className="font-bold text-red-600">⚖️ Problemas Jurídicos</h3>

      {issues.map((i, idx) => (
        <div key={idx} className="mt-2 text-sm">
          <div className="font-semibold">{i.trecho}</div>
          <div>{i.problema}</div>
          <div className="text-xs text-gray-500">
            Gravidade: {i.gravidade}
          </div>
        </div>
      ))}
    </div>
  );
}
