import { pool } from './db.mjs';

try {
  await pool.query(`
    DROP TABLE IF EXISTS votos;
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
      id TEXT PRIMARY KEY,
      nome TEXT,
      tipo TEXT,
      municipio TEXT
    );

    CREATE TABLE votos (
      id SERIAL PRIMARY KEY,
      user_id TEXT,
      minuta_id TEXT,
      voto TEXT,
      municipio TEXT
    );
  `);

  console.log("✅ BANCO OK");

} catch(e){
  console.error("DB ERROR:", e);
}

process.exit();
