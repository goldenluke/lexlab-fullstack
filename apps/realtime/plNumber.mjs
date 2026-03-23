import { pool } from './db.mjs';

export async function getNextPL() {
  const res = await pool.query(
    "UPDATE counters SET value = value + 1 WHERE name='pl' RETURNING value"
  );
  return res.rows[0].value;
}
