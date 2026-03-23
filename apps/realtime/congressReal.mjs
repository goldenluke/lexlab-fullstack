export function simulateRealCongress(text) {

  const camara = {
    esquerda: 180,
    centro: 200,
    direita: 133
  };

  const senado = {
    esquerda: 25,
    centro: 30,
    direita: 26
  };

  function apoio(bloco, peso){
    return Math.floor(
      bloco.esquerda * peso.esq +
      bloco.centro * peso.cen +
      bloco.direita * peso.dir
    );
  }

  const pesos = text.includes('SUS')
    ? {esq:0.9, cen:0.6, dir:0.3}
    : {esq:0.7, cen:0.5, dir:0.4};

  const votosCamara = apoio(camara, pesos);
  const votosSenado = apoio(senado, pesos);

  return {
    camara: {
      votos: votosCamara,
      total: 513,
      aprovado: votosCamara > 257
    },
    senado: {
      votos: votosSenado,
      total: 81,
      aprovado: votosSenado > 41
    },
    aprovadoFinal:
      votosCamara > 257 && votosSenado > 41
  };
}
