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
    // Desativa funções por rota para gerar um único entry.mjs sólido na raiz do servidor
    functionPerRoute: false,
    // Garante compatibilidade com o runtime da Vercel em monorepos
    isServerlessFunction: true
  }),
  build: {
    // Força um rastro de saída achatado
    format: 'file'
  }
});
