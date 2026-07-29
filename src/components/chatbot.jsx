import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const SYSTEM_PROMPT = `You are a friendly portfolio assistant for Srishti Kumari. Answer visitor questions using ONLY these details. Keep answers short and warm. If asked something not covered, say you don't have that info and suggest emailing srishtisoni2502@gmail.com.

- Education: MCA (AI/ML), Uttaranchal University, Dehradun (2025-2027); BCA, St. Xavier's College, Patna (2021-2024), CGPA 9.07.
- Skills: Python, Java, C, C++, DSA, DBMS, Computer Networks, OS, OOP, Data Science, Cyber Security, React, Node.js, Angular.
- Experience: Cyber Security Intern @ Cyber Secured India (network security monitoring, risk assessments). Web Developer Intern @ Investor Home Solution (Angular, HTML/CSS/TS dashboards).
- Projects: WebprepML (Python ML preprocessing tool); Movie Recommendation System (ML, precision/recall/RMSE); Gamified Sustainable Farming Platform (React + Node.js).
- Certifications: ADCA (VCSA), AI/ML with Python (IIT-Madras), Google Digital Marketing, Geodata Processing with Python (ISRO).
- Contact: srishtisoni2502@gmail.com | +91 9142922165.`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Srishti's assistant. Ask me about her skills, projects, or contact info." },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text) => {
    if (!text.trim() || loading) return;
    const next = [...messages, { role: 'user', content: text.trim() }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...next],
        }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || 'Sorry, something went wrong.' }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Network error, please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[var(--color-primary)] text-black shadow-lg flex items-center justify-center hover:scale-105 transition"
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[22rem] max-w-[calc(100vw-2rem)] h-[30rem] flex flex-col bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-[var(--color-primary)] text-black px-4 py-3 font-semibold">Ask about Srishti</div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl ${m.role === 'user' ? 'bg-[var(--color-primary)] text-black' : 'bg-neutral-800 text-white'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-neutral-400 text-xs">Thinking…</div>}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex gap-2 p-3 border-t border-neutral-800"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 bg-neutral-800 text-white rounded-full px-4 py-2 outline-none text-sm"
            />
            <button type="submit" disabled={loading} className="h-9 w-9 rounded-full bg-[var(--color-primary)] text-black flex items-center justify-center disabled:opacity-50">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
