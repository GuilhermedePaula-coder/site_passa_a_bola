import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await login(username, password);
    if (res.token) {
      localStorage.setItem("token", res.token);
      navigate("/"); // redireciona pra home
    } else {
      setError(res.error || "Erro ao fazer login");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold text-purple-800 mb-4">Login</h1>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-900"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
