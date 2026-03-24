import { useState } from 'react';
import Sidebar from './ui/Sidebar.jsx';
import ConstituicaoPage from './pages/ConstituicaoPage.jsx';

export default function Layout(){

  const [page,setPage] = useState('constituicao');

  return (
    <div className="flex">

      <Sidebar page={page} setPage={setPage}/>

      <div className="flex-1 bg-zinc-950 text-white">
        {page === 'constituicao' && <ConstituicaoPage/>}
        {page === 'acervo' && <div className="p-4">Acervo</div>}
        {page === 'editor' && <div className="p-4">Editor</div>}
      </div>

    </div>
  );
}
