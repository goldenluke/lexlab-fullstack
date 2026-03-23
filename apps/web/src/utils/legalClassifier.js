export function classifyChange(oldText, newText) {
  const labels = [];
  let score = 0;

  if (!oldText && newText) {
    labels.push('🟢 Aditiva');
    score += 1;
  }

  if (oldText && !newText) {
    labels.push('🔴 Supressiva');
    score += 2;
  }

  if (oldText && newText && oldText !== newText) {
    labels.push('🟡 Modificativa');
    score += 2;
  }

  const text = (newText || '').toLowerCase();

  if (text.includes('deverá')) {
    labels.push('🚨 Obrigacional');
    score += 3;
  }

  if (text.includes('competência') || text.includes('responsável')) {
    labels.push('⚖️ Competência');
    score += 2;
  }

  if (text.includes('recursos') || text.includes('orçamento')) {
    labels.push('💰 Orçamentária');
    score += 3;
  }

  let risk = 'baixo';
  if (score >= 5) risk = 'alto';
  else if (score >= 3) risk = 'médio';

  return { labels, score, risk };
}
