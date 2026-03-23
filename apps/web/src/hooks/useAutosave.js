import { useEffect } from 'react';
import debounce from 'lodash.debounce';
import { fetchWithAuth } from '@lib/auth.js';

export default function useAutosave(editor, projectId) {

  useEffect(() => {

    if (!editor || !projectId) return;

    const save = debounce(async () => {
      try {
        const content = editor.getHTML();

        await fetchWithAuth('/versions', {
          method: 'POST',
          body: JSON.stringify({ project_id: projectId, content })
        });

        console.log("autosaved");
      } catch (e) {
        console.error(e);
      }
    }, 2000);

    editor.on('update', save);

    return () => {
      editor.off('update', save);
      save.cancel();
    };

  }, [editor, projectId]);
}
