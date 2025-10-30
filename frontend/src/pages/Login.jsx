// frontend/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(username, password);
    if (res && res.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      setError(res.error || "Credenciais inválidas");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-4">
          <img src={`${import.meta.env.BASE_URL}image.png`} alt="logo" className="w-20 h-20 object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Acesse sua conta</h2>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Usuário" className="w-full px-4 py-2 border rounded-lg" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Senha" type="password" className="w-full px-4 py-2 border rounded-lg" />
          <button className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold">Entrar</button>
        </form>
        <p className="mt-4 text-sm text-gray-500 text-center">Use <strong>admin / 1234</strong> para testes.</p>
      </div>
    </div>
  );
}
