import { useState } from "react";
import { lexlab } from "../services/api";

export default function GeradorMinuta() {
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);

  const gerar = async () => {
    setLoading(true);

    try {
      const res = await lexlab.post("/minuta", {
        municipio: "1721000",
        ano: 2023
      });

      setTexto(res.data.minuta || JSON.stringify(res.data, null, 2));
    } catch (e) {
      setTexto("Erro ao gerar minuta");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 bg-zinc-900 rounded mt-4">
      <h2 className="text-lg font-bold mb-2">⚖️ Minuta Automática</h2>

      <button
        onClick={gerar}
        className="bg-green-600 px-3 py-1 rounded"
      >
        {loading ? "Gerando..." : "Gerar Minuta"}
      </button>

      <pre className="mt-3 text-xs whitespace-pre-wrap bg-black p-3 rounded">
        {texto}
      </pre>
    </div>
  );
}
