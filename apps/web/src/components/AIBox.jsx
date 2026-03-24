export default function AIBox({ text }) {

  async function analyze() {
    const res = await fetch('http://localhost:1234/ai/analyze', {
      method: 'POST',
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <button
      onClick={analyze}
      className="bg-purple-600 text-white px-3 py-1 rounded"
    >
      Analisar IA
    </button>
  );
}
