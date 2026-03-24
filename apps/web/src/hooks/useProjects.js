import { useEffect, useState } from 'react';

export default function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1234/minutas')
      .then(res => res.json())
      .then(data => {
        // 🔥 NORMALIZAÇÃO TOTAL (mata o bug)
        const normalized = data.map(m => ({
          id: m.id,
          title: m.title || m.titulo || "Sem título",
          content: m.content || m.conteudo || "",
          status: m.status || "Ativo",
          score: 80,
          budget: 0,
          theme: "Saúde"
        }));

        console.log("✅ Projetos normalizados:", normalized);

        setProjects(normalized);
      })
      .catch(err => {
        console.error("❌ Erro ao carregar projetos:", err);
      });
  }, []);

  return projects;
}
