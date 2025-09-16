import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import logo from "../assets/image.png"; // Importa a logo corretamente

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(username, password);

      if (res.token) {
        localStorage.setItem("token", res.token);
        navigate("/"); // vai para Home
      } else {
        setError("Usuário ou senha inválidos");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-green-100">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Passa a Bola"
            className="w-20 h-20 rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-purple-800 text-center mb-6">
          Acesse sua conta
        </h1>

        {error && (
          <p className="bg-red-100 text-red-600 text-center p-2 rounded-md mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Usuário
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded-lg transition shadow-md"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Dica: use <span className="font-bold text-purple-700">admin</span> /
          <span className="font-bold text-purple-700">1234</span> para acessar.
        </p>
      </div>
    </div>
  );
}

export default Login;