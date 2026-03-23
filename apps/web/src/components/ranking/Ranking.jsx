import { useEffect, useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function Ranking() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchWithAuth('/ranking')
      .then(r => r.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-4 border rounded-xl">

      <div className="font-bold mb-2">Ranking</div>

      {users.map((u, i) => (
        <div key={u.id} className="text-sm border-t py-1">
          #{i+1} — {u.email} ({u.score})
        </div>
      ))}

    </div>
  );
}
