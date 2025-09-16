import { useEffect, useState } from "react";
import { getJogadoras } from "../api";

function Jogadoras() {
  const [jogadoras, setJogadoras] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getJogadoras(token).then(setJogadoras);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">Jogadoras</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jogadoras.map((j) => (
          <div
            key={j.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
          >
            <h2 className="text-xl font-bold text-purple-700">{j.nome}</h2>
            <p className="text-gray-600">{j.posicao} • {j.time}</p>
            <div className="mt-3 text-sm text-gray-700">
              Jogos: {j.jogos} | Gols: {j.gols} | Assistências: {j.assistencias}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jogadoras;