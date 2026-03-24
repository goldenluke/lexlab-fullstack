const POST = async ({ request }) => {
  try {
    const { prompt, context, systemPrompt } = await request.json();
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.2",
        prompt: `Contexto Legislativo: ${context}

Instrução: ${prompt}

Retorne apenas o texto do artigo seguinte, começando por 'Art.':`,
        system: systemPrompt || "Você é um Consultor Jurídico. Responda apenas com o texto de lei, sem introduções.",
        stream: false,
        // CRÍTICO: Evita que a conexão fique aberta esperando pedaços
        options: {
          temperature: 0.3,
          // Menos criatividade, mais rigor jurídico
          num_predict: 200
          // Limita o tamanho para ser rápido
        }
      })
    });
    if (!response.ok) throw new Error(`Ollama Offline: ${response.status}`);
    const data = await response.json();
    return new Response(JSON.stringify({
      content: data.response || "Erro no processamento do rastro."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Rastro de Falha IA:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
