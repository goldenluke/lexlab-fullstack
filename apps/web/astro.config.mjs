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
    // Consolida tudo em um único arquivo de servidor
    functionPerRoute: false,
    // Garante que o rastro de saída seja compatível com o runtime da Vercel
    isServerlessFunction: true
  }),
  build: {
    // Força um rastro de arquivos plano para evitar erros de importação
    format: 'file'
  }
});
