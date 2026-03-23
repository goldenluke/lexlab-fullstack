import { useState } from 'react';
import { fetchWithAuth } from '@lib/auth.js';
import { motion } from 'framer-motion';

export default function AIChat() {

  const [open,setOpen]=useState(false);
  const [msg,setMsg]=useState('');
  const [chat,setChat]=useState([]);

  async function send(){
    if(!msg) return;

    const res = await  fetchWithAuth('/ai/generate',{
      method:'POST',
      body: JSON.stringify({ prompt: msg })
    });

    const data = await res.json();

    setChat([...chat,
      {role:'user',text:msg},
      {role:'ai',text:data.text}
    ]);

    setMsg('');
  }

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={()=>setOpen(!open)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
      >
        🧠
      </button>

      {/* CHAT */}
      {open && (
        <motion.div
          initial={{ opacity:0, scale:0.9 }}
          animate={{ opacity:1, scale:1 }}
          className="
            fixed bottom-16 right-4 w-80 h-96
            bg-white dark:bg-gray-800
            border rounded-xl shadow-xl
            flex flex-col
          "
        >

          <div className="p-2 border-b font-semibold">
            IA LexLab
          </div>

          <div className="flex-1 p-2 overflow-y-auto space-y-2 text-sm">
            {chat.map((c,i)=>(
              <div key={i} className={c.role==='ai'?'text-indigo-600':''}>
                {c.text}
              </div>
            ))}
          </div>

          <div className="p-2 flex gap-1">
            <input
              value={msg}
              onChange={e=>setMsg(e.target.value)}
              className="flex-1 border p-1 rounded"
              placeholder="Pergunte..."
            />
            <button onClick={send}>➤</button>
          </div>

        </motion.div>
      )}
    </>
  );
}
