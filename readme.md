# ⚖️ LexLab Fullstack

> Plataforma colaborativa para criação, análise e simulação de minutas legislativas com suporte a IA, versionamento e análise política.

---

## 🚀 Visão Geral

O **LexLab** é uma plataforma fullstack que permite:

- ✍️ Criar e editar minutas legislativas
- 💾 Salvar e versionar documentos (estilo Git)
- 👥 Colaboração em tempo real (Yjs + Hocuspocus)
- 🧠 Análise por IA (reescrita, sugestões, score)
- 🏛️ Simulação política (Câmara + Senado)
- 📊 Dashboard analítico (Plotly)
- 🔐 Autenticação real (JWT + refresh token)
- 👤 Perfis de usuário persistentes
- 📂 Organização por projetos (minutas)

---

## 🧱 Arquitetura

apps/
 ├── web/        → Frontend (React + Astro + Tailwind)
 └── realtime/   → Backend (Node.js + PostgreSQL)

---

## 🛠️ Stack Tecnológica

### Frontend
- React
- Astro
- TailwindCSS
- TipTap Editor
- Yjs (colaboração)
- Plotly.js (analytics)

### Backend
- Node.js (HTTP nativo)
- PostgreSQL
- JWT (auth)
- bcrypt (hash de senha)

---

## 🔐 Autenticação

### ✔ Recursos
- Registro de usuário
- Login com senha hash (bcrypt)
- Access Token (15 min)
- Refresh Token (7 dias)
- Refresh automático no frontend

### 🔁 Fluxo

login → accessToken + refreshToken  
↓  
requisição protegida  
↓  
401 → refresh automático  
↓  
novo token → retry  

---

## 📦 Banco de Dados

### users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT,
  name TEXT,
  bio TEXT
);

### projects
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  user_id INT,
  title TEXT,
  content TEXT
);

---

## 📂 Funcionalidades

### ✍️ Editor
- Editor rico com TipTap
- Suporte a HTML
- Integração com IA
- Toolbar completa
- Exportação PDF

### 💾 Minutas
- Criar nova minuta
- Salvar no banco
- Listar na Home
- Abrir e editar

### 🧠 IA
- Sugestão de reescrita
- Geração automática de artigos
- Score da minuta
- Detecção de conflitos

### 🏛️ Simulação Política
- Câmara dos Deputados
- Senado Federal
- Resultado final
- Simulação por votos

### 📊 Analytics
- Distribuição por estado
- Categorias
- Aprovação/Rejeição
- Gráficos com Plotly

### 👤 Perfil
- Email
- Nome
- Bio
- Reputação
- Lista de minutas

---

## 🔌 API Endpoints

### Auth
POST /auth/register  
POST /auth/login  
POST /auth/refresh  

### Profile
GET /profile  
POST /profile  

### Projects
GET /projects  
POST /projects  

### Política
GET /politics/congress-real  

---

## 🖥️ Frontend

### Estrutura

components/
 ├── Editor.jsx
 ├── EditorPage.jsx
 ├── SaveButton.jsx
 ├── HomePage.jsx
 ├── Profile.jsx
 ├── Analytics.jsx
 ├── AIPanel.jsx
 ├── PoliticsPanel.jsx
 └── Toolbar.jsx

---

## 🚀 Como Rodar

### 1. Clonar
git clone https://github.com/goldenluke/lexlab-fullstack.git  
cd lexlab  

### 2. Instalar dependências
cd apps/web && npm install  
cd ../realtime && npm install  

### 3. Configurar banco
sudo -u postgres psql  
CREATE DATABASE lexlab;  

### 4. Rodar backend
cd apps/realtime  
node server.mjs  

### 5. Rodar frontend
cd apps/web  
npm run dev  

---

## 🌐 URLs

Frontend: http://localhost:4322  
Backend: http://localhost:3001  

---

## 🔥 Features Avançadas

- 🔁 Refresh token automático
- 🧠 IA integrada no editor
- 🗳️ Simulação política realista
- 📊 Dashboard institucional
- 💬 Sistema de comentários (planejado)
- 🔍 Diff estilo GitHub (planejado)
- 🧾 Versionamento (planejado)

---

## ⚠️ Problemas Conhecidos

- WebSocket (Hocuspocus) pode não estar ativo
- IA ainda mockada em alguns pontos
- Sem controle de permissões (em desenvolvimento)

---

## 🛣️ Roadmap

- [ ] Autosave estilo Google Docs  
- [ ] Versionamento tipo Git  
- [ ] Comentários por trecho  
- [ ] Permissões (admin/editor)  
- [ ] Upload de avatar  
- [ ] Deploy em produção  
- [ ] CI/CD  

---

## 🤝 Contribuição

1. Fork o projeto  
2. Crie sua branch  
3. Commit suas mudanças  
4. Push  
5. Abra um PR  

---

## 📄 Licença

MIT

---

## 👨‍💻 Autor

Lucas Dourado  
https://github.com/goldenluke  

---

## 💡 Filosofia

“Não existe tecnologia neutra — toda arquitetura carrega uma visão de mundo.”

O LexLab busca democratizar a construção legislativa com tecnologia.
