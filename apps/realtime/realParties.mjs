export function simulateRealParties(text) {

  const base = {
    PT: 80,
    PSOL: 85,
    PDT: 70,
    MDB: 60,
    PSD: 55,
    PSDB: 50,
    PL: 35,
    NOVO: 30,
    UNIÃO: 50
  };

  // ajuste simples por conteúdo
  if (text.includes('SUS') || text.includes('direito social')) {
    base.PT += 5;
    base.PSOL += 5;
    base.PL -= 5;
  }

  return base;
}
