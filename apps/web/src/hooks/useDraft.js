import { useEffect, useState } from 'react';

// Função auxiliar interna para evitar dependência de módulos externos que falham no import
async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:3001${url}`, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return res;
}

export default function useDraft(enabled, onReady) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    async function init() {
      setLoading(true);
      try {
        const res = await fetchWithAuth('/draft', { method: 'POST' });
        if (res.ok) {
          const data = await res.json();
          // Delay técnico para garantir sincronia do rastro digital
          setTimeout(() => onReady(data), 200);
        } else {
          console.error("Erro na resposta do servidor:", res.status);
          onReady(null);
        }
      } catch (e) {
        console.error("Falha crítica de sincronização:", e);
        onReady(null);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [enabled]);

  return { loading };
}
