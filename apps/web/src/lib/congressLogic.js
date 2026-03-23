export const LEGISLATIVE_RULES = {
  CAMARA_DEPUTADOS: 513,
  SENADO_FEDERAL: 81,
  QUORUM_MINIMO: 0.51, // 51% de presença
};

export function calculateResult(votos, totalMembros, tipoMaioria = 'simples') {
  const totalVotantes = votos.sim + votos.nao + votos.abs;
  const presenca = totalVotantes / totalMembros;
  
  if (presenca < LEGISLATIVE_RULES.QUORUM_MINIMO) {
    return { status: 'REJEITADO', motivo: 'Falta de Quórum' };
  }

  const maioriaAbsoluta = Math.floor(totalMembros / 2) + 1;
  const maioriaSimples = Math.floor(totalVotantes / 2) + 1;

  if (tipoMaioria === 'absoluta') {
    return votos.sim >= maioriaAbsoluta 
      ? { status: 'APROVADO', tipo: 'Maioria Absoluta' }
      : { status: 'REJEITADO', motivo: 'Não atingiu 257 votos' };
  }

  return votos.sim > votos.nao 
    ? { status: 'APROVADO', tipo: 'Maioria Simples' }
    : { status: 'REJEITADO', motivo: 'Maioria de votos contrários' };
}
