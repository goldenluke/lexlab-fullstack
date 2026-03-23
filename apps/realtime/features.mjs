import { pool } from './db.mjs';

export async function saveVersion(project_id, content) {
  await pool.query(
    'INSERT INTO versions (project_id, content) VALUES ($1,$2)',
    [project_id, content]
  );
}

export async function listVersions(project_id) {
  const r = await pool.query(
    'SELECT * FROM versions WHERE project_id=$1 ORDER BY id DESC',
    [project_id]
  );
  return r.rows;
}

export async function addComment(user_id, project_id, content, position) {
  await pool.query(
    'INSERT INTO comments (user_id, project_id, content, position) VALUES ($1,$2,$3,$4)',
    [user_id, project_id, content, position]
  );
}

export async function listComments(project_id) {
  const r = await pool.query(
    'SELECT * FROM comments WHERE project_id=$1',
    [project_id]
  );
  return r.rows;
}
