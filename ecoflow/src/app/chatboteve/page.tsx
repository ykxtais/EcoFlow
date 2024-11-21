"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import createSession, { sendMessageToWatson } from "@/lib/eve";

export default function ChatBotEve() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        const session = await createSession(); 
        setSessionId(session);
      } catch (error) {
        console.error("Erro ao inicializar sessão:", error);
      }
    };

    initializeSession();
  }, []);

  const handleSendMessage = async () => {
    if (!userInput.trim() || !sessionId) return;

    const newMessage = { sender: "user", text: userInput.trim() };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");

    try {
      const response = await sendMessageToWatson(userInput, sessionId);
      const eveMessage = { sender: "eve", text: response };
      setMessages((prev) => [...prev, eveMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div
      className="evefundo"
      style={{ backgroundImage: "url('/img/fundoeve.jpg')" }}
    >
      <div className="evedicas">
        <h2>Sugestões de perguntas:</h2>
        <ul>
          <li>- Quais são os tipos de resíduos?</li>
          <li>- Quais materiais são e não são recicláveis?</li>
          <li>- Como posso ajudar com o futuro?</li>
          <li>- Quais os tipos de energia sustentáveis?</li>
        </ul>
      </div>


      <div className="chateve">
        <h1>Eve</h1>

        <div className="histeve scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg text-sm shadow-md ${
                message.sender === "user"
                  ? "bg-gray-300 self-end text-black"
                  : "bg-gray-500 self-start text-white"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="entradaeve">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleSendMessage}
            className="msgeve"
            disabled={!userInput.trim()}
          >
            Enviar
          </button>
        </div>
      </div>

      <Link href="/">
        <button className="btnvoltareve">Voltar</button>
      </Link>
    </div>
  );
}
