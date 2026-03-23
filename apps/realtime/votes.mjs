import { pool } from './db.mjs';

export async function vote(userId, value) {
  await pool.query(
    'INSERT INTO votes (user_id, value) VALUES ($1,$2)',
    [userId, value]
  );
}

export async function countVotes() {
  const res = await pool.query(
    'SELECT value, COUNT(*) FROM votes GROUP BY value'
  );
  return res.rows;
}
