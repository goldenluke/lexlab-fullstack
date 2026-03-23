import { useState } from 'react';

export default function SuggestBox({ text }) {
  const [suggestion, setSuggestion] = useState('');

  async function generate() {
    const res = await fetch('http://localhost:3001/suggest', {
      method: 'POST',
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    setSuggestion(data.suggestion);
  }

  return (
    <div>
      <button onClick={generate}>💡 Sugerir redação</button>

      {suggestion && (
        <div style={{ marginTop: 10 }}>
          <h4>Sugestão:</h4>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}
