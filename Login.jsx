import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && senha) {
      const tipo = email.includes('admin') ? 'admin' : email.includes('cliente') ? 'cliente' : 'freelancer';
      localStorage.setItem('user', JSON.stringify({ email, tipo }));
      navigate('/painel');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="block mb-2" />
      <input placeholder="Senha" type="password" onChange={e => setSenha(e.target.value)} className="block mb-2" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Entrar</button>
    </div>
  );
}
export default Login;