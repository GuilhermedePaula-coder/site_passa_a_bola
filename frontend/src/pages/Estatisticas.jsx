import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";

function Estatisticas() {
  const [estatisticas, setEstatisticas] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getEstatisticas(token).then((data) => {
        setEstatisticas(data);
      });
    }
  }, []);

  if (!estatisticas) {
    return <p className="text-center text-gray-500">Carregando estatísticas...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">
        Estatísticas do Campeonato
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Artilheira */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <span className="text-5xl mb-4">⚽</span>
          <h2 className="text-xl font-bold text-purple-700">Artilheira</h2>
          <p className="mt-2 text-gray-700">
            <strong>{estatisticas.artilheira.nome}</strong> ({estatisticas.artilheira.time})
          </p>
          <span className="mt-2 text-lg font-semibold text-purple-800">
            {estatisticas.artilheira.gols} gols
          </span>
        </div>

        {/* Assistente */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <span className="text-5xl mb-4">🎯</span>
          <h2 className="text-xl font-bold text-green-700">Assistências</h2>
          <p className="mt-2 text-gray-700">
            <strong>{estatisticas.assistente.nome}</strong> ({estatisticas.assistente.time})
          </p>
          <span className="mt-2 text-lg font-semibold text-green-800">
            {estatisticas.assistente.assistencias} assistências
          </span>
        </div>

        {/* Goleira */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
          <span className="text-5xl mb-4">🧤</span>
          <h2 className="text-xl font-bold text-blue-700">Goleira</h2>
          <p className="mt-2 text-gray-700">
            <strong>{estatisticas.goleira.nome}</strong> ({estatisticas.goleira.time})
          </p>
          <span className="mt-2 text-lg font-semibold text-blue-800">
            {estatisticas.goleira.defesas} defesas
          </span>
        </div>
      </div>
    </div>
  );
}

export default Estatisticas;