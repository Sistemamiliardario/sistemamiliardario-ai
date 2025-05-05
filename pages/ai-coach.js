import { useState } from "react";

export default function AiCoach() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  async function ask() {
    const res = await fetch("/api/ai-coach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });
    const data = await res.json();
    setResponse(data.answer);
  }

  return (
    <div>
      <h1>AI Coach ✨</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={ask}>Chiedi</button>
      <p>{response}</p>
    </div>
  );
}
