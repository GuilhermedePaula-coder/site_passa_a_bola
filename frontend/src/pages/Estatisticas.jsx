import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";

function Estatisticas() {
  const [estatisticas, setEstatisticas] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Sem token de autenticação");
      return;
    }

    getEstatisticas(token)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setEstatisticas(data);
        }
      })
      .catch(() => setError("Erro ao carregar estatísticas"));
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!estatisticas) {
    return <p className="text-purple-700">Carregando estatísticas...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-green-600 mb-4">ESTATÍSTICAS</h1>
      <div className="bg-purple-700 text-white p-6 rounded-lg shadow-md">
        <p>⚽ Gols: {estatisticas.gols}</p>
        <p>🎯 Assistências: {estatisticas.assistencias}</p>
        <p>🧤 Defesas: {estatisticas.defesas}</p>
        <p>💨 Dribles: {estatisticas.dribles}</p>

        {estatisticas.cartoes && (
          <p>
            🟨 {estatisticas.cartoes.amarelo} / 🟥 {estatisticas.cartoes.vermelho}
          </p>
        )}

        {estatisticas.mvp && (
          <p className="mt-4 font-bold">
            MVP: {estatisticas.mvp.nome} — {estatisticas.mvp.posicao} (
            {estatisticas.mvp.time})
          </p>
        )}
      </div>
    </div>
  );
}

export default Estatisticas;
