// frontend/src/pages/Jogadoras.jsx
import { useEffect, useState } from "react";
import { getJogadoras } from "../api";
import Spinner from "../components/Spinner";

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
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl border border-purple-100 transition"
          >
            <img
              src={j.imagem || "/placeholder.jpg"}
              alt={j.nome}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-purple-700 mb-1">{j.nome}</h2>
              <p className="text-gray-600">{j.time}</p>
              <p className="text-sm text-gray-500 mt-1 italic">{j.posicao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
