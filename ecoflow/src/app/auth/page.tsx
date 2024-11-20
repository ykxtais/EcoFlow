"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const navigate = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    contato: '',
    senha: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAuth = async () => {
    setError('');
    setSuccess(false);

    const { nome, email, cpf, contato, senha } = formData;

    try {
      if (isLogin) {
        // Login
        if (email && senha) {
          const response = await fetch("linkloginapijava", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, senha }),
          });

          if (response.ok) {
            await response.json();
            alert("Login realizado com sucesso!");
            navigate.push('/'); 
          } else {
            setError('Erro no login: verifique as credenciais.');
          }
        } else {
          setError('Preencha o email e a senha.');
        }
      } else {
        // Cadastro
        if (nome && email && cpf && contato && senha) {
          const response = await fetch("linkcadastroapijava", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email, cpf, contato, senha }),
          });

          if (response.ok) {
            setSuccess(true);
            alert("Cadastro realizado com sucesso!");
            setFormData({ nome: '', email: '', cpf: '', contato: '', senha: '' });
            setIsLogin(true); 
          } else {
            setError('Erro no cadastro.');
          }
        } else {
          setError('Preencha todos os campos.');
        }
      }
    } catch (error) {
      console.error("Erro:", error);
      setError('Ocorreu um erro.');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAuth();
  };

  return (
    <div className="auth">
      <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Cadastro realizado! Faça login para prosseguir.</p>}
        {!isLogin && (
          <>
            <div className="mb-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className="bordauth"
                required={!isLogin}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="cpf"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleChange}
                className="bordauth"
                required={!isLogin}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="contato"
                placeholder="Contato"
                value={formData.contato}
                onChange={handleChange}
                className="bordauth"
                required={!isLogin}
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bordauth"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            className="bordauth"
            required
          />
        </div>
        <button type="submit" className="btnenter">
          {isLogin ? 'Acessar' : 'Cadastrar'}
        </button>

        <p className="btncreate" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Criar uma conta' : 'Já possui uma conta?'}
        </p>
      </form>
        
        {isLogin && (
            <div className="btnvoltarauth">
                <Link href="/">
                    <button>Voltar</button>
                </Link>
            </div>
        )}
    </div>
  );
}
