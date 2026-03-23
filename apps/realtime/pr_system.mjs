import { pool } from './db.mjs';

export async function createPR(project_id, content) {
  await pool.query(
    'INSERT INTO prs (project_id, content) VALUES ($1,$2)',
    [project_id, content]
  );
}

export async function listPRs(project_id) {
  const r = await pool.query(
    'SELECT * FROM prs WHERE project_id=$1',
    [project_id]
  );
  return r.rows;
}

export async function votePR(pr_id, user_id, value) {
  await pool.query(
    'INSERT INTO votes (pr_id, user_id, value) VALUES ($1,$2,$3)',
    [pr_id, user_id, value]
  );
}

export async function mergePR(pr_id) {

  const pr = await pool.query(
    'SELECT * FROM prs WHERE id=$1',
    [pr_id]
  );

  const data = pr.rows[0];

  if (!data) return;

  await pool.query(
    'UPDATE projects SET content=$1 WHERE id=$2',
    [data.content, data.project_id]
  );

  await pool.query(
    'UPDATE prs SET status=$1 WHERE id=$2',
    ['merged', pr_id]
  );

  await pool.query(
    'INSERT INTO reputation (user_id, score) VALUES ($1,10) ON CONFLICT (user_id) DO UPDATE SET score = reputation.score + 10',
    [1] // simplificado
  );
}
