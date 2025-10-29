import { useEffect, useState } from "react";
import { getJogadoras } from "../api";
import Spinner from "../components/Spinner";

export default function Jogadoras() {
  const [jogadoras, setJogadoras] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getJogadoras(token)
      .then((data) => setJogadoras(data))
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
      <div className="grid md:grid-cols-3 gap-6">
        {jogadoras.map((j) => (
          <div key={j.id} className="bg-white p-4 rounded-xl shadow">
            <img
              src={j.foto || "/placeholder.jpg"}
              alt={j.nome}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-3">{j.nome}</h2>
            <p className="text-gray-600">{j.time}</p>
            <p className="text-sm text-gray-500">Posição: {j.posicao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
