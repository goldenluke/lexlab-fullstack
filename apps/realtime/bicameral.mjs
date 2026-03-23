export function simulateBicameral(text){

  function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
  }

  const camara = random(60,85);
  const senado = random(50,80);

  return {
    camara,
    senado,
    aprovado: camara > 50 && senado > 50
  };
}
