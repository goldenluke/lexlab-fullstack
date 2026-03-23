export function scoreLaw(text) {
  let score = 50;

  if (text.length > 1000) score += 10;
  if (text.includes('SUS')) score += 10;
  if (text.includes('direito')) score += 5;
  if (text.includes('Art.')) score += 10;

  return Math.min(score, 100);
}

export function simulatePolitics(text) {
  return {
    aprovacao: Math.floor(Math.random() * 40) + 60,
    resistencia: "baixa a moderada",
    apoio: ["saúde pública", "direitos sociais"],
    risco: ["impacto orçamentário"]
  };
}
