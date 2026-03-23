import { getNextPL } from './plNumber.mjs';
import { pool } from './db.mjs';

export async function createProject(userId, data) {
  const {
    title, content,
    country, state, city,
    sphere, category,
    norm_type, status, tags
  } = data;

  await pool.query(
    `const pl = await getNextPL();

INSERT INTO projects
    (user_id, title, content, pl_number, country, state, city, sphere, category, norm_type, status, tags)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
    [
      userId, title, content,
      country, state, city,
      sphere, category,
      norm_type, status, tags
    ]
  );
}

export async function listProjects(userId) {
  const res = await pool.query(
    'SELECT * FROM projects WHERE user_id=$1 ORDER BY created_at DESC',
    [userId]
  );
  return res.rows;
}
