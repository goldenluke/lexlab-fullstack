import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

// Rastro de Segurança: Permite que o ngrok acesse o servidor sem bloqueios de Host
app.use((req, res, next) => {
  const host = req.headers.host;
  if (host.includes('ngrok-free.app') || host.includes('localhost')) {
    next();
  } else {
    res.status(403).send('Rastro de Host não autorizado.');
  }
});

// Serve os arquivos estáticos (CSS, JS do cliente, Imagens)
app.use(express.static('dist/client/'));

// Middleware para processar o SSR do Astro
app.use((req, res, next) => {
  ssrHandler(req, res, next);
});

const PORT = process.env.PORT || 4321;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  🏛️  LEXLAB ONLINE
  -----------------------------------------
  > Local:    http://localhost:${PORT}
  > Network:  http://0.0.0.0:${PORT}
  > Rastro:   Monitorando Llama 3.2 Local...
  -----------------------------------------
  `);
});
