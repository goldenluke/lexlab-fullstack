export default function CCJPanel({ text }) {

  async function analyze() {
    const res = await fetch('http://localhost:1234/ai/ccj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <button onClick={analyze} className="bg-blue-600 text-white px-3 py-1 rounded">
      ⚖️ Analisar Constitucionalidade
    </button>
  );
}
