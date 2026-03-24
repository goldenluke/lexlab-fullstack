import { useState } from 'react';
import AcervoPage from './AcervoPage';
import Editor from './Editor';

export default function App() {
  const [page, setPage] = useState('acervo');
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
        <button onClick={() => setPage('acervo')} className={page === 'acervo' ? 'font-bold text-white' : 'text-gray-400'}>
          📂 Acervo
        </button>
        <button onClick={() => setPage('editor')} className={page === 'editor' ? 'font-bold text-white' : 'text-gray-400'}>
          ✍️ Editor
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        {page === 'acervo' ? (
          <AcervoPage
            onOpen={(m) => {
              setSelected(m);
              setPage('editor');
            }}
          />
        ) : (
          <Editor selected={selected} />
        )}
      </div>
    </div>
  );
}
