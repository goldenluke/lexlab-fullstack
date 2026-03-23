import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './src/lib'),
      'yjs': path.resolve(__dirname, '../../node_modules/yjs'),
    },
    dedupe: ['yjs'],
  },
});
