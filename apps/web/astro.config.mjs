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
    // Força o rastro de saída para o padrão que a Vercel espera em monorepos
    isServerlessFunction: true,
  }),
  // Garante que o build não crie subpastas desnecessárias que confundam o runtime
  build: {
    format: 'file'
  }
});
