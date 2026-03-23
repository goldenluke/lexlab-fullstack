import { pool } from './db.mjs';

// ================= PERFIL =================
export async function getProfile(userId) {
  const user = await pool.query(
    'SELECT id, email FROM users WHERE id=$1',
    [userId]
  );

  const rep = await pool.query(
    'SELECT score FROM reputation WHERE user_id=$1',
    [userId]
  );

  const projects = await pool.query(
    'SELECT id, title FROM projects WHERE user_id=$1',
    [userId]
  );

  return {
    user: user.rows[0],
    reputation: rep.rows[0]?.score || 0,
    projects: projects.rows
  };
}

// ================= LEADERBOARD =================
export async function leaderboard() {
  const res = await pool.query(`
    SELECT u.id, u.email,
    COALESCE(r.score,0) as reputation
    FROM users u
    LEFT JOIN reputation r ON u.id = r.user_id
    ORDER BY reputation DESC
    LIMIT 10
  `);

  return res.rows;
}

// ================= CONGRESSO =================
export function simulateCongress() {

  const total = 513;

  const esquerda = Math.floor(total * 0.4);
  const centro = Math.floor(total * 0.35);
  const direita = total - esquerda - centro;

  const aprovacao =
    (esquerda * 0.9 + centro * 0.6 + direita * 0.3) / total;

  return {
    cadeiras: {
      esquerda,
      centro,
      direita
    },
    aprovacao: Math.round(aprovacao * 100)
  };
}
