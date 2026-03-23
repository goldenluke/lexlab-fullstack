CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS versions (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prs (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  title TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  title TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
