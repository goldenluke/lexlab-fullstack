import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { pool } from './db.mjs';

const SECRET = 'lexlab-secret';
const REFRESH_SECRET = 'lexlab-refresh-secret';

const refreshTokens = [];

// ================= REGISTER =================
export async function register(email, password) {
  const hash = await bcrypt.hash(password, 10);

  try {
    const id = uuid();

    await pool.query(
      'INSERT INTO users (id, email, password) VALUES ($1, $2, $3)',
      [id, email, hash]
    );

    return { ok: true };
  } catch {
    return { error: 'user exists' };
  }
}

// ================= LOGIN =================
export async function login(email, password) {
  const res = await pool.query(
    'SELECT * FROM users WHERE email=$1',
    [email]
  );

  const user = res.rows[0];
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;

  const accessToken = jwt.sign(
    { id: user.id, email, role: user.role },
    SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { id: user.id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  refreshTokens.push(refreshToken);

  return { accessToken, refreshToken };
}

// ================= REFRESH =================
export function refresh(token) {
  if (!refreshTokens.includes(token)) return null;

  try {
    const data = jwt.verify(token, REFRESH_SECRET);

    return jwt.sign(
      { id: data.id },
      SECRET,
      { expiresIn: '15m' }
    );

  } catch {
    return null;
  }
}

// ================= VERIFY =================
export function verify(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

