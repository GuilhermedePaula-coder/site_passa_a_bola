// frontend/src/pages/Estatisticas.jsx
import { useEffect, useState } from "react";
import { getEstatisticas } from "../api";
import Spinner from "../components/Spinner";
import { Trophy, Star, Shield } from "lucide-react";

export default function Estatisticas() {
  const [estatisticas, setEstatisticas] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Faça login para ver as estatísticas.");
      setEstatisticas([]);
      return;
    }

    getEstatisticas(token)
      .then((data) => {
        if (data?.error) setError("Erro ao carregar estatísticas");
        else setEstatisticas(data);
      })
      .catch(() => setError("Erro ao conectar ao servidor"));
  }, []);

  if (estatisticas === null)
    return (
      <div className="p-10 text-center">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">
        Estatísticas do Campeonato
      </h1>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-6 text-center font-medium">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {estatisticas.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-purple-100 transition"
          >
            <h2 className="text-xl font-bold text-purple-700 mb-1">{e.jogadora}</h2>
            <p className="text-gray-500 mb-3">{e.time}</p>

            <div className="flex justify-between text-center text-sm">
              <div className="flex flex-col items-center">
                <Trophy className="text-yellow-500 mb-1" size={20} />
                <span className="font-bold text-lg text-green-700">{e.gols}</span>
                <span className="text-gray-600">Gols</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="text-purple-500 mb-1" size={20} />
                <span className="font-bold text-lg text-purple-700">
                  {e.assistencias}
                </span>
                <span className="text-gray-600">Assistências</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="text-blue-500 mb-1" size={20} />
                <span className="font-bold text-lg text-blue-700">
                  {e.defesas}
                </span>
                <span className="text-gray-600">Defesas</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
