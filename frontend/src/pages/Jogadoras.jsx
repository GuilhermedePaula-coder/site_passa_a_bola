import { useEffect, useState } from "react";
import { getJogadoras } from "../api";
import Spinner from "../components/Spinner";

export default function Jogadoras() {
  const [jogadoras, setJogadoras] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setJogadoras([]);

    getJogadoras(token)
      .then((data) => setJogadoras(data.error ? [] : data))
      .catch(() => setJogadoras([]));
  }, []);

  if (jogadoras === null)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Jogadoras</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jogadoras.map((j) => (
          <div
            key={j.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition"
          >
            <h2 className="font-bold text-lg text-purple-700">{j.nome}</h2>
            <p className="text-gray-600">{j.posicao}</p>
            <p className="text-sm text-gray-500">{j.time}</p>
            <p className="mt-2 text-sm">
              <strong>Gols:</strong> {j.gols} | <strong>Assistências:</strong>{" "}
              {j.assistencias}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
