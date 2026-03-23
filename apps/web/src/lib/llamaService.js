const API_URL = 'http://localhost:3001/ai';

export const llama = {
  // Analisar texto para o Editor
  async analyze(content) {
    const res = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    return res.json();
  },

  // Gerar Parecer da CCJ para o Congresso
  async generateLegalOpinion(title, content) {
    const res = await fetch(`${API_URL}/opinion`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    return res.json();
  }
};
