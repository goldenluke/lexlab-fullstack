import { Hocuspocus } from '@hocuspocus/server';
import http from 'http';
import { pool } from './db.mjs';
import { verifyGoogleToken, verify } from './auth.mjs';

// --- SERVIDOR REALTIME (Porta 1234) ---
const hocuspocus = new Hocuspocus({ port: 1234 });
hocuspocus.listen();

// --- HELPERS ---
function authMiddleware(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const token = authHeader.split(' ')[1];
  try { return verify(token); } catch (err) { return null; }
}

async function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { resolve({}); }
    });
  });
}

// --- SERVIDOR API (Porta 3001) ---
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') { res.writeHead(200); return res.end(); }

  // 1. ROTA: SAÚDE DA IA (Llama/Ollama)
  if (req.url === '/ai/health' && req.method === 'GET') {
    try {
      const aiRes = await fetch('http://localhost:11434/api/tags');
      const status = aiRes.ok ? 'online' : 'offline';
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status }));
    } catch (err) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'offline' }));
    }
  }

  // 2. ROTA: AUTH GOOGLE
  if (req.url === '/auth/google' && req.method === 'POST') {
    const { token } = await parseBody(req);
    const appToken = await verifyGoogleToken(token);
    res.writeHead(appToken ? 200 : 401, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(appToken ? { token: appToken } : { error: 'Auth Failed' }));
  }

  // 3. ROTA: CRIAR RASCUNHO (DRAFT)
  if (req.url === '/draft' && req.method === 'POST') {
    const user = authMiddleware(req);
    if (!user) { res.writeHead(401); return res.end(); }
    try {
      const result = await pool.query(
        'INSERT INTO projects (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
        [user.id, 'Nova Minuta', '<h1>Título</h1><p>Comece aqui sua redação...</p>']
      );
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result.rows[0]));
    } catch (err) { res.writeHead(500); return res.end(); }
  }

  // 4. ROTA: LISTAR PROJETOS
  if (req.url === '/projects' && req.method === 'GET') {
    const user = authMiddleware(req);
    if (!user) { res.writeHead(401); return res.end(); }
    const result = await pool.query('SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC', [user.id]);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(result.rows));
  }

  res.writeHead(404);
  res.end();
});

server.listen(3001, () => console.log('🚀 API LexLab estável na porta 3001'));
