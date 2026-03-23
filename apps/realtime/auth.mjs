import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { pool } from './db.mjs';
import { v4 as uuid } from 'uuid';

const GOOGLE_CLIENT_ID = "429578354776-l80m5t0e6iercbsrb4cbhkugt8afquf0.apps.googleusercontent.com";
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const SECRET = 'lexlab-secret-compartilhada';

export async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    
    // Verificar ou Criar usuário no Postgres
    let res = await pool.query('SELECT * FROM users WHERE email = $1', [payload.email]);
    let user = res.rows[0];

    if (!user) {
      const id = uuid();
      const newUser = await pool.query(
        'INSERT INTO users (id, email, name) VALUES ($1, $2, $3) RETURNING *',
        [id, payload.email, payload.name]
      );
      user = newUser.rows[0];
    }

    return jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '7d' });
  } catch (error) {
    console.error("Erro OAuth:", error);
    return null;
  }
}

export function verify(token) {
  return jwt.verify(token, SECRET);
}
