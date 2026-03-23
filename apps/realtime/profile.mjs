import { pool } from './db.mjs';

// ================= GET =================
export async function getProfile(userId) {

  const user = await pool.query(
    'SELECT id, email, name, bio FROM users WHERE id=$1',
    [userId]
  );

  const projects = await pool.query(
    'SELECT id, title FROM projects WHERE user_id=$1',
    [userId]
  );

  return {
    user: user.rows[0],
    reputation: 42,
    projects: projects.rows
  };
}

// ================= UPDATE =================
export async function updateProfile(userId, name, bio) {

  await pool.query(
    'UPDATE users SET name=$1, bio=$2 WHERE id=$3',
    [name, bio, userId]
  );

  return { ok: true };
}
