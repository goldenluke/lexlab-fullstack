import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { prompt, context, systemPrompt } = await request.json();
    
    // Rastro Local: Conexão direta com o motor Ollama
    // Usamos o endpoint /api/generate para ser mais rápido que o /api/chat
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: `Contexto Legislativo: ${context}\n\nInstrução: ${prompt}\n\nRetorne apenas o texto do artigo seguinte, começando por 'Art.':`,
        system: systemPrompt || "Você é um Consultor Jurídico. Responda apenas com o texto de lei, sem introduções.",
        stream: false, // CRÍTICO: Evita que a conexão fique aberta esperando pedaços
        options: {
          temperature: 0.3, // Menos criatividade, mais rigor jurídico
          num_predict: 200  // Limita o tamanho para ser rápido
        }
      }),
    });

    if (!response.ok) throw new Error(`Ollama Offline: ${response.status}`);

    const data = await response.json();
    
    // No endpoint /api/generate, o texto vem no campo 'response'
    return new Response(JSON.stringify({ 
      content: data.response || 'Erro no processamento do rastro.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Rastro de Falha IA:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
