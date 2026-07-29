export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { messages } = req.body;
    const r = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Lovable-API-Key': process.env.LOVABLE_API_KEY,
      },
      body: JSON.stringify({ model: 'google/gemini-3-flash-preview', messages }),
    });
    const data = await r.json();
    res.status(200).json({ reply: data.choices?.[0]?.message?.content ?? "I couldn't respond." });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}
