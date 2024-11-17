'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuportePage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/suport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
        });
        setTimeout(() => router.push("/"), 500); 
      } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem: ", error);
    }
  };

  return (
    <div className="pagsuporte">
      <div className="suportebox">
        {/* Formulário */}
        <div className="formsuporte">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="labelsuporte">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="labelsuporte">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="telefone" className="labelsuporte">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="assunto" className="labelsuporte">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </div>

            <div className="btnbox">
              <button
                type="submit"
                className="btnsuporte">Enviar</button>

              <button
                type="button"
                onClick={() => router.push("/")}
                className="btnsuporte">Home</button>
            </div>
          </form>
        </div>

        <div className="contatesuporte">
          <h1>Fale Conosco</h1>
          <p>
            Nos envie uma mensagem preenchendo o formulário,
            entraremos em contato o mais rápido possível!
          </p>
        </div>
      </div>
    </div>
  );
}
