import { pool } from './db.mjs';

export async function getRanking() {
  const r = await pool.query(
    'SELECT u.id, u.email, COALESCE(r.score,0) as score \
     FROM users u \
     LEFT JOIN reputation r ON u.id = r.user_id \
     ORDER BY score DESC'
  );
  return r.rows;
}

export async function isAdmin(user_id) {
  const r = await pool.query(
    'SELECT role FROM users WHERE id=$1',
    [user_id]
  );
  return r.rows[0]?.role === 'admin';
}
