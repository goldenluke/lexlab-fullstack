import { useEffect, useState } from 'react';

export default function TimelinePanel({ project }) {

  const [versions, setVersions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1234/versions/${project.id}`)
      .then(r => r.json())
      .then(setVersions);
  }, [project]);

  return (
    <div className="border p-3 mt-4">
      <h3 className="font-bold">🕰️ Histórico</h3>

      {versions.map((v, i) => (
        <div key={i} className="text-xs border-t py-1">
          {v.date}
        </div>
      ))}
    </div>
  );
}
