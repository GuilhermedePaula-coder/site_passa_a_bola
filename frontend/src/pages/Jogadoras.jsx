// frontend/src/pages/Jogadoras.jsx
import { useEffect, useState } from "react";
import { getJogadoras } from "../api";
import Spinner from "../components/Spinner";
import { Trophy, Goal, Share2, Square, SquareX, Shield } from "lucide-react";

export default function Jogadoras() {
  const [jogadoras, setJogadoras] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Faça login para ver as jogadoras.");
      setJogadoras([]);
      return;
    }

    getJogadoras(token)
      .then((data) => {
        if (data?.error) setError("Erro ao carregar jogadoras");
        else setJogadoras(data);
      })
      .catch(() => setError("Erro ao conectar ao servidor"));
  }, []);

  const getCorPosicao = (posicao) => {
    if (!posicao) return "bg-gray-300";
    const p = posicao.toLowerCase();
    if (p.includes("ata")) return "bg-red-400"; // atacante
    if (p.includes("meio")) return "bg-yellow-400"; // meio-campo
    if (p.includes("def")) return "bg-blue-400"; // defesa
    if (p.includes("gol")) return "bg-green-400"; // goleira
    return "bg-purple-300";
  };

  if (jogadoras === null)
    return (
      <div className="p-10 text-center">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-purple-800 mb-8 text-center">
        Jogadoras em Destaque
      </h1>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded mb-6 text-center font-medium">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jogadoras.map((j, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl border border-purple-100 transition transform hover:-translate-y-1"
          >
            {/* Barra colorida */}
            <div className={`${getCorPosicao(j.posicao)} h-2 w-full`} />

            {/* Imagem fixa */}
            <img
              src={j.imagem || "/image.png"}
              alt={j.nome || "Passa a Bola"}
              className="w-full h-52 object-cover bg-purple-50"
              onError={(e) => (e.target.src = "/image.png")}
            />

            <div className="p-4">
              <h2 className="font-bold text-lg text-purple-700 mb-1">{j.nome}</h2>
              <p className="text-gray-600">{j.time}</p>
              <p className="text-sm text-gray-500 mt-1 italic">{j.posicao}</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Trophy size={16} className="text-purple-600" />
                  <span><strong>Jogos:</strong> {j.jogos}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Goal size={16} className="text-red-500" />
                  <span><strong>Gols:</strong> {j.gols}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Share2 size={16} className="text-yellow-500" />
                  <span><strong>Assistências:</strong> {j.assistencias}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Square size={16} className="text-yellow-400" />
                  <span><strong>Amarelos:</strong> {j.amarelo}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <SquareX size={16} className="text-red-600" />
                  <span><strong>Vermelhos:</strong> {j.vermelho}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Shield size={16} className="text-blue-500" />
                  <span><strong>Defesas:</strong> {j.defesas ?? 0}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
