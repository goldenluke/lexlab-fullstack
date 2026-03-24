export default function AIReal({ text }) {

  async function run(){
    const r = await fetch('http://localhost:1234/ai/llama',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({text})
    });

    const d = await r.json();
    alert(d.response || d.error);
  }

  return (
    <button onClick={run} className="bg-purple-600 text-white px-3 py-1 rounded">
      🧠 IA Real
    </button>
  );
}
