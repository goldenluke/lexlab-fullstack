import { useEffect, useState } from "react";
import axios from "axios";

export default function MinutaLive() {
  const [minuta, setMinuta] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMinuta = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        "http://localhost:8001/api/minuta/live?municipio=1721000"
      );

      setMinuta(res.data.minuta);
    } catch (e) {
      setMinuta("Erro ao carregar minuta ao vivo");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMinuta();

    const interval = setInterval(fetchMinuta, 5000); // 🔥 atualização automática

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-zinc-900 rounded mt-4">
      <h2 className="text-lg font-bold mb-2">
        🔴 Minuta AO VIVO
      </h2>

      <button
        onClick={fetchMinuta}
        className="bg-red-600 px-3 py-1 rounded mb-3"
      >
        Atualizar
      </button>

      {loading && <div className="text-sm text-gray-400">Atualizando...</div>}

      <pre className="text-xs whitespace-pre-wrap bg-black p-3 rounded">
        {minuta}
      </pre>
    </div>
  );
}
