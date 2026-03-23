import { pool } from './db.mjs';

export async function createDraft(user_id) {
  const r = await pool.query(
    'INSERT INTO projects (user_id, title, content, status) VALUES ($1,$2,$3,$4) RETURNING *',
    [user_id, 'Nova minuta', '<p></p>', 'draft']
  );
  return r.rows[0];
}

export async function publishProject(id) {
  await pool.query(
    'UPDATE projects SET status=$1 WHERE id=$2',
    ['published', id]
  );
}
