export function generateArticle(text) {
  return `
Art. ${Math.floor(Math.random()*100)+10}º
Fica instituído mecanismo complementar de garantia da efetividade desta Lei,
com prioridade para grupos vulneráveis e situações de risco clínico.
`;
}

export function detectConflicts(text) {
  const conflicts = [];

  if (text.includes('não') && text.includes('obrigatório')) {
    conflicts.push('Possível ambiguidade normativa (negação vs obrigação)');
  }

  if (text.length < 200) {
    conflicts.push('Baixa densidade normativa');
  }

  return conflicts;
}

export function estimateImpact(text) {
  return {
    custo: "baixo a moderado",
    judicializacao: "reduz judicialização individual",
    impacto_social: "alto"
  };
}

export function compareLaws(text) {
  return [
    {
      lei: "Lei 8.080/90",
      similaridade: "alta",
      observacao: "Compatível com princípios do SUS"
    }
  ];
}
