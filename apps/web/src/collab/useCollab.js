import { useEffect } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export default function useCollab(editor, room="lexlab") {

  useEffect(() => {
    if (!editor) return;

    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
      'wss://demos.yjs.dev',
      room,
      ydoc
    );

    const yText = ydoc.getText('content');

    // simples binding (seguro)
    editor.on('update', () => {
      yText.delete(0, yText.length);
      yText.insert(0, editor.getText());
    });

    provider.on('sync', () => {
      console.log("synced");
    });

    return () => {
      provider.destroy();
      ydoc.destroy();
    };

  }, [editor]);
}
