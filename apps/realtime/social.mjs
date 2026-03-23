import { pool } from './db.mjs';

// ================= RANKING =================
export async function rankProjects() {
  const res = await pool.query(`
    SELECT p.id, p.title,
    COALESCE(SUM(v.value),0) as score
    FROM projects p
    LEFT JOIN votes v ON p.id = v.user_id
    GROUP BY p.id
    ORDER BY score DESC
  `);

  return res.rows;
}

// ================= REPUTAÇÃO =================
export async function updateReputation(userId, delta) {
  await pool.query(`
    INSERT INTO reputation (user_id, score)
    VALUES ($1,$2)
    ON CONFLICT (user_id)
    DO UPDATE SET score = reputation.score + $2
  `, [userId, delta]);
}

export async function getReputation(userId) {
  const res = await pool.query(
    'SELECT score FROM reputation WHERE user_id=$1',
    [userId]
  );
  return res.rows[0]?.score || 0;
}

// ================= POLÍTICA =================
export function simulateParties(text) {
  return {
    esquerda: 80,
    centro: 65,
    direita: 40,
    observacao: "Projeto com forte viés social"
  };
}
