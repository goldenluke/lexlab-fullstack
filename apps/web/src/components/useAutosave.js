import { useEffect, useRef } from 'react';
import { fetchWithAuth } from '@lib/auth.js';

export default function useAutosave(editor) {
  const last = useRef('');

  useEffect(() => {
    if (!editor) return;

    const interval = setInterval(async () => {
      const content = editor.getHTML();

      // só salva se mudou
      if (content !== last.current) {
        last.current = content;

        try {
          await  fetchWithAuth('http://localhost:1234/versions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
          });

          console.log('💾 autosave');

        } catch (err) {
          console.error('autosave error', err);
        }
      }

    }, 3000); // 3s

    return () => clearInterval(interval);
  }, [editor]);
}
