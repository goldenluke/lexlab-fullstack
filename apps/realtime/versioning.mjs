import { pool } from './db.mjs';

export async function saveVersion(userId, content) {
  await pool.query(
    'INSERT INTO versions (user_id, content) VALUES ($1, $2)',
    [userId, content]
  );
}

export async function listVersions(userId) {
  const res = await pool.query(
    'SELECT * FROM versions WHERE user_id=$1 ORDER BY created_at DESC',
    [userId]
  );

  return res.rows;
}
