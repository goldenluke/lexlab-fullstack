import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'lexlab',
  host: 'localhost',
  database: 'lexlab',
  password: 'lexlab',
  port: 5433,
});
