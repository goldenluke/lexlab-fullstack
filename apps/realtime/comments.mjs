import { pool } from './db.mjs';

export async function addComment(userId, content, from, to, selection, parentId=null) {
  await pool.query(
    `INSERT INTO comments (user_id, content, from_pos, to_pos, selection, parent_id)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [userId, content, from, to, selection, parentId]
  );
}

export async function listComments() {
  const res = await pool.query(
    'SELECT * FROM comments ORDER BY created_at ASC'
  );
  return res.rows;
}
