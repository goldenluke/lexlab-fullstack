import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    react(), 
    tailwind()
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    // Força a geração de uma função serverless compatível com monorepos
    functionPerRoute: false, 
  }),
  build: {
    // Garante que o rastro de arquivos seja achatado para evitar erros de importação
    format: 'file'
  },
  vite: {
    ssr: {
      // Evita que dependências externas quebrem o rastro do runtime
      noExternal: ['@astrojs/vercel']
    }
  }
});
