export function analyze(text) {
  let score = 50;

  if (text.includes('Art.')) score += 20;
  if (text.includes('§')) score += 10;
  if (text.length > 200) score += 10;
  if (text.includes('revoga')) score += 5;

  return {
    score: Math.min(score, 100),
    suggestions: [
      'Verificar clareza jurídica',
      'Padronizar estrutura dos artigos'
    ]
  };
}
