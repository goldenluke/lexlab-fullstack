const POST = async ({ request }) => {
  const { prompt, systemPrompt } = await request.json();
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API Key não configurada" }), { status: 500 });
  }
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt || "Você é um consultor jurídico legislativo especialista em saúde pública e no SUS." },
          { role: "user", content: prompt }
        ],
        temperature: 0.5,
        max_tokens: 1024
      })
    });
    const data = await response.json();
    return new Response(JSON.stringify(data.choices[0].message), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Falha no rastro de IA" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
