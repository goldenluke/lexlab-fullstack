export async function analyzeChangeLocal(oldText, newText) {
  const prompt = `
Você é um especialista em direito público.

Compare:

ANTES:
${oldText}

DEPOIS:
${newText}

Responda:
- tipo de mudança
- impacto jurídico
- risco
- explicação clara
`;

  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false
    })
  });

  const data = await res.json();
  return data.response;
}
