export default function AIPage({ text }) {

  async function run(){
    const r = await fetch('http://localhost:1234/ai/advanced',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({text})
    });

    const d = await r.json();
    alert(JSON.stringify(d,null,2));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🧠 IA Avançada</h2>
      <button onClick={run} className="bg-purple-600 text-white px-3 py-1 rounded">
        Rodar IA
      </button>
    </div>
  );
}
