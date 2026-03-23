import http from 'http';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from './db.mjs';

const SECRET = 'access-secret';
const REFRESH_SECRET = 'refresh-secret';

// ================= HELPERS =================

function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { resolve({}); }
    });
  });
}

function generateTokens(user) {
  return {
    accessToken: jwt.sign(user, SECRET, { expiresIn: '15m' }),
    refreshToken: jwt.sign(user, REFRESH_SECRET, { expiresIn: '7d' })
  };
}

function authMiddleware(req) {
  const header = req.headers.authorization;
  if (!header) return null;

  const token = header.split(' ')[1];

  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

// ================= SERVER =================

const server = http.createServer(async (req, res) => {

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  // ================= AUTH =================

  if (req.url === '/auth/register' && req.method === 'POST') {

    const { email, password } = await parseBody(req);

    const hash = await bcrypt.hash(password, 10);

    try {
      const result = await pool.query(
        'INSERT INTO users (email, password) VALUES ($1,$2) RETURNING id',
        [email, hash]
      );

      const user = { id: result.rows[0].id, email };

      return send(res, 200, generateTokens(user));

    } catch {
      return send(res, 400, { error: 'User exists' });
    }
  }

  if (req.url === '/auth/login' && req.method === 'POST') {

    const { email, password } = await parseBody(req);

    const result = await pool.query(
      'SELECT * FROM users WHERE email=$1',
      [email]
    );

    const user = result.rows[0];

    if (!user) return send(res, 401, { error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return send(res, 401, { error: 'Invalid credentials' });

    return send(res, 200, generateTokens({
      id: user.id,
      email
    }));
  }

  if (req.url === '/auth/refresh' && req.method === 'POST') {

    const { refreshToken } = await parseBody(req);

    try {
      const user = jwt.verify(refreshToken, REFRESH_SECRET);

      return send(res, 200, generateTokens({
        id: user.id,
        email: user.email
      }));

    } catch {
      return send(res, 401, {});
    }
  }

  // ================= PROFILE =================

  if (req.url === '/profile' && req.method === 'GET') {

    const user = authMiddleware(req);
    if (!user) return send(res, 401, {});

    const result = await pool.query(
      'SELECT id, email, name, bio FROM users WHERE id=$1',
      [user.id]
    );

    const projects = await pool.query(
      'SELECT id, title FROM projects WHERE user_id=$1',
      [user.id]
    );

    return send(res, 200, {
      user: result.rows[0],
      reputation: 42,
      projects: projects.rows
    });
  }

  if (req.url === '/profile' && req.method === 'POST') {

    const user = authMiddleware(req);
    if (!user) return send(res, 401, {});

    const { name, bio } = await parseBody(req);

    await pool.query(
      'UPDATE users SET name=$1, bio=$2 WHERE id=$3',
      [name, bio, user.id]
    );

    return send(res, 200, { ok: true });
  }

  // ================= PROJECTS =================

  if (req.url === '/projects' && req.method === 'GET') {

    const user = authMiddleware(req);
    if (!user) return send(res, 401, []);

    const result = await pool.query(
      'SELECT * FROM projects WHERE user_id=$1 ORDER BY id DESC',
      [user.id]
    );

    return send(res, 200, result.rows);
  }

  if (req.url === '/projects' && req.method === 'POST') {

    const user = authMiddleware(req);
    if (!user) return send(res, 401, {});

    const { title, content } = await parseBody(req);

    await pool.query(
      'INSERT INTO projects (user_id, title, content) VALUES ($1,$2,$3)',
      [user.id, title, content]
    );

    return send(res, 200, { ok: true });
  }

  // ================= DEFAULT =================

  send(res, 404, { error: 'Not found' });

});

server.listen(3001, () => {
  console.log('🚀 API rodando em http://localhost:3001');
});
