import * as Y from 'yjs';
import { HocuspocusProvider } from '@hocuspocus/provider';

export function createCollab(docId) {
  const ydoc = new Y.Doc();

  const provider = new HocuspocusProvider({
    url: 'ws://localhost:1234',
    name: docId,
    document: ydoc,
  });

  return { ydoc, provider };
}
