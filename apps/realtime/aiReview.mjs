export function reviewPR(text) {
  let score = 60;

  if (text.includes('Art.')) score += 15;
  if (text.includes('§')) score += 10;
  if (text.length > 300) score += 10;

  return {
    score,
    issues: [
      'Verificar clareza do artigo',
      'Padronizar linguagem jurídica'
    ],
    suggestion: 'Sugere-se consolidar os dispositivos em um único artigo.'
  };
}
