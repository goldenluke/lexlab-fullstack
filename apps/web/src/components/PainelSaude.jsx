import { useEffect, useState } from "react";
import { labsus } from "../services/api";
import PlotSafe from "./PlotSafe";

export default function PainelSaude() {
  const [data, setData] = useState([]);

  useEffect(() => {
    labsus.get("/indicators")
      .then(res => setData(res.data))
      .catch(() => {
        setData([
          { uf: "TO", valor: 120 },
          { uf: "SP", valor: 300 }
        ]);
      });
  }, []);

  return (
    <div className="p-4 bg-zinc-900 rounded">
      <h2 className="text-lg font-bold mb-2">📊 Inteligência Epidemiológica</h2>

      <PlotSafe
        data={[
          {
            x: data.map(d => d.uf),
            y: data.map(d => d.valor),
            type: "bar"
          }
        ]}
        layout={{
          paper_bgcolor: "#18181b",
          plot_bgcolor: "#18181b",
          font: { color: "#fff" }
        }}
      />
    </div>
  );
}
