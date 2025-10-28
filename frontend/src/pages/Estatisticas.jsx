import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";
import Spinner from "../components/Spinner";

export default function Estatisticas() {
  const [estatisticas, setEstatisticas] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setEstatisticas([]);

    getEstatisticas(token)
      .then((data) => setEstatisticas(data.error ? null : data))
      .catch(() => setEstatisticas([]));
  }, []);

  if (estatisticas === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
        Estatísticas — Brasileirão Feminino 2025
      </h1>

      <div className="space-y-6 text-gray-700">
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-bold text-purple-700">Artilheira</h2>
          <p>{estatisticas.artilheira?.nome} — {estatisticas.artilheira?.time}</p>
          <p>Gols: {estatisticas.artilheira?.gols}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-bold text-purple-700">Líder em Assistências</h2>
          <p>{estatisticas.assistente?.nome} — {estatisticas.assistente?.time}</p>
          <p>Assistências: {estatisticas.assistente?.assistencias}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-bold text-purple-700">Melhor Goleira</h2>
          <p>{estatisticas.goleira?.nome} — {estatisticas.goleira?.time}</p>
          <p>Defesas: {estatisticas.goleira?.defesas}</p>
        </div>
      </div>
    </div>
  );
}
