import { pool } from './db.mjs';

export async function voteParty(userId, party, value) {
  await pool.query(
    `INSERT INTO party_votes (user_id, party, value)
     VALUES ($1,$2,$3)`,
    [userId, party, value]
  );
}

export async function getPartyVotes() {
  const res = await pool.query(`
    SELECT party, SUM(value) as total
    FROM party_votes
    GROUP BY party
  `);
  return res.rows;
}
