import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Sparkles,
  MessageSquare
} from 'lucide-react';

import { fetchWithAuth } from '@lib/auth.js';

export default function Toolbar({ editor }) {

  if (!editor) return null;

  // ================= BUTTON HELPER =================
  function btn(active, onClick, Icon, label) {
    return (
      <button
      onClick={onClick}
      title={label}
      className={`
        p-2 rounded transition
        hover:bg-gray-200 dark:hover:bg-gray-700
        ${active ? 'bg-gray-300 dark:bg-gray-600' : ''}
        `}
        >
        <Icon size={16} />
        </button>
    );
  }

  // ================= GET SELECTION =================
  function getSelection() {
    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to);
    return { from, to, text };
  }

  // ================= AI SUGGEST =================
  async function aiSuggest() {
    const context = editor.getText().slice(-300);

    const res = await  fetchWithAuth('/ai/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: context })
    });

    const data = await res.json();

    editor.chain().focus().insertContent(data.text).run();
  }

  // ================= COMMENT =================
  async function commentSelection() {
    const { from, to, text } = getSelection();

    if (!text) {
      alert('Selecione um trecho para comentar');
      return;
    }

    const content = prompt('Comentário:');
    if (!content) return;

    await  fetchWithAuth('/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content,
        from,
        to,
        selection: text
      })
    });

    alert('Comentário adicionado!');
  }

  // ================= RENDER =================
  return (
    <div className="flex flex-wrap items-center gap-1 border-b p-2 bg-gray-50 dark:bg-gray-800">

    {/* TEXT */}
    {btn(editor.isActive('bold'),
      () => editor.chain().focus().toggleBold().run(),
         Bold,
         'Negrito')}

         {btn(editor.isActive('italic'),
           () => editor.chain().focus().toggleItalic().run(),
              Italic,
              'Itálico')}

              {/* HEADINGS */}
              {btn(editor.isActive('heading', { level: 1 }),
                   () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                   Heading1,
                   'Título 1')}

                   {btn(editor.isActive('heading', { level: 2 }),
                        () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                        Heading2,
                        'Título 2')}

                        {/* LISTS */}
                        {btn(editor.isActive('bulletList'),
                          () => editor.chain().focus().toggleBulletList().run(),
                             List,
                             'Lista')}

                             {btn(editor.isActive('orderedList'),
                               () => editor.chain().focus().toggleOrderedList().run(),
                                  ListOrdered,
                                  'Lista numerada')}

                                  {/* QUOTE */}
                                  {btn(editor.isActive('blockquote'),
                                    () => editor.chain().focus().toggleBlockquote().run(),
                                       Quote,
                                       'Citação')}

                                       {/* UNDO / REDO */}
                                       {btn(false,
                                         () => editor.chain().focus().undo().run(),
                                            Undo,
                                            'Desfazer')}

                                            {btn(false,
                                              () => editor.chain().focus().redo().run(),
                                                 Redo,
                                                 'Refazer')}

                                                 {/* SPACER */}
                                                 <div className="flex-1" />

                                                 {/* COMMENT */}
                                                 <button
                                                 onClick={commentSelection}
                                                 className="
                                                 flex items-center gap-1
                                                 px-3 py-1 rounded
                                                 bg-blue-600 text-white
                                                 hover:bg-blue-700 transition
                                                 "
                                                 >
                                                 <MessageSquare size={16} />
                                                 Comentar
                                                 </button>

                                                 {/* AI */}
                                                 <button
                                                 onClick={aiSuggest}
                                                 className="
                                                 flex items-center gap-1
                                                 px-3 py-1 rounded
                                                 bg-purple-600 text-white
                                                 hover:bg-purple-700 transition
                                                 "
                                                 >
                                                 <Sparkles size={16} />
                                                 IA sugerir
                                                 </button>

                                                 </div>
  );
}
