INSERT INTO users (id, email, password, name, bio)
VALUES (1, 'user@demo.com', '123', 'Usuário', 'Bio inicial')
ON CONFLICT (id) DO NOTHING;
