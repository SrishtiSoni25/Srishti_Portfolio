export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "messages must be an array",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY not configured",
      });
    }

    // Separate system prompt from conversation
    const systemMessage = messages.find(
      (m) => m.role === "system"
    );

    const conversationMessages = messages.filter(
      (m) => m.role !== "system"
    );

    const contents = conversationMessages.map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [
        {
          text: m.content,
        },
      ],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...(systemMessage && {
            system_instruction: {
              parts: [
                {
                  text: systemMessage.content,
                },
              ],
            },
          }),

          contents,
        }),
      }
    );

    const data = await response.json();

    // IMPORTANT: Handle Gemini API errors
    if (!response.ok) {
      console.error("Gemini API Error:", data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Gemini API request failed",
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      console.error("Unexpected Gemini response:", data);

      return res.status(500).json({
        error: "Gemini returned an empty response",
      });
    }

    return res.status(200).json({
      reply,
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: error.message || "Internal server error",
    });
  }
}