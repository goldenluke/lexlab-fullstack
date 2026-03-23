import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function ScorePanel({ editor }) {
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!editor) return;

    const interval = setInterval(async () => {
      const text = editor.getText();

      try {
        const res = await  fetchWithAuth('http://localhost:3001/score', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text })
        });

        const data = await res.json();

        setScore(data.score);
        setSuggestions(data.suggestions || []);

      } catch (err) {
        console.error('score error', err);
      }

    }, 4000);

    return () => clearInterval(interval);
  }, [editor]);

  return (
    <div className="space-y-3">

      <div className="text-sm font-semibold">
        Score Jurídico
      </div>

      {score !== null ? (
        <div className="text-2xl font-bold text-indigo-600">
          {score}
        </div>
      ) : (
        <div className="text-sm opacity-50">
          Analisando...
        </div>
      )}

      <div className="space-y-1 text-xs opacity-70">
        {suggestions.map((s, i) => (
          <div key={i}>• {s}</div>
        ))}
      </div>

    </div>
  );
}
