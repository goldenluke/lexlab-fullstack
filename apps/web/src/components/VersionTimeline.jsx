import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function VersionTimeline({ projectId, onSelect }) {

  const [versions, setVersions] = useState([]);

  useEffect(() => {
    if (!projectId) return;

    fetchWithAuth('/versions?project=' + projectId)
      .then(r => r.json())
      .then(setVersions);
  }, [projectId]);

  return (
    <div className="p-4 border rounded-xl">

      <div className="font-bold mb-2">Histórico</div>

      {versions.map(v => (
        <div
          key={v.id}
          className="text-sm cursor-pointer hover:underline"
          onClick={() => onSelect(v)}
        >
          Versão #{v.id}
        </div>
      ))}

    </div>
  );
}
