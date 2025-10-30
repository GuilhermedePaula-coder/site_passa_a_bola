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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-10 animate-fade-in">
          Estatísticas do Campeonato
        </h1>

        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-6 text-center font-medium">
            {error}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {estatisticas.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 p-8 border border-purple-100 hover:border-purple-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-1 text-center">
                {e.jogadora}
              </h2>
              <p className="text-gray-500 text-center mb-6">{e.time}</p>

              <div className="flex justify-around text-center">
                <div className="flex flex-col items-center">
                  <Trophy className="text-yellow-500 mb-2" size={28} />
                  <span className="font-bold text-xl text-green-700">{e.gols}</span>
                  <span className="text-gray-600 text-sm">Gols</span>
                </div>

                <div className="flex flex-col items-center">
                  <Star className="text-purple-500 mb-2" size={28} />
                  <span className="font-bold text-xl text-purple-700">
                    {e.assistencias}
                  </span>
                  <span className="text-gray-600 text-sm">Assistências</span>
                </div>

                <div className="flex flex-col items-center">
                  <Shield className="text-blue-500 mb-2" size={28} />
                  <span className="font-bold text-xl text-blue-700">
                    {e.defesas}
                  </span>
                  <span className="text-gray-600 text-sm">Defesas</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animações simples */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }

          .animate-slide-up {
            animation: slide-up 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
