import { useState } from 'react';

export default function CommitBox({ onCommit }) {
  const [msg, setMsg] = useState('');

  return (
    <div>
      <input
        placeholder="Mensagem do commit"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <button onClick={() => {
        onCommit(msg);
        setMsg('');
      }}>
        Commit
      </button>
    </div>
  );
}
