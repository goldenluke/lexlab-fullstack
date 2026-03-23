import { pool } from './db.mjs';

export async function createPR(userId, title, content) {
  await pool.query(
    'INSERT INTO prs (user_id, title, content) VALUES ($1, $2, $3)',
    [userId, title, content]
  );
}

export async function listPRs(userId) {
  const res = await pool.query(
    'SELECT * FROM prs WHERE user_id=$1 ORDER BY created_at DESC',
    [userId]
  );

  return res.rows;
}
